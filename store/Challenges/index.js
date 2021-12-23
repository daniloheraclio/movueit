import { allChallenges } from "~/assets/challenges/data";

export const MUTATIONS_CH = {
  SET_CURRENT_CHALLENGE_INDEX: "SET_CURRENT_CHALLENGE_INDEX",
  SET_IS_LEVEL_UP_MODAL_OPEN: "SET_IS_LEVEL_UP_MODAL_OPEN",
  COMPLETE_CHALLENGE: "COMPLETE_CHALLENGE",
  SAVE_COOKIE_DATA: "SAVE_COOKIE_DATA",
};

export const state = () => ({
  level: 1,
  xp: {
    current: 0,
    start: 0,
    end: 64,
  },
  completedChallenges: 0,
  currentChallengesIndex: null,
  isLevelUpModalOpen: false,
  allChallenges,
});
