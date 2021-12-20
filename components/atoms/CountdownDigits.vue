<template>
  <p class="w-1/2 flex gap-x-1">
    <span
      v-for="(digit, index) in splittedDigits"
      :key="index"
      class="w-1/2 bg-white flex justify-center items-center rounded-md py-3"
    >
      {{ digit }}
    </span>
  </p>
</template>
<script>
import { splittedValue } from "@/utils";

export default {
  name: "CountdownDigits",
  props: {
    digits: {
      type: Number,
      required: true,
    },
  },
  computed: {
    splittedDigits() {
      return this.splittedValue(this.digits);
    },
  },
  methods: {
    splittedValue,
  },
};
</script>
