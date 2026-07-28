const materials = {

    "金属インゴット": {
        category: "素材",
        subcategory: "インゴット",
        yomi: "きんぞくいんごっと",
        output: 1,
        recipes: {
            "金属鉱石": 2
        }
    },

    "精錬金属インゴット": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "せいれんきんぞくいんごっと",
        output: 1,
        recipes: {
            "金属鉱石": 2,
            "石炭": 2
        }
    },

    "パルメタルインゴット": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "ぱるめたるいんごっと",
        output: 1,
        recipes: {
            "金属鉱石": 4,
            "ピュアクォーツ": 1,
            "パルジウムの欠片": 2
        }
    },

    "プラスチール": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "ぷらすちーる",
        output: 1,
        recipes: {
            "原油": 2,
            "金属鉱石": 5
        }
    },

    "ヘクソライト": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "へくそらいと",
        output: 1,
        recipes: {
            "クロマイト": 1,
            "ヘクソクォーツ": 1
        }
    },

    "コラルムインゴット": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "こらるむいんごっと",
        output: 1,
        recipes: {
            "コラルム鉱石": 2,
            "石炭": 5
        }
    },

    "ソルライトインゴット": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "そるらいといんごっと",
        output: 1,
        recipes: {
            "ソルライト": 2,
            "ピュアクォーツ": 2
        }
    },

    "パルキサイトインゴット": {
        category: "素材",
        subcategory: "インゴット",
        techLevel: 0,
        yomi: "ぱるきさいといんごっと",
        output: 1,
        recipes: {
            "ソルライト": 1,
            "パルキサイト": 2,
            "世界樹の聖水": 1
        }
    },

    "木炭": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "もくたん",
        output: 1,
        recipes: {
            "木材": 2
        }
    },

    "火薬": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "かやく",
        output: 1,
        recipes: {
            "木炭": 2,
            "硫黄": 1
        }
    },

    "カーボン繊維": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "かーぼんせんい",
        output: 1,

        selectedRecipe: 0,

        recipes: [
            {
                name: "石炭",
                materials: {
                    "石炭": 2,
                    "発火器官": 1
                }
            },
            {
                name: "木炭",
                materials: {
                    "木炭": 5,
                    "発火器官": 1
                }
            }
        ]
    },

    "布": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "ぬの",
        output: 1,
        recipes: {
            "羊毛": 2
        }
    },
    
    "上質な布": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "じょうしつなぬの",
        output: 1,
        recipes: {
            "羊毛": 10,
            "革": 1
        }
    },

    "セメント": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "せめんと",
        output: 1,
        recipes: {
            "セメント": 20,
            "骨": 1,
            "水棲パルの粘液": 1
        }
    },

    "釘": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "くぎ",
        output: 1,
        recipes: {
            "金属インゴット": 1
        }
    },

    "木板": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "もくはん",
        output: 1,
        recipes: {
            "木材": 10,
            "繊維": 5,
            "釘": 1
        }
    },

    "上質な木板": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "じょうしつなもくはん",
        output: 1,
        recipes: {
            "硬い木材": 10,
            "木材": 10,
            "上質な布": 2
        }
    },

    "ポリマー": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "ぽりまー",
        output: 1,
        recipes: {
            "上質なパルオイル": 2,
            "硫黄": 1
        }
    },

    "電子基盤": {
        category: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "でんしきばん",
        output: 1,
        recipes: {
            "ピュアクォーツ": 2,
            "ポリマー": 1
        }
    },

    "極低温冷却媒体": {
        subcategory: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "きょくていおんれいきゃくばいたい",
        output: 1,
        recipes: {
            "水棲パルの粘液": 1,
            "氷結器官": 1
        }
    },

    "腐食溶剤": {
        subcategory: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "ふしょくようざい",
        output: 1,
        recipes: {
            "毒腺": 1,
            "硫黄": 1.
        }
    },

    "バイオバッテリー": {
        subcategory: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "ばいおばってりー",
        output: 1,
        recipes: {
            "発電器官": 1,
            "精錬金属インゴット": 1,
            "カーボン繊維": 1
        }
    },

    "コンピューター": {
        subcategory: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "こんぴゅーたー",
        output: 1,
        recipes: {
            "電子基盤": 2,
            "プラスチール": 3,
            "バイオバッテリー": 2,
            "カーボン繊維": 2 
        }
    },

    "超光熱コア": {
        subcategory: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "ちょうこうねつこあ",
        output: 1,
        recipes: {
            "発火器官": 4,
            "石炭": 8,
            "腐食溶剤": 2,
            "ヘクソライト": 2
        }
    },

    "AIコア": {
        subcategory: "素材",
        subcategory: "中間素材",
        techLevel: 0,
        yomi: "えーあいこあ",
        output: 1,
        recipes: {
            "コンピューター": 5,
            "ソルライトインゴット": 10,
            "超光熱コア": 2,
            "古代文明のコア": 1
        }
    },

}