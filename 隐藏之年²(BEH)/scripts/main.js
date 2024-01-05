// @todo:移植锥剥皮原木事件
import { world } from "@minecraft/server";
import {
  messageImitationDamage1,
  messageUpgrade1,
  messageUpgrade2,
  messageUpgrade3,
  messageUpgrade4,
} from "hy2/texts.js";
import { randomChance, reportUpgradeInfo } from "hy2/lib.js";

/*const modVer = 0;
let clientVer = world.getDynamicProperty("hy:modVer");
if (clientVer === undefined) {
    world.setDynamicProperty("hy:modVer", modVer);
    reportUpgradeInfo();
} else if (clientVer != modVer) {
    world.setDynamicProperty("hy:modVer", modVer);
    reportUpgradeInfo();
}*/

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
    default:
      break;
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const item = event.itemStackBeforeBreak;
  const player = event.player;
  if (item.hasTag("hy:imitation_tools")) {
    if (randomChance > 4) {
      console.warn("随机抽取为" + randomChance);
      player.applyDamage(2);
      player.sendMessage(messageImitationDamage1);
    }
  }
});