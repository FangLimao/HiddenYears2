import { world } from "@minecraft/server";
world.afterEvents.itemUse.subscribe((use) => {
  const player = use.source;
  switch (use.itemStack.typeId) {
    case "hy:amethyst_sword":
      player.runCommandAsync("say 你好");
      break;
  }
});
