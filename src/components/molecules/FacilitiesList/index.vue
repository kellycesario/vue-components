<script setup>
import FacilityItem from "@atoms/FacilityItem/index.vue";
import { ref } from "vue";
// import { useStore } from "../../../store";

// const { hotelFacilities, setHotelFacilities } = useStore();

const items = ref([
  {
    icon: "#workspace",
    label: "Private Workspace",
    to: "",
    id: 0,
  },
  {
    icon: "#parking-area",
    label: "Parking Area",
    to: "",
    id: 1,
  },
  {
    icon: "#cappuccino",
    label: "Breakfast",
    to: "",
    id: 2,
  },
  {
    icon: "#wifi",
    label: "Free Wifi",
    to: "",
    id: 3,
  },
  {
    icon: "#flash",
    label: "Free Electricity",
    to: "",
    id: 4,
  },
  {
    icon: "#swimmer",
    label: "Swimming Pool",
    to: "",
    id: 5,
  },
  {
    icon: "#dumbell",
    label: "Exercise Space",
    to: "",
    id: 6,
  },
  {
    icon: "#happy-hour",
    label: "Happy Hour",
    to: "",
    id: 7,
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
        :id="item.id"
      />
      <!-- <h2>{{ hotelFacilities }}</h2>
      <button @click="setHotelFacilities(items[0].label)">aaaa</button>
      <button @click="setHotelFacilities(items[5].label)">bbb</button>
    <p>{{ hotelFacilities.value }}</p> -->
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
