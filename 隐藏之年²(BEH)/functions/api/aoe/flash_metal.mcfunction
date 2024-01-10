damage @s 5
effect @s slowness 15 4
tag @s add hy.aoe_flash
kill @a[r=2,tag=!hy.aoe_flash]
kill @e[r=2,type=!player]
damage @a[r=4,tag=!hy.aoe_flash] 10
damage @e[r=4,type=!player] 10
effect @a[r=8,tag=!hy.aoe_flash] poison 5 0 true
effect @e[r=8,type=!player] poison 5 0 true
tag @s remove hy.aoe_flash