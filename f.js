var a=document.getElementById("styles_js");a||(a=document.createElement("style"),a.type="text/css",a.id="styles_js",document.getElementsByTagName("head")[0].appendChild(a));a.appendChild(document.createTextNode('\n.purple2 {\n  color: #ff4b14!important;\n}\n\nbody > div.inner-body > header > div > div > div.holder-phone.pull-right.ml30 > a {\n  color: #ff4b14!important;\n}\n\n.holder-cols-checkout .box-checkout.active .holder-number {\n  background: #ff4b14!important;\n  border-color: #ff4b14!important;\n}\n\n.holder-countdown {\n  background: #ff4b14!important;\n}\n\n.holder-cols-checkout .box-checkout.active .title {\n  color: #ff4b14!important;\n}\n\n.holder-cols-checkout .container-addresses .box-address.selected .inner-box {\n  border-color: #ff4b14!important;\n}\n\n.holder-cols-checkout .container-shipment .option.selected {\n  border-color: #ff4b14!important;\n}\n\ndiv.box-checkout.box-addresses.active > div.box-title > a {\n  color: #ff4b14!important;\n}\n\n#form-checkout-shipment > div:nth-child(1) > a {\n  color: #ff4b14!important;\n}\n\n/* Esconde "x" da tela do cartao */\n#form-checkout > div > div.payment.credit-card.selected > a > i {\n  display: none;\n}\n\n/* Esconde icone do boleto */\n#form-checkout > div > div.payment.billet > label > div.holder-icheck.pull-left > label > i {\n  display: none;\n}\n\n/* Aumenta texto de desconto no cart\u00e3o */\n.holder-cols-checkout .payments .payment-header .discount-flag {\n  right: -10px;\n  font-size: 104%;\n}\n\n#form-checkout > div > div.payment.billet > label > div.holder-icheck.pull-left > label {\n  position: relative;\n  top: 2px;\n  font-size: 82%;\n}\n\n@keyframes heartbeat\n{\n  0%\n  {\n    transform: scale( .93 );\n  }\n  20%\n  {\n    transform: scale( 1 );\n  }\n  40%\n  {\n    transform: scale( .93 );\n  }\n  60%\n  {\n    transform: scale( 1 );\n  }\n  80%\n  {\n    transform: scale( .93 );\n  }\n  100%\n  {\n    transform: scale( .93 );\n  }\n}\n\n.pulse\n{\n  animation: heartbeat 1.5s infinite;\n  -webkit-animation: heartbeat 1.5s infinite;\n}\n\n'));
setInterval(function(){try{var b=document.querySelector("#input-card-number-0").value.length;b&&4<b&&(document.querySelector("#form-checkout > div > div.payment.billet").style.display="none")}catch(c){}},1E3);try{document.querySelector(".discount-flag.bold.blue").classList.add("pulse")}catch(b){};
