import { world } from "@minecraft/server";

world.afterEvents.itemUse.subscribe((use) => {
  const player = use.source;
  const itemId = use.itemStack.typeId;
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
    default:
      break;
  }
});
