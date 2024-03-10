const myQuestAPI = {
    system: {
        inactive: "myQuestAPI is inactive", // will be displayed if MyQuestAPI is not active
        enable: true, // Set to true to enable and false to disable
		tag: "op" // tag who can see quests when system[enable = false] || /tag @s add op
    },
    getIdentifier: {
        author: "星屹工作室", // Author Name
        title: "§l「隐藏之年²」主线任务", // Title
        description: "照着这本破旧的札记一步一步踏上旅途吧……" // Description
    },
    getQuest: {
    	isNamespace: { 
			isDefault: false,  // Useless  for now. If true, will use default namespace
    							 	 // so you don't need to write namespace anymore
			namespace: "minecraft:" // Only work if "isDefault: true"
		},
        itemHand: "minecraft:book",
        items: [
            "minecraft:copper_ingot"
        ],
        rewards: [
        	["minecraft:apple", 10]
        ]
    },
    getForm: {
    	title: {
    		enable: true, // Change to false to generate title automatically
    		title: [
    			// you don't need to fill this field if title[enable = true]
    			"Title here"
    		]
    	},
    	description: {
    		description: [
    			"Collect coal"
    		],
    		complated: "Complated",
    		notComplated: "In progress"
    	},
    	icon: {
    		enable: true, // Set to true to enable and false to disable
    		confirm: `textures/ui/confirm`,
    		items: [
    			"items/copper_ingot"
			]
    	},
    	button: {
        	back: "§l返回", // Button Back
        	check: "§l检查并提交", // Button Check
			about: "§l关于"  // Button About
    	}
    }
}

export {myQuestAPI}
