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
行为包允许定制生物群系，其既可以创建全新的自定义生物群系，也可以覆盖原版生物群系。生物群系与游戏功能挂钩，如怪物生成、数据驱动的游戏玩法和自定义方块的呈现。

生物群落还支持强大的系统，可以添加花朵和树木等装饰，甚至是塔楼和房屋等结构；这些装饰和结构一起被称为地物，它们对世界生成至关重要，但通常在范围和构造上与生物群系分开。

虽然覆盖和自定义生物群系的功能相似，但自定义生物群落是创造全新游戏体验的推荐方法。覆盖原版生物群系应该：

- 保留高度图、温度
- 生物群系稀有性
- 可以添加新功能或生物，但前提是主题合适

## 生物群系定义
生物群落在一个形式为`<生物群系名称>.json`或`<生物群系名称>.biome.json`的文件中声明，其应存储在行为包的`biomes`目录里，**不能**使用子目录对生物群系定义进行分组，在子目录中的所有定义都将被忽略。

由于标识符必须与文件名匹配，因此可能会与其他行为包发生冲突，避免冲突的一种策略是使用**反向域名方案**。

因为名称可以包含用于反向域名的英文句号，所以文件可以命名为类似于`fanglimao.hidden_years.cherry_biomes.plains.json `的形式。

在上面的示例里，`fanglimao`是开发者，`hidden_years`是附加包名称，`cherry_biomes`是顶级生物群系，`plains`是子生物群系类型，`json`是必需的文件拓展名。

在`biomes`目录中声明的无效JSON文件可能导致日志抛出，也有可能直接崩溃。直接放在该目录中的非JSON文件将被忽略。

如果一个文件以`.`开头，游戏将直接崩溃。这可能会导致学多问题，例如用于项目配置的文件会导致崩溃，甚至是MACOS的上的`DS_Store`文件也可能导致崩溃。

## 格式
与行为包中的大部分文件一样，生物群系是用JSON编写的，例如:

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

无效的JSON文件会导致生物群落定义失败，这样的生物群系不会在世界上生成。不幸的是，这不会在日志中抛出任何错误。使用JSON验证器和/或语法高亮显示可以轻松解决这个问题。

### `format_version`
```json
"format_version": "1.13.0"
```

顶层属性`format_version`（格式版本）描述了处理生物群系所遵循的版本规范，目前最新的格式版本是`1.13.0`。

1.12及以前的格式版本存在，但已弃用，并且在较新的版本中无法使用。

版本号必须按`*release*.*major*。*minor*`格式输入，三个部分必须是整数，但完整的版本号不一定代表Minecraft的真实版本。目前可以使用大于或等于1.13.0的任何版本号，游戏将引用1.13.0规范，但建议只使用`1.13.0`格式版本，因为未来的更新可能会更改生物群系格式，致使群系无法使用。

### `minecraft:biome`
```json
"minecraft:biome": {
	…
}
```

除格式版本外，另一个顶级属性是`minecraft:biome`，它建立了生物群系定义的模式。

#### `description`
`minecraft:biome`的`description”`属性记载生物群系的元数据。它目前只包含一个属性——`identifier`，其必须与文件名匹配（不包含`.json`或`.biome。json`文件扩展名）

与附加包的其他方面不同，生物群系的赋命名空间标识符不接受自定义命名空间，你可以考虑上文提到的反向域名系统。

#### 组件
`minecraft:biome`还包含`components`（组件），这是生物群系定义的核心。

> 组件始终是对象属性，即使是那些看起来应该为布尔值的属性。例如：`minecraft:ignore_automatic_features`组件属性不会被赋值为true或false，而是一个空对象{}

尽管可能会报错，但是可以在这里添加数遍组件，应该注意的是，只有最后的组件实例才会被游戏使用，之前定义的组件中的值将被完全忽略。例如:
```
"components": {
	…
// 这个组件在前面，会被忽略
	"minecraft:overworld_height": {
		"noise_type": "ocean"
	},
// 这个组件在最后面，会被游戏读取
	"minecraft:overworld_height": {
		"noise_params": [1.25, 0]
	}
}
```

使用组件时，必须提供其所需的所有属性，否则将抛出错误，并且生物群系将无法生成。

由于继承模型的工作方式，如果生物群系定义的继承链上的不完整组件包含完成该组件的模式所需的属性，则该组件将正常工作。有趣的是，当两个相同组件存在于同一生物群系定义文件中时，这种情况就不成立了。如前文所述，游戏将只读取后一个组件，即使它缺少必需的属性。

#### 标签
除了组件外，`components`属性还允许添加任意标签。标签看起来像是空组件，就例如组件：`"animal":{}`。

标签名称必须符合正则表达式`[a-z0-9_]。:]+`，即:小写拉丁字母、阿拉伯数字、`_`、`.`、`:`。

为了以防万一，不建议使用`minecraft`命名空间创建标签，而是使用自己的命名空间。

#### 继承
生物群系定义文件可以作为初始定义，亦可以覆盖初始定义，这取决于行为包的顺序。

行为包堆栈中生物群系定义的最早出现标志其创建;行为包堆栈中同一生物群系的后续定义可以通过继承修改或覆盖先前的定义。

请注意，只有`components`属性中的组件和标签才会被继承。单个组件中的属性通常也是继承的。不幸的是，有些组件或组件属性对象需要完全重新声明它们的所有属性才能工作，这意味着在重写时，最好重新声明整个组件。

暂时无法通过继承删除组件或标签。如果由于继承问题而产生冲突，请将所需的生物群系元素提取到新的自定义生物群系中，并尝试从世界生成中删除旧的生物群系。

## 生成
生物群系在世界中的位置取决于3个因素:

- 生物群系自身注册的维度
- 相对于任何其他生物群系，生物群系在特定插槽中生成的可能性也会在加载区块时应用于游戏世界的所有行为包中注册该插槽
- 该槽使用的不可变随机噪声表面来自世界的种子

> 槽/插槽可以表示整个维度或其表面积的子集。槽的概念在实际的文档或模式中并不存在。这个术语在这里用来表示一个专门的区域，在这个区域中，一个生物群落可以从一个池中选择出来，或者一组生物群落为了一个单一的目的而独立地连接在一起。

每个世界的生物群系分布不是真随机的，而是取决于种子。这意味着，如果将包含相同自定义生物群落定义的相同附加包应用于具有相同种子的两个新世界，则两个世界中的每个维度将包含完全相同的生物群落布局，这对于原版生物群系生成至关重要。

Minecraft暂时无法创造新的维度。末地不允许添加新的生物群落或删除默认的生物群落，只允许对主世界和下界的自定义。

`minecraft:legacy_world_generation_rules`组件影响有限的世界，但Mojang没有为该组件提供文档，也没有原版生物群落定义使用它，使其目的和行为未知。