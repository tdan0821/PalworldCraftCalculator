/**
 * Palworld Craft Calculator の画面制御。
 * レシピデータは、グローバル変数 `recipes` として別途読み込まれる前提です。
 */

// ===== 定数・画面要素・アプリの状態 =====
// 所持数をブラウザに保存するときに使うキー。
const STORAGE_KEY = "palworld_owned";

const elements = {
    addItemButton: document.getElementById("addItem"),
    calculateButton: document.getElementById("calculate"),
    craftList: document.getElementById("craftList"),
    finalResult: document.getElementById("finalResult"),
    itemFilter: document.getElementById("itemFilter"),
    itemListView: document.getElementById("itemListView"),
    middleResult: document.getElementById("middleResult"),
    ownedMaterials: document.getElementById("ownedMaterials"),
    treeResult: document.getElementById("treeResult"),
    carbonRecipe: document.getElementById("carbonRecipe")
};

// ユーザーが所持している素材数。計算時には複製して消費します。
let ownedMaterials = {};

// 除外機能 //
const excludedMaterials = new Set();

// クラフトアイテムの定義づけ //

const craftItems = {
    ...ammo,
    ...armor,
    ...building,
    ...facility,
    ...farm,
    ...food,
    ...materials,
    ...medicine,
    ...palgear,
    ...spheres,
    ...tools,
    ...weapons,
    ...production
};

// ===== クラフトするアイテムの入力欄 =====

// クラフトルートが複数あるアイテムの切り替え //
function getRecipeMaterials(recipe) {
    if (Array.isArray(recipe.recipes)) {
        return recipe.recipes[recipe.selectedRecipe].materials;
    }

    return recipe.recipes;
}

function createRecipeSettings(middleResult = {}, finalResult = {}) {

    const container = document.getElementById("recipeSettings");
    container.innerHTML = "";

    // 今回の計算で使用する素材
    const usedItems = new Set([
        ...Object.keys(middleResult),
        ...Object.keys(finalResult)
    ]);

    Object.entries(craftItems).forEach(([itemName, recipe]) => {

        // レシピが複数あるものだけ
        if (!Array.isArray(recipe.recipes)) return;

        // 今回使われないなら表示しない
        if (!usedItems.has(itemName)) return;

        const box = document.createElement("div");
        box.className = "recipe-setting";

        const title = document.createElement("div");
        title.className = "recipe-setting-title";
        title.textContent = itemName;

        box.appendChild(title);

        recipe.recipes.forEach((r, index) => {

            const label = document.createElement("label");
            label.className = "recipe-option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `recipe_${itemName}`;
            radio.value = index;
            radio.checked = recipe.selectedRecipe === index;

            radio.addEventListener("change", () => {

                recipe.selectedRecipe = index;

                // 再計算
                calculateMaterials();

            });

            label.appendChild(radio);
            label.append(` ${r.name}レシピ`);

            box.appendChild(label);

        });

        container.appendChild(box);

    });

    // 使用する複数レシピ素材が無い場合は何も表示しない
    if (!container.children.length) {
        container.style.display = "none";
    } else {
        container.style.display = "";
    }
}

// レシピ除外機能 //
function createExcludeSettings(middleResult) {

    const area = document.getElementById("excludeSettings");

    area.innerHTML = "";

    Object.keys(middleResult)
        .sort((a, b) => a.localeCompare(b, "ja"))
        .forEach(item => {

            const row = document.createElement("div");
            row.className = "excludeRow";

            const check = document.createElement("input");
            check.type = "checkbox";
            check.checked = excludedMaterials.has(item);

            check.addEventListener("change", () => {

                if (check.checked) {
                    excludedMaterials.add(item);
                }
                else {
                    excludedMaterials.delete(item);
                }

                calculateMaterials();

            });

            const label = document.createElement("label");
            label.textContent = item;

            row.append(check, label);

            area.appendChild(row);

        });

}

// アイテム名と個数を入力する行を1つ追加します。
function addCraftRow(name = "", count = 1) {
    const row = document.createElement("div");
    row.className = "craftRow";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "アイテム名";
    input.value = name;
    input.readOnly = true;

    const amount = document.createElement("input");
    amount.type = "number";
    amount.min = 1;
    amount.step = 1;
    amount.value = count;

    const removeButton = document.createElement("button");
    removeButton.className = "delete";
    removeButton.textContent = "削除";
    removeButton.addEventListener("click", () => row.remove());

    row.append(input, amount, removeButton);
    elements.craftList.appendChild(row);
}

