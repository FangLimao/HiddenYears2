import { world, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { itemBark } from "hy2/data.js";
import "hy2/event.js";

const VERSION_CODE = 2006;
const LEAST_VERSION_CODE = world.getDynamicProperty("hy:version_code");

function getRandomChance() {
  let randomChance = Math.ceil(Math.random() * 10);
  console.warn("[hy2]Random chance is " + randomChance);
  return randomChance;
}

world.afterEvents.playerSpawn.subscribe((event) => {
  if (VERSION_CODE !== LEAST_VERSION_CODE) {
    world.sendMessage([{ translate: "hy.update.index" }]);
    world.sendMessage([{ translate: "hy.update.version" }]);
    world.sendMessage([{ translate: "hy.update.log" }]);
    world.setDynamicProperty("hy:version_code", VERSION_CODE);
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const block = event.brokenBlockPermutation;
  const player = event.player;
  if (block.hasTag("hy:suspicious_ores") === true) {
    let RANDOM_CHANCE = getRandomChance();
    if (RANDOM_CHANCE <= 8) {
      player.dimension.spawnEntity("silverfish", player.location);
      player.dimension.spawnEntity("silverfish", player.location);
    } else {
      player.dimension.spawnEntity("hy:oldb", player.location);
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
  if (event.itemStack.hasTag("hy:is_awl") === true) {
    player.dimension.spawnItem(itemBark, player.location);
    world.playSound("use.wood", player.location);
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const item = event.itemStackBeforeBreak;
  const player = event.player;
  if (typeof item != "undefined") {
    if (item.hasTag("hy:imitation_tools")) {
      let RANDOM_CHANCE = getRandomChance();
      switch (RANDOM_CHANCE) {
        case 1:
          player.applyDamage(2);
          player.sendMessage([
            {
              translate: "hy.message.imitation_damage.1",
            },
          ]);
          break;
        case 2:
          player.applyDamage(8);
          player.sendMessage([
            {
              translate: "hy.message.imitation_damage.2",
            },
          ]);
          break;
        default:
          break;
      }
    }
  }
});
