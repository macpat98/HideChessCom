document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const hideNameCheckBox = document.getElementById("hideName");
  const hideRatingCheckBox = document.getElementById("hideRating");

  hideNameCheckBox.addEventListener("change", async () => {
    chrome.tabs.sendMessage(tab.id, {
      type: "HIDE_NAME",
      hide: hideNameCheckBox.checked,
    });
  });

  hideRatingCheckBox.addEventListener("change", async () => {
    chrome.tabs.sendMessage(tab.id, {
      type: "HIDE_RATING",
      hide: hideRatingCheckBox.checked,
    });
  });
});
