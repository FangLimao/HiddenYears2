import { world, ItemStack, EquipmentSlot } from "@minecraft/server";
import * as hyapi from "@hy2/lib.js";

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const PLAYER = event.player;
  let ITEM = hyapi.getEquipmentItem(PLAYER);
  if (ITEM?.hasTag("hy:custom_tools")){
    let NEW_ITEM = hyapi.consumeDurability(ITEM, 1, PLAYER);
    PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
      EquipmentSlot.Mainhand,
      NEW_ITEM,
    );
  }else if(ITEM?.hasTag("hy:custom_weapons")){
   let NEW_ITEM = hyapi.consumeDurability(ITEM, 2, PLAYER);
   PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
      EquipmentSlot.Mainhand,
      NEW_ITEM,
    );
  }
});

world.afterEvents.entityHitEntity.subscribe((event)=>{
 const PLAYER = event.damagingEntity;
 let ITEM = hyapi.getEquipmentItem(event.damagingEntity);
 if(ITEM?.hasTag("hy:custom_weapons")){
   let NEW_ITEM = hyapi.consumeDurability(ITEM, 1, event.damagingEntity);
    PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
      EquipmentSlot.Mainhand,
      NEW_ITEM)
 }
 if(ITEM?.hasTag("hy:custom_tools")){
   let NEW_ITEM = hyapi.consumeDurability(ITEM, 2, event.damagingEntity);
    PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
      EquipmentSlot.Mainhand,
      NEW_ITEM)
 }
})