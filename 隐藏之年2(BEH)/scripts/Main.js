// @todo:移植更新播报
import { world, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { itemBark, hyMessage } from "hy2/data.js";
import "hy2/event.js";

let aboutForm = new MessageFormData();
aboutForm.title("关于隐藏之年²");
aboutForm.body("Are you sure you want to run this command:\n/gamerule randomtickspeed 1000\nThis can cause lag to the world");
aboutForm.button1("No, leave it as default!");
aboutForm.button2("Yes, do it!");

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
