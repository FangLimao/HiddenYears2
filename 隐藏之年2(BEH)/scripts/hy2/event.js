import { system } from "@minecraft/server";

function getRandomChance() {
  let randomChance = Math.ceil(Math.random() * 10);
  console.warn("[hy2]Random chance is " + randomChance);
  return randomChance;
}

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const player = event.sourceEntity;
  switch (event.id) {
    case "hy:candy":
      switch (event.message) {
        case "honey_candy":
          player.addEffect("saturation", 600);
          break;
        case "syrup":
          player.addEffect("fire_resistance", 160);
          break;
        case "chocolate_paste":
          player.addEffect("fire_resistance", 900);
          break;
        case "milk_chocolate":
          player.runCommand("effect clear");
          break;
        case "berry_chocolate":
          player.addEffect("instant_health", 1, {
            amplifier: 1,
          });
          break;
        case "amethyst_chocolate":
          player.addLevels(2);
          break;
        case "marshmallow":
          let RANDOM_CHANCE = getRandomChance();
          if (RANDOM_CHANCE > 5) {
            player.addEffect("levitation", 100);
          }
          break;
        case "berry_marshmallow":
          player.addEffect("instant_health", 1);
          break;
        case "amethyst_marshmallow":
          player.addLevels(3);
          break;
        default:
          break;
      }

      break;
    case "hy:medicine_potion":
      switch (event.message) {
        case "1":
          player.removeEffect("nausea");
          player.removeEffect("hunger");
          player.addEffect("saturation", 400);
          break;
        case "2":
          player.removeEffect("slowness");
          player.removeEffect("mining_fatigue");
          player.removeEffect("nausea");
          player.removeEffect("blindness");
          player.removeEffect("hunger");
          player.removeEffect("weakness");
          player.removeEffect("poison");
          player.removeEffect("wither");
          player.removeEffect("levitation");
          player.removeEffect("fatal_poison");
          player.removeEffect("darkness");
          break;
        case "3":
          player.removeEffect("darkness");
          player.removeEffect("blindness");
          player.addEffect("night_vision", 400);
          break;
        case "4":
          player.addEffect("darkness", 600);
          player.addEffect("blindness", 600);
          player.removeEffect("night_vision");
          break;
        case "5":
          player.removeEffect("wither");
          player.removeEffect("poison");
          player.removeEffect("fatal_poison");
          player.addEffect("absorption", 400);
          break;
        case "6":
          player.removeEffect("weakness");
          player.addEffect("strength", 400);
          break;
        case "7":
          player.removeEffect("slowness");
          player.addEffect("speed", 600);
          break;
        case "8":
          player.removeEffect("slowness");
          player.addEffect("jump_boost", 600);
          break;
        case "9":
          player.addEffect("poison", 400);
          player.addEffect("slowness", 400);
          player.addEffect("weakness", 400);
          break;
        case "10":
          player.kill();
          break;
        case "11":
          player.addEffect("speed", 400);
          player.addEffect("haste", 400);
          player.addEffect("strength", 400);
          player.addEffect("jump_boost", 400);
          player.addEffect("resistance", 400);
          player.addEffect("regeneration", 400);
          player.addEffect("water_breathing", 400);
          player.addEffect("fire_resistance", 400);
          player.addEffect("night_vision", 400);
          player.addEffect("slow_falling", 400);
          player.addEffect("saturation", 400);
          player.addEffect("absorption", 400);
          player.addEffect("village_hero", 400);
          break;
        case "12":
          player.removeEffect("bad_omen");
          player.addEffect("village_hero", 3000);
          break;
        case "13":
          player.removeEffect("mining_fatigue");
          player.addEffect("water_breathing", 200);
          break;
        case "14":
          player.addEffect("fire_resistance", 400);
          break;
        case "15":
          player.addEffect("health_boost", 6000);
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
    case "hy:copper_apple":
      if (event.message === "enchanted") {
        player.addEffect("absorption", 1200);
        player.addEffect("fire_resistance", 1200);
        player.addEffect("speed", 200);
      } else if (event.message === "normal") {
        player.addEffect("absorption", 600);
        player.addEffect("fire_resistance", 200);
      }
      break;
    case "hy:fuel_metal":
      world.sendMessage(hyMessage.fuel);
      switch (event.message) {
        case "normal":
          player.addEffect("fatal_poison", 1200);
          break;
        case "mineral":
          player.addEffect("fatal_poison", 800, {
            amplifier: 1,
          });
          break;
        case "nightmare":
          player.addEffect("strength", 500);
          player.addEffect("night_vision", 500);
          break;
        case "stick":
          player.applyDamage(2);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});