// ===== 所持素材の保存・入力欄 =====
// 所持数を localStorage に保存し、次回の起動時にも引き継ぎます。
function saveOwnedMaterials() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedMaterials));
}

// 保存済みの所持数を読み込みます。保存がなければ空の状態で開始します。
function loadOwnedMaterials() {
    const savedMaterials = localStorage.getItem(STORAGE_KEY);

    ownedMaterials = savedMaterials ? JSON.parse(savedMaterials) : {};
}

// 今回の計算で使う素材だけ、所持数を入力できる行として表示します。
function createOwnedInputs(materials) {
    elements.ownedMaterials.replaceChildren();

    const header = document.createElement("div");
    header.className = "materialHeader";
    header.innerHTML = `
        <div>材料</div>
        <div>所持数</div>
        <div></div>
        <div></div>
    `;
    elements.ownedMaterials.appendChild(header);

    [...materials].sort().forEach(material => {
        const row = document.createElement("div");
        row.className = "materialRow";

        const name = document.createElement("div");
        name.textContent = material;

        const input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.value = ownedMaterials[material] || 0;
        input.addEventListener("input", () => {
            ownedMaterials[material] = Number(input.value);
            saveOwnedMaterials();
        });

        row.append(name, input, document.createElement("div"), document.createElement("div"));
        elements.ownedMaterials.appendChild(row);
    });
}

// ===== クラフトツリーと必要素材の計算 =====
// 選択したアイテムを、展開できる入れ子のクラフトツリーとして表示します。
function createTree(item, amount) {
    const recipe = craftItems[item];

    if (!recipe) {
        const leaf = document.createElement("div");
        leaf.className = "treeLeaf";
        leaf.innerHTML = `
            <span class="treeName">${item}</span>
            <span class="treeAmount">×${amount}</span>
        `;
        return leaf;
    }

    const details = document.createElement("details");
    details.className = "treeNode";
    details.open = true;

    if (excludedMaterials.has(item)) {
        details.classList.add("excludedTree");
    }

    const summary = document.createElement("summary");

    summary.innerHTML = `
        <span class="treeName">
            ${item}
            ${
                excludedMaterials.has(item)
                    ? '<span class="excludedBadge">🚫 除外中</span>'
                    : ""
            }
        </span>

        <span class="treeAmount">×${amount}</span>
    `;

    // ←これが抜けていました
    details.appendChild(summary);

    // 除外素材はここで終了
    if (excludedMaterials.has(item)) {
        return details;
    }

    const children = document.createElement("div");
    children.className = "treeChildren";

    const materials = getRecipeMaterials(recipe);

    Object.entries(materials).forEach(([material, count]) => {
        children.appendChild(
            createTree(
                material,
                (count * amount) / recipe.output
            )
        );
    });

    details.appendChild(children);

    return details;
}

// 所持数を先に差し引き、足りない分を素材まで再帰的に分解します。
function analyzeRecipe(item, amount, finalResult, middleResult, owned, isRoot = false) {
    if (excludedMaterials.has(item)) {

        middleResult[item] = (middleResult[item] || 0) + amount;

        return;

    }

    if (owned[item]) {
        const usedAmount = Math.min(owned[item], amount);
        owned[item] -= usedAmount;
        amount -= usedAmount;
    }

    if (amount <= 0) {
        return;
    }

    const recipe = craftItems[item];
    if (!recipe) {
        finalResult[item] = (finalResult[item] || 0) + amount;
        return;
    }

    if (!isRoot) {
        middleResult[item] = (middleResult[item] || 0) + amount;
    }


    const materials = getRecipeMaterials(recipe);

    for (const [material, count] of Object.entries(materials)) {
        const requiredAmount = (count * amount) / recipe.output;

        analyzeRecipe(
            material,
            requiredAmount,
            finalResult,
            middleResult,
            owned
        );
    }

}

// 所持数入力欄を作る対象として、中間素材と最終素材を重複なく集めます。
function collectAllMaterials(finalResult, middleResult) {
    return new Set([...Object.keys(finalResult), ...Object.keys(middleResult)]);
}

