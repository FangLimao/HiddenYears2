# 生物群系教程
> 注意
> 
> 1.18后，自定义生物群系的部分功能被破坏

> WARNING
>
> Biome customization is experimental. An experimental gameplay toggle must be enabled for each world that uses behavior packs containing biome definitions. What is currently available works well if declared correctly; however, incorrectly declared components and properties may result in crashing as opposed to just logged errors. Furthermore, due to issues caused by the inheritance model, the schema used for custom biomes is currently not well constructed.

> WARNING
> 
> Nether biome generation is bugged as of version 1.16.210. Nether biomes are now customized via the `"multinoise_generation_rules"` component. Custom biomes, however, currently cannot generate with this component. Meanwhile, usage of the old `"nether_generation_rules"` component in vanilla overrides will result in no generation of that biome in the Nether.

## 概述
Behavior packs allow for the customization of biomes. A behavior pack can either create entirely new custom biomes or overrides for previously declared biomes, such as the vanilla biomes. Biomes hook into critical gameplay features, such as mob spawning, data-driven gameplay, and presentation of custom blocks. Biomes also enable a powerful system for adding decorations like flowers and trees, or even structures like towers and houses; these decorations and structures are together known as features, which are crucial to world generation but (generally) separate in scope and construction from biomes.

While both overrides and custom biomes provide generally the same power, custom biomes are the recommended means for creating entirely new gameplay experiences. Overrides should retain the original biome’s identity and intentions and should only be reserved for:

- Mild surface, heightmap, or climate adjustments
- Redistribution of biome rarity in world generation
- Addition of new features or mobs, but only if thematically appropriate

Custom biomes should be used when any unique gameplay experience is desired or if an adjustment to a previously declared biome would fundamentally change its nature. Examples of situations where custom biomes shine include:

- A new or radical terrain is required to achieve an aesthetic.
- Custom features, like a new tree type, need somewhere to generate.
- An alternate or more challenging gaming experience is desired, potentially using new mobs and structures.

There are some exceptions to these recommendations due to oversights in the biomes schema. For example, it might seem as though only vanilla overrides are necessary when attempting to force a vanilla Overworld biome to generate in additional locations, but this may be impossible because of [how biomes register themselves to be generated](https://wiki.bedrock.dev/world-generation/biomes.html#regions). This means the biome’s aesthetic may have to be cloned over several iterations of biome definition files, each with their generation rules adjusted as needed.

## Biome definitions
Biomes are declared in a file of the form `<群系名称>.json` or `<群系名称>.biome.json` in the top-level biomes directory of a behavior pack. Subdirectories may not be used within the biomes directory to group biome definitions; all definitions within sub-directories of biomes will be ignored.

Because identifiers must match the filename, namespace collisions may occur with other biome-declaring packs. One strategy to avoid collisions is to use a reverse-domain name scheme. *biome_name* may contain periods for grouping biomes in nested order, like `biomes/fancycraft.fantasy_realms.magical_springs.hills.mutated.json`. Here, `fancycraft` is the developer, `fantasy_realms` is the behavior pack, `magical_springs `is the top-level biome name, hills and mutated are the sub-biome types, and json is the required file extension. (The optional `.biome` extension was omitted from this example.)

Invalid JSON files declared in the top-level biomes directory are more likely to log errors, but they may cause crashes. Non-JSON files directly placed inside this directory are ignored. If a file exists directly inside biomes that begins with a `.`, the game currently always crashes. This can cause problems with files such as those used for project configuration or even the infamous `.DS_Store` file on macOS.

## 格式
Like all constructed assets in a behavior pack, biome definitions are written in JSON, such as:

```json
{
	"format_version": "1.13.0",

	"minecraft:biome": {
		"description": {
			"identifier": "pumpkin_pastures"
		},

		"components": {
			"minecraft:surface_parameters": {
				"foundation_material": "minecraft:stone",

				"top_material": "minecraft:grass",
				"mid_material": "minecraft:dirt",

				"sea_floor_depth": 4,
				"sea_material": "minecraft:water",
				"sea_floor_material": "minecraft:sand"
			},
			"minecraft:overworld_height": {
				"noise_params": [0.125, 0.0625]
			},

			"minecraft:climate": {
				"temperature": 0.375,
				"downfall": 0.25,
				"snow_accumulation": [0, 0.5]
			},

			"minecraft:overworld_generation_rules": {
				"generate_for_climates": [["cold", 1]],

				"hills_transformation": "pumpkin_pastures_hills",
				"shore_transformation": "pumpkin_pastures"
			},

			"overworld": {},
			"pumpkin_pastures": {},

			"animal": {},
			"monster": {}
		}
	}
}
```

Invalid JSON — like with all aspects of addons — causes a biome definition to fail; that biome will not generate in the world. Unfortunately, no error will be thrown. A JSON validator and/or syntax highlighter easily makes this a non-problem.