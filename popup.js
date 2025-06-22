chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
            return !!window.Shopify || !!document.querySelector('meta[name="shopify-digital-wallet"]');
        },
    }, (results) => {
        const statusElement = document.getElementById('status');
        if (results[0].result) {
            statusElement.innerHTML = "<img src='icons/checked.png' alt='Checked' style='width: 20px; height: 20px;' /> Built with Shopify";
        } else {
            statusElement.innerHTML = "<img src='icons/delete.png' alt='Unchecked' style='width: 20px; height: 20px;' /> Not a Shopify Store";
        }

        document.body.addEventListener('click', () => {
            window.close(); 
        });
    });
});
