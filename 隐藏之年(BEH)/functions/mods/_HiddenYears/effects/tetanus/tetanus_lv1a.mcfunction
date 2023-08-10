tag @s add hy.temp.attacker
effect @a[r=4,tag=!hy.temp.attacker] poison 5 0
effect @a[r=4,tag=!hy.temp.attacker] nausea 10 0
effect @a[r=4,tag=!hy.temp.attacker] wither 1 0
tellraw @a[r=4,tag=!hy.temp.attacker] { "rawtext" : [ { "translate" : "hy.message.tetanus" } ] }
tag @s remove hy.temp.attacker