tag @s add hy.aoe_flash
kill @a[r=1,tag=!hy.aoe_flash]
kill @e[r=1,type=!player]
damage @a[r=2,tag=!hy.aoe_flash] 10
damage @e[r=2,type=!player] 10
effect @a[r=5,tag=!hy.aoe_flash] poison 5 0 true
effect @e[r=5,type=!player] poison 5 0 true
tag @s remove hy.aoe_flash