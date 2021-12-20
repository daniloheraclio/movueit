/**
 * Returns a new audio object.
 * @param {string} path
 * @returns {Object} audio
 */
export const playAudio = (path) => new Audio(path).play();

/**
 * Returns a new notification object.
 * @param {string} title
 * @param {Object} options
 * @returns {Object} Notification
 */
export const sendNotification = (title, options) =>
  new Notification(title, options);

/**
 * @param {number | string} value
 * @param {number} padSize
 * @returns {string[]}
 */
export const splittedValue = (value, padSize = 2) =>
  `${value}`.padStart(padSize, "0").split("");

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns
 */
export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

/**
 *
 * @param {string} selector
 */
export const scrollToElement = (selector) => {
  const element = document.querySelector(selector);
  const mq = window.matchMedia("(max-width: 639px)");

  if (element && mq.matches) {
    element.scrollIntoView({ block: "start", behaviour: "smooth" });
  }
};
