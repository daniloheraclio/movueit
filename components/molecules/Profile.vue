<template>
  <div class="flex items-center">
    <img
      src="https://github.com/daniloheraclio.png"
      alt="Danilo Heraclio"
      class="mr-5 w-20 h-20 rounded-full"
    />
    <div class="flex flex-col w-full">
      <strong class="text-title text-2xl">Danilo Heraclio</strong>
      <p class="flex items-center">
        <img src="icons/level.svg" alt="" class="mr-2" />
        <span class="text-base">Level {{ level }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Profile",
  computed: mapState("Challenges", ["level"]),
};
</script>
