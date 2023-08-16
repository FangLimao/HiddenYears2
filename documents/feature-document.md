# 单方块地物
```json
{
	"format_version": "1.13.0",

	"minecraft:single_block_feature": {
		"description": {
			"identifier": "beachside:pier_planks"
		},

		"places_block": "minecraft:planks",

		"enforce_placement_rules": true,
		"enforce_survivability_rules": true,
		"may_replace": ["minecraft:water"],
		"may_attach_to": {
			"top": "minecraft:air",
			"sides": ["minecraft:planks", "minecraft:water"]
		}
	}
}
```
单方块地物是在世界中放置单个方块，本身通常毫无用处，通常要和Proxy Features相结合。

目标方块，即要放置的方块，由`places_block`属性指定，目前在地物中没有变更能力。

## 条件
单方块地物可以限制放置条件，如果不符合条件，则地物不会被放置。