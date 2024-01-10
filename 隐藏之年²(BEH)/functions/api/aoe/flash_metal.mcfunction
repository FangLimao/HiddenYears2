damage @s 5
effect @s slowness 15 4
tag @s add hy.aoe_flash
damage @a[r=5,tag=!hy.aoe_flash] 20
damage @e[r=5,type=!player] 20
damage @a[r=10,tag=!hy.aoe_flash] 10
damage @e[r=10,type=!player] 10
damage @a[r=15,tag=!hy.aoe_flash] 5
damage @e[r=15,type=!player] 5
tag @s remove hy.aoe_flash