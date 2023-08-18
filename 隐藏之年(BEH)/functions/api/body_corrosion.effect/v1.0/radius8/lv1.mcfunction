tag @s add hy.temp.exposed_attacker
effect @a[r=4,tag=!hy.temp.attacker] poison 5 0
effect @a[r=4,tag=!hy.temp.attacker] nausea 10 0
effect @a[r=4,tag=!hy.temp.attacker] wither 1 0
tellraw @a[r=4,tag=!hy.temp.attacker] { "rawtext" : [ { "translate" : "hy.message.tetanus" } ] }
effect @e[r=4,type=!player] poison 5 0
effect @e[r=4,type=!player] nausea 10 0
effect @e[r=4,type=!player] wither 1 0
tag @s remove hy.temp.exposed_attacker