import { world } from "@minecraft/server";

export let DebugCommand = world.beforeEvents.chatSend.subscribe(
    (EventSource) => {
            const player = EventSource.sender;
            if (!player.hasTag('Admin')) return;
            switch (EventSource.message) {
                case '/api command clear':
                    if (RainyAPI.modules.clearCommand = true) {
                        RainyAPI.modules.clearCommand = false;
                        player.sendMessage(模块已关闭) 
                    } else {
                        RainyAPI.modules.clearCommand = true;
                        player.sendMessage(模块已开启) 
                    }
            }
        
    }
);

export let ClearCommand = world.beforeEvents.chatSend.subscribe(
    (EventSource) => {
        if (RainyAPI.modules.clearCommand = true) {
            const player = EventSource.sender;
            if (!player.hasTag('Admin')) return;
            switch (EventSource.message) {
                case '/clear':
                    EventSource.cancel = true;
                    player.sendMessage(未指定命令参数)
            }
        }
    }
);