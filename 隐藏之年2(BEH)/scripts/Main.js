import { world, ItemStack, EquipmentSlot } from "@minecraft/server";
import { modItemData } from "@hy2/mod-data.js";
import * as hyapi from "@hy2/lib.js";
import "@hy2/event.js";
import "Tool.js";
import "Story.js";
import "Quest.js";
//import "@hy2/travel-level.js";

const VERSION_CODE = 2102;
const LEAST_VERSION_CODE = world.getDynamicProperty("hy:version_code");

world.afterEvents.playerSpawn.subscribe((event) => {
  if (VERSION_CODE !== LEAST_VERSION_CODE) {
    world.sendMessage([{ translate: "hy.update.index" }]);
    world.sendMessage([{ translate: "hy.update.version" }]);
    world.sendMessage([{ translate: "hy.update.log" }]);
    world.setDynamicProperty("hy:version_code", VERSION_CODE);
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const BLOCK = event.brokenBlockPermutation;
  const PLAYER = event.player;
  let ITEM = hyapi.getEquipmentItem(PLAYER);
  if (BLOCK.hasTag("hy:suspicious_ores") === true) {
    let RANDOM_CHANCE = hyapi.getRandomChance();
    if (RANDOM_CHANCE <= 8) {
      PLAYER.dimension.spawnEntity("silverfish", PLAYER.location);
      PLAYER.dimension.spawnEntity("silverfish", PLAYER.location);
    } else {
      PLAYER.dimension.spawnEntity("hy:oldb", PLAYER.location);
    }
  }
  if (BLOCK.hasTag("hy:custom_ores") === true) {
    PLAYER.addExperience(1);
    world.playSound("random.orb", PLAYER.location);
  }
});

// 法术爆发与法术精通
world.afterEvents.entityHitEntity.subscribe((event) => {
  let ITEM = hyapi.getEquipmentItem(event.damagingEntity);
  if (ITEM?.typeId === "hy:ruby_boardsword") {
    let RANDOM_EXP = hyapi.getRandomChance();
    event.damagingEntity.addExperience(RANDOM_EXP);
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  const PLAYER = event.source;
  if (event.itemStack.hasTag("hy:magic_explode") === true) {
    if (PLAYER.level > 1) {
      PLAYER.addLevels(-1);
      PLAYER.runCommandAsync("function api/aoe/all");
      switch (event.itemStack.typeId) {
        case "hy:diamond_bone":
        case "hy:gold_bone":
        case "hy:iron_bone":
          PLAYER.runCommandAsync("function api/aoe/bone");
          break;
        case "hy:flash_metal_boardsword":
          PLAYER.runCommandAsync("function api/aoe/flash_metal");
          break;
        case "hy:corrosion_boardsword":
          PLAYER.runCommandAsync("function api/aoe/corrosion");
          break;
        case "hy:emerald_boardsword":
          PLAYER.runCommandAsync("function api/aoe/emerald");
          break;
        case "hy:flash_copper_boardsword":
          PLAYER.runCommandAsync("function api/aoe/flash_copper");
          break;
        case "hy:amethyst_boardsword":
          PLAYER.runCommandAsync("function api/aoe/amethyst");
          break;
        case "hy:ruby_boardsword":
          PLAYER.runCommandAsync("function api/aoe/ruby");
          break;
        default:
          break;
      }
    } else {
      PLAYER.sendMessage([{ translate: "hy.message.no_exp" }]);
    }
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  switch (event.itemStack.typeId) {
    case "hy:medicine_1":
      event.source.addEffect("darkness");
      event.source.removeEffect("blindness");
      event.source.removeEffect("night_vision");
      break;
    default:
      break;
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  const PLAYER = event.source;
  switch (event.itemStack.typeId) {
    case "hy:ruby_bag":
      PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        undefined,
      );
      let RANDOM_CHANCE = hyapi.getRandomChance();
      switch (RANDOM_CHANCE) {
        case 1:
        case 2:
          PLAYER.dimension.spawnItem(
            modItemData.diamondBlockReward,
            PLAYER.location,
          );
          break;
        case 3:
        case 4:
        case 5:
          PLAYER.dimension.spawnItem(
            modItemData.goldBlockReward,
            PLAYER.location,
          );
          break;
        case 6:
          PLAYER.dimension.spawnItem(modItemData.scrapReward, PLAYER.location);
          break;
        case 7:
          PLAYER.dimension.spawnItem(
            modItemData.templateReward,
            PLAYER.location,
          );
          break;
        default:
          PLAYER.dimension.spawnItem(modItemData.appleReward, PLAYER.location);
      }
      break;
    case "hy:experience_calamity_bag":
      PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        undefined,
      );
      PLAYER.dimension.spawnEntity("hy:king_of_ruby", PLAYER.location);
      break;
    case "hy:ruby_runes":
      let RANDOM_LEVEL = hyapi.getRandomChance();
      PLAYER.addLevels(RANDOM_LEVEL);
      world.playSound("random.orb", PLAYER.location);
      PLAYER.addEffect("fire_resistance", 1200);
      PLAYER.addEffect("resistance", 1200);
      break;
    case "hy:copper_badge":
      PLAYER.addEffect("health_boost", 300, {
        amplifier: 2,
      });
      break;
    case "hy:diamond_badge":
      PLAYER.addEffect("health_boost", 900, {
        amplifier: 4,
      });
      break;
    case "hy:golden_badge":
      PLAYER.addEffect("health_boost", 600, {
        amplifier: 4,
      });
      break;
    case "hy:bandage":
      PLAYER.runCommandAsync("function gameplay/items/medicines/bandage");
      break;
    case "hy:medicine_pack":
      PLAYER.runCommandAsync("function gameplay/items/medicines/medicine_pack");
      break;
    default:
      break;
  }
});

world.afterEvents.itemUseOn.subscribe((event) => {
  const PLAYER = event.source;
  if (event.itemStack.hasTag("hy:is_awl") === true) {
    PLAYER.dimension.spawnItem(modItemData.bark, PLAYER.location);
    world.playSound("use.wood", PLAYER.location);
  }
});

world.afterEvents.entityHitEntity.subscribe((event) => {
  let ITEM = hyapi.getEquipmentItem(event.damagingEntity);
  if (event.damagingEntity.typeId === "hy:king_of_ruby") {
    event.hitEntity.runCommand("xp -15 @s");
  }
  if (ITEM?.hasTag("hy:imitation_tools")) {
    hyapi.applyImitationDamage(event.damagingEntity);
  }
});

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const ITEM = event.itemStackBeforeBreak;
  if (ITEM?.hasTag("hy:imitation_tools")) {
    hyapi.applyImitationDamage(event.player);
  }
});

world.afterEvents.entityDie.subscribe((event) => {
  if (event.deadEntity.typeId === "hy:king_of_ruby") {
    world.stopMusic();
    world.sendMessage([{ translate: "hy.bossdead.ruby" }]);
  }
});
