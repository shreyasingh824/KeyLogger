function saveToFile() {
  chrome.runtime.sendMessage({ type: 'getKeys' }, function(response) {
    if (response && response.keys) {
      const keys = response.keys;
      const blob = new Blob([keys], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'recorded_keys.txt';
      a.click();
    } else {
      console.error('No keys recorded.');
    }
  });
}

document.getElementById('saveButton').addEventListener('click', saveToFile);

  