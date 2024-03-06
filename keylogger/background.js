chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check the type of message
    if (message.type === 'getKeys') {
      // Retrieve recorded keys from content script
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'getKeys' }, function(response) {
          // Check if response is received and contains keys
          if (response && response.keys) {
            // Send back the response to the content script
            sendResponse({ keys: response.keys });
          } else {
            console.error('No keys recorded.');
          }
        });
      });
      // Indicate that sendResponse will be called asynchronously
      return true;
    }
});
