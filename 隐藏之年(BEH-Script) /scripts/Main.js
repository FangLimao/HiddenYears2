import {
    ActionFormData
}
from "@minecraft/server-ui";
import {
    world
}
from "@minecraft/server";

export let HiddenYears = new Object;
HiddenYears.expGameplay = new Boolean;
HiddenYears.version = new String;

HiddenYears.version = 'v1.14.1-Script'

// 向导书

let guideBookUI = new ActionFormData;
guideBook.title("向导书");
guideBook.body("这里是本模组的向导");

world.beforeEvents.chatSend.subscribe((EventSource) => {
    const player = EventSource.sender;
    switch (EventSource.message) {
        case '/hy v':
            EventSource.cancel = true;
            Player.sendMessage(HiddenYears.version);
            break;
        case '/hy':
            EventSource.cancel = true;
            console.log("[隐藏之年]不完整的命令");
        default:
            break;
    }
});


/*
暂时弃用,当beforeEvents公开到正式版中时才会启用此段代码
world.beforeEvents.itemUse.subscribe(event => {
    if (event.itemStack.typeId === "hy:guide_book") {
        guideBookUI.show();
    };
});
*/