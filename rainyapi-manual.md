# 技术手册
> 模组版本：隐藏之年1.x.x
> 
> 游戏版本：Minecraft基岩版1.20.12

## 目录
- [概述](#概述)
- [函框架API](#函框架API)

## 概述
函框架本质是一个函数包，函数即预打包的命令，隐藏之年的一些功能需要函框架。

## 函框架API
> 漓猫lib（不是

### `upgrade_information`
- 版本：1.1
- 描述：（隐藏之年专用）模组更新后向所有玩家发送更新信息
- 调用方法：
	- `/function api/upgrade_information/v1.1`（给所有未收到信息的玩家发送更新信息）

### `clear_effect`
- 版本：1.0
- 描述：清除状态效果
- 调用方法：
	- `/function api/clear_effect/v1.0/clear_all_effects`（清除所有状态效果）
	- `/function api/clear_effect/v1.0/clear_good_effects`（清除所有正面效果）
	- `/function api/clear_effect/v1.0/clear_bad_effecs`（清除所有负面效果）
	
### `give_effect`
- 版本：1.0
- 描述：给予状态效果
- 可选参数：15s、30s、60s
- 调用方法：
	- `/function api/give_effect/v1.0/15s/give_all_effects`（给予15秒所有状态效果）
	- `/function api/give_effect/v1.0/15s/give_good_effects`（给予15秒所有正面状态效果）
	- `/function api/give_effect/v1.0/15s/give_bad_effects`（给予15秒所有负面状态效果）

### `give_xp`
- 版本：1.0
- 描述：给予经验并播放音效
- 调用方法：
	- `/function api/give_xp/v1.0/base`（给予1点经验并播放音效）
	
### `tetanus.effect`
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
	 
### `body_corrosion.effect`
> 这是一个计划中的API，目前无法调用

- 版本：1.0
- 描述：给予『身心腐蚀』状态效果集
- 调用方法：
	- `/function api/clear_effect/v1.0/clear_all_effects`（清除所有状态效果）
	- `/function api/clear_effect/v1.0/clear_good_effects`（清除所有正面效果）
	- `/function api/clear_effect/v1.0/clear_bad_effecs`（清除所有负面效果）	