import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("hotel", () => {
  const hotelFacilities = ref({});

  function setHotelFacilities(facilities) {
    this.hotelFacilities = facilities;
  }
  return {
    hotelFacilities,
    setHotelFacilities,
  };
});
