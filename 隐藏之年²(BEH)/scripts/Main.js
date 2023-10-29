import { Effect, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

let QuestBookUI = new ActionFormData();
QuestBookUI.title("任务书");
QuestBookUI.body("这里是隐藏之年的任务书（WIP）");
QuestBookUI.button('主任务');

world.beforeEvents.chatSend.subscribe(EventSource => {
    const Player = EventSource.sender
    const Message = EventSource.message
    if (Message == '/qb show') {
        QuestBookUI.show(Player)
    }
})