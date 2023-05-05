const FROM_URL = 'https://www.youtube.com'
const TO_URL = 'https://www.youtube.com/feed/trending'

let _lock = false;
function lock() { _lock = true }
function unlock() { _lock = false; }

// Main
chrome.tabs.onUpdated.addListener((tabId, _, tab) => {

  if (tab.url.slice(0, tab.url.indexOf('/?')) === FROM_URL) {
    _lock ? null : chrome.tabs.update(tabId, { url: TO_URL }, lock());
  }

  else {
    unlock();
  }

});
