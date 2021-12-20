<template>
  <section
    class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-10"
  >
    <header class="w-fukk pb-6 border-b-2 border-background">
      <h2 class="text-xl text-blue font-semibold text-center">
        {{ `Win ${amount}` }}
      </h2>
    </header>
    <main class="flex flex-col flex-1 justify-center items-center mt-6">
      <img
        :src="`icons/${type}.svg`"
        :alt="type"
        :style="{ minHeight: '70px' }"
      />
      <h1 class="font-semibold text-3xl text-title mt-6 mb-2">Work out</h1>
      <p class="text-center text-base leading-6">
        {{ description }}
      </p>
    </main>
    <footer class="flex w-full gap-2">
      <button class="button failed" @click="resetChallenges">Failed</button>
      <button class="button succeeded" @click="challengeSucceeded">
        Completed
      </button>
    </footer>
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { MUTATIONS_CT } from "@/store/Countdown";
import { MUTATIONS_CH } from "@/store/Challenges";

export default {
  name: "Challenge",
  props: {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState("Challenges", ["level", "xp", "completedChallenges"]),
  },
  methods: {
    ...mapMutations({
      resetTime: `Countdown/${MUTATIONS_CT.RESET_TIME}`,
      setIsActive: `Countdown/${MUTATIONS_CT.SET_IS_ACTIVE}`,
      setHasCompleted: `Countdown/${MUTATIONS_CT.SET_HAS_COMPLETED}`,
      setCurrentChallengeIndex: `Challenges/${MUTATIONS_CH.SET_CURRENT_CHALLENGE_INDEX}`,
      completeChallenge: `Challenges/${MUTATIONS_CH.COMPLETE_CHALLENGE}`,
    }),
    resetChallenges() {
      this.resetTime();
      this.setIsActive(false);
      this.setHasCompleted(false);
      this.setCurrentChallengeIndex(null);
    },
    challengeSucceeded() {
      this.resetChallenges();
      this.completeChallenge(this.amount);

      this.$cookiz.set("movueit", {
        level: this.level,
        xp: this.xp,
        completedChallenges: this.completedChallenges,
      });
    },
  },
};
</script>
