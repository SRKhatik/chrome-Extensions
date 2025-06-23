chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
            return !!window.Shopify || !!document.querySelector('meta[name="shopify-digital-wallet"]');
        },
    }, (results) => {
        const statusElement = document.getElementById('status');

        const baseStyle = 'display: flex; align-items: center; font-family: Arial, sans-serif; font-size: 16px; color: #333;';

        if (results[0].result) {
            statusElement.innerHTML = `
                <div style="${baseStyle}">
                    <img src="icons/checked.png" alt="Checked" style="width: 20px; height: 20px; margin-right: 8px;" />
                    Built with Shopify
                </div>
            `;
        } else {
            statusElement.innerHTML = `
                <div style="${baseStyle}">
                    <img src="icons/delete.png" alt="Unchecked" style="width: 20px; height: 20px; margin-right: 8px;" />
                    Not a Shopify Store
                </div>
            `;
        }

        document.body.addEventListener('click', () => {
            window.close();
        });
    });
});
