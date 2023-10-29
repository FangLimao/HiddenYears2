import { Effect, world } from "@minecraft/server";

/**
 * @author:方漓猫
 * @copyright:MIT
 */
world.beforeEvents.itemUse.subscribe(EventSource => {
    const ID = EventSource.itemStack;
    if (ID = 'hy:diamond_badge') {
        EventSource.source.addEffect('health_boost', 114514)
    }
});