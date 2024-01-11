playsound copper_horn.walk @s 
tag @s add hy.temp.horn_user
effect @a[r=20,tag=!hy.temp.horn_user] speed 15 2 true
effect @e[r=20,type=!player] speed 15 2 true
effect @s slowness 15 2 true
tag @s remove hy.temp.horn_user