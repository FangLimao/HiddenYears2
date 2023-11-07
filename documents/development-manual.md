# 技术手册
隐藏之年²版本 `2.0.0` & 游戏版本 `1.20.0/1X/2X/3X/4X`

## 目录
**读者请知悉：了解插件开发相关信息请见[插件开发](插件开发)章节**

- [运行逻辑](#运行逻辑)
- [内部规范](#内部规范)
  - [运行逻辑](#运行逻辑)
  - [版本规范](#版本规范)
  - [命令引用](#命令引用)
  - [文件储存与命名规范](#文件储存与命名规范)
  - [打包方式](#打包方式)
- [插件开发](#插件开发)
- [开放接口](#开放接口)
  - [函框架API](#函框架API)
  - [函框架库](#函框架库)
  - [物品标签](#物品标签)
  - [方块标签](#方块标签)
  - [玩家标签](#玩家标签)
  - [冷却类型](#冷却类型)
  - [方块属性](#方块属性)
  - [本地化](#本地化)
- [矿物辞典](#矿物辞典)

## 运行逻辑
本附加包依赖于数据驱动接口，其内容大多基于此制作，其中部分依赖命令的内容将会通过函框架实现，在 Script API 接口完善后，将会使用脚本逐步替代函数。

**本附加包不使用 `player.json` 及带有 `-beta` 标记的脚本模块**

## 内部规范
### 版本规范
遵循语义化版本规范，采用`<主版本号.次版本号.修订号>`的格式。

开发阶段：
- **Snapshot**（快照），处于开发阶段，这个阶段的附加包不可用于生存模式。
- **Release**（正式版），这个阶段的附加包可以于生存模式，可能有一些小漏洞。
- **Hotfix**（热修复），修复些许漏洞，不添加物品、方块。

打包后的模组文件应在文件名标清开发阶段。

### 命令引用
如果一个物品、方块或实体需要使用命令，请将该命令已函数的形式引用。

对于一些有用的函数，可以考虑将其公开成为**函框架API**。

### 文件存储与命名规范
#### 文件存储规范
物品存储在 `行为包/items` 文件夹中，分为以下几大类：

- **Tools**（工具），存储工具类物品
- **Materials**（材料），存储材料类物品
- **Treasures**（宝藏），存储宝藏类物品
- **Vanilla**（原版），修改原版物品
- **Unused**（弃用），存储弃用物品

函数存储在 `行为包/functions` 文件夹中，分为以下几大类：

- **Gameplay**（游戏玩法），存储游戏玩法类函数
- **api**（函框架API），存储已公开的函数
- **`tick.json`**（刻函数），游戏刻函数列表

战利品表存储在 `行为包/loot_tables` 文件夹中，分为以下几大类：

- **Entities**（实体），存储实体类战利品表
- **Blocks**（方块），存储方块类战利品表
- **Gameplay**（游戏玩法），存储游戏玩法类战利品表
- **Reuses**（复用），存储可复用的战利品表，其将会以 `type:loot_table` 的方式被其他战利品表引用 *[1.15.0新增]*

#### 文件命名规范
- 物品、方块、实体的行为文件使用其ID命名
- 文件名不可以包含作者名称等附加信息
- 不可以过长

### 打包方式
为避免在个别平台上可能的导入失败，应遵循以下打包方式：
1. 将行为包打包成 `.mcpack` 文件
2. 将资源包打包为 `.mcpack` 文件
3. 将行为包、资源包的 `.mcpack` 文件打包成 `.mcaddon` 文件

## 开放接口
### 函框架API
函框架本质是一个函数包，函数即预打包的命令，隐藏之年²的一些功能需要函框架，在Script API 功能完善后，函框架将会使用脚本构建。

#### `upgrade_information`
- 版本：1.1
- 描述：模组更新后向所有玩家发送更新信息
- 调用方法：
	- `/function api/upgrade_information/v1.1`——清除所有状态效果

#### `clear_effect`
- 版本：1.0
- 描述：清除状态效果
- 调用方法：
	- `/function api/clear_effect/v1.0/clear_all_effects`（清除所有状态效果）
	- `/function api/clear_effect/v1.0/clear_good_effects`（清除所有正面效果）
	- `/function api/clear_effect/v1.0/clear_bad_effecs`（清除所有负面效果）
	
#### `give_effect`
- 版本：1.0
- 描述：给予状态效果
- 可选参数：15s、30s、60s
- 调用方法：
	- `/function api/give_effect/v1.0/15s/give_all_effects`（给予15秒所有状态效果）
	- `/function api/give_effect/v1.0/15s/give_good_effects`（给予15秒所有正面状态效果）
	- `/function api/give_effect/v1.0/15s/give_bad_effects`（给予15秒所有负面状态效果）

#### `give_xp`
- 版本：1.0
- 描述：给予经验并播放音效
- 调用方法：
	- `/function api/give_xp/v1.0/base`（给予1点经验并播放音效）
	
#### `tetanus.effect`
- 版本：1.0
- 描述：给予『破伤风』状态效果集
- 可选参数：self、radius4
- 调用方法：
	- `/function api/tetanus.effect/v1.0/radius4/lv1`（给予半径四格内除自己外所有实体一级破伤风）
	- `/function api/tetanus.effect/v1.0/radius4/lv2`（给予半径四格内除自己外所有实体二级破伤风）
	- `/function api/tetanus.effect/v1.0/radius4/lv3`（给予半径四格内除自己外所有实体三级破伤风）
	- `/function api/tetanus.effect/v1.0/self/lv1`（给予自己一级破伤风）
	- `/function api/tetanus.effect/v1.0/self/lv2`（给予自己二级破伤风）
	- `/function api/tetanus.effect/v1.0/self/lv3`（给予自己三级破伤风）
	 
#### `body_corrosion.effect`
- 版本：1.0/1.1
- 描述：释放『身心腐蚀』状态效果集
- 调用方法：
	- `/function api/body_corrosion.effect/v1.1/lv1`（释放身心腐蚀I）
	- `/function api/body_corrosion.effect/v1.1/lv2`（释放身心腐蚀II）	
    - `/function api/body_corrosion.effect/v1.1/lv3`（释放身心腐蚀III）
	
### 函框架库
#### `hy.tutorial`
- 描述：教程库，用于控制知识之书。

### 物品标签
- 斑驳的物品
	- 用于合成
```
hy:exposed_item
```

- 锈蚀的物品
	- 用于合成
```
hy:weathered_item
```

- 氧化的物品
	- 用于合成
```
hy:oxidized_item
```

- 燃金
	- 用于合成
```
hy:fuel_metal
```

- 药物
	- 用于合成
```
hy:medicine_poison
```

- 斧
	- 用于剥皮原木
```
minecraft:is_axe
```

- 锹
	- 用于制造土径
```
minecraft:is_shovel
```

- 锄
	- 用于制造耕地
```
minecraft:is_hoe
```

- 锤
  - 保留标签
```
hy:is_hammer
```

- 撬棍
  - 用于挖掘
```
hy:is_crowbar
```

- 手柄
  - 用于合成
```
hy:is_handle
```

- 矿化煤炭
    - 用于合成
```
hy:metal_coals
```

- 矿化木炭
    - 用于合成
```
hy:metal_charcoals
```

- 银趴
	- 保留标签
```
hy:is_impart
```

### 方块标签
- 金属方块
  - 用于挖掘
```
metal
```

- 岩金石
  - 用于挖掘
```
stone
```

### 玩家标签
```
hy.temp.tetanus_attacker
```
- 用于标记攻击者
	- 添加标签后的玩家将无法受破伤风影响
    
```
hy.temp.exposed_attacker
```
- 用于标记攻击者
	- 添加标签的玩家将无法受身心腐蚀影响
	
```
hy.ruby
```
- 用于标记使用过红宝石的玩家
  - 添加标签的玩家不受腐蚀工具、武器反甲伤害

    
```
hy.updateXYYZ
```
- 用于标记已更新版本者
	- 缺失此标签的玩家将收到更新提示

### 方块属性
- （浅层、地心、可疑）红石矿石
  - 控制方块是否发光
```
bool hy:lit
```

### 冷却类型
- 绷带
```
hy.bandage
```

- 医药包
```
hy.medicine_pack
```

- 身心腐蚀
```
hy.body_corrosion
```

- 铜制号角
```
hy.copper_horn
```

### 本地化
#### 特殊本地化字符串
| 名称       | 描述     | 可用性      |
| ---------- | -------- | ----------- |
| `hy.empty` | 输出空行 | 1.13.3+可用 |

## 矿物辞典
矿物辞典主要是为了附加包间兼容而存在。

已注册到矿物辞典的物品将能够代替其它拥有相同矿物词典名的物品。这样就可以使用以上任一物品合成相同的结果。

矿物辞典本质上是添加至物品/方块中的标签，以`dict`为命名空间，目前仅覆盖模组内物品，原版方块/物品暂未适配。
### 盔甲类
| 名称                     | 描述     | 可用性      |
| ------------------------ | -------- | ----------- |
| `dict:armors`            | 盔甲矿辞 | 1.13.4+可用 |
| `dict:armors.boots`      | 靴子矿辞 | 1.13.4+可用 |
| `dict:armors.chestplate` | 胸甲矿辞 | 1.13.4+可用 |
| `dict:armors.helmet`     | 头盔矿辞 | 1.13.4+可用 |
| `dict:armors.leggings`   | 护腿矿辞 | 1.13.4+可用 |

### 作物类
| 名称               | 描述     | 可用性      |
| ------------------ | -------- | ----------- |
| `dict:crops`       | 作物矿辞 | 1.13.4+可用 |
| `dict:crops.apple` | 苹果矿辞 | 1.13.4+可用 |

### 材料类
| 名称                               | 描述           | 可用性      |
| ---------------------------------- | -------------- | ----------- |
| `dict:materials.imitation`         | 仿制材料矿辞   | 1.13.4+可用 |
| `dict:materials.imitation_diamond` | 仿造钻石矿辞   | 1.13.4+可用 |
| `dict:materials.bark`              | 树皮矿辞       | 1.14.1+可用 |
| `dict:materials.leather`           | 皮革矿辞       | 1.15.0+可用 |
| `dict:materials.leather.large`     | 大块皮革矿辞   | 1.15.0+可用 |
| `dict:materials.leather.large_raw` | 大块生皮革矿辞 | 1.15.0+可用 |
| `dict:materials.leather.small`     | 小块皮革矿辞   | 1.15.0+可用 |
| `dict:materials.leather.small_raw` | 小块生皮革矿辞 | 1.15.0+可用 |
| `dict:materials.bone`              | 骨头矿辞       | 1.15.0+可用 |

#### 矿粉
| 名称                          | 描述             | 可用性      |
| ----------------------------- | ---------------- | ----------- |
| `dict:dusts`                  | 矿粉矿辞         | 1.13.4+可用 |
| `dict:dusts.amethyst`         | 紫水晶矿粉矿辞   | 1.13.4+可用 |
| `dict:dusts.brass`            | 黄铜矿粉矿辞     | 1.13.4+可用 |
| `dict:dusts.bronze`           | 青铜矿粉矿辞     | 1.13.4+可用 |
| `dict:dusts.coal`             | 煤炭矿粉矿辞     | 1.13.4+可用 |
| `dict:dusts.copper`           | 铜矿粉矿辞       | 1.13.4+可用 |
| `dict:dusts.exposed_copper`   | 斑驳的铜矿粉矿辞 | 1.13.4+可用 |
| `dict:dusts.weathered_copper` | 锈蚀的铜矿粉矿辞 | 1.13.4+可用 |
| `dict:dusts.oxidized_copper`  | 氧化的铜矿粉矿辞 | 1.13.4+可用 |
| `dict:dusts.diamond`          | 钻石矿粉矿辞     | 1.13.4+可用 |
| `dict:dusts.emerald`          | 绿宝石矿粉矿辞   | 1.13.4+可用 |
| `dict:dusts.gold`             | 金矿粉矿辞       | 1.13.4+可用 |
| `dict:dusts.iron`             | 铁矿粉矿辞       | 1.13.4+可用 |
| `dict:dusts.lapis`            | 青金石矿粉矿辞   | 1.13.4+可用 |
| `dict:dusts.netherite`        | 下界合金矿粉矿辞 | 1.13.4+可用 |
| `dict:dusts.quartz`           | 下界石英矿粉矿辞 | 1.13.4+可用 |
| `dict:dusts.steel`            | 钢矿粉矿辞       | 1.13.4+可用 |
| `dict:dusts.tin`              | 锡矿粉矿辞       | 1.13.4+可用 |

#### 矿锭
| 名称                             | 描述             | 可用性      |
| -------------------------------- | ---------------- | ----------- |
| `dict:ingots`                    | 矿锭矿辞         | 1.13.4+可用 |
| `dict:ingots.amethyst`           | 紫水晶锭矿辞     | 1.13.4+可用 |
| `dict:ingots.imitation_amethyst` | 仿造紫水晶锭矿辞 | 1.13.4+可用 |
| `dict:ingots.imitation_gold`     | 仿造金锭矿辞     | 1.13.4+可用 |
| `dict:ingots.imitation_iron`     | 仿造铁锭矿辞     | 1.13.4+可用 |
| `dict:ingots.brass`              | 黄铜锭矿辞       | 1.13.4+可用 |
| `dict:ingots.brass_raw`          | 生黄铜矿辞       | 1.13.4+可用 |
| `dict:ingots.corrosion(_lvX)`    | 腐蚀之锭矿辞     | 1.13.4+可用 |
| `dict:ingots.bronze`             | 青铜锭矿辞       | 1.13.4+可用 |
| `dict:ingots.steel`              | 钢锭矿辞         | 1.13.4+可用 |
| `dict:ingots.tin`                | 锡锭矿辞         | 1.13.4+可用 |
| `dict:ingots.stone_metal`        | 岩金矿矿辞       | 1.13.4+可用 |

#### 矿粒
| 名称                          | 描述           | 可用性      |
| ----------------------------- | -------------- | ----------- |
| `dict:nuggets`                | 矿粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.amethyst`       | 紫水晶粒矿辞   | 1.13.4+可用 |
| `dict:nuggets.gold`           | 金粒矿辞       | 保留矿辞    |
| `dict:nuggets.iron`           | 铁粒矿辞       | 保留矿辞    |
| `dict:nuggets.brass`          | 黄铜粒矿辞     | 1.13.4+可用 |
| `dict:nuggets.coal`           | 煤粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.copper`         | 铜粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.diamond`        | 钻石粒矿辞     | 1.13.4+可用 |
| `dict:nuggets.emerald`        | 绿宝石粒矿辞   | 1.13.4+可用 |
| `dict:nuggets.lapis`          | 青金石粒矿辞   | 1.13.4+可用 |
| `dict:nuggets.netherite`      | 下界合金粒矿辞 | 1.13.4+可用 |
| `dict:nuggets.quartz`         | 下界石英粒矿辞 | 1.13.4+可用 |
| `dict:nuggets.redstone`       | 红石粒矿辞     | 1.13.4+可用 |
| `dict:nuggets.steel`          | 钢粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.stone`          | 石粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.tin`            | 锡粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.corrosion(lvX)` | 腐蚀之粒矿辞   | 1.13.4+可用 |
| `dict:nuggets.bronze`         | 青铜粒矿辞     | 1.13.4+可用 |
| `dict:nuggets.steel`          | 钢粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.tin`            | 锡粒矿辞       | 1.13.4+可用 |
| `dict:nuggets.stone_metal`    | 岩金矿矿辞     | 1.13.4+可用 |

#### 生矿
| 名称                | 描述     | 可用性      |
| ------------------- | -------- | ----------- |
| `dict:raw_ores`     | 生矿矿辞 | 1.13.4+可用 |
| `dict:raw_ores.tin` | 生锡矿辞 | 1.13.4+可用 |

### 燃料类
| 名称               | 描述     | 可用性      |
| ------------------ | -------- | ----------- |
| `dict:fuels`       | 燃料矿辞 | 1.13.4+可用 |
| `dict:fuels.metal` | 燃金矿辞 | 1.13.4+可用 |

---

## 附录
### 原版挖掘速度表
> 本文档挖掘速度指 `minecraft:digger` 组件中定义的 `speed` 值

| 值  | 描述                 |
| --- | -------------------- |
| 0   | 无法挖掘             |
| 2   | 木工具挖掘速度       |
| 3   | 石工具挖掘速度       |
| 6   | 钻石工具挖掘速度     |
| 7   | 下界合金工具挖掘速度 |
| 8   | 金工具挖掘速度       |

### 原版道具耐久表

| 道具     | 耐久 | 其他 |
| -------- | ---- | ---- |
| 木       | 59   |      |
| 石       | 131  |      |
| 铁       | 250  |      |
| 金       | 32   |      |
| 钻石     | 1561 |      |
| 下界合金 | 2031 |      |

### 原版伤害来源
| ID               | 描述     |
| ---------------- | -------- |
| all              | 所有     |
| anvil            | 铁砧     |
| block_explosion  | 方块爆炸 |
| charging         |          |
| contact          |          |
| drowning         |          |
| entity_attack    |          |
| entity_explosion |          |
| fall             |          |
| falling_block    |          |
| fire             |          |
| fire_tick        |          |
| fireworks        |          |
| fly_into_wall    |          |
| freezing         |          |
| lava             |          |
| lightning        |          |
| magic            |          |
| magma            |          |
| none             |          |
| override         |          |
| piston           |          |
| projectile       |          |
| stalactite       |          |
| stalagmite       |          |
| starve           |          |
| suffocation      |          |
| suicide          |          |
| temperature      |          |
| thorns           |          |
| void             |          |
| wither           |          |

### 原版道具伤害表
> WIP
