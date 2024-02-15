import { ItemStack } from "@minecraft/server";

export let modItemData = {
  bark: new ItemStack("hy:bark"),
  diamondBlockReward: new ItemStack("minecraft:diamond_block", 2),
  goldBlockReward: new ItemStack("minecraft:gold_block", 3),
  scrapReward: new ItemStack("minecraft:netherite_scrap"),
  templateReward: new ItemStack(
    "minecraft:netherite_upgrade_smithing_template",
  ),
  appleReward: new ItemStack("minecraft:enchanted_golden_apple", 5),
};
