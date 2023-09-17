这时如果打开世界并尝试使用/summon命令召唤实体，它的行为应该像我们预期的那样。但地面上只会有一个影子，实体名称是一个本地化键名，这是因为我们还没有设置客户端文件。

实体的客户端文件与物品或实体服务端文件区别较大，本节我们就将学习实体的客户端配置。

客户端文件
模型
{
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.custom_entity",
				"texture_width": 16,
				"texture_height": 16,
				"visible_bounds_width": 3,
				"visible_bounds_height": 3,
				"visible_bounds_offset": [0, 0.5, 0]
			},
			"bones": [
				{
					"name": "bb_main",
					"pivot": [0, 0, 0],
					"cubes": [
						{"origin": [-8, 0, -8], "size": [16, 16, 16], "uv": [-14, -14]}
					]
				}
			]
		}
	]
}
模型，又称几何，决定了实体的形状。实体的模型按照JSON格式存储在资源包/models/entity中，得益于Blockbench等工具，我们不必学习其语法。

上面的代码示例就是在Blockbench内自动生成的一个类似于原版史莱姆的模型，请注意，此示例不可以直接拿来使用。

我们唯一需要注意的是identifier，这是模型的赋命名空间标识符，一般格式为geometry.<模型名称>，我们后面需要利用它来调用模型。

纹理
纹理，决定了实体的外观，实体的一般是.png文件。为了保证模型与纹理完美契合，我们通常会在Blockbench中生成一个模板纹理，然后对这个模板纹理进行绘制，绘制完成后我们将其放入资源包/textures/entity中即可。

动画
动画
{
	"format_version": "1.8.0",
	"animations": {
		"animation.custom_entity.move": {},
		"animation.custom_entity.idle": {}
	}
}

动画让我们的实体更加栩栩如生。我们可以根据需要为实体提供任意数量的动画，也可以使用动画控制器来触发它们。

在上面的示例中，animation.custom_entity.move是动画的标识符。除此之外，笔者省去了动画的执行过程而只保留动画的标识符，这在实际中是不允许的。

与模型类似，动画也是在Blockbench中自动生成的，因此我们不必学习其语法。

我们将动画文件放入资源包/animations中，但此时我们还不能正常触发它，这便是动画控制器的职责。

动画控制器
{
    "format_version": "1.12.0",
    "animation_controllers": {
        "controller.animation.custom_entity.walk": {
            "initial_state": "standing",
            "states": {
                "standing": {
                    "blend_transition": 0.2,
                    "animations": [
                        "idle"
                    ],
                    "transitions": [
                        {
                            "moving": "q.modified_move_speed > 0.1"
                        }
                    ]
                },
                "moving": {
                    "blend_transition": 0.2,
                    "animations": [
                        "move"
                    ],
                    "transitions": [
                        {
                            "standing": "q.modified_move_speed < 0.1"
                        }
                    ]
                }
            }
        }
    }
}
动画控制器控制动画的播放方式，其由状态和状态之间的过渡组成。这使我们能够在实体处于某些状态时播放某些动画，当满足某些条件时，我们可以在它们之间转换。

                "standing": {
                    "blend_transition": 0.2,
                    "animations": [
                        "idle"
                    ],
                    "transitions": [
                        {
                            "moving": "q.modified_move_speed > 0.1"
                        }
                    ]
                },
                "moving": {
                    "blend_transition": 0.2,
                    "animations": [
                        "move"
                    ],
                    "transitions": [
                        {
                            "standing": "q.modified_move_speed < 0.1"
                        }
                    ]
                }
可以看到，我们设置了两个状态：standing（站立）和moving（移动）。

     "transitions": [
                        {
                            "standing": "q.modified_move_speed < 0.1"
                        }
                    ]
通过设置transitions（转换），我们可以让动画的状态相互转换。其中前一个值（这里是standing）是将要转换的状态名称，后一个值（这里是q.modified_move_speed < 0.1）是通过Molang设置的转换的条件。

现在动画控制器编写完成，我们将其放到资源包/animation_controllers中即可。

