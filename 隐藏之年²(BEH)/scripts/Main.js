import {
    Effect, world
}
from "@minecraft/server";

world.afterEvents.itemUse.subscribe(use => {
    switch (use.itemStack.typeId) {
        case 'hy:copper_horn':
            
            break;
    }
});