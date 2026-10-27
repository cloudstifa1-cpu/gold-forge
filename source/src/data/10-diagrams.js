(function(){
var A=function(id){return '<defs><marker id="'+id+'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="gdf"/></marker></defs>';};
var D={};

/* 1. Fire assay steps */
D.fireassay={c:'Fire assay: the six steps',s:'<svg viewBox="0 0 360 330">'+A('fa')+
'<g font-size="11">'+
/* 1 crucible */
'<path d="M28 30h44l-6 60h-32z" class="bx"/><rect x="34" y="62" width="32" height="24" class="slf" opacity=".5"/><circle cx="44" cy="70" r="2" class="gdf"/><circle cx="56" cy="76" r="2" class="gdf"/><text x="50" y="110" text-anchor="middle" font-weight="700">1. Mix &amp; fuse</text><text x="50" y="124" text-anchor="middle" class="mu">sample + flux</text><text x="50" y="137" text-anchor="middle" class="mu">~1050 °C</text>'+
'<path d="M88 60h18" class="ln" marker-end="url(#fa)"/>'+
/* 2 pour into mold */
'<path d="M140 40l40 0-20 50z" class="bx"/><path d="M146 46h28l-6 14h-16z" class="slf" opacity=".5"/><path d="M155 72h10l-5 13z" class="pb"/><text x="160" y="110" text-anchor="middle" font-weight="700">2. Pour</text><text x="160" y="124" text-anchor="middle" class="mu">lead sinks to tip,</text><text x="160" y="137" text-anchor="middle" class="mu">slag floats</text>'+
'<path d="M200 60h18" class="ln" marker-end="url(#fa)"/>'+
/* 3 button */
'<path d="M255 50l22 0 0 22-22 0z" class="pb"/><text x="266" y="65" text-anchor="middle" font-size="9" fill="#fff">Pb</text><text x="270" y="110" text-anchor="middle" font-weight="700">3. Lead button</text><text x="270" y="124" text-anchor="middle" class="mu">hammer off slag</text><text x="270" y="137" text-anchor="middle" class="mu">holds Au + Ag</text>'+
'<path d="M300 150q20 20-10 30" class="ln" marker-end="url(#fa)"/>'+
/* 4 cupel */
'<path d="M240 210h60l-8 26h-44z" class="bx"/><ellipse cx="270" cy="210" rx="24" ry="5" class="cupel"/><circle cx="270" cy="206" r="8" class="pb"/><path d="M262 196c-4-8 4-10 0-18M278 196c4-8-4-10 0-18" class="ln" stroke-dasharray="2 3"/><text x="270" y="256" text-anchor="middle" font-weight="700">4. Cupellation</text><text x="270" y="270" text-anchor="middle" class="mu">lead oxidizes, soaks</text><text x="270" y="283" text-anchor="middle" class="mu">into cupel</text>'+
'<path d="M222 222h-18" class="ln" marker-end="url(#fa)"/>'+
/* 5 bead */
'<ellipse cx="160" cy="216" rx="10" ry="8" class="ag"/><text x="160" y="256" text-anchor="middle" font-weight="700">5. Bead (prill)</text><text x="160" y="270" text-anchor="middle" class="mu">gold + silver</text><text x="160" y="283" text-anchor="middle" class="mu">weigh it</text>'+
'<path d="M112 222h-18" class="ln" marker-end="url(#fa)"/>'+
/* 6 parting */
'<path d="M28 198h44v30a22 10 0 0 1-44 0z" class="bx"/><rect x="31" y="210" width="38" height="20" class="acid"/><circle cx="50" cy="226" r="4" class="gdf"/><text x="50" y="256" text-anchor="middle" font-weight="700">6. Parting</text><text x="50" y="270" text-anchor="middle" class="mu">nitric acid takes Ag,</text><text x="50" y="283" text-anchor="middle" class="mu">weigh the gold</text>'+
'<text x="180" y="318" text-anchor="middle" class="mu" font-size="10">mg of gold from 29.167 g (1 assay ton) = troy oz per short ton</text>'+
'</g></svg>'};

/* 2. Blast furnace */
D.blast={c:'Blast furnace cutaway',s:'<svg viewBox="0 0 360 400">'+A('bf')+
'<g font-size="11">'+
'<path d="M95 40h70l25 170-10 70v60H75v-60l-10-70z" class="bx"/>'+
'<path d="M75 300h105v20H75z" class="slf" opacity=".55"/><path d="M75 320h105v20H75z" class="fe"/>'+
'<path d="M88 60h84M84 90h92M80 120h100M76 150h108" class="ln" stroke-dasharray="3 4" opacity=".5"/>'+
'<path d="M130 10v26" class="ln" marker-end="url(#bf)"/><text x="130" y="8" text-anchor="middle" font-weight="700">Ore + coke + limestone in</text>'+
'<path d="M160 40l20-22" class="ln" marker-end="url(#bf)"/><text x="186" y="22" class="mu">gas out (CO, CO₂)</text>'+
'<path d="M30 270h40M225 270h-40" class="ln" marker-end="url(#bf)"/><text x="6" y="262" font-size="10" font-weight="700">hot blast</text><text x="6" y="288" font-size="10" class="mu">tuyeres</text>'+
'<path d="M180 330h40" class="ln" marker-end="url(#bf)"/><text x="224" y="334" font-weight="700">molten iron</text>'+
'<path d="M180 308h40" class="ln" marker-end="url(#bf)"/><text x="224" y="312" font-weight="700">slag</text>'+
'<text x="200" y="70" class="mu">~200–700 °C</text><text x="200" y="84">3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂</text>'+
'<text x="200" y="120" class="mu">~700–1000 °C</text><text x="200" y="134">FeO + CO → Fe + CO₂</text><text x="200" y="148" class="mu">CaCO₃ → CaO + CO₂</text>'+
'<text x="200" y="190" class="mu">~1200–1500 °C</text><text x="200" y="204">iron and slag melt</text><text x="200" y="218" class="mu">CaO + SiO₂ → CaSiO₃</text>'+
'<text x="236" y="252" class="mu">~2000 °C</text><text x="236" y="266">C + O₂ → CO₂</text><text x="236" y="280">CO₂ + C → 2CO</text>'+
'<text x="128" y="375" text-anchor="middle" class="mu">hot metal ≈ 4–4.5% C</text>'+
'</g></svg>'};

/* 3. Crystal structures */
function cube(ox,oy,s,extra){var d=s*0.45,P=function(x,y){return (ox+x)+' '+(oy+y);};
 var c=[[0,d],[s,d],[s,s+d],[0,s+d],[d,0],[s+d,0],[s+d,s],[d,s]];
 var e='<path d="M'+P(0,d)+'H'+(ox+s)+'V'+(oy+s+d)+'H'+ox+'Z M'+P(d,0)+'H'+(ox+s+d)+'V'+(oy+s)+' M'+P(0,d)+'L'+P(d,0)+' M'+P(s,d)+'L'+P(s+d,0)+' M'+P(s,s+d)+'L'+P(s+d,s)+'" class="ln"/><path d="M'+P(0,s+d)+'L'+P(d,s)+'H'+(ox+s+d)+' M'+P(d,s)+'V'+oy+'" class="ln" stroke-dasharray="3 3" opacity=".6"/>';
 c.forEach(function(p){e+='<circle cx="'+(ox+p[0])+'" cy="'+(oy+p[1])+'" r="5" class="atom"/>';});
 (extra||[]).forEach(function(p){e+='<circle cx="'+(ox+p[0]*s+p[2]*d)+'" cy="'+(oy+d+p[1]*s-p[2]*d)+'" r="5" class="atom2"/>';});
 return e;}
var hcp=(function(){var o='',cx=300,ty=40,by=120,r=26,ry=9,top=[],bot=[];
 for(var i=0;i<6;i++){var a=Math.PI/3*i;top.push([cx+r*Math.cos(a),ty+ry*Math.sin(a)]);bot.push([cx+r*Math.cos(a),by+ry*Math.sin(a)]);}
 o+='<path d="M'+top.map(function(p){return p.join(' ');}).join('L')+'Z" class="ln"/><path d="M'+bot.map(function(p){return p.join(' ');}).join('L')+'Z" class="ln"/>';
 for(i=0;i<6;i++)o+='<path d="M'+top[i].join(' ')+'L'+bot[i].join(' ')+'" class="ln"'+(i>=4||i===0?'':' stroke-dasharray="3 3" opacity=".6"')+'/>';
 top.concat(bot).forEach(function(p){o+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" class="atom"/>';});
 o+='<circle cx="'+cx+'" cy="'+ty+'" r="5" class="atom"/><circle cx="'+cx+'" cy="'+by+'" r="5" class="atom"/>';
 [[cx-9,80],[cx+12,74],[cx+2,88]].forEach(function(p){o+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" class="atom2"/>';});
 return o;})();
D.crystal={c:'BCC, FCC and HCP unit cells (gold-colored atoms are the extra ones that define each type)',s:'<svg viewBox="0 0 360 200"><g font-size="11">'+
cube(14,30,64,[[.5,.5,.5]])+
cube(130,30,64,[[.5,.5,0],[.5,.5,1],[0,.5,.5],[1,.5,.5],[.5,0,.5],[.5,1,.5]])+hcp+
'<text x="60" y="150" text-anchor="middle" font-weight="700">BCC</text><text x="60" y="164" text-anchor="middle" class="mu">body-centered</text><text x="60" y="178" text-anchor="middle" class="mu">ferrite, Cr, W, Mo</text>'+
'<text x="176" y="150" text-anchor="middle" font-weight="700">FCC</text><text x="176" y="164" text-anchor="middle" class="mu">face-centered</text><text x="176" y="178" text-anchor="middle" class="mu">Au, Ag, Cu, Al, Ni</text>'+
'<text x="300" y="150" text-anchor="middle" font-weight="700">HCP</text><text x="300" y="164" text-anchor="middle" class="mu">hexagonal</text><text x="300" y="178" text-anchor="middle" class="mu">Zn, Mg, Ti, Co</text>'+
'<text x="180" y="196" text-anchor="middle" class="mu" font-size="10">FCC bends most easily (most slip planes)</text>'+
'</g></svg>'};

/* 4. Iron-carbon (steel part) */
var X=function(c){return 50+145*c;},Y=function(t){return 20+(1200-t)*0.4;};
var tick='';[0,0.5,1,1.5,2].forEach(function(c){tick+='<path d="M'+X(c)+' 260v4" class="ln"/><text x="'+X(c)+'" y="276" text-anchor="middle" class="mu">'+c+'</text>';});
[600,700,800,900,1000,1100,1200].forEach(function(t){tick+='<path d="M46 '+Y(t)+'h4" class="ln"/><text x="42" y="'+(Y(t)+4)+'" text-anchor="end" class="mu">'+t+'</text>';});
D.fec={c:'Iron-carbon diagram, steel range (slow cooling)',s:'<svg viewBox="0 0 360 300"><g font-size="10">'+
'<rect x="50" y="20" width="290" height="240" class="bx"/>'+tick+
'<path d="M'+X(0)+' '+Y(912)+'Q'+X(.35)+' '+Y(835)+' '+X(.76)+' '+Y(727)+'" class="ln2"/>'+
'<path d="M'+X(.76)+' '+Y(727)+'L'+X(2)+' '+Y(1114)+'" class="ln2"/>'+
'<path d="M'+X(.022)+' '+Y(727)+'H'+X(2)+'" class="ln2"/>'+
'<path d="M'+X(0)+' '+Y(912)+'Q'+X(.012)+' '+Y(800)+' '+X(.022)+' '+Y(727)+'V260" class="ln" opacity=".7"/>'+
'<circle cx="'+X(.76)+'" cy="'+Y(727)+'" r="4" class="gdf"/>'+
'<text x="'+(X(.76)+6)+'" y="'+(Y(727)+14)+'" font-weight="700">0.76% C, 727 °C</text>'+
'<text x="190" y="90" text-anchor="middle" font-size="13" font-weight="700">Austenite (γ)</text>'+
'<text x="96" y="'+(Y(780)+3)+'" text-anchor="middle">α + γ</text>'+
'<text x="300" y="150" text-anchor="middle">γ + Fe₃C</text>'+
'<text x="108" y="240" text-anchor="middle">Ferrite + Pearlite</text>'+
'<text x="262" y="240" text-anchor="middle">Pearlite + Cementite</text>'+
'<text x="78" y="'+(Y(905)-4)+'" font-weight="700" class="gdt">A3</text><text x="318" y="'+(Y(727)-4)+'" font-weight="700" class="gdt">A1</text><text x="'+(X(1.6)-14)+'" y="'+(Y(985)-6)+'" font-weight="700" class="gdt">Acm</text>'+
'<text x="195" y="294" text-anchor="middle">Carbon (weight %)</text><text x="12" y="140" transform="rotate(-90 12 140)" text-anchor="middle">°C</text>'+
'</g></svg>'};

/* 5. Flotation cell */
var bub='';[[110,170],[150,140],[200,160],[230,120],[130,110],[180,90],[250,150],[95,130],[215,190],[165,190]].forEach(function(p,i){bub+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="9" class="bub"/>'+(i%2?'<circle cx="'+(p[0]+7)+'" cy="'+(p[1]-6)+'" r="3" class="gdf"/>':'');});
D.flot={c:'Froth flotation cell',s:'<svg viewBox="0 0 360 290">'+A('fl')+'<g font-size="11">'+
'<path d="M70 50v190h210V50" class="ln2"/><path d="M280 50l30 20v40" class="ln"/>'+
'<path d="M70 50h210" class="ln" stroke-dasharray="2 3"/><rect x="72" y="42" width="206" height="28" class="froth"/>'+
'<circle cx="90" cy="56" r="5" class="bub"/><circle cx="110" cy="52" r="6" class="bub"/><circle cx="140" cy="58" r="5" class="bub"/><circle cx="170" cy="52" r="6" class="bub"/><circle cx="200" cy="58" r="5" class="bub"/><circle cx="230" cy="52" r="6" class="bub"/><circle cx="260" cy="58" r="5" class="bub"/>'+
'<circle cx="114" cy="48" r="2.5" class="gdf"/><circle cx="174" cy="48" r="2.5" class="gdf"/><circle cx="234" cy="48" r="2.5" class="gdf"/>'+bub+
'<path d="M175 20v190" class="ln2"/><path d="M150 210h50" class="ln2"/><path d="M155 215l-12 8M195 215l12 8" class="ln"/>'+
'<text x="175" y="14" text-anchor="middle" font-weight="700">air in</text>'+
'<path d="M20 200h48" class="ln" marker-end="url(#fl)"/><text x="4" y="192" font-weight="700">slurry +</text><text x="4" y="216" class="mu">reagents</text>'+
'<path d="M310 112v24" class="ln" marker-end="url(#fl)"/><text x="296" y="152" font-weight="700">concentrate</text><text x="296" y="166" class="mu">(froth)</text>'+
'<path d="M280 228h50" class="ln" marker-end="url(#fl)"/><text x="292" y="250" font-weight="700">tailings</text>'+
'<text x="175" y="272" text-anchor="middle" class="mu">collector makes sulfide grains stick to bubbles; gangue stays in the water</text>'+
'</g></svg>'};

/* 6. Electro cells */
function cell(ox,title,anode,cathode,note,slime){return '<g transform="translate('+ox+' 0)"><text x="80" y="16" text-anchor="middle" font-weight="700">'+title+'</text>'+
'<path d="M10 40v150h140V40" class="ln2"/><rect x="12" y="60" width="136" height="128" class="acid"/>'+
'<rect x="30" y="34" width="16" height="140" class="'+anode+'"/><rect x="114" y="34" width="16" height="140" class="cath"/>'+
'<text x="38" y="30" text-anchor="middle" font-weight="700">+</text><text x="122" y="30" text-anchor="middle" font-weight="700">−</text>'+
'<text x="38" y="208" text-anchor="middle">anode</text><text x="122" y="208" text-anchor="middle">cathode</text>'+
'<path d="M56 110h46" class="ln" marker-end="url(#ec)"/><text x="80" y="104" text-anchor="middle">Cu²⁺</text>'+
(slime?'<path d="M20 186h40" class="slime"/><text x="60" y="180" font-size="9" class="mu">slime (Au, Ag)</text>':'')+
'<text x="80" y="226" text-anchor="middle" class="mu">'+note[0]+'</text><text x="80" y="240" text-anchor="middle" class="mu">'+note[1]+'</text></g>';}
D.electro={c:'Electrorefining vs electrowinning (copper example)',s:'<svg viewBox="0 0 360 250">'+A('ec')+'<g font-size="11">'+
cell(10,'Electrorefining','imp',0,['impure anode dissolves,','pure Cu plates out'],1)+
cell(190,'Electrowinning','inert',0,['inert anode (makes O₂),','Cu comes from solution'],0)+
'</g></svg>'};

/* 7. Heap leach */
var ore='',sd=7;for(var i=0;i<60;i++){sd=(sd*9301+49297)%233280;var yy=90+(sd/233280)*72;sd=(sd*9301+49297)%233280;var l=100-(yy-78)*40/90,r=250+(yy-78)*20/90;ore+='<circle cx="'+(l+6+(sd/233280)*(r-l-12)).toFixed(1)+'" cy="'+yy.toFixed(1)+'" r="2" class="mu-f"/>';}
D.heap={c:'Heap leach pad (cross-section)',s:'<svg viewBox="0 0 360 260">'+A('hl')+'<g font-size="11">'+
'<path d="M40 170h230" class="liner"/><path d="M60 168l40-90h150l20 90z" class="orepile"/>'+ore+
'<path d="M110 78h130" class="ln" stroke-dasharray="5 4"/><text x="175" y="70" text-anchor="middle" font-weight="700">drip lines: weak NaCN, pH 10–11</text>'+
'<path d="M130 84v8M170 84v8M210 84v8" class="drop"/>'+
'<circle cx="100" cy="176" r="3" class="ln"/><circle cx="160" cy="176" r="3" class="ln"/><circle cx="220" cy="176" r="3" class="ln"/>'+
'<text x="155" y="196" text-anchor="middle" class="mu">HDPE liner + drain pipes</text>'+
'<path d="M272 172q20 4 24 24" class="ln" marker-end="url(#hl)"/><path d="M280 214h60" class="acid2"/><text x="310" y="234" text-anchor="middle" font-weight="700">pregnant</text><text x="310" y="248" text-anchor="middle" class="mu">solution pond</text>'+
'<path d="M320 206V50H262" class="ln" stroke-dasharray="4 3" marker-end="url(#hl)"/><text x="200" y="28" font-size="10" class="mu">carbon columns take the gold,</text><text x="200" y="40" font-size="10" class="mu">barren solution goes back</text>'+
'</g></svg>'};

/* 8. Galvanic series */
var met=['Magnesium','Zinc','Aluminum','Cadmium','Steel / iron','Lead','Tin','Brass','Copper','Nickel','Stainless (passive)','Silver','Titanium','Graphite','Gold','Platinum'];
var gl='';met.forEach(function(m,i){gl+='<text x="70" y="'+(40+i*17)+'"'+(i===0||i===met.length-2?' font-weight="700"':'')+'>'+m+'</text>';});
D.galv={c:'Galvanic series in seawater',s:'<svg viewBox="0 0 360 330"><defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="stop-w"/><stop offset="1" class="stop-o"/></linearGradient></defs><g font-size="11">'+
'<rect x="40" y="28" width="16" height="272" rx="8" fill="url(#gg)"/>'+gl+
'<text x="200" y="40" font-weight="700" class="wt">Active (anode)</text><text x="200" y="54" class="mu">corrodes first</text>'+
'<text x="200" y="285" font-weight="700" class="okt">Noble (cathode)</text><text x="200" y="299" class="mu">protected</text>'+
'<text x="200" y="150" class="mu">The farther apart two</text><text x="200" y="164" class="mu">metals are, the faster</text><text x="200" y="178" class="mu">the active one corrodes.</text>'+
'</g></svg>'};

/* 9. Temper colors */
var tc=[['#F2E6B8','pale straw','~205 °C','razors'],['#DDBF6A','straw','~220 °C','scrapers'],['#B8862F','dark straw / gold','~240 °C','knives, drill bits'],['#8A5A2B','brown / bronze','~255 °C','taps, punches'],['#6B3B6E','purple','~275 °C','chisels, axes'],['#24357F','dark blue','~295 °C','springs, saws'],['#5E8FC6','light blue','~315 °C',''],['#8C939A','gray','~330 °C +','']];
var ts='';tc.forEach(function(c,i){ts+='<rect x="20" y="'+(10+i*34)+'" width="70" height="28" rx="4" fill="'+c[0]+'"/><text x="102" y="'+(28+i*34)+'" font-weight="700">'+c[1]+'</text><text x="220" y="'+(28+i*34)+'">'+c[2]+'</text><text x="282" y="'+(28+i*34)+'" class="mu" font-size="10">'+c[3]+'</text>';});
D.temper={c:'Temper colors on clean, bright steel (approximate)',s:'<svg viewBox="0 0 360 290"><g font-size="11">'+ts+'</g></svg>'};

/* 10. Cyanide pH */
var px=function(p){return 20+p*22.86;};
var pt='';for(var p=0;p<=14;p+=2)pt+='<text x="'+px(p)+'" y="92" text-anchor="middle" class="mu">'+p+'</text>';
D.cnph={c:'pH and cyanide: keep it above 10',s:'<svg viewBox="0 0 360 160"><g font-size="11">'+
'<rect x="'+px(0)+'" y="50" width="'+(px(9.2)-px(0))+'" height="26" class="wbar"/><rect x="'+px(9.2)+'" y="50" width="'+(px(10)-px(9.2))+'" height="26" class="midbar"/><rect x="'+px(10)+'" y="50" width="'+(px(11)-px(10))+'" height="26" class="okbar"/><rect x="'+px(11)+'" y="50" width="'+(px(14)-px(11))+'" height="26" class="midbar"/>'+pt+
'<path d="M'+px(9.2)+' 40v44" class="ln2"/><text x="'+px(9.2)+'" y="34" text-anchor="middle" font-weight="700">9.2</text>'+
'<text x="'+px(4.6)+'" y="67" text-anchor="middle" font-weight="700" fill="#fff">HCN GAS FORMS</text>'+
'<text x="'+px(10.5)+'" y="118" text-anchor="middle" font-weight="700" class="okt">leach at 10–11</text>'+
'<text x="'+px(4.6)+'" y="118" text-anchor="middle" class="mu">acid side: deadly gas</text>'+
'<text x="180" y="146" text-anchor="middle" class="mu">lime (CaO) holds the pH up</text>'+
'</g></svg>'};

/* 11. Mohs */
var mo=[['1','Talc',''],['2','Gypsum','fingernail ≈ 2.5'],['3','Calcite','gold ≈ 2.5–3, copper coin ≈ 3.5'],['4','Fluorite',''],['5','Apatite','knife / glass ≈ 5.5'],['6','Orthoclase','pyrite ≈ 6–6.5, steel file ≈ 6.5'],['7','Quartz',''],['8','Topaz',''],['9','Corundum (Al₂O₃)',''],['10','Diamond','']];
var ms='';mo.forEach(function(m,i){var y=24+i*25;ms+='<rect x="20" y="'+(y-14)+'" width="'+(14+i*9)+'" height="18" rx="3" class="'+(i===2||i===5?'gdf':'mbar')+'"/><text x="'+(40+i*9)+'" y="'+y+'" font-weight="700">'+m[0]+'</text><text x="150" y="'+y+'" font-weight="700">'+m[1]+'</text><text x="150" y="'+(y+11)+'" font-size="9" class="mu">'+m[2]+'</text>';});
D.mohs={c:'Mohs hardness scale with field tools',s:'<svg viewBox="0 0 360 270"><g font-size="11">'+ms+'</g></svg>'};

/* 12. Stress-strain */
D.ss={c:'Stress-strain curve (ductile steel)',s:'<svg viewBox="0 0 360 250">'+A('sx')+'<g font-size="11">'+
'<path d="M40 210V20M40 210H340" class="ln2"/>'+
'<path d="M40 210L80 70L92 64Q160 30 230 34Q270 40 300 90" class="curve"/><circle cx="300" cy="90" r="4" class="wdf"/><path d="M296 86l8 8M304 86l-8 8" class="ln"/>'+
'<circle cx="80" cy="70" r="4" class="gdf"/><text x="86" y="86">yield</text>'+
'<circle cx="230" cy="34" r="4" class="gdf"/><text x="230" y="24" text-anchor="middle">UTS (peak)</text>'+
'<text x="300" y="110" text-anchor="middle">fracture</text>'+
'<text x="46" y="150" class="mu">elastic</text><text x="140" y="80" class="mu">strain hardening</text><text x="262" y="66" class="mu">necking</text>'+
'<text x="190" y="236" text-anchor="middle">Strain (stretch)</text><text x="16" y="120" transform="rotate(-90 16 120)" text-anchor="middle">Stress</text>'+
'<text x="190" y="196" text-anchor="middle" class="mu">area under curve = toughness</text>'+
'</g></svg>'};

GF.diagrams=D;
GF.topicDiagrams={'assay.2':['fireassay'],'assay.5':['fireassay'],'assay.6':['fireassay'],'extract.4':['blast'],'why.4':['crystal'],'why.7':['fec'],'heat.3':['fec'],'gold.5':['flot'],'extract.1':['flot'],'why.9':['electro'],'gold.9':['electro'],'extract.6':['electro'],'extract.7':['electro'],'extract.17':['electro'],'gold.8':['heap'],'corrosion.1':['galv'],'heat.4':['temper'],'gold.6':['cnph'],'safety.2':['cnph'],'why.11':['cnph'],'props.3':['mohs'],'workout.2':['mohs'],'props.4':['ss'],'props.1':['ss']};
})();
