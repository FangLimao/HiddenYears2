camerashake add @a[r=4] 0.25 5 rotational
tag @s add hy.temp.exposed_attacker
damage @a[r=4,tag=!hy.temp.exposed_attacker] 7 magic
damage @e[r=4,type=!player,family=monster] 12 magic
effect @a[r=4,tag=!hy.temp.exposed_attacker] wither 5 0
tag @s remove hy.temp.exposed_attacker