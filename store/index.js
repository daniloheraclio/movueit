import { MUTATIONS_CH } from "./Challenges";

export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const cookie = app.$cookiz.get("movueit");

    if (cookie) {
      commit(`Challenges/${MUTATIONS_CH.SAVE_COOKIE_DATA}`, cookie);
    }
  },
};
