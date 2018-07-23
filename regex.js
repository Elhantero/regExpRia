// Group 1
const lang = '\/(ru|uk)\/novostroyki';
// Group 2
const area = '(?:(?:-)(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)(?:-oblast))?';
// Group 3   
// Поки що залишаю цей костиль, бо виявилось, що швидше витянути всі міста з сайту dom.ria.com і перевести в трансліт,чим придумати для них // регулярку. Ніби все працює,просто трохи регулярка довга.
const city = '(?:(?:-)(bar|bershad|vinnica|gajsin|gnivan|zhmerinka|ilincy|kazatin|kalinovka|kryzhopol|ladyzhin|lipovec|litin|mogilev-podolskij|murovanye-kurilovcy|nemirov|oratov|peschanka|pogrebishhe|teplik|tomashpol|trostyanec|tulchin|tyvrov|xmelnik|chernovcy|chechelnik|shargorod|yampolvladimir-volynskij|goroxov|ivanichi|kamen-kashirskij|kivercy|kovel|lokachi|luck|lyubeshov|lyuboml|manevichi|novovolynsk|ratno|rozhishhe|staraya-vyzhevka|turijsk|shackapostolovo|vasilkovka|verxnedneprovsk|volnogorsk|dneprodzerzhinsk|dnepropetrovsk|zheltye-vody|krivoj-rog|krinichki|magdalinovka|marganec|mezhevaya|nikopol|novomoskovsk|ordzhonikidze|pavlograd|pershotravensk|petrikovka|petropavlovka|pokrovskoe|pyatixatki|sinelnikovo|solenoe|sofievka|ternovka|tomakovka|carichanka|shirokoe|yurevkaavdeevka|aleksandrovka|amvrosievka|artemovsk|velikaya-novoselka|volnovaxa|volodarskoe|gorlovka|debalcevo|dzerzhinsk|dimitrov|dobropole|dokuchaevsk|doneck|druzhkovka|enakievo|zhdanovka|kirovskoe|konstantinovka|kramatorsk|krasnoarmejsk|krasnyj-liman|makeevka|mangush|mariupol|marinka|novoazovsk|novogrodovka|selidovo|slavyansk|snezhnoe|starobeshevo|telmanovo|torez|ugledar|xarcyzsk|shaxtarsk|yasinovataya|andrushevka|baranovka|berdichev|brusilov|volodarsk-volynskij|emilchino|zhitomir|korosten|korostyshev|luginy|lyubar|malin|narodichi|novograd-volynskij|ovruch|olevsk|popelnya|radomyshl|romanov|ruzhin|chervonoarmejsk|chernyaxov|chudnovberegovo|velikij-bereznyj|vinogradov|volovec|dragobrat|irshava|mezhgore|mukachevo|perechin|raxov|svalyava|tyachev|uzhgorod|xust|chopakimovka|berdyansk|vasilevka|velikaya-belozerka|veseloe|volnyansk|gulyajpole|zaporozhe|kamenka-dneprovskaya|kujbyshevo|melitopol|mixajlovka|novonikolaevka|orexov|pologi|priazovskoe|primorsk|rozovka|tokmak|chernigovka|energodarbogorodchany|bolexov|bukovel|burshtyn|verxovina|galich|gorodenka|dolina|ivano-frankovsk|kalush|kolomyya|kosov|nadvornaya|rogatin|rozhnyatov|snyatin|tlumach|tysmenica|yaremcha|baryshevka|belaya-cerkov|berezan|boguslav|borispol|borodyanka|brovary|bucha|vasilkov|volodarka|vyshgorod|zgurovka|ivankov|irpen|kagarlyk|kiev|kievo-svyatoshinskij|makarov|mironovka|obuxov|pereyaslav-xmelnickij|polesskoe|rakitnoe|rzhishhev|skvira|slavutich|stavishhe|tarashha|tetiev|fastov|yagotin|aleksandriya|aleksandrovka|bobrinec|gajvoron|golovanevsk|dobrovelichkovka|dolinskaya|znamenka|kirovograd|kompaneevka|malaya-viska|novgorodka|novoarxangelsk|novomirgorod|novoukrainka|olshanka|onufrievka|petrovo|svetlovodsk|ulyanovka|ustinovkaalchevsk|antracit|belovodsk|belokurakino|bryanka|kirovsk|krasnodon|krasnyj-luch|kremennaya|lisichansk|lugansk|lutugino|markovka|melovoe|novoajdar|novopskov|pervomajsk|perevalsk|popasnaya|rovenki|rubezhnoe|svatovo|sverdlovsk|severodoneck|slavyanoserbsk|stanichno-luganskoe|starobelsk|staxanov|troickoe|borislav|brody|busk|gorodok|drogobych|dublyany|zhidachov|zholkva|zolochev|kamenka-bugskaya|lvov|morshin|mostiska|nikolaev|novij-rozdol|peremyshlyany|pustomyty|radexov|sambor|skole|sokal|sosnovka|staryj-sambor|stryj|truskavec|turka|chervonograd|yavorov|arbuzinka|bashtanka|berezanka|bereznegovatoe|bratskoe|veselinovo|voznesensk|vradievka|domanevka|elanec|zhovtnevyj-rajon|kazanka|koblevo|krivoe-ozero|nikolaev|novaya-odessa|novyj-bug|ochakov|pervomajsk|snigirevka|yuzhnoukrainskananev|arciz|balta|belgorod-dnestrovskij|belyaevka|berezovka|bolgrad|velikaya-mixajlovka|zatoka|ivanovka|izmail|ilichevsk|kiliya|kodyma|kominternovskoe|kotovsk|krasnye-okny|lyubashevka|nikolaevka|ovidiopol|odessa|razdelnaya|reni|savran|sarata|tarutino|tatarbunari|teplodar|frunzovka|shiryaevo|yuzhnyjvelikaya-bagachka|gadyach|globino|grebenka|dikanka|zenkov|karlovka|kobelyaki|kozelshhina|komsomolsk|kotelva|kremenchug|loxvica|lubny|mashevka|mirgorod|novye-sanzhary|orzhica|piryatin|poltava|reshetilovka|semenovka|xorol|chernuxi|chutovo|shishakialupka|alushta|baxchisaraj|belogorsk|gurzuf|dzhankoj|evpatoriya|kerch|kirovskoe|koktebel|krasnogvardejskoe|krasnoperekopsk|lenino|misxor|nizhnegorskij|nikolaevka|pervomajskoe|razdolnoe|saki|sevastopol|simferopol|sovetskij|sudak|feodosiya|chernomorskoe|yalta|berezno|vladimirec|goshha|demidovka|dubno|dubrovica|zarechnoe|zdolbunov|korec|kostopol|kuznecovsk|mlynov|ostrog|radivilov|rakitnoe|rovno|sarny|axtyrka|belopole|buryn|velikaya-pisarevka|gluxov|konotop|krasnopole|krolevec|lebedin|lipovaya-dolina|nedrigajlov|putivl|romny|seredina-buda|sumy|trostyanec|shostka|yampol|berezhany|borshhev|buchach|gusyatin|zaleshhiki|zbarazh|zborov|kozova|kremenec|lanovcy|monastyriska|podvolochisk|podgajcy|terebovlya|ternopol|chertkov|shumskoe|balakleya|barvenkovo|bliznyuki|bogoduxov|borovaya|valki|velikij-burluk|volchansk|dvurechenskoe|dergachi|zachepilovka|zmiev|zolochev|izyum|kegichevka|kolomak|krasnograd|krasnokutsk|kupyansk|lozovaya|lyubotin|novaya-vodolaga|pervomajskij|pechenegi|saxnovshhina|xarkov|chuguev|shevchenkovo|belozerka|berislav|velikaya-aleksandrovka|velikaya-lepetixa|verxnij-rogachik|vysokopole|genichesk|golaya-pristan|gornostaevka|zheleznyj-port|ivanovka|kalanchak|kaxovka|nizhnie-serogozy|novaya-kaxovka|novovoroncovka|novotroickoe|skadovsk|xerson|cyurupinsk|chaplinka|belogore|vinkovcy|volochisk|gorodok|derazhnya|dunaevcy|izyaslav|kamenec-podolskij|krasilov|letichev|neteshin|novaya-ushica|polonnoe|slavuta|staraya-sinyava|starokonstantinov|teofipol|xmelnickij|chemerovcy|shepetovka|yarmolincy|vatutino|gorodishhe|drabov|zhashkov|zvenigorodka|zolotonosha|kamenka|kanev|katerinopol|korsun-shevchenkovskij|lysyanka|mankovka|monastyrishhe|smela|talnoe|uman|xristinovka|cherkassy|chernobaj|chigirin|shpola|baxmach|bobrovica|borzna|varva|gorodnya|ichnya|kozelec|korop|koryukovka|kulikovka|mena|nezhin|novgorod-severskij|nosovka|priluki|repki|semenovka|sosnica|srebnoe|talalaevka|chernigov|shhors|vizhnica|gerca|glubokaya|zastavna|kelmency|kicman|novodnestrovsk|novoselica|putila|sokiryany|storozhinec|xotin|chernovcy))?';
// Group 4
const district = '(?:(?:-rayon-)([a-z]+))?';
// Group 5
const metroStation = '(?:(?:-metro-)([a-z]+))?';
// Group 6
const coast = '(?:(?:-)(levyy-bereg|pravyy-bereg))?';
// Group 7
const metroPosition = '(?:(?:-)(vozle-metro))?';
// Group 8
const street = '(?:(?:-ulitsa-)([a-z]+))?';
// Group 9
const rooms = '(?:(?:-)(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?';
// Group 10
const houseReady = '(?:(?:-)(sdannyye))?';
// Group 11
const houseInProcess = '(?:(?:-)(stroyashchiyesya))?';
// Group 12
const houseClass = '(?:(?:-)(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?';
// Group 13
const houseType = '(?:(?:-)(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?';
// Group 14
const paymentMethod = '(?:(?:-)(rassrochka))?';
// Group 15
const repairs = '(?:(?:-)(s-remontom))?';

