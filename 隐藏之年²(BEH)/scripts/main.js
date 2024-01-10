// @todo:移植更新播报
import { world } from "@minecraft/server";
import {
  messageImitationDamage1,
  messageImitationDamage2,
  messageUpgrade1,
  messageUpgrade2,
  messageUpgrade3,
  messageUpgrade4,
} from "hy2/texts.js";
import { randomChance, reportUpgradeInfo } from "hy2/lib.js";

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;
  if (item.hasTag("hy:bone_swords") === true) {
    player.runCommandAsync("function api/aoe/bone");
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const itemId = event.itemStack.typeId;
  switch (itemId) {
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
  const item = event.itemStack;
  const player = event.source;
  if (item.hasTag("hy:is_awl")) {
    // @todo:使用脚本代替函数
    player.runCommandAsync("function gameplay/items/get_bark");
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const item = event.itemStackBeforeBreak;
  const player = event.player;
  if (item.hasTag("hy:imitation_tools")) {
    let randomChance = Math.ceil(Math.random() * 10);
    console.warn("[hy2]Random chance is " + randomChance);
    switch (randomChance) {
      case 1:
        player.applyDamage(2);
        player.sendMessage(messageImitationDamage1);
        break;
      case 2:
        player.applyDamage(8);
        player.sendMessage(messageImitationDamage2);
        break;
      default:
        break;
    }
  }
});
