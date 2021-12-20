<template>
  <div class="min-h-screen max-w-5xl mx-auto flex flex-col px-5 py-8 md:py-10">
    <ExperienceBar />
    <Nuxt />
  </div>
</template>
<script>
import ExperienceBar from "@/components/atoms/ExperienceBar.vue";
export default {
  name: "Default",
  components: {
    ExperienceBar,
  },
};
</script>
