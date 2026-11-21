'use strict';

const translations = {
  ru: {navModels:'Модели авто',},
  kz: {navModels:'Автомобиль үлгілері',
    modelsEyebrow:'ЖИНАҚТАМА БОЙЫНША ТАҢДАУ',
    modelsTitle:'Танымал модельдердің<br>ерекшеліктерін білеміз.',
    modelsLead:'Камералар, датчиктер, жылытқыш және басқа опциялар ескеріледі. Қолжетімділігін алдын ала анықтаймыз.',
    model1Desc:'Жылыту, жаңбыр датчигі, ADAS жүйесі бар нұсқалар.',
    model2Desc:'Әйнек түрін және жабдықталуын көлікке қарай нақтылаймыз.',
    model3Desc:'Алдыңғы, бүйір және артқы әйнектердің бар-жоғын тексереміз.',
    model4Desc:'Акустикалық әйнектер мен қосымша опциялары бар нұсқалар.',
    model5Desc:'HUD және жүргізушіге көмек камералары бар әйнектер — VIN бойынша нақтылаймыз.',
    model6Desc:'Датчиктердің үйлесімділігі мен калибрлеу қажеттілігін тексереміз.',
    modelCta:'Әйнек таңдау',
    skip:'Негізгі мазмұнға өту',topline:'Алматыдағы автокөлік әйнектері · Күн сайын 09:00–20:00',navServices:'Қызметтер',navWhy:'Артықшылықтар',navSteps:'Қалай жұмыс істейміз',navFaq:'Сұрақтар',navContacts:'Байланыс',quoteBtn:'Бағасын білу',heroEyebrow:'АЛМАТЫДАҒЫ АВТОӘЙНЕК СЕРВИСІ',heroTitle:'Жолды қайтадан<br><em>анық көріңіз.</em>',heroLead:'Көлігіңіздің маркасы мен жинақтамасына сай әйнекті таңдаймыз, жөндейміз немесе ауыстырамыз. Бағасын алдын ала келісеміз.',heroCta:'Құнын есептеу',allServices:'Қызметтерді көру',heroNote:'Әйнек қоймада болса, сол күні ауыстыру мүмкін',tagGlass:'Алдыңғы және бүйір әйнектер',tagRepair:'Сынық жерлерді жөндеу',tagAdas:'ADAS калибрлеу',floatLabel:'КҮРДЕЛІ ЖИНАҚТАМА МА?',floatTitle:'Көлігіңізге сәйкес әйнек таңдаймыз.',floatNote:'Датчиктер · Жылыту · Камералар',trust1:'Жазбаша кепілдік',trust1Sub:'Шарттары алдын ала айтылады',trust2:'Жинақтамаға сай таңдау',trust2Sub:'Датчиктер мен опцияларды ескереміз',trust3:'Түпнұсқа және балама',trust3Sub:'Қолжетімді нұсқаларды таңдаймыз',trust4:'WhatsApp арқылы жазылу',trust4Sub:'Ұзақ сауалнамасыз',servicesEyebrow:'БІЗДІҢ ҚЫЗМЕТТЕР',servicesTitle:'Мәселеңізді шешетін<br>қызметтер.',servicesLead:'Әр қызметтің суреті, қысқаша түсіндірмесі және шамамен бағасы бар.',filterAll:'Барлық қызметтер',filterRepair:'Жөндеу',filterReplacement:'Әйнек ауыстыру',filterCare:'Күтім және қорғау',catReplacement:'АУЫСТЫРУ',catRepair:'ЖӨНДЕУ',catCare:'ҚОРҒАУ',byRequest:'СҰРАНЫС БОЙЫНША',popular:'ТАНЫМАЛ',assessFirst:'ТЕКСЕРГЕН СОҢ',filmSelection:'ПЛЁНКА ТАҢДАУ',hydro:'СУ ТЕБУ ӘСЕРІ',individually:'ЖЕКЕ ЕСЕП',service1Title:'Автоәйнекті ауыстыру',service1Desc:'Алдыңғы, бүйір және артқы әйнектер. Датчик, камера және жылытуды ескереміз.',service2Title:'Сынық жерді жөндеу',service2Desc:'Арнайы құраммен жергілікті жөндеу. Жөндеу мүмкіндігін қарап анықтаймыз.',service3Title:'Жарықшақты жөндеу',service3Desc:'Жарықшақтың ұзындығын және орналасуын қарап, жөндеуге болатынын айтамыз.',service4Title:'Әйнекті қараңғылау',service4Desc:'Плёнканы мұқият жабыстыру. Баға әйнектер санына байланысты.',service5Title:'«Антижаңбыр» жабындысы',service5Desc:'Жаңбыр кезінде көрінуді жақсартуға арналған су тебетін жабын.',service6Title:'Әйнекке таңба салу',service6Desc:'Автоәйнекке белгі салу. Мүмкіндігі мен бағасын бөлек келісеміз.',priceLabel:'Бағасы',priceCustom:'Есеп бойынша',priceChip:'5 000 ₸ бастап',priceAssessment:'Тексерген соң',priceTint:'10 000 ₸ бастап',priceRain:'5 000 ₸ бастап',priceMark:'7 000 ₸ бастап',priceDisclaimer:'Бағалар шамамен көрсетілген. Нақты баға көлікке және әйнектің күйіне байланысты, оны менеджер жұмыс басталғанға дейін растайды. Суреттер — иллюстрациялар.',bannerEyebrow:'ҚАНДАЙ ӘЙНЕК КЕРЕК ЕКЕНІН БІЛМЕЙСІЗ БЕ?',bannerTitle:'Маркасы мен моделін көрсетіңіз.',bannerDesc:'Сәйкес нұсқа мен қоймадағы барын анықтаймыз.',bannerCta:'Әйнекті таңдау',advBadge:'Әр көлікке — сәйкес әйнек.',advEyebrow:'ЕГЕР ҰСАҚ-ТҮЙЕК МАҢЫЗДЫ БОЛСА',advTitle:'Жай ғана<br>әйнек ауыстыру емес.<br><em>Дұрыс таңдау.</em>',advLead:'Автоәйнектер жинақтамаға қарай өзгереді. Тапсырыс алдында көлік деректерін нақтылаймыз.',adv1:'Опцияларды ескереміз',adv1Sub:'Жаңбыр датчигі, жылыту, камералар және HUD.',adv2:'Нұсқаларды түсіндіреміз',adv2Sub:'Түпнұсқа әйнек немесе сертификатталған балама.',adv3:'Шарттарды келісеміз',adv3Sub:'Жұмыстан бұрын бағаны, мерзімді және кепілдікті нақтылаймыз.',brandsTitle:'Танымал маркалармен жұмыс істейміз',brandsCaption:'Басқа маркалар да бар',stepsEyebrow:'ҚАРАПАЙЫМ ӘРІ ТҮСІНІКТІ',stepsTitle:'Сұрақтан<br>дайын әйнекке дейін.',stepsLead:'Өтінімнен бастап қызмет алуға дейінгі қысқа жол.',step1:'Көлігіңізді сипаттаңыз',step1Sub:'Маркасын, моделін және қажет қызметті WhatsApp арқылы жіберіңіз.',step2:'Бағаны алыңыз',step2Sub:'Жинақтама, қоймадағы бар-жоғы және бағасы нақтыланады.',step3:'Сервиске келіңіз',step3Sub:'Келісілген жұмыстарды орындап, кепілдік шарттарын рәсімдейміз.',faqEyebrow:'ЖИІ ҚОЙЫЛАТЫН СҰРАҚТАР',faqTitle:'Алдын ала<br>нені білу керек?',faqLead:'Жауап таппадыңыз ба? Бізге жазыңыз, көмектесеміз.',askQuestion:'WhatsApp арқылы сұрау',faq1Q:'Әйнекті сол күні ауыстыруға бола ма?',faq1A:'Иә, егер сәйкес әйнек қоймада болса және бос уақыт болса. Мерзімді менеджер растайды.',faq2Q:'Сынық жерді жөндеу қанша тұрады?',faq2A:'Шамамен бағасы — 5 000 ₸ бастап. Жөндеу мүмкіндігі мен нақты бағаны маман тексерген соң айтады.',faq3Q:'Кез келген жарықшақты жөндеуге бола ма?',faq3A:'Жоқ. Бұл зақымның көлеміне, орнына және түріне байланысты. Кейде әйнекті ауыстырған қауіпсіз.',faq4Q:'Камерасы немесе датчигі бар әйнек таңдайсыздар ма?',faq4A:'Иә, камера, датчик, жылыту сияқты опцияларды ескереміз. Калибрлеу қажет пе, бөлек нақтылаймыз.',faq5Q:'Нақты бағаны қалай білуге болады?',faq5A:'Көліктің маркасын, моделін, жылын және қызмет түрін жіберіңіз. Менеджер бағаны алдын ала нақтылайды.',contactEyebrow:'БІЗДІҢ СЕРВИС',contactTitle:'Сұрау оңай.<br><em>Жазылу ыңғайлы.</em>',contactLead:'Әйнек таңдау немесе жөндеу бағасын білу үшін жазыңыз не қоңырау шалыңыз.',contactCta:'Бағасын сұрау',callBtn:'Қоңырау шалу',contactCard:'STEKLOPROFF БАЙЛАНЫСЫ',addressLabel:'МЕКЕНЖАЙ',address:'Алматы, Жарылғасова көшесі, 115',hoursLabel:'ЖҰМЫС УАҚЫТЫ',hours:'Күн сайын, 09:00–20:00',phoneLabel:'ТЕЛЕФОН',footerLine:'Автоәйнек, жөндеу және орнату · Алматы',backTop:'Жоғары ↑',demo:'Сайттың демонстрациялық жаңартылған нұсқасы. Суреттер генерацияланған және нақты орындалған жұмысты көрсетпейді.',modalEyebrow:'ЖЫЛДАМ СҰРАНЫС',modalTitle:'Бағасын білу',modalLead:'Өрістерді толтырыңыз — WhatsApp үшін хабарлама дайындаймыз.',labelBrand:'Көлік маркасы *',labelModel:'Көлік моделі *',labelYear:'Шығарылған жылы',labelService:'Қажет қызмет *',chooseService:'Қызметті таңдаңыз',labelComment:'Түсініктеме (міндетті емес)',commentPlaceholder:'Мысалы, жолаушы жағында 10 см жарықшақ',sendWhatsapp:'WhatsApp-қа өту',modalHint:'WhatsApp ішінде дайын мәтін ашылады. Сайт деректерді сақтамайды.'
  },
  en: {navModels:'Car models',
    modelsEyebrow:'MATCHED TO YOUR VEHICLE',
    modelsTitle:'Familiar with<br>popular car models.',
    modelsLead:'We check cameras, sensors, heating and other features when selecting glass. Stock is confirmed before booking.',
    model1Desc:'Heated glass, rain sensors and ADAS-equipped versions.',
    model2Desc:'We confirm glass options and vehicle specifications.',
    model3Desc:'Windscreens, side and rear glass — subject to stock.',
    model4Desc:'Acoustic glass and models with additional options.',
    model5Desc:'Glass with HUD and assistance cameras — verified by VIN.',
    model6Desc:'We check sensor compatibility and calibration requirements.',
    modelCta:'Find matching glass',
    skip:'Skip to content',topline:'Auto glass in Almaty · Open daily 09:00–20:00',navServices:'Services',navWhy:'Why us',navSteps:'Our process',navFaq:'FAQ',navContacts:'Contact',quoteBtn:'Get a quote',heroEyebrow:'AUTO GLASS SERVICE IN ALMATY',heroTitle:'A clearer view<br><em>of the road.</em>',heroLead:'We select, repair or replace auto glass to match your vehicle and options. We confirm the price before work begins.',heroCta:'Request an estimate',allServices:'Explore services',heroNote:'Same-day replacement if the glass is in stock',tagGlass:'Front and side windows',tagRepair:'Chip repair',tagAdas:'ADAS calibration',floatLabel:'SPECIAL VEHICLE OPTIONS?',floatTitle:'We help find the right glass for your car.',floatNote:'Sensors · Heating · Cameras',trust1:'Written warranty',trust1Sub:'Terms before work starts',trust2:'Vehicle-specific fit',trust2Sub:'Sensors and options considered',trust3:'OEM and alternatives',trust3Sub:'We explain available choices',trust4:'Book via WhatsApp',trust4Sub:'No long forms',servicesEyebrow:'WHAT WE DO',servicesTitle:'Services that<br>solve the problem.',servicesLead:'Photos, clear descriptions and indicative pricing for each service.',filterAll:'All services',filterRepair:'Repair',filterReplacement:'Glass replacement',filterCare:'Care & protection',catReplacement:'REPLACEMENT',catRepair:'REPAIR',catCare:'PROTECTION',byRequest:'BY QUOTE',popular:'POPULAR',assessFirst:'AFTER INSPECTION',filmSelection:'FILM OPTIONS',hydro:'WATER REPELLENT',individually:'CUSTOM',service1Title:'Auto glass replacement',service1Desc:'Windscreens, side and rear glass. We consider sensors, cameras and heating.',service2Title:'Chip repair',service2Desc:'Local resin repair. Repair suitability depends on an inspection.',service3Title:'Crack repair',service3Desc:'We inspect the length and location of the crack and explain possible solutions.',service4Title:'Window tinting',service4Desc:'Professional film application. Price depends on the number of windows.',service5Title:'Rain-repellent coating',service5Desc:'Hydrophobic glass treatment to help improve visibility in rain.',service6Title:'Glass engraving',service6Desc:'Vehicle glass marking. Availability and pricing confirmed separately.',priceLabel:'Price',priceCustom:'On request',priceChip:'from 5,000 ₸',priceAssessment:'After inspection',priceTint:'from 10,000 ₸',priceRain:'from 5,000 ₸',priceMark:'from 7,000 ₸',priceDisclaimer:'Prices are indicative. Final pricing depends on the vehicle and glass condition and will be confirmed before work. Photos are illustrative.',bannerEyebrow:'NOT SURE WHICH GLASS YOU NEED?',bannerTitle:'Just share your make and model.',bannerDesc:'We will check compatible options and availability.',bannerCta:'Find my glass',advBadge:'The right glass for your vehicle.',advEyebrow:'THE DETAILS MATTER',advTitle:'More than just<br>replacing glass.<br><em>The right fit.</em>',advLead:'Vehicle glass varies with the configuration. We confirm your vehicle details before ordering.',adv1:'Vehicle features matter',adv1Sub:'Rain sensors, heating, driver-assistance cameras and HUD.',adv2:'Clear choices',adv2Sub:'Original glass or a certified compatible alternative.',adv3:'Agreed terms',adv3Sub:'Price, stock, timing and warranty discussed before work.',brandsTitle:'Serving popular car makes',brandsCaption:'And many more',stepsEyebrow:'SIMPLE PROCESS',stepsTitle:'From your question<br>to the finished glass.',stepsLead:'A clear path from inquiry to service.',step1:'Tell us about your car',step1Sub:'Send the make, model and service through WhatsApp.',step2:'Get an estimate',step2Sub:'We check your configuration, availability, price and booking times.',step3:'Visit our workshop',step3Sub:'We complete the agreed service and document warranty terms.',faqEyebrow:'FREQUENTLY ASKED QUESTIONS',faqTitle:'What you should<br>know in advance.',faqLead:'Still have questions? Message us and we will help.',askQuestion:'Ask via WhatsApp',faq1Q:'Can you replace the glass on the same day?',faq1A:'Yes, subject to stock and booking availability. The manager will confirm timing.',faq2Q:'How much does chip repair cost?',faq2A:'Indicative pricing starts from 5,000 ₸. We confirm whether repair is suitable and the final quote after assessment.',faq3Q:'Can every crack be repaired?',faq3A:'No. It depends on size, position and damage type. Sometimes replacement is the safer option.',faq4Q:'Can you fit glass for cars with cameras or sensors?',faq4A:'Yes, we consider cameras, sensors and heating. Calibration needs are checked separately.',faq5Q:'How do I get the final price?',faq5A:'Send the make, model, year and requested service. Our manager will confirm a quote before work.',contactEyebrow:'VISIT OUR WORKSHOP',contactTitle:'Easy to ask.<br><em>Easy to book.</em>',contactLead:'Message or call to discuss glass options or repair pricing.',contactCta:'Request a quote',callBtn:'Call us',contactCard:'STEKLOPROFF CONTACTS',addressLabel:'ADDRESS',address:'115 Zharylgasova St, Almaty',hoursLabel:'OPENING HOURS',hours:'Daily, 09:00–20:00',phoneLabel:'PHONE',footerLine:'Auto glass, repair and installation · Almaty',backTop:'Back to top ↑',demo:'Demonstration redesign. Images are generated illustrations, not photos of completed jobs.',modalEyebrow:'QUICK INQUIRY',modalTitle:'Get an estimate',modalLead:'Fill in a few fields to create a WhatsApp message.',labelBrand:'Car make *',labelModel:'Car model *',labelYear:'Model year',labelService:'Requested service *',chooseService:'Choose a service',labelComment:'Comments (optional)',commentPlaceholder:'For example, 10 cm crack on passenger side',sendWhatsapp:'Continue in WhatsApp',modalHint:'WhatsApp opens with a prepared message. This site does not store your information.'
  }
};

