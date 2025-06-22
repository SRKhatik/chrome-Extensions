chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^https?:/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => {
                return !!window.Shopify || !!document.querySelector('meta[name="shopify-digital-wallet"]');
            }
        }, (results) => {
            if (chrome.runtime.lastError || !results || !results[0]) {
                return;
            }

            if (results[0].result) {
                chrome.action.setIcon({
                    tabId: tabId,
                    path: {
                        "16": "icons/icon-shopify.png",
                        "48": "icons/icon-shopify.png",
                        "128": "icons/icon-shopify.png"
                    }
                });
            } else {
                chrome.action.setIcon({
                    tabId: tabId,
                    path: {
                        "16": "icons/icon-default.png",
                        "48": "icons/icon-default.png",
                        "128": "icons/icon-default.png"
                    }
                });
            }
        });
    }
});
