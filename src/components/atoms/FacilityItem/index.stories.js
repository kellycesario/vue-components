import FacilityItem from "./index.vue";
import Svg from "../../ions/Svg/index.vue";

export default {
  title: "Atoms/FacilityItem",
  component: FacilityItem,
  args: {
    label: "Swimming Pool",
    icon: "#swimmer",
    to: "#",
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [],
};

export const Default = {};
