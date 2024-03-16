import { world, ItemStack } from "@minecraft/server";
import {
  MessageFormData,
  ActionFormData,
  ActionFormResponse,
} from "@minecraft/server-ui";
import {
  StoryTitle,
  StoryData,
  LetterTitle,
  LetterData,
  modItemData,
} from "@hy2/mod-data.js";

function showBookStory(player) {
  const story = new ActionFormData()
    .title("隐藏的故事")
    .body("这本书记载了一些模糊的上古旧事……\n请选择章节")
    .button(StoryTitle.section0)
    .button(StoryTitle.section1)
    .button(StoryTitle.section2);
  story.show(player).then((response) => {
    switch (response.selection) {
      case 0:
        const storySection0 = new ActionFormData()
          .title(StoryTitle.section0)
          .body(StoryData.section0)
          .button("确定");
        storySection0.show(player);
        break;
      case 1:
        const storySection1 = new ActionFormData()
          .title(StoryTitle.section1)
          .body(StoryData.section1)
          .button("确定");
        storySection1.show(player);
        break;
      case 2:
        const storySection2 = new ActionFormData()
          .title(StoryTitle.section2)
          .body(StoryData.section2)
          .button("确定");
        storySection2.show(player);
        break;
      default:
        break;
    }
  });
  const GET_LETTERS = player.getDynamicProperty("hy:get_first_letter");
  if (GET_LETTERS !== true) {
    player.dimension.spawnItem(modItemData.letterDimension, player.location);
    player.setDynamicProperty("hy:get_first_letter", true);
  }
}

function showLetterStory(section, player) {
  switch (section) {
    case 0:
      const letterSection0 = new ActionFormData()
        .title(LetterTitle.section0)
        .body(LetterData.section0)
        .button("确定");
      letterSection0.show(player);
      break;
    case 1:
      const letterSection1 = new ActionFormData()
        .title(LetterTitle.section1)
        .body(LetterData.section1)
        .button("确定");
      letterSection1.show(player);
      break;
    case 2:
      const letterSection2 = new ActionFormData()
        .title(LetterTitle.section2)
        .body(LetterData.section2)
        .button("确定");
      letterSection2.show(player);
      break;
    case 3:
      const letterSection3 = new ActionFormData()
        .title(LetterTitle.section3)
        .body(LetterData.section3)
        .button("确定");
      letterSection3.show(player);
      break;
    case 4:
      const letterSection4 = new ActionFormData()
        .title(LetterTitle.section4)
        .body(LetterData.section4)
        .button("确定");
      letterSection4.show(player);
      break;
    case 5:
      const letterSection5 = new ActionFormData()
        .title(LetterTitle.section5)
        .body(LetterData.section5)
        .button("确定");
      letterSection5.show(player);
      break;
    case 6:
      const letterSection6 = new ActionFormData()
        .title(LetterTitle.section6)
        .body(LetterData.section6)
        .button("确定");
      letterSection6.show(player);
      break;
    case 7:
      const letterSection7 = new ActionFormData()
        .title(LetterTitle.section7)
        .body(LetterData.section7)
        .button("确定");
      letterSection7.show(player);
      break;
    case 8:
      const letterSection8 = new ActionFormData()
        .title(LetterTitle.section8)
        .body(LetterData.section8)
        .button("确定");
      letterSection8.show(player);
      break;
    case 9:
      const letterSection9 = new ActionFormData()
        .title(LetterTitle.section9)
        .body(LetterData.section9)
        .button("确定");
      letterSection9.show(player);
      break;
    case 10:
      const letterSection10 = new ActionFormData()
        .title(LetterTitle.section10)
        .body(LetterData.section10)
        .button("确定");
      letterSection10.show(player);
      break;
    default:
      console.error("[hy2]-invalid section");
  }
}

world.afterEvents.itemUse.subscribe((event) => {
  switch (event.itemStack.typeId) {
    case "hy:story_book":
      showBookStory(event.source);
      break;
    case "hy:letter_dimension":
      showLetterStory(0, event.source);
      break;
    case "hy:letter_ruby":
      showLetterStory(1, event.source);
      break;
    case "hy:letter_city":
      showLetterStory(2, event.source);
      break;
    case "hy:letter_hidden_years":
      showLetterStory(3, event.source);
      break;
    case "hy:letter_time1":
      showLetterStory(4, event.source);
      break;
    case "hy:letter_time2":
      showLetterStory(5, event.source);
      break;
    case "hy:letter_sacrifice":
      showLetterStory(6, event.source);
      break;
    case "hy:letter_old_human":
      showLetterStory(7, event.source);
      break;
    case "hy:letter_colonizer":
      showLetterStory(8, event.source);
      break;
    case "hy:letter_imitation1":
      showLetterStory(9, event.source);
      break;
    case "hy:letter_imitation2":
      showLetterStory(10, event.source);
      break;
    default:
      break;
  }
});
