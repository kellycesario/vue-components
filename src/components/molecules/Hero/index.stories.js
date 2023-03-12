import Hero from "./index.vue";

export default {
  title: "Molecules/Hero",
  component: Hero,
  argTypes: {
    video: {
      table: {
        disable: true,
      },
    },
    image: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
