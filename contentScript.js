const checkForSkipWords = () => {
  chrome.storage.local.get(["skipWords"], (result) => {
    const skipWords = result.skipWords || [];
    const videoTitle =
      document.querySelector("title")?.innerText.toLowerCase() || "";

    if (
      skipWords.some(
        (word) => word.length > 0 && videoTitle.includes(word.toLowerCase())
      )
    ) {
      const nextButton = document.querySelector(".ytp-next-button");
      nextButton?.click();
    }
  });
};

const observer = new MutationObserver(checkForSkipWords);
observer.observe(document.body, { childList: true, subtree: true });
