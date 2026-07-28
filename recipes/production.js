/**
 * 作業台・設備カテゴリのレシピ一覧です。
 */

const production = {

    /* 製作・修理 */

    "原始的な作業台": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 1,
        yomi: "げんしてきなさぎょうだい",
        output: 1,
        recipes: {
            "木材": 2
        }
    },

    "上質な作業台": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 11,
        yomi: "じょうしつなさぎょうだい",
        output: 1,
        recipes: {
            "金属インゴット": 8,
            "木材": 20,
            "釘": 10
        }
    },

    "作業ライン工場": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 29,
        yomi: "さぎょうらいんこうじょう",
        output: 1,
        recipes: {
            "金属インゴット": 100,
            "木板": 5,
            "釘": 20,
            "セメント": 10
        }
    },

    "作業ライン工場Ⅱ": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 42,
        yomi: "さぎょうらいんこうじょうに",
        output: 1,
        recipes: {
            "精錬金属インゴット": 100,
            "電子基盤": 10,
            "セメント": 30,
            "腐食溶剤": 5
        }
    },

    "高度文明の作業工場": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 62,
        yomi: "こうどぶんめいのさぎょうこうじょう",
        output: 1,
        recipes: {
            "コラルムインゴット": 50,
            "ヘクソライト": 50,
            "コンピューター": 30,
            "バイオバッテリー": 20
        }
    },

    "修理台": {
        category: "生産",
        subCategory: "その他",
        techLevel: 2,
        yomi: "しゅうりだい",
        output: 1,
        recipes: {
            "木材": 2
        }
    },

    "パルギア製作台": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 6,
        yomi: "ぱるぎあせいさくだい",
        output: 1,
        recipes: {
            "パルジウムの欠片": 10,
            "木材": 30,
            "布": 2
        }
    },

    "製図台": {
        category: "生産",
        subCategory: "その他",
        techLevel: 45,
        yomi: "せいずだい",
        output: 1,
        recipes: {
            "精錬金属インゴット": 20,
            "上質な木板": 10,
            "木炭": 30
        }
    },

    "金貨製造工場": {
        category: "生産",
        subCategory: "その他",
        techLevel: 73,
        yomi: "きんかせいじょうこうじょう",
        output: 1,
        recipes: {
            "ソルライトインゴット": 100,
            "古代文明の部品": 20,
            "AIコア": 10,
            "古代文明のコア": 5
        }
    },

    "古代文明の遺物交換機": {
        category: "生産",
        subCategory: "その他",
        techLevel: 74,
        yomi: "こだいぶんめいのいぶつこうかんき",
        output: 1,
        recipes: {
            "パルキサイトインゴット": 50,
            "神秘の木材": 50,
            "古代文明の部品": 30,
            "古代文明のコア": 20
        }
    },


    /* 武器 */

    "武器製作台": {
        category: "生産",
        subCategory: "武器製作台",
        techLevel: 20,
        yomi: "ぶきせいさくだい",
        output: 1,
        recipes: {
            "金属インゴット": 15,
            "木板": 10,
            "釘": 10
        }
    },

    "武器ライン工場": {
        category: "生産",
        subCategory: "武器製作台",
        techLevel: 32,
        yomi: "ぶきらいんこうじょう",
        output: 1,
        recipes: {
            "金属インゴット": 100,
            "木板": 20,
            "釘": 20,
            "上質なパルオイル": 10
        }
    },

    "武器ライン工場Ⅱ": {
        category: "生産",
        subCategory: "武器製作台",
        techLevel: 47,
        yomi: "ぶきらいんこうじょうに",
        output: 1,
        recipes: {
            "精錬金属インゴット": 100,
            "電子基盤": 10,
            "腐食溶剤": 5,
            "バイオバッテリー": 5
        }
    },

    "高度文明の武器工場": {
        category: "生産",
        subCategory: "武器製作台",
        techLevel: 63,
        yomi: "こうどぶんめいのぶきこうじょう",
        output: 1,
        recipes: {
            "コラルムインゴット": 50,
            "超光熱コア": 10,
            "腐食溶剤": 30
        }
    },

    /* スフィア */

    "スフィア製作台": {
        category: "生産",
        subCategory: "スフィア製作台",
        techLevel: 14,
        yomi: "すふぃあせいさくだい",
        output: 1,
        recipes: {
            "パルジウムの欠片": 10,
            "木材": 30,
            "釘": 10,
            "金属インゴット": 20
        }
    },

    "スフィアライン工場": {
        category: "生産",
        subCategory: "スフィア製作台",
        techLevel: 27,
        yomi: "すふぃあらいんこうじょう",
        output: 1,
        recipes: {
            "パルジウムの欠片": 30,
            "木板": 5,
            "金属インゴット": 100,
            "釘": 20
        }
    },

    "スフィアライン工場Ⅱ": {
        category: "生産",
        subCategory: "スフィア製作台",
        techLevel: 35,
        yomi: "すふぃあらいんこうじょうに",
        output: 1,
        recipes: {
            "精錬金属インゴット": 100,
            "電子基盤": 10,
            "釘": 30,
            "パルジウムの欠片": 50
        }
    },

    "高度文明のスフィア工場": {
        category: "生産",
        subCategory: "スフィア製作台",
        techLevel: 58,
        yomi: "こうどぶんめいのすふぃあこうじょう",
        output: 1,
        recipes: {
            "ヘクソライト": 50,
            "プラスチール": 50,
            "コンピューター": 10,
            "バイオバッテリー": 10
        }
    },

    /* 製薬 */

    "中世の製薬台": {
        category: "生産",
        subCategory: "製薬台",
        techLevel: 12,
        yomi: "ちゅうせいのせいやくだい",
        output: 1,
        recipes: {
            "木材": 30,
            "釘": 5,
            "パルジウムの欠片": 10
        }
    },

    "電気製薬台": {
        category: "生産",
        subCategory: "製薬台",
        techLevel: 43,
        yomi: "でんきせいやくだい",
        output: 1,
        recipes: {
            "精錬金属インゴット": 40,
            "電子基盤": 10,
            "カーボン繊維": 10
        }
    },

    "高度文明の製薬台": {
        category: "生産",
        subCategory: "製薬台",
        techLevel: 61,
        yomi: "こうどぶんめいのせいやくだい",
        output: 1,
        recipes: {
            "ヘクソライト": 50,
            "プラスチール": 50,
            "電子基盤": 30
        }
    },

    "古代文明の作業台": {
        category: "生産",
        subCategory: "作業台",
        techLevel: 67,
        yomi: "こだいぶんめいのさぎょうだい",
        output: 1,
        recipes: {
            "ソルライトインゴット": 50,
            "AIコア": 5,
            "バイオバッテリー": 20
        }
    },

    /* 精錬 */

    "原始的な炉": {
        category: "生産",
        subCategory: "炉",
        techLevel: 10,
        yomi: "げんしてきなろ",
        output: 1,
        recipes: {
            "木材": 20,
            "石": 40,
            "発火器官": 3
        }
    },

    "改善された炉": {
        category: "生産",
        subCategory: "炉",
        techLevel: 34,
        yomi: "かいぜんされたろ",
        output: 1,
        recipes: {
            "石": 100,
            "セメント": 30,
            "発火器官": 15,
            "極低温冷却媒体": 5
        }
    },

    "電気炉": {
        category: "生産",
        subCategory: "炉",
        techLevel: 44,
        yomi: "でんきろ",
        output: 1,
        recipes: {
            "精錬金属インゴット": 50,
            "バイオバッテリー": 4,
            "ポリマー": 20,
            "極低温冷却媒体": 10
        }
    },

    "巨大な炉": {
        category: "生産",
        subCategory: "炉",
        techLevel: 58,
        yomi: "きょだいなろ",
        output: 1,
        recipes: {
            "プラスチール": 150,
            "ポリマー": 100,
            "発火器官": 200,
            "コンピューター": 12
        }
    },

    "古代文明の炉": {
        category: "生産",
        subCategory: "炉",
        techLevel: 66,
        yomi: "こだいぶんめいのろ",
        output: 1,
        recipes: {
            "コラルムインゴット": 100,
            "超光熱コア": 20,
            "コンピューター": 30,
            "古代文明のコア": 10
        }
    },

    /* 調理 */

    "キャンプファイア": {
        category: "生産",
        subCategory: "調理",
        techLevel: 2,
        yomi: "きゃんぷふぁいあ",
        output: 1,
        recipes: {
            "木材": 10
        }
    },

    "調理鍋": {
        category: "生産",
        subCategory: "調理",
        techLevel: 17,
        yomi: "ちょうりなべ",
        output: 1,
        recipes: {
            "木板": 5,
            "金属インゴット": 15,
            "発火器官": 3
        }
    },

    "電気キッチン": {
        category: "生産",
        subCategory: "調理",
        techLevel: 41,
        yomi: "でんききっちん",
        output: 1,
        recipes: {
            "精錬金属インゴット": 20,
            "電子基盤": 5,
            "木炭": 20,
            "発火器官": 5
        }
    },

    "大型キッチン": {
        category: "生産",
        subCategory: "調理",
        techLevel: 49,
        yomi: "おおがたきっちん",
        output: 1,
        recipes: {
            "セメント": 200,
            "木炭": 200,
            "上質な木板": 25,
            "極低温冷却媒体": 13
        }
    },

    "古代文明のキッチン": {
        category: "生産",
        subCategory: "調理",
        techLevel: 70,
        yomi: "こだいぶんめいのきっちん",
        output: 1,
        recipes: {
            "ソルライトインゴット": 80,
            "超光熱コア": 30,
            "極低温冷却媒体": 50,
            "古代文明のコア": 10,
        }
    },

    /* 伐採・採石・採掘 */

    "伐採場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 7,
        yomi: "ばっさいじょう",
        output: 1,
        recipes: {
            "木材": 50,
            "石": 20,
            "パルジウムの欠片": 10
        }
    },

    "伐採場Ⅱ": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 43,
        yomi: "ばっさいじょうに",
        output: 1,
        recipes: {
            "硬い木材": 100,
            "石": 50,
            "パルジウムの欠片": 20,
            "古代文明の部品": 5
        }
    },

    "採石場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 7,
        yomi: "さいせきじょう",
        output: 1,
        recipes: {
            "石": 50,
            "木材": 20,
            "パルジウムの欠片": 10
        }
    },

    "金属採掘場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 24,
        yomi: "きんぞくさいくつじょう",
        output: 1,
        recipes: {
            "石": 50,
            "金属インゴット": 25,
            "パルジウムの欠片": 20,
            "古代文明の部品": 5
        }
    },

    "金属採掘場Ⅱ": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 39,
        yomi: "きんぞくさいくつじょうに",
        output: 1,
        recipes: {
            "石": 100,
            "金属インゴット": 50,
            "パルジウムの欠片": 40,
            "古代文明の部品": 10
        }
    },

    "石炭採掘場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 37,
        yomi: "せきたんさいくつじょう",
        output: 1,
        recipes: {
            "石": 70,
            "石炭": 100,
            "パルジウムの欠片": 30,
            "古代文明の部品": 10
        }
    },

    "硫黄採掘場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 46,
        yomi: "いおうさいくつじょう",
        output: 1,
        recipes: {
            "石": 70,
            "硫黄": 100,
            "パルジウムの欠片": 30,
            "古代文明の部品": 10
        }
    },

    "ピュアクォーツ採掘場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 52,
        yomi: "ぴゅあくぉーつさいくつじょう",
        output: 1,
        recipes: {
            "石": 70,
            "ピュアクォーツ": 100,
            "パルジウムの欠片": 30,
            "古代文明の部品": 10
        }
    },

    "ヘクソクォーツ採掘場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 62,
        yomi: "へくそくぉーつさいくつじょう",
        output: 1,
        recipes: {
            "石": 70,
            "ヘクソクォーツ": 100,
            "古代文明の部品": 10
        }
    },

    "ソルライト採掘場": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 72,
        yomi: "そるらいとさいくつじょう",
        output: 1,
        recipes: {
            "石": 70,
            "ソルライト": 100,
            "古代文明の部品": 10
        }
    },

    "古代文明の物質生成機": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 78,
        yomi: "こだいぶんめいのぶっしつせいせいき",
        output: 1,
        recipes: {
            "パルキサイトインゴット": 50,
            "古代文明のコア": 10
        }
    },

    /* 原油抽出機 */

    "原油抽出機": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 50,
        yomi: "げんゆちゅうしゅつき",
        output: 1,
        recipes: {
            "パルメタルインゴット": 50,
            "電子基盤": 50
        }
    },

    "原油抽出機・高圧型": {
        category: "生産",
        subCategory: "資源設備",
        techLevel: 51,
        yomi: "げんゆちゅうしゅつきこうあつがた",
        output: 1,
        recipes: {
            "パルメタルインゴット": 300,
            "電子基盤": 50,
            "バイオバッテリー": 50,
            "古代文明の部品": 10
        }
    },


    /* 製粉・粉砕 */

    "製粉機": {
        category: "生産",
        subCategory: "その他",
        techLevel: 15,
        yomi: "せいふんき",
        output: 1,
        recipes: {
            "木板": 10,
            "石": 40,
            "金属インゴット": 10
        }
    },


    "粉砕機": {
        category: "生産",
        subCategory: "粉砕機",
        techLevel: 8,
        yomi: "ふんさいき",
        output: 1,
        recipes: {
            "木材": 50,
            "石": 20,
            "パルジウムの欠片": 10
        }
    },

    "凍結粉砕機": {
        category: "生産",
        subCategory: "粉砕機",
        techLevel: 54,
        yomi: "とうけつふんさいき",
        output: 1,
        recipes: {
            "パルメタルインゴット": 50,
            "プラスチール": 30,
            "極低温冷却媒体": 25,
            "腐食溶剤": 20
        }
    },

    /* 釣り堀 */

    "釣り堀": {
        category: "生産",
        subCategory: "釣り堀",
        techLevel: 31,
        yomi: "つりぼり",
        output: 1,
        recipes: {
            "木板": 15,
            "セメント": 30,
            "極低温冷却媒体": 3,
        }
    },

    "大きな釣り堀": {
        category: "生産",
        subCategory: "釣り堀",
        techLevel: 69,
        yomi: "おおきなつりぼり",
        output: 1,
        recipes: {
            "上質な木板": 20,
            "石": 30,
            "コラルムインゴット": 10,
            "上質なパルオイル": 20
        }
    },






}