const enhancedCopy = {
  ru: {navFitment:'Подбор стекла',fitmentEyebrow:'УМНЫЙ ПОДБОР АВТОСТЕКЛА',fitmentTitle:'Ваш автомобиль.<br><em>Точное стекло.</em>',fitmentLead:'Выберите марку и модель — поможем подобрать подходящее стекло с учётом года выпуска, датчиков и комплектации.',fitmentBenefit1:'Модели и поколения автомобилей',fitmentBenefit2:'Подбор с учётом комплектации',fitmentBenefit3:'Расчёт стоимости через WhatsApp',fitmentFormTag:'ПОДБОР ЗА 1 МИНУТУ',fitmentFormTitle:'Найдём стекло для вас',fitmentFormDesc:'Начните с марки автомобиля',modelPlaceholder:'Например, Camry 70',modelHint:'Начните вводить модель или раскройте список стрелкой.',fitmentSubmit:'Подобрать стекло в WhatsApp',fitmentPrivacy:'Заявка откроется в WhatsApp. Мы не сохраняем введённые данные.'},
  kz: {navFitment:'Әйнек таңдау',fitmentEyebrow:'АВТОӘЙНЕКТІ ТАҢДАУ',fitmentTitle:'Сіздің көлігіңіз.<br><em>Дәл әйнек.</em>',fitmentLead:'Марка мен модельді таңдаңыз — әйнекті шығарылған жылына, датчиктері мен жабдықталуына қарай табуға көмектесеміз.',fitmentBenefit1:'Модельдер мен буындар тізімі',fitmentBenefit2:'Жабдықталуына қарай таңдау',fitmentBenefit3:'WhatsApp арқылы бағаны нақтылау',fitmentFormTag:'1 МИНУТТА ТАҢДАУ',fitmentFormTitle:'Көлігіңізге әйнек табамыз',fitmentFormDesc:'Көлік маркасынан бастаңыз',modelPlaceholder:'Мысалы, Camry 70',modelHint:'Модель атауын жазыңыз немесе тізімді ашыңыз.',fitmentSubmit:'WhatsApp арқылы әйнек таңдау',fitmentPrivacy:'Хабарлама WhatsApp-та ашылады. Енгізілген деректер сақталмайды.'},
  en: {navFitment:'Find glass',fitmentEyebrow:'SMART GLASS MATCHING',fitmentTitle:'Your vehicle.<br><em>The right glass.</em>',fitmentLead:'Choose your make and model. We will help match glass to its year, sensors and features.',fitmentBenefit1:'Models and generations listed',fitmentBenefit2:'Matching your vehicle features',fitmentBenefit3:'Get a quote over WhatsApp',fitmentFormTag:'FIND A MATCH IN 1 MINUTE',fitmentFormTitle:'Find your glass',fitmentFormDesc:'Start with your car make',modelPlaceholder:'e.g. Camry 70',modelHint:'Type a model name or open the list using the arrow.',fitmentSubmit:'Get a WhatsApp quote',fitmentPrivacy:'A ready-to-send message opens in WhatsApp. No data is stored here.'}
};
for (const lang of Object.keys(enhancedCopy)) Object.assign(translations[lang], enhancedCopy[lang]);

