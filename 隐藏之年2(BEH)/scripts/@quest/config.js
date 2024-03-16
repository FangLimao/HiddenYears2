const myQuestAPI = {
  system: {
    inactive: "myQuestAPI is inactive", // will be displayed if MyQuestAPI is not active
    enable: true, // Set to true to enable and false to disable
    tag: "op", // tag who can see quests when system[enable = false] || /tag @s add op
  },
  getIdentifier: {
    author: "星屹工作室", // Author Name
    title: "§l「隐藏之年²」主线任务", // Title
    description: "照着这本破旧的札记一步一步踏上旅途吧……", // Description
  },
  getQuest: {
    isNamespace: {
      isDefault: false, // Useless  for now. If true, will use default namespace
      // so you don't need to write namespace anymore
      namespace: "minecraft:", // Only work if "isDefault: true"
    },
    itemHand: "hy:quest_book",
    items: [
      "minecraft:stick",
      "hy:over_metal_ingot",
      "minecraft:iron_ingot",
      "minecraft:copper_ingot",
      "hy:copper_apple",
      "hy:iron_hammer",
      "hy:iron_crowbar",
      "hy:fuel_metal",
      "hy:nightmare_fuel_metal",
      "hy:steel_ingot",
      "minecraft:totem_of_undying",
      "hy:ruby",
      "hy:ruby_chestplate",
      "hy:ruby_bag",
      "hy:ruby_runes",
      "minecraft:obsidian",
      "minecraft:gold_ingot",
      "minecraft:ghast_tear",
      "minecraft:blaze_rod",
      "minecraft:ender_pearl",
    ],
    rewards: [
      ["hy:gold_coin", 5],
      ["hy:gold_coin", 12],
      ["hy:steel_ingot", 3],
      ["hy:gold_coin", 10],
      ["minecraft:golden_apple", 3],
      ["hy:steel_hammer", 1],
      ["hy:gold_coin", 15],
      ["hy:fuel_metal_stick", 5],
      ["hy:lab_table", 1],
      ["hy:gold_coin", 25],
      ["hy:emerald_boardsword", 1],
      ["minecraft:diamond", 5],
      ["minecraft:diamond", 8],
      ["minecraft:diamond", 10],
      ["minecraft:netherite_ingot", 5],
      ["hy:gold_coin", 45],
      ["minecraft:enchanted_golden_apple", 3],
      ["minecraft:netherite_upgrade_smithing_template", 1],
      ["minecraft:blaze_powder", 5],
      ["minecraft:ender_eye", 4],
    ],
  },
  getForm: {
    title: {
      enable: false, // Change to false to generate title automatically
      title: [
        // you don't need to fill this field if title[enable = true]
        "§d[序幕]§r 一切的开始",
        "§d[序幕]§r 金属代替品",
        "§d[序幕]§r 陨星之结晶",
        "§d[序幕]§r 红橙的光泽",
        "§d[序幕]§r 重金属超标",
        "§d[序幕]§r 最高效的工具",
        "§d[序幕]§r 「卑劣」的工具",
        "§d[序幕]§r 燃料与食物",
        "§d[序幕]§r 「不洁」的结晶",
        "§d[序幕]§r 坚硬的金属",
        "§d[序幕 最终任务]§r 终将于白纸间盛开的菡萏之花",
        "§d[淬血的刚玉]§r 沾满鲜血的宝石",
        "§d[淬血的刚玉]§r 瑰丽的甲胄",
        "§d[淬血的刚玉]§r 经验之袋",
        "§d[淬血的刚玉 最终任务]§r 力量与鲜血之歌",
        "§d[三界巡游者]§r 水火交融",
        "§d[三界巡游者]§r 金光闪闪",
        "§d[三界巡游者]§r 无风之泪",
        "§d[三界巡游者]§r 与火共舞",
        "§d[三界巡游者]§r 隔墙有眼",
      ],
    },
    description: {
      description: [
        "这是树上新生的枝桠，亦是你旅途的起点……",
        "「岩金」，由各种号称「无用之材」的石头凝结而成，不过所制成之物使用效果却意外的好？",
        "这些金属来自于星海之间，现如今成为了三界之间最常见、最可靠的物质",
        "大量存在于世界的金属，可以合成工具盔甲，不过容易因时间而「锈蚀」",
        "将铜锭与苹果捏合到一起，就会有神奇的事情发生……不过听说吃多了会中毒哦～",
        "挖掘石头最高效的工具，需要特殊的「木柄」才可以合成，但是挖掘矿石的话可能会有一点小困难……",
        "盗贼常用的工具，经常被用来撬走金属方块，不过一些特殊矿石需要撬棍才可以撬下来",
        "这是一种神奇的物质，既可以加工为棒状的燃料、也可以加工直接用来食用",
        "黑乎乎的外表下，蕴含着巨大的作用",
        "一种坚硬的金属，需要熔炼两次铁锭才可以获得……",
        "「不死图腾」，承载了旧人类终其历史所追寻的「不死」的祝福，可当地球亦或是三界的生灵得到它时才知道这并非祝福，而是「诅咒」……当你望向星空之时，是否感受到了在那之后存在着一种更强大的存在？人类千百年间的痛苦来源于此、也导致了大部分智慧的生灵如同含苞待放的菡萏般脆弱地陷入沉睡\n但请一定记住，那菡萏之花终将于这白纸般的三界盛放\n并以熊熊的烈火将其燃作灰烬\n\n序幕§d「于荒芜中启航」§r完",
        "这宝石本纯洁无瑕，直到某位术士的鲜血洒在了其上……",
        "用这来之不易的宝石打造一套甲胄吧",
        "你可以在红宝石地牢内击败红宝石怪物来获得这种袋子，当红宝石块与其相结合时，将会迸发出巨大的力量",
        "经过一番战斗，你击败了「红宝石之王」，旅行迈出了可喜可贺的第一步，可这远不是终点，在漫长的历史中，浩如烟海的强大存在被「迷失军团」封印于袋中，你需要逐步击败他们、得到他们的力量\n——至于下一步，向地底进发吧……\n\n第一章§d「淬血的刚玉」§r完",
        "将水与岩浆混合在一起或许有别样的物质产生？",
        "在大洞穴成为下界之前最为寻常的金属，现在已经变成了一种珍贵的金属",
        "据说是无风纪「旧人类」的冤魂，但直到如今三界都没有摸清其究竟遭遇了什么……",
        "这种炽热的生物本属人类，在「太古之战」后因没有即时搬迁到主世界而逐渐异化，而如今其成了你冒险路上必须经历的一个环节",
        "苍穹之上、星海之下有着什么呢……",
      ],
      complated: "已完成",
      notComplated: "未完成",
    },
    icon: {
      enable: false,
    },
    button: {
      back: "§l返回",
      check: "§l检查并提交",
      about: "§l关于",
    },
  },
};

export { myQuestAPI };
