import { world, system, EquipmentSlot } from "@minecraft/server";

export function getRandomChance() {
  let randomChance = Math.ceil(Math.random() * 10);
  console.warn("[Rainy API]Random chance is " + randomChance);
  return randomChance;
}

export function getEquipmentItem(entity) {
  let equipmentItem = entity
    ?.getComponent("minecraft:equippable")
    ?.getEquipment(EquipmentSlot.Mainhand);
  return equipmentItem;
}

export function getEquipmentItemTypeId(entity) {
  let equipmentItem = entity
    ?.getComponent("minecraft:equippable")
    ?.getEquipment(EquipmentSlot.Mainhand);
  return equipmentItem.typeId;
}

export function clearEffect(entity, effectType) {
  switch (effectType) {
    case "all":
      entity.runCommand("effect @s clear");
      break;
    case "bad":
      entity.removeEffect("slowness");
      entity.removeEffect("mining_fatigue");
      entity.removeEffect("instant_damage");
      entity.removeEffect("nausea");
      entity.removeEffect("blindness");
      entity.removeEffect("hunger");
      entity.removeEffect("weakness");
      entity.removeEffect("poison");
      entity.removeEffect("wither");
      entity.removeEffect("fatal_poison");
      entity.removeEffect("bad_omen");
      entity.removeEffect("levitation");
      entity.removeEffect("darkness");
      break;
    case "good":
      entity.removeEffect("speed");
      entity.removeEffect("haste");
      entity.removeEffect("strength");
      entity.removeEffect("instant_health");
      entity.removeEffect("regeneration");
      entity.removeEffect("jump_boost");
      entity.removeEffect("invisibility");
      entity.removeEffect("water_breathing");
      entity.removeEffect("health_boost");
      entity.removeEffect("night_vision");
      entity.removeEffect("saturation");
      entity.removeEffect("absorption");
      entity.removeEffect("village_hero");
      entity.removeEffect("conduit_power");
      entity.removeEffect("slow_falling");
      break;
    default:
      entity.removeEffect(effectType);
      break;
  }
}

export function consumeDurability(item, value, player) {
  let durability = item.getComponent("minecraft:durability");
  if (durability === undefined) return item;
  if (durability.damage + value >= durability.maxDurability) {
    player?.playSound("random.break");
    return undefined;
  } else {
    durability.damage += value;
    return item;
  }
}

export function applyImitationDamage(player) {
  let RANDOM_CHANCE = getRandomChance();
  switch (RANDOM_CHANCE) {
    case 1:
      player?.applyDamage(2);
      player?.sendMessage([
        {
          translate: "hy.message.imitation_damage.1",
        },
      ]);
      break;
    case 2:
      player?.applyDamage(8);
      player?.sendMessage([
        {
          translate: "hy.message.imitation_damage.2",
        },
      ]);
      break;
    default:
      break;
  }
}
