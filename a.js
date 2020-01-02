document.querySelector(".holder-countdown").style.background = "#ff4b14";
document.querySelector(".holder-cols-checkout .box-checkout.active .holder-number").style.background = "#ff4b14";
document.querySelector(".holder-cols-checkout .box-checkout.active .holder-number").style.borderColor = "#ff4b14";

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

console.log("bbbbbbbbbbbbbbbbbbbbbbb")