let currentLang = 'ru';
const quoteDialog = document.querySelector('#quoteDialog');
const quoteForm = document.querySelector('#quoteForm');
const menuToggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('#mobileNav');

function setLanguage(lang) {
  if (!['ru','kz','en'].includes(lang)) return;
  currentLang = lang;
  document.documentElement.lang = lang === 'kz' ? 'kk' : lang;
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
    else if (lang === 'ru' && el.dataset.originalText !== undefined) el.textContent = el.dataset.originalText;
  }
  for (const el of document.querySelectorAll('[data-i18n-html]')) {
    const key = el.dataset.i18nHtml;
    // Only trusted strings hardcoded in this file are used as markup.
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
    else if (lang === 'ru' && el.dataset.originalHtml !== undefined) el.innerHTML = el.dataset.originalHtml;
  }
  for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
    const value = translations[lang][el.dataset.i18nPlaceholder];
    el.placeholder = value || el.dataset.originalPlaceholder || '';
  }
  document.querySelectorAll('.lang').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',String(active));
  });
  document.title = lang === 'ru' ? 'StekloProff — Автостёкла, замена и ремонт в Алматы' : lang === 'kz' ? 'StekloProff — Алматыда автоәйнек жөндеу және ауыстыру' : 'StekloProff — Auto glass repair and replacement in Almaty';
}