// ===== 計算結果の表示 =====
// 中間素材・最終素材で共通の「素材／必要／所持／不足」行を作成します。
function renderMaterialRows(area, result) {
    Object.keys(result)
        .sort((a, b) => {
            if (result[b] !== result[a]) {
                return result[b] - result[a];
            }
            return a.localeCompare(b, "ja");
        })
        .forEach(item => {

            const required = result[item];
            const owned = ownedMaterials[item] || 0;
            const shortage = Math.max(0, required - owned);
            const row = document.createElement("div");

            row.className = "materialRow";
            row.innerHTML = `
            <div>${item}</div>
            <div>${required}</div>
            <div>${owned}</div>
            <div>${shortage}</div>
        `;
            area.appendChild(row);
        });
}

// 入力されたクラフト対象を集計し、ツリー・中間素材・最終素材を更新します。
function calculateMaterials() {
    const finalResult = {};
    const middleResult = {};
    const remainingOwnedMaterials = structuredClone(ownedMaterials);

    elements.treeResult.replaceChildren();
    elements.middleResult.replaceChildren();
    elements.finalResult.replaceChildren()

    document.querySelectorAll(".craftRow").forEach(row => {
        const item = row.querySelector("input[type=text]").value.trim();
        if (!item) {
            return;
        }

        if (!craftItems[item]) {
            alert(`${item} が見つかりません`);
            return;
        }

        const amount = Number(row.querySelector("input[type=number]").value);
        elements.treeResult.appendChild(createTree(item, amount));
        analyzeRecipe(
            item,
            amount,
            finalResult,
            middleResult,
            remainingOwnedMaterials,
            true
        );
    });

    renderMaterialRows(elements.middleResult, middleResult);
    renderMaterialRows(elements.finalResult, finalResult);
    createOwnedInputs(collectAllMaterials(finalResult, middleResult));
    createRecipeSettings(middleResult, finalResult);
    createExcludeSettings(middleResult);

}



// 素材アイテム一覧を作成し、クリックでクラフト対象に追加できるようにします。
function createItemList(filter = "") {
    elements.itemListView.replaceChildren();

    let currentGroup = "";

    Object.keys(craftItems)
        .sort((a, b) => {
            const ayomi = craftItems[a].yomi ?? a;
            const byomi = craftItems[b].yomi ?? b;
            return ayomi.localeCompare(byomi, "ja");
        })
        .filter(item => {

            const keyword = filter.trim();

            return (
                item.includes(keyword) ||
                (craftItems[item].yomi ?? "").includes(keyword)
            );

        })

        .forEach(item => {

            const yomi = craftItems[item].yomi ?? item;
            const group = getKanaGroup(yomi);

            if (group !== currentGroup) {

                currentGroup = group;

                const header = document.createElement("div");
                header.className = "itemGroupHeader";
                header.textContent = `▼ ${group}`;

                elements.itemListView.appendChild(header);
            }


            const entry = document.createElement("div");
            entry.className = "itemEntry";
            entry.textContent = item;
            entry.addEventListener("click", () => addCraftRow(item));
            elements.itemListView.appendChild(entry);
        });
}

function getKanaGroup(yomi) {

    // 濁点・半濁点を除去
    const c = yomi
        .charAt(0)
        .normalize("NFD")
        .replace(/[\u3099\u309A]/g, "");

    return c;

    if ("あいうえお".includes(c)) return "あ行";
    if ("かきくけこ".includes(c)) return "か行";
    if ("さしすせそ".includes(c)) return "さ行";
    if ("たちつてと".includes(c)) return "た行";
    if ("なにぬねの".includes(c)) return "な行";
    if ("はひふへほ".includes(c)) return "は行";
    if ("まみむめも".includes(c)) return "ま行";
    if ("やゆよ".includes(c)) return "や行";
    if ("らりるれろ".includes(c)) return "ら行";
    if ("わをん".includes(c)) return "わ行";

    return "その他";
}

// ===== 起動時の初期化とイベント登録 =====
function initializeApp() {
    loadOwnedMaterials();
    createItemList();


    elements.calculateButton.addEventListener("click", calculateMaterials);
    elements.itemFilter.addEventListener("input", event => createItemList(event.target.value));
}


window.addEventListener("load", initializeApp);
