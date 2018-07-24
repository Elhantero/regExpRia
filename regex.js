const arrTestUrls = [
  "/ru/novostroyki-ivano-frankovsk-metro-geroev-ukrainu-ulitsa-tarasa-shevchenko-kvartiry-ekonom-klassa",
  "/ru/novostroyki-biznes-klassa",
  "/ru/novostroyki-elit-klassa",
  "/ru/novostroyki-komfort-klassa",
  "/ru/novostroyki-sdannyye",
  "/ru/novostroyki-stroyashchiyesya",
  "/ru/novostroyki-kiyevskaya-oblast",
  "/ru/novostroyki-kiyevskaya-oblast-kiev",
  "/ru/novostroyki-kiyevskaya-oblast-ekonom-klassa",
  "/ru/novostroyki-kiyevskaya-oblast-biznes-klassa",
  "/ru/novostroyki-kiyevskaya-oblast-elit-klassa",
  "/ru/novostroyki-kiyevskaya-oblast-komfort-klassa",
  "/ru/novostroyki-kiyevskaya-oblast-sdannyye",
  "/ru/novostroyki-vinnitskaya-oblast-stroyashchiyesya",
  "/ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii",
  "/ru/novostroyki-kiyevskaya-oblast-kiev-metro-nivki",
  "/ru/novostroyki-kiev",
  "/ru/novostroyki-taunkhausy",
  "/ru/novostroyki-taunkhausy-ekonom-klassa",
  "/ru/novostroyki-kiev-taunkhausy",
  "/ru/novostroyki-kiev-kottedzhi",
  "/ru/novostroyki-kiev-pomeshcheniya",
  "/ru/novostroyki-kiev-pravyy-bereg",
  "/ru/novostroyki-kiev-levyy-bereg",
  "/ru/novostroyki-kiev-rayon-goloseevskii",
  "/ru/novostroyki-kiev-metro-nivki",
  "/ru/novostroyki-kiev-ulitsa-pushkina",
  "/ru/novostroyki-kiev-ulitsa-boiko",
  "/ru/novostroyki-kiev-odnokomnatnyye",
  "/ru/novostroyki-kvartiry-odnokomnatnyye",
  "/ru/novostroyki-kvartiry-dvukhkomnatnyye",
  "/ru/novostroyki-kvartiry-trekhkomnatnyye",
  "/ru/novostroyki-kvartiry-chetyrekhkomnatnyye",
  "/ru/novostroyki-kiev-kvartiry-odnokomnatnyye",
  "/ru/novostroyki-kiev-kvartiry-dvukhkomnatnyye",
  "/ru/novostroyki-kiev-kvartiry-trekhkomnatnyye",
  "/ru/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye",
  "/ru/novostroyki-odnokomnatnyye",
  "/ru/novostroyki-sdannyye-kvartiry",
  "/ru/novostroyki-kiev-sdannyye",
  "/ru/novostroyki-kiev-sdannyye-kvartiry",
  "/ru/novostroyki-kiev-stroyashchiyesya",
  "/ru/novostroyki-kiev-ekonom-klassa",
  "/ru/novostroyki-kiev-biznes-klassa",
  "/ru/novostroyki-kiev-elit-klassa",
  "/ru/novostroyki-kiev-komfort-klassa",
  "/ru/novostroyki-kvartiry",
  "/ru/novostroyki-kiev-kvartiry",
  "/ru/novostroyki-rassrochka",
  "/ru/novostroyki-kiev-rassrochka",
  "/ru/novostroyki-kiev-vozle-metro",
  "/ru/novostroyki-kiev-s-remontom",
  "/ru/novostroyki-s-remontom",
  "/ru/novostroyki-kvartiry-s-remontom",
  "/ru/novostroyki-kiev-kvartiry-s-remontom",
  "/ru/novostroyki-brovary",
  "/ru/novostroyki-brovary-vozle-metro-s-remontom",
  "/ru/novostroyki-kiyevskaya-oblast-taunkhausy",
  "/ru/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa",
  "/ru/novostroyki-kiyevskaya-oblast-kottedzhi",
  "/ru/novostroyki-kiev-rayon-goloseevskii-taunkhausy",
  "/ru/novostroyki-kiev-rayon-goloseevskii-kottedzhi",
  "/ru/novostroyki-kiev-rayon-goloseevskii-kvartiry",
  "/ru/novostroyki-kiev-ulitsa-boiko-kvartiry",
  "/ru/novostroyki-kiev-metro-nivki-kvartiry",
  "/uk/novostroyki-ekonom-klassa",
  "/uk/novostroyki-biznes-klassa",
  "/uk/novostroyki-elit-klassa",
  "/uk/novostroyki-komfort-klassa",
  "/uk/novostroyki-sdannyye",
  "/uk/novostroyki-stroyashchiyesya",
  "/uk/novostroyki-kiyevskaya-oblast",
  "/uk/novostroyki-kiyevskaya-oblast-kiev",
  "/uk/novostroyki-kiyevskaya-oblast-ekonom-klassa",
  "/uk/novostroyki-kiyevskaya-oblast-biznes-klassa",
  "/uk/novostroyki-kiyevskaya-oblast-elit-klassa",
  "/uk/novostroyki-kiyevskaya-oblast-komfort-klassa",
  "/uk/novostroyki-kiyevskaya-oblast-sdannyye",
  "/uk/novostroyki-kiyevskaya-oblast-stroyashchiyesya",
  "/uk/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii",
  "/uk/novostroyki-kiyevskaya-oblast-kiev-metro-nivki",
  "/uk/novostroyki-kiev",
  "/uk/novostroyki-taunkhausy",
  "/uk/novostroyki-taunkhausy-ekonom-klassa",
  "/uk/novostroyki-kiev-taunkhausy",
  "/uk/novostroyki-kiev-kottedzhi",
  "/uk/novostroyki-kiev-pomeshcheniya",
  "/uk/novostroyki-kiev-pravyy-bereg",
  "/uk/novostroyki-kiev-levyy-bereg",
  "/uk/novostroyki-kiev-rayon-goloseevskii",
  "/uk/novostroyki-kiev-metro-nivki",
  "/uk/novostroyki-kiev-ulitsa-pushkina",
  "/uk/novostroyki-kiev-ulitsa-boiko",
  "/uk/novostroyki-kiev-odnokomnatnyye",
  "/uk/novostroyki-kvartiry-odnokomnatnyye",
  "/uk/novostroyki-kvartiry-dvukhkomnatnyye",
  "/uk/novostroyki-kvartiry-trekhkomnatnyye",
  "/uk/novostroyki-kvartiry-chetyrekhkomnatnyye",
  "/uk/novostroyki-kiev-kvartiry-odnokomnatnyye",
  "/uk/novostroyki-kiev-kvartiry-dvukhkomnatnyye",
  "/uk/novostroyki-kiev-kvartiry-trekhkomnatnyye",
  "/uk/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye",
  "/uk/novostroyki-odnokomnatnyye",
  "/uk/novostroyki-sdannyye-kvartiry",
  "/uk/novostroyki-kiev-sdannyye",
  "/uk/novostroyki-kiev-sdannyye-kvartiry",
  "/uk/novostroyki-kiev-stroyashchiyesya",
  "/uk/novostroyki-kiev-ekonom-klassa",
  "/uk/novostroyki-kiev-biznes-klassa",
  "/uk/novostroyki-kiev-elit-klassa",
  "/uk/novostroyki-kiev-komfort-klassa",
  "/uk/novostroyki-kvartiry",
  "/uk/novostroyki-kiev-kvartiry",
  "/uk/novostroyki-rassrochka",
  "/uk/novostroyki-kiev-rassrochka",
  "/uk/novostroyki-kiev-vozle-metro",
  "/uk/novostroyki-kiev-s-remontom",
  "/uk/novostroyki-s-remontom",
  "/uk/novostroyki-kvartiry-s-remontom",
  "/uk/novostroyki-kiev-kvartiry-s-remontom",
  "/uk/novostroyki-brovary",
  "/uk/novostroyki-brovary-vozle-metro-s-remontom",
  "/uk/novostroyki-kiyevskaya-oblast-taunkhausy",
  "/uk/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa",
  "/uk/novostroyki-kiyevskaya-oblast-kottedzhi",
  "/uk/novostroyki-kiev-rayon-goloseevskii-taunkhausy",
  "/uk/novostroyki-kiev-rayon-goloseevskii-kottedzhi",
  "/uk/novostroyki-kiev-rayon-goloseevskii-kvartiry",
  "/uk/novostroyki-kiev-ulitsa-boiko-kvartiry",
  "/uk/novostroyki-kiev-metro-nivki-kvartiry"
];

