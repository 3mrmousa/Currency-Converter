const COUNTRY_NAMES = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BYN: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  FOK: "Faroese Króna",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  IMP: "Isle of Man Pound",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KID: "Kiribati Dollar",
  KMF: "Comorian Franc",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanmar Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SSP: "South Sudanese Pound",
  STN: "São Tomé and Príncipe Dobra",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TVD: "Tuvaluan Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VES: "Venezuelan Bolívar Soberano",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "Central African CFA Franc",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "West African CFA Franc",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar",
};

let mySelect1 = document.querySelector(".hero .form .from #from-currency");
let myDiv1 = document.querySelector(".hero .form .from");
let mySelect2 = document.querySelector(".hero .form .to #to-currency");
let myDiv2 = document.querySelector(".hero .form .to");

let myP = document.getElementById("myP");

for (let currencyCode in COUNTRY_NAMES) {
  let option = document.createElement("option");
  option.value = currencyCode;
  option.text = `${currencyCode} || ${COUNTRY_NAMES[currencyCode]}`;
  if (currencyCode === "USD") {
    option.selected = true;
  }
  mySelect1.appendChild(option);
}
for (let currencyCode in COUNTRY_NAMES) {
  let option = document.createElement("option");
  option.value = currencyCode;
  option.text = `${currencyCode} || ${COUNTRY_NAMES[currencyCode]}`;
  if (currencyCode === "EGP") {
    option.selected = true;
  }
  mySelect2.appendChild(option);
}

let img1 = document.querySelector(".from img");
let img2 = document.querySelector(".to img");

img1.src = `https://flagsapi.com/${mySelect1.value.slice(0, 2)}/shiny/32.png`;
img2.src = `https://flagsapi.com/${mySelect2.value.slice(0, 2)}/shiny/32.png`;

mySelect1.addEventListener("change", () => {
  img1.src = `https://flagsapi.com/${mySelect1.value.slice(0, 2)}/shiny/32.png`;
});
mySelect2.addEventListener("change", () => {
  img2.src = `https://flagsapi.com/${mySelect2.value.slice(0, 2)}/shiny/32.png`;
});

let swapButton = document.getElementById("swap-btn");

swapButton.addEventListener("click", () => {
  let temp = mySelect1.value;
  mySelect1.value = mySelect2.value;
  mySelect2.value = temp;
  img1.src = `https://flagsapi.com/${mySelect1.value.slice(0, 2)}/shiny/32.png`;
  img2.src = `https://flagsapi.com/${mySelect2.value.slice(0, 2)}/shiny/32.png`;
});


let amountInput = document.getElementById("amount");
let convertButton = document.getElementById("convert");

convertButton.addEventListener("click", () => {
  let amount = amountInput.value;
  if (amount === "" || amount < 0 || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }
  let fromCurrency = mySelect1.value;
  let toCurrency = mySelect2.value;
  let exchangeRateAPI = fetch(`https://v6.exchangerate-api.com/v6/1c9dd1651df9b0baa2818e31/latest/${fromCurrency}`);
  exchangeRateAPI.then((response) => response.json()).then((data) => {
    let rate = data.conversion_rates[toCurrency];
    myP.innerHTML = `${amount} ${fromCurrency} = ${(amount * rate).toFixed(2)} ${toCurrency}`;
  });
});