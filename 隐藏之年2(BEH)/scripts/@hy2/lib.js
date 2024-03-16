import { world, system, EquipmentSlot } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

// 代码来自于myQuestApi 略加修改 添加了对中文的和多本任务书的支持
export function questUi(questData) {
  const {
    system: { enable: systemEnable, tag: systemTag, inactive: systemInactive },
    getIdentifier: {
      author: getAuthor,
      title: getTitle,
      description: getDescription,
    },
    getQuest: { itemHand: getItemHand, items: getItems, rewards: getRewards },
    getForm: {
      title: { enable: getTitleEnable, title: getTitleTitle },
      description: {
        description: getDescriptionDescription,
        complated: getDescriptionComplated,
        notComplated: getDescriptionNotComplated,
      },
      icon: {
        enable: getIconEnable,
        confirm: getIconConfirm,
        items: getIconItems,
      },
      button: {
        back: getButtonBack,
        check: getButtonCheck,
        about: getButtonAbout,
      },
    },
  } = questData;

  world.beforeEvents.itemUse.subscribe((eventData) => {
    const { itemStack: item, source: player } = eventData;

    if (item.typeId === getItemHand) {
      if (systemEnable || player.hasTag(systemTag)) {
        system.run(() => {
          formMain(player);
        });
      } else {
        const runCmd = player.runCommandAsync;
        runCmd(`tellraw @s {"rawtext":[{"text":"${systemInactive}\n\n "}]}`);
        runCmd(
          `tellraw @s {"rawtext":[{"text":"===== ${getTitle} =====\n§eRunning: §r${systemEnable}\n§eVersion: §r${systemVersion}\n§eModule by: §r@${getAuthor}\n§eDev by: §r@abcdave"}]}`,
        );
      }
    }
  });

  const formMain = (player) => {
    const form = new ActionFormData().title(getTitle).button(getButtonAbout);
    const LIST = [];
    let COUNT = 0;

    for (const thisItems of getItems) {
      const getTitleAuto = thisItems
        .split(/:(.*)/s)[1]
        .replaceAll("_", " ")
        .toLowerCase()
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
      const hasTag = player.hasTag(thisItems);

      const title = getTitleEnable ? getTitleAuto : getTitleTitle[COUNT];
      const icon = getIconEnable
        ? hasTag
          ? getIconConfirm
          : `textures/${getIconItems[COUNT]}`
        : undefined;
      const button = hasTag ? title + "\n §2已完成" : title;

      form.button(button, icon);
      LIST.push(COUNT);
      COUNT++;
    }

    form.show(player).then((response) => {
      if (response.selection === 0) {
        formAbout(player);
      }
      if (response.selection) {
        formSelection(player, response.selection);
      }
    });
  };

  const formSelection = (player, string) => {
    const getItemName = getItems[string - 1]
      .split(/:(.*)/s)[1]
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    const getRewardName = getRewards[string - 1][0]
      .split(/:(.*)/s)[1]
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    const getIsComplate = player.hasTag(getItems[string - 1]);
    const form2 = new ActionFormData().title(getTitle);

    if (getIsComplate) {
      form2.body(
        `${
          getDescriptionDescription[string - 1]
        }\n\n§e目标: §r${getItemName}\n§e奖励: §r${getRewardName}\n§e状态: §r${getDescriptionComplated}`,
      );
    } else {
      form2.body(
        `${
          getDescriptionDescription[string - 1]
        }\n\n§e目标: §r${getItemName}\n§e奖励: §r${getRewardName}\n§e状态: §r${getDescriptionNotComplated}`,
      );
    }

    form2.button(getButtonCheck).button(getButtonBack);
    form2.show(player).then((response2) => {
      if (!response2.isCanceled) {
        if (response2.selection === 0 && !player.hasTag(getItems[string - 1])) {
          for (let i = 0; i < 36; i++) {
            const inventoryItem = player
              .getComponent("inventory")
              .container.getItem(i);
            if (
              inventoryItem &&
              inventoryItem.typeId === getItems[string - 1]
            ) {
              player.runCommandAsync(
                `give @s ${getRewards[string - 1][0]} ${
                  getRewards[string - 1][1]
                }`,
              );
              player.addTag(getItems[string - 1]);
              break;
            }
          }
        }
        if (response2.selection === 1) {
          formMain(player);
        }
      }
    });
  };

  const formAbout = (player) => {
    const form = new ActionFormData()
      .title(getTitle)
      .body(
        `「隐藏之年²」是一款刚刚起步的冒险模组\n§e模组作者: §r@${getAuthor}\n§e本任务书基于 §r@abcdave 的 myQuestAPI开发而成`,
      )
      .button(getButtonBack);
    form.show(player).then((response) => {
      if (response.selection === 0) {
        formMain(player);
      }
    });
  };
}

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