// Список слів виключень для парсінга міст
const arrOfExceptionsCity = [
  "rayon",
  "metro",
  "levyy-bereg",
  "pravyy-bereg",
  "vozle-metro",
  "ulitsa",
  "sdannyye",
  "stroyashchiyesya",
  "kvartiry",
  "kottedzhi",
  "taunkhausy",
  "pomeshcheniya",
  "ekonom-klassa",
  "standart",
  "biznes-klassa",
  "elit-klassa",
  "dachnyy",
  "komfort-klassa",
  "premium",
  "odnokomnatnyye",
  "dvukhkomnatnyye",
  "trekhkomnatnyye",
  "chetyrekhkomnatnyye",
  "rassrochka",
  "s-remontom"
];

const exceptionCityList = arrOfExceptionsCity.join("|");

const exceptionCityRegEx = "(?!" + exceptionCityList + "|-)";

// Список слів виключень для парсінга назв районів
const arrOfExceptionsDistrict = [
  "metro",
  "levyy-bereg",
  "pravyy-bereg",
  "vozle-metro",
  "ulitsa",
  "sdannyye",
  "stroyashchiyesya",
  "kvartiry",
  "kottedzhi",
  "taunkhausy",
  "pomeshcheniya",
  "ekonom-klassa",
  "standart",
  "biznes-klassa",
  "elit-klassa",
  "dachnyy",
  "komfort-klassa",
  "premium",
  "odnokomnatnyye",
  "dvukhkomnatnyye",
  "trekhkomnatnyye",
  "chetyrekhkomnatnyye",
  "rassrochka",
  "s-remontom"
];

