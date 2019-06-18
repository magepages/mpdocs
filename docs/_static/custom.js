// Crisp Chat
window.$crisp=[];window.CRISP_WEBSITE_ID="a8100c36-4c44-4f41-9964-bf9c2b32de34";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();

var currentSelElm = 'li.current';

var waitFor = setInterval(function() {
    if (jQuery(currentSelElm).length) {
        clearInterval(waitFor);
        jQuery(currentSelElm).css({
            'position': 'sticky',
            'top': 0,
            'z-index': 999
        });
    }
}, 100);

