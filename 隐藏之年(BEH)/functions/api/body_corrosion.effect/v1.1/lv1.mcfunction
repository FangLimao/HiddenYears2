camerashake add @a[r=4] 0.25 5 rotational
tag @s add hy.temp.exposed_attacker
damage @a[r=4,tag=!hy.temp.exposed_attacker] 5 magic
damage @e[r=4,type=!player,family=monster] 8 magic
tag @s remove hy.temp.exposed_attacker