// Capture original Russian copy before the first language change.
document.querySelectorAll('[data-i18n]').forEach(el => el.dataset.originalText = el.textContent);
document.querySelectorAll('[data-i18n-html]').forEach(el => el.dataset.originalHtml = el.innerHTML);
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.dataset.originalPlaceholder = el.placeholder);
document.querySelectorAll('.lang').forEach(btn => btn.addEventListener('click',() => setLanguage(btn.dataset.lang)));

function openQuote(service = '') {
  if (service) document.querySelector('#serviceSelect').value = service;
  if (!quoteDialog.open) quoteDialog.showModal();
  setTimeout(() => document.querySelector('#carBrand').focus(), 0);
}
document.querySelectorAll('[data-open-quote]').forEach(button => button.addEventListener('click',() => openQuote()));
document.querySelectorAll('.card-link').forEach(button => button.addEventListener('click',() => openQuote(button.dataset.service)));
document.querySelector('#closeDialog').addEventListener('click',() => quoteDialog.close());
quoteDialog.addEventListener('click', e => { if (e.target === quoteDialog) quoteDialog.close(); });

quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const form = new FormData(quoteForm);
  const clean = key => String(form.get(key) || '').trim().replace(/[\r\n]+/g, ' ').slice(0,500);
  const brand = clean('brand'), model = clean('model'), year = clean('year'), service = clean('service'), comment = clean('comment');
  const intro = currentLang === 'kz' ? 'Сәлеметсіз бе! Автоәйнек қызметінің бағасын білгім келеді.' : currentLang === 'en' ? 'Hello! I would like an estimate for auto glass service.' : 'Здравствуйте! Хочу узнать стоимость услуги для автомобиля.';
  const message = [intro,`Марка / Make: ${brand}`,`Модель / Model: ${model}`,year ? `Год / Year: ${year}` : '',`Услуга / Service: ${service}`,comment ? `Комментарий / Notes: ${comment}` : ''].filter(Boolean).join('\n');
  const link = `https://wa.me/77074946878?text=${encodeURIComponent(message)}`;
  // Opens WhatsApp directly. There is no pretend order submission and no server storage.
  window.open(link,'_blank','noopener,noreferrer');
});