let totalRegExpString = lang + area + city + district + metroStation + coast + metroPosition + street + rooms + houseReady + houseInProcess + houseClass + houseType + paymentMethod + repairs;

totalRegExpString = /\/(ru|uk)\/novostroyki(?:(?:-)(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)(?:-oblast))?(?:(?:-)(bar|bershad|vinnica|gajsin|gnivan|zhmerinka|ilincy|kazatin|kalinovka|kryzhopol|ladyzhin|lipovec|litin|mogilev-podolskij|murovanye-kurilovcy|nemirov|oratov|peschanka|pogrebishhe|teplik|tomashpol|trostyanec|tulchin|tyvrov|xmelnik|chernovcy|chechelnik|shargorod|yampolvladimir-volynskij|goroxov|ivanichi|kamen-kashirskij|kivercy|kovel|lokachi|luck|lyubeshov|lyuboml|manevichi|novovolynsk|ratno|rozhishhe|staraya-vyzhevka|turijsk|shackapostolovo|vasilkovka|verxnedneprovsk|volnogorsk|dneprodzerzhinsk|dnepropetrovsk|zheltye-vody|krivoj-rog|krinichki|magdalinovka|marganec|mezhevaya|nikopol|novomoskovsk|ordzhonikidze|pavlograd|pershotravensk|petrikovka|petropavlovka|pokrovskoe|pyatixatki|sinelnikovo|solenoe|sofievka|ternovka|tomakovka|carichanka|shirokoe|yurevkaavdeevka|aleksandrovka|amvrosievka|artemovsk|velikaya-novoselka|volnovaxa|volodarskoe|gorlovka|debalcevo|dzerzhinsk|dimitrov|dobropole|dokuchaevsk|doneck|druzhkovka|enakievo|zhdanovka|kirovskoe|konstantinovka|kramatorsk|krasnoarmejsk|krasnyj-liman|makeevka|mangush|mariupol|marinka|novoazovsk|novogrodovka|selidovo|slavyansk|snezhnoe|starobeshevo|telmanovo|torez|ugledar|xarcyzsk|shaxtarsk|yasinovataya|andrushevka|baranovka|berdichev|brusilov|volodarsk-volynskij|emilchino|zhitomir|korosten|korostyshev|luginy|lyubar|malin|narodichi|novograd-volynskij|ovruch|olevsk|popelnya|radomyshl|romanov|ruzhin|chervonoarmejsk|chernyaxov|chudnovberegovo|velikij-bereznyj|vinogradov|volovec|dragobrat|irshava|mezhgore|mukachevo|perechin|raxov|svalyava|tyachev|uzhgorod|xust|chopakimovka|berdyansk|vasilevka|velikaya-belozerka|veseloe|volnyansk|gulyajpole|zaporozhe|kamenka-dneprovskaya|kujbyshevo|melitopol|mixajlovka|novonikolaevka|orexov|pologi|priazovskoe|primorsk|rozovka|tokmak|chernigovka|energodarbogorodchany|bolexov|bukovel|burshtyn|verxovina|galich|gorodenka|dolina|ivano-frankovsk|kalush|kolomyya|kosov|nadvornaya|rogatin|rozhnyatov|snyatin|tlumach|tysmenica|yaremcha|baryshevka|belaya-cerkov|berezan|boguslav|borispol|borodyanka|brovary|bucha|vasilkov|volodarka|vyshgorod|zgurovka|ivankov|irpen|kagarlyk|kiev|kievo-svyatoshinskij|makarov|mironovka|obuxov|pereyaslav-xmelnickij|polesskoe|rakitnoe|rzhishhev|skvira|slavutich|stavishhe|tarashha|tetiev|fastov|yagotin|aleksandriya|aleksandrovka|bobrinec|gajvoron|golovanevsk|dobrovelichkovka|dolinskaya|znamenka|kirovograd|kompaneevka|malaya-viska|novgorodka|novoarxangelsk|novomirgorod|novoukrainka|olshanka|onufrievka|petrovo|svetlovodsk|ulyanovka|ustinovkaalchevsk|antracit|belovodsk|belokurakino|bryanka|kirovsk|krasnodon|krasnyj-luch|kremennaya|lisichansk|lugansk|lutugino|markovka|melovoe|novoajdar|novopskov|pervomajsk|perevalsk|popasnaya|rovenki|rubezhnoe|svatovo|sverdlovsk|severodoneck|slavyanoserbsk|stanichno-luganskoe|starobelsk|staxanov|troickoe|borislav|brody|busk|gorodok|drogobych|dublyany|zhidachov|zholkva|zolochev|kamenka-bugskaya|lvov|morshin|mostiska|nikolaev|novij-rozdol|peremyshlyany|pustomyty|radexov|sambor|skole|sokal|sosnovka|staryj-sambor|stryj|truskavec|turka|chervonograd|yavorov|arbuzinka|bashtanka|berezanka|bereznegovatoe|bratskoe|veselinovo|voznesensk|vradievka|domanevka|elanec|zhovtnevyj-rajon|kazanka|koblevo|krivoe-ozero|nikolaev|novaya-odessa|novyj-bug|ochakov|pervomajsk|snigirevka|yuzhnoukrainskananev|arciz|balta|belgorod-dnestrovskij|belyaevka|berezovka|bolgrad|velikaya-mixajlovka|zatoka|ivanovka|izmail|ilichevsk|kiliya|kodyma|kominternovskoe|kotovsk|krasnye-okny|lyubashevka|nikolaevka|ovidiopol|odessa|razdelnaya|reni|savran|sarata|tarutino|tatarbunari|teplodar|frunzovka|shiryaevo|yuzhnyjvelikaya-bagachka|gadyach|globino|grebenka|dikanka|zenkov|karlovka|kobelyaki|kozelshhina|komsomolsk|kotelva|kremenchug|loxvica|lubny|mashevka|mirgorod|novye-sanzhary|orzhica|piryatin|poltava|reshetilovka|semenovka|xorol|chernuxi|chutovo|shishakialupka|alushta|baxchisaraj|belogorsk|gurzuf|dzhankoj|evpatoriya|kerch|kirovskoe|koktebel|krasnogvardejskoe|krasnoperekopsk|lenino|misxor|nizhnegorskij|nikolaevka|pervomajskoe|razdolnoe|saki|sevastopol|simferopol|sovetskij|sudak|feodosiya|chernomorskoe|yalta|berezno|vladimirec|goshha|demidovka|dubno|dubrovica|zarechnoe|zdolbunov|korec|kostopol|kuznecovsk|mlynov|ostrog|radivilov|rakitnoe|rovno|sarny|axtyrka|belopole|buryn|velikaya-pisarevka|gluxov|konotop|krasnopole|krolevec|lebedin|lipovaya-dolina|nedrigajlov|putivl|romny|seredina-buda|sumy|trostyanec|shostka|yampol|berezhany|borshhev|buchach|gusyatin|zaleshhiki|zbarazh|zborov|kozova|kremenec|lanovcy|monastyriska|podvolochisk|podgajcy|terebovlya|ternopol|chertkov|shumskoe|balakleya|barvenkovo|bliznyuki|bogoduxov|borovaya|valki|velikij-burluk|volchansk|dvurechenskoe|dergachi|zachepilovka|zmiev|zolochev|izyum|kegichevka|kolomak|krasnograd|krasnokutsk|kupyansk|lozovaya|lyubotin|novaya-vodolaga|pervomajskij|pechenegi|saxnovshhina|xarkov|chuguev|shevchenkovo|belozerka|berislav|velikaya-aleksandrovka|velikaya-lepetixa|verxnij-rogachik|vysokopole|genichesk|golaya-pristan|gornostaevka|zheleznyj-port|ivanovka|kalanchak|kaxovka|nizhnie-serogozy|novaya-kaxovka|novovoroncovka|novotroickoe|skadovsk|xerson|cyurupinsk|chaplinka|belogore|vinkovcy|volochisk|gorodok|derazhnya|dunaevcy|izyaslav|kamenec-podolskij|krasilov|letichev|neteshin|novaya-ushica|polonnoe|slavuta|staraya-sinyava|starokonstantinov|teofipol|xmelnickij|chemerovcy|shepetovka|yarmolincy|vatutino|gorodishhe|drabov|zhashkov|zvenigorodka|zolotonosha|kamenka|kanev|katerinopol|korsun-shevchenkovskij|lysyanka|mankovka|monastyrishhe|smela|talnoe|uman|xristinovka|cherkassy|chernobaj|chigirin|shpola|baxmach|bobrovica|borzna|varva|gorodnya|ichnya|kozelec|korop|koryukovka|kulikovka|mena|nezhin|novgorod-severskij|nosovka|priluki|repki|semenovka|sosnica|srebnoe|talalaevka|chernigov|shhors|vizhnica|gerca|glubokaya|zastavna|kelmency|kicman|novodnestrovsk|novoselica|putila|sokiryany|storozhinec|xotin|chernovcy))?(?:(?:-rayon-)([a-z]+))?(?:(?:-metro-)([a-z]+))?(?:(?:-)(levyy-bereg|pravyy-bereg))?(?:(?:-)(vozle-metro))?(?:(?:-ulitsa-)([a-z]+))?(?:(?:-)(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?(?:(?:-)(sdannyye))?(?:(?:-)(stroyashchiyesya))?(?:(?:-)(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?(?:(?:-)(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?(?:(?:-)(rassrochka))?(?:(?:-)(s-remontom))?/;

/*
const finalRegExp = new RegExp(totalRegExpString);

console.log(finalRegExp);

for (var i = 0; i < arrTestUrls.length; i++) {
  console.log(finalRegExp.exec(arrTestUrls[i]));
}


const arrTestUrls = [
  '/ru/novostroyki-ekonom-klassa',
  '/ru/novostroyki-biznes-klassa',
  '/ru/novostroyki-elit-klassa',
  '/ru/novostroyki-komfort-klassa',
  '/ru/novostroyki-sdannyye',
  '/ru/novostroyki-stroyashchiyesya',
  '/ru/novostroyki-kiyevskaya-oblast',
  '/ru/novostroyki-kiyevskaya-oblast-kiev',
  '/ru/novostroyki-kiyevskaya-oblast-ekonom-klassa',
  '/ru/novostroyki-kiyevskaya-oblast-biznes-klassa',
  '/ru/novostroyki-kiyevskaya-oblast-elit-klassa',
  '/ru/novostroyki-kiyevskaya-oblast-komfort-klassa',
  '/ru/novostroyki-kiyevskaya-oblast-sdannyye',
  '/ru/novostroyki-vinnitskaya-oblast-stroyashchiyesya',
  '/ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii',
  '/ru/novostroyki-kiyevskaya-oblast-kiev-metro-nivki',
  '/ru/novostroyki-kiev',
  '/ru/novostroyki-taunkhausy',
  '/ru/novostroyki-taunkhausy-ekonom-klassa',
  '/ru/novostroyki-kiev-taunkhausy',
  '/ru/novostroyki-kiev-kottedzhi',
  '/ru/novostroyki-kiev-pomeshcheniya',
  '/ru/novostroyki-kiev-pravyy-bereg',
  '/ru/novostroyki-kiev-levyy-bereg',
  '/ru/novostroyki-kiev-rayon-goloseevskii',
  '/ru/novostroyki-kiev-metro-nivki',
  '/ru/novostroyki-kiev-ulitsa-pushkina',
  '/ru/novostroyki-kiev-ulitsa-boiko',
  '/ru/novostroyki-kiev-odnokomnatnyye',
  '/ru/novostroyki-kvartiry-odnokomnatnyye',
  '/ru/novostroyki-kvartiry-dvukhkomnatnyye',
  '/ru/novostroyki-kvartiry-trekhkomnatnyye',
  '/ru/novostroyki-kvartiry-chetyrekhkomnatnyye',
  '/ru/novostroyki-kiev-kvartiry-odnokomnatnyye',
  '/ru/novostroyki-kiev-kvartiry-dvukhkomnatnyye',
  '/ru/novostroyki-kiev-kvartiry-trekhkomnatnyye',
  '/ru/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye',
  '/ru/novostroyki-odnokomnatnyye',
  '/ru/novostroyki-sdannyye-kvartiry',
  '/ru/novostroyki-kiev-sdannyye',
  '/ru/novostroyki-kiev-sdannyye-kvartiry',
  '/ru/novostroyki-kiev-stroyashchiyesya',
  '/ru/novostroyki-kiev-ekonom-klassa',
  '/ru/novostroyki-kiev-biznes-klassa',
  '/ru/novostroyki-kiev-elit-klassa',
  '/ru/novostroyki-kiev-komfort-klassa',
  '/ru/novostroyki-kvartiry',
  '/ru/novostroyki-kiev-kvartiry',
  '/ru/novostroyki-rassrochka',
  '/ru/novostroyki-kiev-rassrochka',
  '/ru/novostroyki-kiev-vozle-metro',
  '/ru/novostroyki-kiev-s-remontom',
  '/ru/novostroyki-s-remontom',
  '/ru/novostroyki-kvartiry-s-remontom',
  '/ru/novostroyki-kiev-kvartiry-s-remontom',
  '/ru/novostroyki-brovary',
  '/ru/novostroyki-brovary-vozle-metro-s-remontom',
  '/ru/novostroyki-kiyevskaya-oblast-taunkhausy',
  '/ru/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa',
  '/ru/novostroyki-kiyevskaya-oblast-kottedzhi',
  '/ru/novostroyki-kiev-rayon-goloseevskii-taunkhausy',
  '/ru/novostroyki-kiev-rayon-goloseevskii-kottedzhi',
  '/ru/novostroyki-kiev-rayon-goloseevskii-kvartiry',
  '/ru/novostroyki-kiev-ulitsa-boiko-kvartiry',
  '/ru/novostroyki-kiev-metro-nivki-kvartiry',
  '/uk/novostroyki-ekonom-klassa',
  '/uk/novostroyki-biznes-klassa',
  '/uk/novostroyki-elit-klassa',
  '/uk/novostroyki-komfort-klassa',
  '/uk/novostroyki-sdannyye',
  '/uk/novostroyki-stroyashchiyesya',
  '/uk/novostroyki-kiyevskaya-oblast',
  '/uk/novostroyki-kiyevskaya-oblast-kiev',
  '/uk/novostroyki-kiyevskaya-oblast-ekonom-klassa',
  '/uk/novostroyki-kiyevskaya-oblast-biznes-klassa',
  '/uk/novostroyki-kiyevskaya-oblast-elit-klassa',
  '/uk/novostroyki-kiyevskaya-oblast-komfort-klassa',
  '/uk/novostroyki-kiyevskaya-oblast-sdannyye',
  '/uk/novostroyki-kiyevskaya-oblast-stroyashchiyesya',
  '/uk/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii',
  '/uk/novostroyki-kiyevskaya-oblast-kiev-metro-nivki',
  '/uk/novostroyki-kiev',
  '/uk/novostroyki-taunkhausy',
  '/uk/novostroyki-taunkhausy-ekonom-klassa',
  '/uk/novostroyki-kiev-taunkhausy',
  '/uk/novostroyki-kiev-kottedzhi',
  '/uk/novostroyki-kiev-pomeshcheniya',
  '/uk/novostroyki-kiev-pravyy-bereg',
  '/uk/novostroyki-kiev-levyy-bereg',
  '/uk/novostroyki-kiev-rayon-goloseevskii',
  '/uk/novostroyki-kiev-metro-nivki',
  '/uk/novostroyki-kiev-ulitsa-pushkina',
  '/uk/novostroyki-kiev-ulitsa-boiko',
  '/uk/novostroyki-kiev-odnokomnatnyye',
  '/uk/novostroyki-kvartiry-odnokomnatnyye',
  '/uk/novostroyki-kvartiry-dvukhkomnatnyye',
  '/uk/novostroyki-kvartiry-trekhkomnatnyye',
  '/uk/novostroyki-kvartiry-chetyrekhkomnatnyye',
  '/uk/novostroyki-kiev-kvartiry-odnokomnatnyye',
  '/uk/novostroyki-kiev-kvartiry-dvukhkomnatnyye',
  '/uk/novostroyki-kiev-kvartiry-trekhkomnatnyye',
  '/uk/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye',
  '/uk/novostroyki-odnokomnatnyye',
  '/uk/novostroyki-sdannyye-kvartiry',
  '/uk/novostroyki-kiev-sdannyye',
  '/uk/novostroyki-kiev-sdannyye-kvartiry',
  '/uk/novostroyki-kiev-stroyashchiyesya',
  '/uk/novostroyki-kiev-ekonom-klassa',
  '/uk/novostroyki-kiev-biznes-klassa',
  '/uk/novostroyki-kiev-elit-klassa',
  '/uk/novostroyki-kiev-komfort-klassa',
  '/uk/novostroyki-kvartiry',
  '/uk/novostroyki-kiev-kvartiry',
  '/uk/novostroyki-rassrochka',
  '/uk/novostroyki-kiev-rassrochka',
  '/uk/novostroyki-kiev-vozle-metro',
  '/uk/novostroyki-kiev-s-remontom',
  '/uk/novostroyki-s-remontom',
  '/uk/novostroyki-kvartiry-s-remontom',
  '/uk/novostroyki-kiev-kvartiry-s-remontom',
  '/uk/novostroyki-brovary',
  '/uk/novostroyki-brovary-vozle-metro-s-remontom',
  '/uk/novostroyki-kiyevskaya-oblast-taunkhausy',
  '/uk/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa',
  '/uk/novostroyki-kiyevskaya-oblast-kottedzhi',
  '/uk/novostroyki-kiev-rayon-goloseevskii-taunkhausy',
  '/uk/novostroyki-kiev-rayon-goloseevskii-kottedzhi',
  '/uk/novostroyki-kiev-rayon-goloseevskii-kvartiry',
  '/uk/novostroyki-kiev-ulitsa-boiko-kvartiry',
  '/uk/novostroyki-kiev-metro-nivki-kvartiry'
]
*/
