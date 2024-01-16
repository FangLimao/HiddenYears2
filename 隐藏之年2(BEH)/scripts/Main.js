// @todo:移植更新播报
import { world, system } from "@minecraft/server";
import { itemBark, hyMessage } from "hy2/data.js";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const player = event.sourceEntity;
  switch (event.id) {
    case "hy:medicine":
      switch (event.message) {
        case "1":
          player.removeEffect("darkness")
          player.removeEffect("blindness")
          player.addEffect("night_vision", 300);
          break;
        case "2":
          player.removeEffect("nausea");
          player.removeEffect("hunger");
          player.addEffect("saturation", 300);
          break;
        case "3":
          player.removeEffect("wither");
          player.removeEffect("fatal_poison");
          player.addEffect("absorption", 300);
          break;
        case "4":
          player.removeEffect("poison");
          player.addEffect("absorption", 300);
          break;
        case "5":
          player.runCommandAsync("effect @s clear");
          break;
        case "6":
          world.playSound("random.levelup", player.location);
          player.runCommandAsync("effect @s clear");
          player.addEffect("speed", 1200);
          player.addEffect("haste", 1200);
          player.addEffect("strength", 1200);
          player.addEffect("jump_boost", 1200);
          player.addEffect("resistance", 1200);
          player.addEffect("regeneration", 1200);
          player.addEffect("water_breathing", 1200);
          player.addEffect("fire_resistance", 1200);
          player.addEffect("night_vision", 1200);
          player.addEffect("slow_falling", 1200);
          player.addEffect("saturation", 1200);
          player.addEffect("absorption", 1200);
          player.addEffect("village_hero", 1200);
          break;
        case "7":
          player.removeEffect("weakness");
          player.addEffect("strength", 300);
          break;
        case "8":
          player.removeEffect("bad_omen");
          player.addEffect("village_hero", 300);
          break;
        case "9":
          player.removeEffect("mining_fatigue");
          player.addEffect("water_breathing", 300);
          break;
        case "10":
          player.addEffect("health_boost", 6000);
          break;
        case "11":
          player.removeEffect("slowness");
          player.addEffect("jump_boost", 1200);
          player.addEffect("speed", 1200);
          break;
        case "12":
          player.addEffect("darkness", 1200);
          player.addEffect("blindness", 1200);
          player.removeEffect("night_vision");
          break;
        default:
          break;
      }
      break;
    case "hy:copper_apple":
      if (event.message === "enchanted") {
        player.addEffect("absorption", 1200);
        player.addEffect("fire_resistance", 1200);
        player.addEffect("speed", 200);
      } else if (event.message === "normal") {
        player.addEffect("absorption", 600);
        player.addEffect("fire_resistance", 200);
      }
      break;
    case "hy:fuel_metal":
      world.sendMessage(hyMessage.fuel);
      switch (event.message) {
        case "normal":
          player.addEffect("fatal_poison", 1200);
          break;
        case "mineral":
          player.addEffect("fatal_poison", 800, {
            amplifier: 1,
          });
          break;
        case "nightmare":
          player.addEffect("strength", 500);
          player.addEffect("night_vision", 500);
          break;
        case "stick":
          player.applyDamage(2);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const block = event.brokenBlockPermutation;
  const player = event.player;
  let blockDimension = player.dimension;
  let playerLoc = player.location;
  if (block.hasTag("hy:suspicious_ores") === true) {
    let randomChance = Math.ceil(Math.random() * 10);
    console.warn("[hy2]Random chance is " + randomChance);
    if (randomChance <= 8) {
      blockDimension.spawnEntity("minecraft:silverfish", playerLoc);
      blockDimension.spawnEntity("minecraft:silverfish", playerLoc);
    } else {
      blockDimension.spawnEntity("hy:oldb", playerLoc);
    }
  }
  if (block.hasTag("hy:custom_ores") === true) {
    player.addExperience(1);
    world.playSound("random.orb", playerLoc);
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;
  if (item.hasTag("hy:bone_swords") === true) {
    player.runCommandAsync("function api/aoe/bone");
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  switch (event.itemStack.typeId) {
    case "hy:medicine_1":
      player.addEffect("darkness", 0);
      player.addEffect("blindness", 0);
      player.addEffect("night_vision", 300);
      break;
    default:
      break;
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  switch (event.itemStack.typeId) {
    case "hy:copper_badge":
      player.addEffect("health_boost", 300, {
        amplifier: 2,
      });
      break;
    case "hy:diamond_badge":
      player.addEffect("health_boost", 900, {
        amplifier: 4,
      });
      break;
    case "hy:golden_badge":
      player.addEffect("health_boost", 600, {
        amplifier: 4,
      });
      break;
    case "hy:bandage":
      player.runCommandAsync("function gameplay/items/medicines/bandage");
      break;
    case "hy:medicine_pack":
      player.runCommandAsync("function gameplay/items/medicines/medicine_pack");
      break;
    case "hy:flash_metal_boardsword":
      player.runCommandAsync("function api/aoe/flash_metal");
      break;
    case "hy:corrosion_boardsword":
      player.runCommandAsync("function api/aoe/corrosion");
      break;
    case "hy:emerald_boardsword":
      player.runCommandAsync("function api/aoe/emerald");
      break;
    case "hy:flash_copper_boardsword":
      player.runCommandAsync("function api/aoe/flash_copper");
      break;
    case "hy:flash_copper_boardsword":
      player.runCommandAsync("function api/aoe/flash_copper");
      break;
    case "hy:amethyst_boardsword":
      player.runCommandAsync("function api/aoe/amethyst");
      break;
    default:
      break;
  }
});

world.afterEvents.itemUseOn.subscribe((event) => {
  const player = event.source;
  const dimension = player.dimension;
  let playerLoc = player.location;
  if (event.itemStack.hasTag("hy:is_awl") === true) {
    dimension.spawnItem(itemBark, playerLoc);
    world.playSound("use.wood", playerLoc);
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const item = event.itemStackBeforeBreak;
  const player = event.player;
  if (item != undefined) {
    if (item.hasTag("hy:imitation_tools")) {
      let randomChance = Math.ceil(Math.random() * 10);
      console.warn("[hy2]Random chance is " + randomChance);
      switch (randomChance) {
        case 1:
          player.applyDamage(2);
          player.sendMessage(hyMessage.imitationDamage1);
          break;
        case 2:
          player.applyDamage(8);
          player.sendMessage(hyMessage.imitationDamage2);
          break;
        default:
          break;
      }
    }
  }
});
