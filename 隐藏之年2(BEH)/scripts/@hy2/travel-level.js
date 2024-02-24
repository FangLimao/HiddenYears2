import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
  if (
    event.deadEntity.typeId === "hy:king_of_ruby" &&
    event.damageSource.damagingEntity.typeId === "minecraft:player"
  ) {
    if (
      event.damageSource.damagingEntity.getDynamicProperty(
        "hy:unlock_level",
      ) !== true
    ) {
      event.damageSource.damagingEntity.setDynamicProperty(
        "hy:unlock_level",
        true,
      );
      event.damageSource.damagingEntity.sendMessage([
        { translate: "hy.message.unlock_level" },
      ]);
      event.damageSource.damagingEntity.setDynamicProperty("hy:level", 0);
    }
  }
});

world.beforeEvents.chatSend.subscribe((event) => {
  const LEVEL = event.sender.getDynamicProperty("hy:level");
  switch (event.message) {
    case "?level":
      event.sender.sendMessage("你的等级为" + LEVEL);
      break;
    case "?level ui":
      break;
    default:
      break;
  }
});
