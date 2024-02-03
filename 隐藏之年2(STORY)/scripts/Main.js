import { MessageFormData } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

const lostLettersDimension = new MessageFormData;
lostLettersDimension.title("散落的信纸之『三界巡视』");
lostLettersDimension.body("在这个世界中存在着三个相对独立的维度——『主世界』、『下界』、『末地』，\n其中下界位于世界的底部、末地漂浮于主世界的遥远高空。\n主世界：位于世界的中央，资源丰富、景色秀丽，可以发现各种矿藏、遗迹，月光撒下时会生成残存的『不死之族』\n下界：位于主世界之下，是人类和不死之族最初的居所，资源相对匮乏，在战争之后一片荒芜，残存的人类及不死之族逐渐适应炎热的环境并发生了变异")
lostLettersDimension.button1("确定");
lostLettersDimension.button2("取消");

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  switch (event.itemStack.typeId) {
    case "paper":
      lostLettersDimension.show(player);
      break;
    default:
      break;
  }
});