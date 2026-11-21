/* Car-model picker: keyboard-accessible combobox, brand-aware search, WhatsApp inquiry. */
(() => {
  'use strict';
  const modelData = {
    Toyota: ['Camry 30','Camry 40','Camry 50','Camry 55','Camry 70','Camry 80','Corolla','RAV4','Land Cruiser Prado 120','Land Cruiser Prado 150','Land Cruiser 100','Land Cruiser 200','Land Cruiser 300','Highlander','Avensis','Yaris','Hilux','Fortuner','C-HR','Prius','Alphard'],
    Lexus: ['RX 300','RX 330','RX 350','RX 450h','LX 470','LX 570','LX 600','ES 250','ES 300','ES 350','GS 300','NX 200','NX 300','GX 460','IS 250','LS 460'],
    Hyundai: ['Accent','Solaris','Elantra','Sonata','Tucson','Santa Fe','Creta','Palisade','i30','i40','Grandeur','Staria','H-1'],
    Kia: ['Rio','Cerato','K5','Optima','Sportage','Sorento','Seltos','Carnival','Soul','Ceed','K7','K8'],
    BMW: ['3 Series E90','3 Series F30','3 Series G20','5 Series E60','5 Series F10','5 Series G30','7 Series','X1','X3','X5 E70','X5 F15','X5 G05','X6'],
    'Mercedes-Benz': ['C-Class W204','C-Class W205','C-Class W206','E-Class W211','E-Class W212','E-Class W213','S-Class W221','S-Class W222','GLA','GLC','GLE','GLS','V-Class','Sprinter'],
    Volkswagen: ['Polo','Jetta','Passat B6','Passat B7','Passat B8','Tiguan','Touareg','Golf','Transporter','Caddy'],
    Nissan: ['Almera','Teana','Qashqai','X-Trail T31','X-Trail T32','Patrol','Murano','Juke','Sunny','Terrano'],
    Chevrolet: ['Cobalt','Onix','Damas','Nexia','Tracker','Captiva','Cruze','Lacetti','Malibu','Tahoe'],
    Honda: ['Civic','Accord','CR-V','HR-V','Fit','Odyssey','Pilot'],
    Audi: ['A3','A4','A5','A6','A7','A8','Q3','Q5','Q7','Q8'],
    Subaru: ['Forester','Outback','Legacy','Impreza','XV'],
    Mitsubishi: ['Outlander','Lancer','Pajero','Pajero Sport','ASX','L200'],
    Skoda: ['Octavia','Rapid','Superb','Kodiaq','Karoq'],
    Mazda: ['Mazda 3','Mazda 6','CX-5','CX-7','CX-9'],
    Renault: ['Duster','Logan','Sandero','Arkana','Kaptur','Megane']
  };
  const aliases = {'mercedes':'Mercedes-Benz','mercedes benz':'Mercedes-Benz','mersedes':'Mercedes-Benz','vw':'Volkswagen','hyundai':'Hyundai','chevy':'Chevrolet','volkswagen':'Volkswagen'};
  const normalize = text => String(text || '').toLowerCase().trim().replace(/ё/g,'е').replace(/[-_]/g,' ').replace(/\s+/g,' ');
  const lang = () => document.documentElement.lang === 'kk' ? 'kz' : document.documentElement.lang === 'en' ? 'en' : 'ru';
  const copy = {
    ru: {heading:'МОДЕЛИ',choose:'Выберите модель',empty:'Нет совпадений. Можно ввести свою модель вручную.',count:'вариантов',show:'Показать модели автомобиля'},
    kz: {heading:'МОДЕЛЬДЕР',choose:'Модельді таңдаңыз',empty:'Сәйкестік табылмады. Модельді өзіңіз енгізе аласыз.',count:'нұсқа',show:'Көлік модельдерін көрсету'},
    en: {heading:'MODELS',choose:'Choose a model',empty:'No matches. You can type any model manually.',count:'options',show:'Show car models'}
  };
  function matchingBrand(value){
    const input=normalize(value);
    const alias=aliases[input];
    if(alias) return alias;
    return Object.keys(modelData).find(make => normalize(make) === input) || null;
  }
  let openCombo=null;
  const pickers=[];
  function setup(combo){
    const input=combo.querySelector('[data-model-input]');
    const toggle=combo.querySelector('[data-model-toggle]');
    const list=combo.querySelector('.model-options-panel');
    const brand=document.getElementById(combo.dataset.brandTarget);
    let currentOptions=[];
    let activeIndex=-1;
    let selected='';
    const uid=list.id;
    const hide=() => {
      list.hidden=true;
      combo.classList.remove('is-open');
      input.setAttribute('aria-expanded','false');
      input.removeAttribute('aria-activedescendant');
      activeIndex=-1;
      if(openCombo===combo)openCombo=null;
    };
    const setActive=(index,scroll=true) => {
      if(!currentOptions.length)return;
      activeIndex=Math.max(0,Math.min(currentOptions.length-1,index));
      list.querySelectorAll('.model-option').forEach((item,i)=>item.classList.toggle('is-highlighted',i===activeIndex));
      const active=list.querySelectorAll('.model-option')[activeIndex];
      input.setAttribute('aria-activedescendant',active.id);
      if(scroll)active.scrollIntoView({block:'nearest'});
    };
    const choose=model=> {
      input.value=model;
      selected=model;
      input.dispatchEvent(new Event('change',{bubbles:true}));
      input.focus({preventScroll:true});
      hide();
    };
    const render=(showAll=false) => {
      const make=matchingBrand(brand.value);
      const models=make ? modelData[make] : [];
      const query=normalize(input.value);
      currentOptions= showAll || !query ? models : models.filter(m=>normalize(m).includes(query));
      list.replaceChildren();
      const c=copy[lang()];
      const title=document.createElement('div');
      title.className='model-options-title';
      title.setAttribute('aria-hidden','true');
      const label=document.createElement('span');label.textContent=`${c.heading} ${make || ''}`;
      const count=document.createElement('span');count.className='model-options-count';count.textContent=`${currentOptions.length} ${c.count}`;
      title.append(label,count);list.append(title);
      if(!currentOptions.length){
        const empty=document.createElement('div'); empty.className='model-empty';
        empty.textContent=make? c.empty : (lang()==='ru'?'Сначала укажите марку автомобиля.':lang()==='kz'?'Алдымен көлік маркасын енгізіңіз.':'Choose a car make first.');
        list.append(empty);
      }
      currentOptions.forEach((model,i)=>{
        const item=document.createElement('button');
        item.type='button';item.className='model-option';item.id=`${uid}-opt-${i}`;
        item.setAttribute('role','option');item.setAttribute('aria-selected',String(input.value===model));
        const text=document.createElement('span');text.textContent=model;
        const arrow=document.createElement('span');arrow.className='model-option-arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
        item.append(text,arrow);
        item.addEventListener('mousedown', e=>e.preventDefault());
        item.addEventListener('click',()=>choose(model));
        list.append(item);
      });
      activeIndex=-1;
      input.removeAttribute('aria-activedescendant');
    };
    const positionPanel=()=>{
      const rect=input.getBoundingClientRect();
      const reserve=window.innerWidth<=760?84:20;
      const below=window.innerHeight-rect.bottom-reserve;
      const above=rect.top-(window.innerWidth<=760?86:12);
      const flip=below<225 && above>below;
      combo.classList.toggle('opens-up',flip);
      combo.style.setProperty('--model-panel-max',Math.max(150,Math.min(295,(flip?above:below)-12))+'px');
    };
    const show=(all=false)=>{
      if(openCombo && openCombo!==combo){const other=pickers.find(p=>p.combo===openCombo);other?.hide();}
      render(all);
      positionPanel();
      list.hidden=false;combo.classList.add('is-open');input.setAttribute('aria-expanded','true');openCombo=combo;
    };
    const isOpen=()=>!list.hidden;
    input.addEventListener('input',()=>{selected='';show(false)});
    input.addEventListener('focus',()=>{if(!isOpen())show(input.value==='');});
    toggle.addEventListener('click',()=>{if(isOpen()){hide()}else{show(true);input.focus({preventScroll:true});}});
    input.addEventListener('keydown',e=>{
      if(e.key==='ArrowDown' || e.key==='ArrowUp'){
        e.preventDefault();if(!isOpen())show(true);
        setActive(e.key==='ArrowDown' ? activeIndex+1 : activeIndex<=0?currentOptions.length-1:activeIndex-1);
      }else if(e.key==='Enter' && isOpen()){
        e.preventDefault();if(activeIndex>=0 && currentOptions[activeIndex])choose(currentOptions[activeIndex]);else if(currentOptions.length===1)choose(currentOptions[0]);else hide();
      }else if(e.key==='Escape' && isOpen()){
        e.preventDefault();e.stopPropagation();hide();
      }else if(e.key==='Tab' && isOpen())hide();
    });
    brand.addEventListener('input',()=>{
      if(selected || input.value){input.value='';selected='';}
      if(isOpen())render(true);
    });
    brand.addEventListener('change',()=>{if(isOpen())render(true)});
    window.addEventListener('resize',()=>{if(isOpen())positionPanel()},{passive:true});
    document.addEventListener('scroll',()=>{if(isOpen())positionPanel()},{capture:true,passive:true});
    pickers.push({combo,hide,refresh:()=>{toggle.setAttribute('aria-label',copy[lang()].show);if(isOpen())render(true)}});
  }
  document.querySelectorAll('[data-model-combo]').forEach(setup);
  document.addEventListener('pointerdown',event=>{if(openCombo && !openCombo.contains(event.target)){pickers.find(p=>p.combo===openCombo)?.hide()}});
  document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>pickers.forEach(p=>p.refresh())));

  const inlineForm=document.querySelector('#inlineQuoteForm');
  if(inlineForm)inlineForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!inlineForm.reportValidity())return;
    const data=new FormData(inlineForm);
    const clean=k=>String(data.get(k)||'').trim().replace(/[\r\n]+/g,' ').slice(0,150);
    const brand=clean('brand'),model=clean('model'),year=clean('year'),service=clean('service');
    const intro=lang()==='kz'?'Сәлеметсіз бе! Автоәйнекті таңдап, бағасын білгім келеді.':lang()==='en'?'Hello! I would like a quote for car glass.':'Здравствуйте! Хочу подобрать автостекло и узнать стоимость.';
    const message=[intro,`Марка / Make: ${brand}`,`Модель / Model: ${model}`,year?`Год / Year: ${year}`:'',`Услуга / Service: ${service}`].filter(Boolean).join('\n');
    window.open('https://wa.me/77074946878?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  });
})();
