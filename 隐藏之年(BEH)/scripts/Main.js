import { ActionFormData } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

// 函框架
export let RainyAPI = new Object;

RainyAPI.version = new String;
RainyAPI.versionCode = new Number;

RainyAPI.version = 'Alpha 1.0.0-tes1'
RainyAPI.versionCode = 0;

HiddenYears = new Object;
HiddenYears.expGameplay = new Boolean;

// 向导书
if (HiddenYears.expGameplay === true) {
    let guideBook = new ActionFormData;
    guideBook.title("向导书");
    guideBook.body("这里是本模组的向导");
};

/*暂时弃用，原因同下
world.beforeEvents.chatSend.subscribe((eventData) => {
    const player = eventData.sender;
    switch (eventData.message) {
        case '/exp':
            eventData.cancel = true;
            switch (HiddenYears.expGameplay) {
                case true:
                    HiddenYears.expGameplay = false;
                    player.sendMessage("实验性玩法已关闭");
                case false:
                    HiddenYears.expGameplay = true;
                    player.sendMessage("实验性玩法已开启");
                default: break;
            }
            break;
        default: break;
    }
});
*/

/*
暂时弃用,当beforeEvents公开到正式版中时才会启用此段代码
world.beforeEvents.itemUse.subscribe(event => {
    if (event.itemStack.typeId === "hy:guide_book") {
        guideBook.show();
    };
});
*/