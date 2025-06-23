(function () {

    const isShopify = !!window.Shopify || !!document.querySelector('meta[name="shopify-digital-wallet"]');

    if (isShopify && !document.getElementById('shopify-detector-overlay')) {

        const overlay = document.createElement('div');
        overlay.id = 'shopify-detector-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(5px);
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;

        const notification = document.createElement('div');
        notification.id = 'shopify-detector-notification';
        notification.innerHTML = `
            <button id="shopify-close-btn" style="position: absolute; top: 5px; right: 5px; background: none; border-radius: 50%; font-size: 15px; color: white; cursor: pointer;">x</button>
            <p style="margin: 0; font-size: 18px;">This website is made with <strong style="color:white;">Shopify</strong>.</p>
        `;
        notification.style.cssText = `
            position: relative;
            background-color: #95BF47;
            color: white;
            padding: 20px 30px;
            border: 2px solid white;
            border-radius: 12px;
            font-family: Arial, sans-serif;
            text-align: center;
            max-width: 90%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.4s ease;
        `;

        overlay.appendChild(notification);
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 100);

        overlay.addEventListener('click', () => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 400);
        });

        notification.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.getElementById('shopify-close-btn').addEventListener('click', () => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 400);
        });
    }
})();
