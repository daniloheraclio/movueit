<template>
  <div
    class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani"
  >
    <CountdownDigits :digits="minutes" />
    <span>:</span>
    <CountdownDigits :digits="seconds" />
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { MUTATIONS_CT } from "@/store/Countdown";
import CountdownDigits from "@/components/atoms/CountdownDigits.vue/";

let TIMEOUT_REF;

export default {
  name: "Countdown",
  components: {
    CountdownDigits,
  },
  computed: {
    ...mapState("Countdown", ["time", "isActive"]),
    ...mapGetters("Countdown", ["minutes", "seconds"]),
  },
  methods: {
    ...mapMutations("Countdown", {
      setTime: MUTATIONS_CT.SET_TIME,
      resetTime: MUTATIONS_CT.RESET_TIME,
    }),
    runCountdown(flag) {
      if (this.isActive && flag) {
        TIMEOUT_REF = setTimeout(() => {
          this.setTime(this.time - 1);
        }, 1000);
      } else {
        clearTimeout(TIMEOUT_REF);
      }
    },
  },
  watch: {
    isActive(newValue) {
      this.runCountdown(newValue);

      if (!this.newValue) {
        this.resetTime();
      }
    },
    time(newTime) {
      if (newTime > 0) {
        this.runCountdown(true);
      } else {
        this.$emit("completed");
      }
    },
  },
};
</script>
