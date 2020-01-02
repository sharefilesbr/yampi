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

addNewStyle(`
.purple2 {
  color: #ff4b14!important;
}

body > div.inner-body > header > div > div > div.holder-phone.pull-right.ml30 > a {
  color: #ff4b14!important;
}

.holder-cols-checkout .box-checkout.active .holder-number {
  background: #ff4b14!important;
  border-color: #ff4b14!important;
}

.holder-countdown {
  background: #ff4b14!important;
}

.holder-cols-checkout .box-checkout.active .title {
  color: #ff4b14!important;
}

.holder-cols-checkout .container-addresses .box-address.selected .inner-box {
  border-color: #ff4b14!important;
}

.holder-cols-checkout .container-shipment .option.selected {
  border-color: #ff4b14!important;
}

div.box-checkout.box-addresses.active > div.box-title > a {
  color: #ff4b14!important;
}

#form-checkout-shipment > div:nth-child(1) > a {
  color: #ff4b14!important;
}

/* Esconde "x" da tela do cartao */
#form-checkout > div > div.payment.credit-card.selected > a > i {
  display: none;
}

/* Esconde icone do boleto */
#form-checkout > div > div.payment.billet > label > div.holder-icheck.pull-left > label > i {
  display: none;
}

/* Aumenta texto de desconto no cartão */
.holder-cols-checkout .payments .payment-header .discount-flag {
  right: -10px;
  font-size: 104%;
}

#form-checkout > div > div.payment.billet > label > div.holder-icheck.pull-left > label {
  position: relative;
  top: 2px;
  font-size: 82%;
}

@keyframes heartbeat
{
  0%
  {
    transform: scale( .93 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .93 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .93 );
  }
  100%
  {
    transform: scale( .93 );
  }
}

.pulse
{
  animation: heartbeat 1.5s infinite;
  -webkit-animation: heartbeat 1.5s infinite;
}

`)

// Desativa boleto ao digitar o cartão
let intervalInputCard = setInterval(() => {
  try {
    var input = document.querySelector("#input-card-number-0").value.length
    if (input && input > 14) {
      document.querySelector("#form-checkout > div > div.payment.billet").style.display = "none"
    }
  } catch (err) { }
}, 1000);

// Faz o texto de desconto no cartao piscar
try {
  document.querySelector(".discount-flag.bold.blue").classList.add("pulse");
} catch (err) { }
