import { system, world } from "@minecraft/server";
import { clearEffect, getRandomChance } from "@hy2/lib.js";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const PLAYER = event.sourceEntity;
  switch (event.id) {
    case "hy:ruby_boardsword":
      let RANDOM_EXP = getRandomChance();
      PLAYER.addExperience(RANDOM_EXP);
      world.playSound("random.orb", PLAYER.location);
      break;
    case "hy:candy":
      switch (event.message) {
        case "honey_candy":
          PLAYER.addEffect("saturation", 600);
          break;
        case "syrup":
          PLAYER.addEffect("fire_resistance", 160);
          break;
        case "chocolate_paste":
          PLAYER.addEffect("fire_resistance", 900);
          break;
        case "milk_chocolate":
          PLAYER.runCommand("effect clear");
          break;
        case "sweet_berry_chocolate":
          PLAYER.addEffect("instant_health", 1, {
            amplifier: 1,
          });
          break;
        case "amethyst_chocolate":
          PLAYER.addLevels(2);
          break;
        case "marshmallow":
          let RANDOM_CHANCE = getRandomChance();
          if (RANDOM_CHANCE > 5) {
            PLAYER.addEffect("levitation", 100);
          }
          break;
        case "sweet_berry_marshmallow":
          PLAYER.addEffect("instant_health", 1);
          break;
        case "amethyst_marshmallow":
          PLAYER.addLevels(3);
          break;
        default:
          break;
      }

      break;
    case "hy:medicine_potion":
      switch (event.message) {
        case "1":
          PLAYER.removeEffect("nausea");
          PLAYER.removeEffect("hunger");
          PLAYER.addEffect("saturation", 400);
          break;
        case "2":
          clearEffect(PLAYER, "bad");
          break;
        case "3":
          PLAYER.removeEffect("darkness");
          PLAYER.removeEffect("blindness");
          PLAYER.addEffect("night_vision", 400);
          break;
        case "4":
          PLAYER.addEffect("darkness", 600);
          PLAYER.addEffect("blindness", 600);
          PLAYER.removeEffect("night_vision");
          break;
        case "5":
          PLAYER.removeEffect("wither");
          PLAYER.removeEffect("poison");
          PLAYER.removeEffect("fatal_poison");
          PLAYER.addEffect("absorption", 400);
          break;
        case "6":
          PLAYER.removeEffect("weakness");
          PLAYER.addEffect("strength", 400);
          break;
        case "7":
          PLAYER.removeEffect("slowness");
          PLAYER.addEffect("speed", 600);
          break;
        case "8":
          PLAYER.removeEffect("slowness");
          PLAYER.addEffect("jump_boost", 600);
          break;
        case "9":
          PLAYER.addEffect("poison", 400);
          PLAYER.addEffect("slowness", 400);
          PLAYER.addEffect("weakness", 400);
          break;
        case "10":
          PLAYER.kill();
          break;
        case "11":
          clearEffect(PLAYER, "good");
          break;
        case "12":
          PLAYER.removeEffect("bad_omen");
          PLAYER.addEffect("village_hero", 3000);
          break;
        case "13":
          PLAYER.removeEffect("mining_fatigue");
          PLAYER.addEffect("water_breathing", 200);
          break;
        case "14":
          PLAYER.addEffect("fire_resistance", 400);
          break;
        case "15":
          PLAYER.addEffect("health_boost", 6000);
          break;
        default:
          break;
      }
      break;
    case "hy:medicine":
      console.error(
        "[hy2]This script event is deprecated,please use event `hy:medicine_poison`",
      );
      break;
    case "hy:ruby_apple":
      PLAYER.addExperience(3);
      world.playSound("random.orb", PLAYER.location);
      break;
    case "hy:copper_apple":
      if (event.message === "enchanted") {
        PLAYER.addEffect("absorption", 1200);
        PLAYER.addEffect("fire_resistance", 1200);
        PLAYER.addEffect("speed", 200);
      } else if (event.message === "normal") {
        PLAYER.addEffect("absorption", 600);
        PLAYER.addEffect("fire_resistance", 200);
      }
      break;
    case "hy:fuel_metal":
      world.sendMessage(hyMessage.fuel);
      switch (event.message) {
        case "normal":
          PLAYER.addEffect("fatal_poison", 1200);
          break;
        case "mineral":
          PLAYER.addEffect("fatal_poison", 800, {
            amplifier: 1,
          });
          break;
        case "stick":
          PLAYER.applyDamage(2);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});