渲染控制器
{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.custom_entity": {
			"geometry": "geometry.default",
			"materials": [
				{
					"*": "material.default"
				}
			],
			"textures": ["texture.default"]
		}
	}
}
渲染控制器帮助开发者控制生物如何渲染在游戏世界中的表现，其存储在资源包/render_controllers文件夹中，与动画控制器可以被视为自定义实体最难的两个部分。原版实体中，不是所有生物都只有单一表现。例如村民根据群系拥有不同皮肤，热带鱼拥有数千种组合，狼在生气时会红眼等，这些都是由渲染控制器所控制。（https://mc.163.com/m/dev/mcmanual/mc-dev/mconline/10-addon%E6%95%99%E7%A8%8B/%E7%AC%AC07%E7%AB%A0%EF%BC%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E7%94%9F%E7%89%A9/%E8%AF%BE%E7%A8%8B04.%E6%B8%B2%E6%9F%93%E6%8E%A7%E5%88%B6%E5%99%A8.html?catalog=1）

作为初学者，我们无需制作太复杂的渲染控制器，上面的示例即可满足我们的需求，其将从实体客户端文件中获取并采用默认材质、纹理、模型。

客户端实体
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "wiki:custom_entity",
			"materials": {
				"default": "entity_alphatest"
			},
			"textures": {
				"default": "textures/entity/custom_entity"
			},
			"geometry": {
				"default": "geometry.custom_entity"
			},
			"scripts": {
				"animate": ["walk_controller"]
			},
			"animations": {
				"walk_controller": "controller.animation.custom_entity.walk",
				"idle": "animation.custom_entity.idle",
				"move": "animation.custom_entity.move"
			},
			"spawn_egg": {
				"overlay_color": "#114514",
				"base_color": "#9f2333"
			},
			"render_controllers": ["controller.render.custom_entity"]
		}
	}
}

{
	"format_version": "1.10.0",
	"render_controllers": {
		"controller.render.custom_entity": {
			"geometry": "geometry.default",
			"materials": [
				{
					"*": "material.default"
				}
			],
			"textures": ["texture.default"]
		}
	}
}
客户端实体将动画、纹理、模型整合到一起，存储在资源包/entity文件夹下。

渲染
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "wiki:custom_entity",
			"materials": {
				"default": "entity_alphatest"
			},
			"textures": {
				"default": "textures/entity/custom_entity"
			},
			"geometry": {
				"default": "geometry.custom_entity"
			}
		}
	}
}

identifier：实体的赋命名空间标识符，值应与服务端文件保持一致
materials：材质类型，这里选用entity_alphatest以支持透明纹理
geometry：实体模型，填写模型的赋命名空间标识符

动画
"animations": {
	"walk_controller": "controller.animation.custom_entity.walk",,
	"idle": "animation.custom_entity.idle",
	"move": "animation.custom_entity.move"
}
动画控制器或动画想要在实体中被引用就必须在客户端文件中的animations对象定义短名称，其中前一个值（在这里是move）是短名称，后一个值（在这里是animation.custom_entity.move）是动画的赋命名空间标识符。

脚本
"scripts": {
	"animate": [
		"walk_controller"
	]
}
脚本决定实体在哪些特定时间执行哪些某些操作，其中animate数组将在每一刻执行数组内的动画或动画控制器。

现在，我们的动画应该可以正常工作了。

刷怪蛋
"spawn_egg": {
	"texture": "<物品纹理短名称>"
}
"spawn_egg": {
	"overlay_color": "#114514",
	"base_color": "#9f2333"
}
spawn_egg对象将为实体自动生成一个刷怪蛋，其有两种写法：
使用十六进制RGB代码为刷怪蛋自动着色
使用物品纹理短名称自定义刷怪蛋纹理

本地化文件
我们的实体还没有自己的名称，我们只需要进入或创建资源包/texts/zh_CN.lang文件，插入以下内容：

entity.wiki:custom_entity.name=自定义实体
item.spawn_egg.entity.wiki:custom_entity.name=自定义实体

大功告成！现在你的实体已经可以正常显示在Minecraft中了，恭喜！