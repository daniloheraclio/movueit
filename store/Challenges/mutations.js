import { MUTATIONS_CH } from "./index";

export default {
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
