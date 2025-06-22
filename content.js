
(function () {

    const isShopify = !!window.Shopify || !!document.querySelector('meta[name="shopify-digital-wallet"]');


    if (isShopify && !document.getElementById('shopify-detector-notification')) {

     
        const notification = document.createElement('div');
        notification.id = 'shopify-detector-notification';
        notification.innerHTML = "Yes Built with Shopify";
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #95BF47;
            color: white;
            padding: 12px 20px;
            border-radius: 30px;
            font-family: Arial, sans-serif;
            font-size: 16px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            cursor: pointer;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
            z-index: 9999;
        `;

        document.body.appendChild(notification);

      
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);


        document.addEventListener('click', () => {
            if (notification) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    notification.remove();
                }, 400);
            }
        });
    }
})(); 
