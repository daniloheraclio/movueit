import { MUTATIONS_CH } from "../store/Challenges/index";

export default {
  [MUTATIONS_CH.SET_CURRENT_CHALLENGE_INDEX](state, index) {
    console.log(index, state.currentChallengesIndex);
    state.currentChallengesIndex = index;
  },
  [MUTATIONS_CH.SET_IS_LEVEL_UP_MODAL_OPEN](state, flag) {
    state.isLevelUpModalOpen = flag;
  },
  [MUTATIONS_CH.COMPLETE_CHALLENGE](state, xpAmount) {
    const { current, end } = state.xp;
    const currentTotalXp = current + xpAmount;
    const shouldLevelUp = currentTotalXp >= end;

    state.completedChallenges += 1;

    if (shouldLevelUp) {
      state.level += 1;

      const remainingXp = currentTotalXp - end;
      const experinceToNextLevel = Math.pow((state.level + 1) * 4, 2);

      state.xp = {
        current: remainingXp,
        start: 0,
        end: experinceToNextLevel,
      };

      state.isLevelUpModalOpen = true;
      return;
    }

    state.xp = {
      ...state.xp,
      current: currentTotalXp,
    };
  },
  [MUTATIONS_CH.SAVE_COOKIE_DATA](state, cookie) {
    state.level = cookie.level;
    state.xp = cookie.xp;
    state.completedChallenges = cookie.completedChallenges;
  },
};