function setMenu(open) {
  mobileNav.hidden = !open;
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open ? 'Закрыть меню' : 'Открыть меню');
}
menuToggle.addEventListener('click',() => setMenu(mobileNav.hidden));
mobileNav.querySelectorAll('a,[data-open-quote]').forEach(el => el.addEventListener('click',() => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

const chips = Array.from(document.querySelectorAll('.filter-chip'));
const cards = Array.from(document.querySelectorAll('.service-card'));
chips.forEach(chip => chip.addEventListener('click',() => {
  const filter = chip.dataset.filter;
  chips.forEach(b => {b.classList.toggle('active',b===chip); b.setAttribute('aria-pressed',String(b===chip));});
  cards.forEach(card => {card.hidden = filter !== 'all' && card.dataset.category !== filter;});
}));

const accordion = document.querySelector('.accordion');
accordion.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', () => {
  if (!detail.open) return;
  accordion.querySelectorAll('details').forEach(other => {if (other !== detail) other.open = false;});
}));

// Selected car models from the original company's supported list.
document.querySelectorAll('.model-link').forEach(button => button.addEventListener('click', () => {
  const brandInput = document.querySelector('#carBrand');
  const modelInput = document.querySelector('#carModel');
  brandInput.value = button.dataset.brand || '';
  modelInput.value = button.dataset.model || '';
  openQuote('Замена автостекла');
}));
