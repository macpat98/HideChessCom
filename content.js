console.log("Content script loaded");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "HIDE_NAME") {
    document
      .querySelectorAll("[data-test-element='user-tagline-username']")
      .forEach((el) => {
        el.style.visibility = msg.hide ? "hidden" : "visible";
        console.log("el" + el);
      });
  }
  if (msg.type === "HIDE_RATING") {
    document
      .querySelectorAll("[class*='cc-user-rating']")
      .forEach((el) => (el.style.visibility = msg.hide ? "hidden" : "visible"));
  }
});
