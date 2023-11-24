# 隐藏之年²文档
**隐藏之年²**是一款由星屹工作室出品、方漓猫制作的冒险类基岩版模组。

本文档适用于隐藏之年²正式版2.0.0及基岩版1.20.X。

## 目录

## 开发规范
方块、物品、实体的命名空间应为`hy2`

## 向下兼容
### 对旧版本隐藏之年的兼容



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
