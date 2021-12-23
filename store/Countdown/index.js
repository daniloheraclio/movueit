const MINUTES = 25;

export const MUTATIONS_CT = {
  SET_TIME: "SET_TIME",
  RESET_TIME: "RESET_TIME",
  SET_IS_ACTIVE: "SET_IS_ACTIVE",
  SET_HAS_COMPLETED: "SET_HAS_COMPLETED",
};

export const state = () => ({
  time: MINUTES * 60,
  isActive: false,
  hasCompleted: false,
});

export const getters = {
  minutes: (state) => Math.floor(state.time / 60),
  seconds: (state) => state.time % 60,
};

export const mutations = {
  [MUTATIONS_CT.SET_TIME](state, newTime) {
    state.time = newTime;
  },
  [MUTATIONS_CT.RESET_TIME](state) {
    state.time = MINUTES * 60;
  },
  [MUTATIONS_CT.SET_IS_ACTIVE](state, isActive) {
    state.isActive = isActive;
  },
  [MUTATIONS_CT.SET_HAS_COMPLETED](state, hasCompleted) {
    state.hasCompleted = hasCompleted;
  },
};
