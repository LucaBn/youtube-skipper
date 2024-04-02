document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get(["skipWords"], function (result) {
    if (result.skipWords) {
      document.getElementById("skipWords").value = result.skipWords.join(", ");
    }
  });

  document.getElementById("saveButton").addEventListener("click", function () {
    const skipWords = document.getElementById("skipWords").value;

    chrome.storage.local.set(
      { skipWords: skipWords.split(",").map((word) => word.trim()) },
      () => {
        console.log("skipWords saved!!!");
      }
    );
  });
});
