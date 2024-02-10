import { world, system, EquipmentSlot } from "@minecraft/server";

export function getRandomChance() {
  let randomChance = Math.ceil(Math.random() * 10);
  console.warn("[hy2]Random chance is " + randomChance);
  return randomChance;
}

export function getEquipmentItem(entity) {
  let equipmentItem = entity
    .getComponent("minecraft:equippable")
    .getEquipment(EquipmentSlot.Mainhand);
  return equipmentItem;
}

export function getEquipmentItemTypeId(entity) {
  let equipmentItem = entity
    .getComponent("minecraft:equippable")
    .getEquipment(EquipmentSlot.Mainhand);
  if (typeof equipmentItem != "undefined") {
    return equipmentItem.typeId;
  } else {
    console.warn("[hy2]-You might take nothing");
    return "hy:nothing";
  }
}

export function clearEffect(entity,type){
 switch(type){
  case "all":
   entity.runCommand("effect @s clear");
  break;
  case "bad":
   entity.removeEffect("slowness");
   entity.removeEffect("mining_fatigue");
  break;
  case "good":
  break;
  default:break;
 }
}

export function applyImitationDamage(player) {
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
