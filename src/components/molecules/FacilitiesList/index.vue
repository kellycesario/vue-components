<script setup>
import FacilityItem from "@atoms/FacilityItem/index.vue";
import { ref } from "vue";

const items = ref([
  {
    icon: "#workspace",
    label: "Private Workspace",
    to: "",
  },
  {
    icon: "#parking-area",
    label: "Parking Area",
    to: "",
  },
  {
    icon: "#cappuccino",
    label: "Breakfast",
    to: "",
  },
  {
    icon: "#wifi",
    label: "Free Wifi",
    to: "",
  },
  {
    icon: "#flash",
    label: "Free Electricity",
    to: "",
  },
  {
    icon: "#swimmer",
    label: "Swimming Pool",
    to: "",
  },
  {
    icon: "#dumbell",
    label: "Exercise Space",
    to: "",
  },
  {
    icon: "#happy-hour",
    label: "Happy Hour",
    to: "",
  },
]);
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <FacilityItem
        v-for="item in items"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :to="item.to"
      />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, auto);
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, auto);
    }
  }
}
</style>
