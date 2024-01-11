import { world } from "@minecraft/server";

// 非常简单的随机数生成器，可获取从0-10的随机整数
export let randomChance = Math.ceil(Math.random() * 10);

// 播报更新提示
export function reportUpgradeInfo() {
  world.sendMessage(messageUpgrade1);
  world.sendMessage(messageUpgrade2);
  world.sendMessage(messageUpgrade3);
  world.sendMessage(messageUpgrade4);
}

export function blockLit() {
  block.setPermutation();
}
