import { world, ItemStack } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

const itemLetter = new ItemStack("hy:letter_dimension");

function showLetterStory(section, player) {
  switch (section) {
    case "dimension":
    const letterSection0 = new ActionFormData()
          .title("散落的信纸之『三界巡视』")
          .body(
            "在这个世界中存在着三个相对独立的维度——§l『主世界』、『下界』、『末地』§r，其中下界位于世界的底部、末地漂浮于主世界的遥远高空。\n\n§l主世界§r：位于世界的中央，你的故乡，资源丰富、景色秀丽，可以发现各种矿藏、遗迹。但月光撒下时残存的『不死之族』会伺机行动意图伤害你们；\n§l下界§r：位于主世界之下，需要传送门到达，是人类和不死之族最初的居所。资源相对匮乏，在『远古之战』之后更是一片荒芜，但仍有残存的人类及不死之族逐渐适应炎热的环境并发生了变异，建立起了与现在主世界迥然不同的文明；\n§l末地§r：漂浮于主世界高空中的群岛，需要传送门到达，资源及其匮乏，在中央的大岛上生活着『末影龙』以及她的同类『末影人』，岛外有着不知何人修建的『末地城』",
          )
          .button("确定");
        letterSection0.show(player);
      break;
    default:
      console.error("[hy2]-invalid section");
  }
}

function showBookStory(player) {
  const story = new ActionFormData()
    .title("隐藏的故事")
    .body("选择章节")
    .button("创世传说")
    .button("毁灭与新生")
    .button("探索这世间");
  story.show(player).then((response) => {
    switch (response.selection) {
      case 0:
        const storySection0 = new ActionFormData()
          .title("创世传说")
          .body(
            "§l迷梦的开端§r\n我自混沌中醒来，身边一无所有，\n砾石横生的陆地承接着我。\n家在何处，我想不起来；\n如何冲出这牢笼，我不知道。\n事已至此，我别无退路。\n誓要离开这里，找回遗失的记忆。\n\n莞尔风起，大地旧貌换新装，\n草木生、禽兽衍，\n思想渐被侵蚀，\n我在哪\n哪里就是我的故乡。\n\n§l智慧元年§r\n风起月落，智慧的粒子出现在世间，\n他们在空中起舞、在河流中沐浴、在草丛中栖息。\n天气交替，寒暑易节，\n仁厚的地母最终收留了他们，\n当强风吹来时，粒子组成了精妙的『人类』；\n当月光撒下时，粒子幻化为了强健的『不死之族』。\n两族，和谐相处；\n智慧，就此诞生。\n\n§l新朋友§r\n我虽当不了谜语人，\n却交了许多新朋友。",
          )
          .button("确定");
        storySection0.show(player);
        break;
      case 1:
        const storySection1 = new ActionFormData()
          .title("毁灭与新生")
          .body(
            "§l毁灭于斯§r\n两族在大洞穴内茹毛饮血、和睦相处。\n但一个月夜，背叛发生。\n风萧萧兮易水寒，壮士一去兮不复还。\n数名无辜的人类倒在了血泊之中，\n“洞穴内的资源即将耗尽，\n我这么做无非是为了我们两族！”\n\n战争一触即发。\n人虽有巧妙的大脑，但却难敌四肢发达的不死之族，\n于是，\n第一缕『火』在世界上生起，\n人类用它烤制食物、驱赶野兽。\n『工作台』在世界中放置，\n人类制作出『工具』、『武器』以捍卫自己孱弱的身躯。\n\n一道闪电，正中不死之族的巢穴，\n一瞬亮光，惊醒了睡梦中的人类。\n满目疮痍，两族即将毁于一旦，\n我也要埋葬自己与整个世间，\n——世间万物，都有属于自己的名字，\n我为自己取了一个名字『琉璃』，\n静候最后的时刻到来。\n可故事并没有结束，\n人类在即将毁灭之时带着我远走高飞，\n来到了一个洞穴之上的世界……\n\n§l朝日初现§r\n阳光撒下来，\n穿透积攒千年的乌云。\n清晨的露珠，\n浸润生来污浊的花朵。\n朝日，终将拨开雾霭。",
          )
          .button("确定");
        storySection1.show(player);
        break;
      case 2:
        const storySection2 = new ActionFormData()
          .title("探索这世间")
          .body(
            "§l新的世界§r\n『主世界』，新家的名字。\n平原之上，\n山脉河流点缀于此，\n飞鸟禽兽穿行林间。\n\n人类——\n撬走，\n貌似刚刚形成的『浅层矿石』、\n埋藏不知多久的『地心矿石』，\n建造起，\n地上归人居住的『村庄』、\n地下供鬼栖息的『祀城』，\n发现，\n物不美价却廉的『仿制材料』、\n既可以食用，又可以作为燃料的『燃金』\n\n——世上欣欣向荣，充盈着希望的光辉\n吗？\n\n夜深，\n灾难再次来袭，不死之族降临。\n睡梦中的人类再次被惊醒。\n『我们的前程，真是光明的吗？』\n\n§l随风而去吧§r\n时光如白驹过隙，\n我的老友逐渐随风消逝，\n而我恐怕也将步其后尘。\n“雨后人去楼也空”，\n我再也无法记录下这世界的一切。\n\n伫立于皎洁的月光下，\n我曾幻想宇宙可以告诉我，\n所有这世间所有未知的秘密。\n——但可惜这只是我的幻想罢了……\n\n门前窗边，挖好坟冢，\n我终将埋葬在这异乡，\n希愿你也能踏上冒险的征程，\n探索这未知的世间。\n\n【完】\n\n§l风又起§r\n春风又起，\n是新生的时节……",
          )
          .button("确定");
        storySection2.show(player);
        break;
      default:
        break;
    }
  });
  const GET_LETTERS = player.getDynamicProperty("hy:get_first_letter");
  if (GET_LETTERS !== true) {
    player.dimension.spawnItem(itemLetter, player.location);
    player.setDynamicProperty("hy:get_first_letter", true);
  }
}

world.afterEvents.itemUse.subscribe((event) => {
  switch (event.itemStack.typeId) {
    case "hy:story_book":
      showBookStory(event.source);
      break;
    case "hy:letter_dimension":
      showLetterStory("dimension", event.source);
    break;
    default:
      break;
  }
});