const exceptionDistrictList = arrOfExceptionsDistrict.join("|");

const exceptionDistrictRegEx = "(?!" + exceptionDistrictList + "|-)";

// Список слів виключень для парсінга станцій метро
const arrOfExceptionsMetroStation = [
  "rayon",
  "levyy-bereg",
  "pravyy-bereg",
  "vozle-metro",
  "ulitsa",
  "sdannyye",
  "stroyashchiyesya",
  "kvartiry",
  "kottedzhi",
  "taunkhausy",
  "pomeshcheniya",
  "ekonom-klassa",
  "standart",
  "biznes-klassa",
  "elit-klassa",
  "dachnyy",
  "komfort-klassa",
  "premium",
  "odnokomnatnyye",
  "dvukhkomnatnyye",
  "trekhkomnatnyye",
  "chetyrekhkomnatnyye",
  "rassrochka",
  "s-remontom"
];

const exceptionMetroStationList = arrOfExceptionsMetroStation.join("|");

const exceptionMetroStationRegEx = "(?!" + exceptionMetroStationList + "|-)";

// Список слів виключень для парсінга назв вулиць
const arrOfExceptionsStreet = [
  "rayon",
  "metro",
  "levyy-bereg",
  "pravyy-bereg",
  "vozle-metro",
  "sdannyye",
  "stroyashchiyesya",
  "kvartiry",
  "kottedzhi",
  "taunkhausy",
  "pomeshcheniya",
  "ekonom-klassa",
  "standart",
  "biznes-klassa",
  "elit-klassa",
  "dachnyy",
  "komfort-klassa",
  "premium",
  "odnokomnatnyye",
  "dvukhkomnatnyye",
  "trekhkomnatnyye",
  "chetyrekhkomnatnyye",
  "rassrochka",
  "s-remontom"
];

const exceptionStreetList = arrOfExceptionsStreet.join("|");

const exceptionStreetRegEx = "(?!" + exceptionStreetList + "|-)";

////////////////////////////////////////////////////////////////////

// Group 1
const lang = "/(ru|uk)/novostroyki";
// Group 2
const area =
  "(?:(?:-?)(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)(?:-oblast))?";
// Group 3
const city =
  "(?:(?:-?)(" +
  exceptionCityRegEx +
  "[a-z]+-?" +
  exceptionCityRegEx +
  "[a-z]+)?)?";
// Group 4
const district =
  "(?:(?:-rayon-)(" +
  exceptionDistrictRegEx +
  "[a-z]+-?" +
  exceptionDistrictRegEx +
  "[a-z]+)?)?";
// Group 5
const metroStation =
  "(?:(?:-metro-)(" +
  exceptionMetroStationRegEx +
  "[a-z]+-?" +
  exceptionMetroStationRegEx +
  "[a-z]+)?)?";
// Group 6
const coast = "(?:(?:-?)(levyy-bereg|pravyy-bereg))?";
// Group 7
const metroPosition = "(?:(?:-?)(vozle-metro))?";
// Group 8
const street =
  "(?:(?:-ulitsa-)(" +
  exceptionStreetRegEx +
  "[a-z]+-?" +
  exceptionStreetRegEx +
  "[a-z]+)?)?";
// Group 9
const houseReady = "(?:(?:-?)(sdannyye))?";
// Group 10
const houseInProcess = "(?:(?:-?)(stroyashchiyesya))?";
// Group 11
const houseClass =
  "(?:(?:-?)(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?";
// Group 12
const houseType = "(?:(?:-?)(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?";
// Group 13
const paymentMethod = "(?:(?:-?)(rassrochka))?";
// Group 14
const repairs = "(?:(?:-?)(s-remontom))?";
// Group 15
const rooms =
  "(?:(?:-?)(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?";

let totalRegExpString =
  lang +
  area +
  city +
  district +
  metroStation +
  coast +
  metroPosition +
  street +
  houseReady +
  houseInProcess +
  houseClass +
  houseType +
  paymentMethod +
  repairs +
  rooms;

const finalRegExp = new RegExp(totalRegExpString);

console.log(finalRegExp);

for (var i = 0; i < arrTestUrls.length; i++) {
  console.log(finalRegExp.exec(arrTestUrls[i]));
}
