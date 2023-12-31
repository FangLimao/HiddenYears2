import { world } from "@minecraft/server";
world.afterEvents.itemUse.subscribe((use) => {
  const player = use.source;
  const itemId = use.itemStack.typeId;
  switch (itemId) {
    case "hy:amethyst_sword":
      player.addEffect("poison", 15, { amplifier: 1 });
      break;
    case "hy:copper_badge":
      player.runCommandAsync("function api/gby.effect/copper");
    case "hy:diamond_badge":
      player.runCommandAsync("function api/gby.effect/diamond");
    case "hy:gold_badge":
      player.runCommandAsync("function api/gby.effect/gold");
    default:
      break;
  }
});
