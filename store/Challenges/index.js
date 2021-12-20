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

export const getters = {
  challengesLength: (state) => state.allChallenges.length,
  currentXpPercentage: (state) => {
    const percentage = (state.xp.current / state.xp.end) * 100;
    return Number(percentage.toFixed(2));
  },
  currentChallenge: (state) =>
    typeof state.currentChallengesIndex === "number"
      ? state.allChallenges[state.currentChallengesIndex]
      : null,
};

export const mutations = {
  [MUTATIONS_CH.SET_CURRENT_CHALLENGE_INDEX](state, index) {
    state.currentChallengesIndex = index;
  },
  [MUTATIONS_CH.SET_IS_LEVEL_UP_MODAL_OPEN](state, flag) {
    state.isLevelUpModalOpen = flag;
  },
  [MUTATIONS_CH.COMPLETE_CHALLENGE](state, xpAmount) {
    const { current, end } = state.xp;
    const currentTotalXP = current + xpAmount;
    const shouldLevelUp = currentTotalXP >= end;

    state.completedChallenges += 1;

    if (shouldLevelUp) {
      state.level += 1;

      const remainingXp = currentTotalXP - end;
      const experienceToNextLevel = Math.pow((state.level + 1) * 4, 2);

      state.xp = {
        current: remainingXp,
        start: 0,
        end: experienceToNextLevel,
      };

      state.isLevelUpModalOpen = true;

      return;
    }

    state.xp = {
      ...state.xp,
      current: currentTotalXP,
    };
  },
  [MUTATIONS_CH.SAVE_COOKIE_DATA](state, cookie) {
    state.level = cookie.level;
    state.xp = cookie.xp;
    state.completedChallenges = cookie.completedChallenges;
  },
};
