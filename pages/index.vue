<template>
  <section
    class="flex flex-col lg:flex-row flex-1 lg:flex-none lg: mt-16 sm:gap-x-10 md:gap-x-20"
  >
    <div class="flex flex-col w-full lg:w-1/2">
      <Profile />
      <CompletedChallenges />
      <Countdown @completed="getNewChallenge" />
      <button v-if="hasCountdownCompleted" disabled class="button completed">
        Cycle completed
      </button>
      <button
        v-else-if="isCountdownActive"
        class="button abandon"
        @click="setCountdownState(false)"
      >
        Abandon cycle
      </button>
      <button v-else class="button start" @click="setCountdownState(true)">
        Start a cycle
      </button>
    </div>
    <Card id="challenge" class="w-full lg:w-1/2" />
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { MUTATIONS_CT } from "@/store/Countdown";
import { MUTATIONS_CH } from "@/store/Challenges";
import {
  playAudio,
  sendNotification,
  getRandomNumber,
  scrollToElement,
} from "~/utils";
import CompletedChallenges from "@/components/atoms/CompletedChallenges.vue";
import Profile from "@/components/molecules/Profile.vue";
import Countdown from "@/components/molecules/Countdown.vue";
import Card from "@/components/organisms/Card.vue";

export default {
  head() {
    return {
      title: "Home | Movue.it",
    };
  },
  name: "IndexPage",
  components: {
    CompletedChallenges,
    Profile,
    Countdown,
    Card,
  },
  mounted() {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  },
  computed: {
    ...mapState("Countdown", {
      hasCountdownCompleted: "hasCompleted",
      isCountdownActive: "isActive",
    }),
    ...mapGetters("Challenges", ["challengesLength"]),
  },
  methods: {
    ...mapMutations({
      setCountdownHasCompleted: `Countdown/${MUTATIONS_CT.SET_HAS_COMPLETED}`,
      setCountdownIsActive: `Countdown/${MUTATIONS_CT.SET_IS_ACTIVE}`,
      setCurrentChallengeIndex: `Challenges/${MUTATIONS_CH.SET_CURRENT_CHALLENGE_INDEX}`,
    }),
    setCountdownState(flag) {
      this.setCountdownHasCompleted(false);
      this.setCountdownIsActive(flag);
    },
    getNewChallenge() {
      const index = getRandomNumber(0, this.challengesLength);
      this.setCountdownHasCompleted(true);
      this.setCurrentChallengeIndex(index);

      if (Notification?.permission == "granted") {
        playAudio("/notification.mp3");
        sendNotification("New Challenge!", {
          body: "A new challenge has started! Go complete it!",
          icon: "/favicon.png",
        });
      }

      this.$nextTick(() => {
        scrollToElement("#challenge");
      });
    },
  },
};
</script>
