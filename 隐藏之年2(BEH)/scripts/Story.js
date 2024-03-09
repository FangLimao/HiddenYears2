import { world, ItemStack } from "@minecraft/server";
import {
  MessageFormData,
  ActionFormData,
  ActionFormResponse,
} from "@minecraft/server-ui";
import { StoryTitle, StoryData } from "@hy2/mod-data.js";

function showBookStory(player) {
  const story = new ActionFormData()
    .title("隐藏的故事")
    .body("选择章节")
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
    player.dimension.spawnItem(itemLetter, player.location);
    player.setDynamicProperty("hy:get_first_letter", true);
  }
}
