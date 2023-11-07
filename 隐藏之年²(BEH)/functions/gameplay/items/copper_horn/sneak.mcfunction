playsound copper_horn.sneak @s 
tag @s add hy.temp.horn_user
effect @a[r=20,tag=!hy.temp.horn_user] slowness 15 2 true
effect @e[r=20,type=!player] slowness 15 2 true
effect @s speed 15 2 true
tag @s remove hy.temp.horn_user