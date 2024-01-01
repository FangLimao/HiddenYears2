import { world } from "@minecraft/server";
import { messageImitationDamage1 } from "hy2/texts.js";

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const itemId = event.itemStack.typeId;
  switch (itemId) {
    case "hy:copper_badge":
      player.addEffect("health_boost", 300, { amplifier: 2 });
      break;
    case "hy:diamond_badge":
      player.addEffect("health_boost", 900, { amplifier: 4 });
      break;
    case "hy:golden_badge":
      player.addEffect("health_boost", 600, { amplifier: 4 });
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
  let isImitationTools = item.hasTag("hy:imitation_tools");
  if (isImitationTools === true) {
      player.applyDamage(2);
      player.sendMessage(messageImitationDamage1);
    
  }
});
