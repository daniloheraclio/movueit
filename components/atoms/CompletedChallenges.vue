<template>
  <div
    class="flex justify-between items-center pb-5 border-b-2 border-gray-line mt-8 lg:mt-14 font-medium"
  >
    <p class="text-lg">Completed challenges</p>
    <p class="text-2xl">{{ completedChallenges }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CompletedChallenges",
  computed: mapState("Challenges", ["completedChallenges"]),
};
</script>
