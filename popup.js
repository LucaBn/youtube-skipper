document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["skipWords"], (result) => {
    if (result.skipWords) {
      document.getElementById("skipWords").value = result.skipWords.join(", ");
    }
  });

  document.getElementById("saveButton").addEventListener("click", () => {
    const skipWords = document.getElementById("skipWords").value;

    chrome.storage.local.set(
      { skipWords: skipWords.split(",").map((word) => word.trim()) },
      () => {
        console.log("Blacklist saved!!!");
      }
    );
  });
});
