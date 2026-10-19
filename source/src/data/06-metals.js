(function(){
function M(o){
  var b='';
  b+='> '+o.sym+' · Atomic no. '+o.z+' · Atomic mass '+o.m+'\n';
  b+='> Density '+o.d+' g/cm³ · Melts '+o.mp+(o.bp?' · Boils '+o.bp:'')+'\n';
  b+='> Crystal: '+o.cs+'\n\n';
  if(o.sum) b+=o.sum+'\n\n';
  var F=[['ores','Ores & sources'],['grade','Typical grade'],['assay','How it is assayed'],['conc','Concentration'],['ext','Extraction'],['eq','Key reactions'],['ref','Refining'],['pur','Purity grades'],['alloys','Main alloys'],['ht','Heat treatment & working'],['corr','Corrosion behavior'],['uses','Main uses'],['haz','Hazards'],['terms','Terms to know'],['notes','Notes & tricks']];
  F.forEach(function(f){
    var v=o[f[0]]; if(!v) return;
    b+='# '+f[1]+'\n';
    if(Array.isArray(v)){ v.forEach(function(x){ b+=(f[0]==='eq'?'> ':'- ')+x+'\n'; }); }
    else b+=v+'\n';
    b+='\n';
  });
  return {t:o.n+' ('+o.sym+')', b:b, g:o.g};
}
var D=[
{g:'Precious',n:'Gold',sym:'Au',z:79,m:'196.97',d:'19.32',mp:'1064 °C',bp:'2856 °C',cs:'FCC',
sum:'The most malleable metal; does not tarnish; usually found native. See the "Gold: Mine to Bar" section for the full process.',
ores:['Native gold and electrum (Au-Ag)','Tellurides: calaverite AuTe₂, sylvanite (Au,Ag)Te₂','"Invisible" gold locked in pyrite FeS₂ and arsenopyrite FeAsS','Placer (alluvial) gravels','By-product of copper smelting (anode slime)'],
grade:'g/t or oz/ton. Open pit about 0.5–3 g/t; underground about 5–10+ g/t.',
assay:['Fire assay with gravimetric or AAS finish (the standard)','Screen fire assay for coarse gold','Bottle roll / LeachWELL for cyanide-recoverable gold','Aqua regia digest + ICP-MS for low-level exploration'],
conc:'Gravity (centrifugal concentrators, tables, sluices); flotation if gold is in sulfides.',
ext:'Cyanide leaching (CIL/CIP tanks or heap), carbon adsorption, elution, electrowinning or Merrill-Crowe; refractory ores pre-treated by roasting, pressure oxidation, or bio-oxidation.',
eq:['4Au + 8CN⁻ + O₂ + 2H₂O → 4Au(CN)₂⁻ + 4OH⁻','2Au(CN)₂⁻ + Zn → 2Au + Zn(CN)₄²⁻','Au + HNO₃ + 4HCl → HAuCl₄ + NO + 2H₂O'],
ref:'Doré smelting → Miller chlorine process (about 99.5%) → Wohlwill electrolysis (99.99%); or aqua regia dissolution and SO₂/SMB precipitation.',
pur:'Doré (variable) · 995 Good Delivery · 999.9 "four nines" · 24K/22K/18K/14K/10K jewelry',
alloys:'Karat golds with silver, copper, zinc, palladium, nickel (yellow, rose, white, green).',
ht:'Annealed by heating to dull red and quenching; work hardens when rolled or drawn; some 14K and 18K alloys age-harden.',
corr:'Practically no corrosion. Dissolves only in aqua regia, cyanide + oxygen, chlorine/chloride, and some others.',
uses:['Investment bullion and coins','Jewelry (about half of demand)','Electronics contacts and bond wires','Dentistry','Central bank reserves','Spacecraft visors (reflects infrared)'],
haz:'Gold itself is non-toxic; the hazards are in processing — cyanide, mercury, aqua regia, nitric acid, lead in fire assay.',
terms:'doré, bullion, fineness, karat, troy ounce, prill, assay ton, free-milling, refractory, preg-robbing',
notes:['Fool\'s gold (pyrite) is brittle, harder (Mohs 6–6.5), and has a greenish-black streak; gold is soft, malleable, with a golden-yellow streak','Chalcopyrite is also mistaken for gold — it is brassier and powders when scratched','Tungsten (19.25 g/cm³) has almost the same density as gold — fake gold bars have been made from gold-plated tungsten. Detect with ultrasonic testing, conductivity, or drilling.']},

{g:'Precious',n:'Silver',sym:'Ag',z:47,m:'107.87',d:'10.49',mp:'961.8 °C',bp:'2162 °C',cs:'FCC',
sum:'Best electrical and thermal conductor of all metals. Most silver is a by-product of lead, zinc, copper, and gold mining.',
ores:['Acanthite/argentite Ag₂S','Native silver','Ruby silvers: pyrargyrite Ag₃SbS₃, proustite Ag₃AsS₃','Chlorargyrite AgCl (oxidized zones)','Silver in galena and tetrahedrite'],
grade:'g/t or oz/ton; primary silver mines often 100–500 g/t.',
assay:['Fire assay — silver = bead weight minus gold (no silver inquart, or subtract the inquart)','Four-acid digest + ICP or AAS for lower levels','Volhard titration (thiocyanate) for bullion'],
conc:'Flotation with lead/zinc/copper sulfides; gravity for native silver.',
ext:['Smelted with lead or copper concentrates, then recovered by Parkes process or from anode slimes','Cyanide leaching with Merrill-Crowe zinc precipitation (high silver overloads carbon)'],
eq:['4Ag + 8CN⁻ + O₂ + 2H₂O → 4Ag(CN)₂⁻ + 4OH⁻','2Ag(CN)₂⁻ + Zn → 2Ag + Zn(CN)₄²⁻','3Ag + 4HNO₃ → 3AgNO₃ + NO + 2H₂O'],
ref:'Electrolytic refining in silver nitrate (Moebius / Balbach-Thum cells) → 999 to 999.9 fine.',
pur:'Fine 999 · Sterling 925 · Coin 900 · Britannia 958',
alloys:'Sterling silver (92.5 Ag–7.5 Cu), silver brazing alloys (Ag-Cu-Zn), silver solders, dental amalgam (historic).',
ht:'Anneal at about 600–650 °C and quench; sterling can be age hardened.',
corr:'Doesn\'t oxidize in air, but tarnishes black from sulfur compounds (Ag₂S).',
uses:['Solar panel contacts (big growing use)','Electronics and electrical contacts','Jewelry and silverware','Brazing alloys','Bullion and coins','Antimicrobial coatings, medical','Mirrors, batteries, catalysts'],
haz:'Silver nitrate burns and stains skin black. Long exposure to silver compounds can cause argyria (blue-gray skin).',
terms:'sterling, fine silver, tarnish, inquart, parting, Parkes process, anode slime',
notes:['Molten silver dissolves lots of oxygen and releases it on freezing — beads "spit" or "sprout" if cooled too fast in cupellation','Silver chloride (AgCl) is white and darkens in light']},

{g:'Precious',n:'Platinum',sym:'Pt',z:78,m:'195.08',d:'21.45',mp:'1768 °C',bp:'3825 °C',cs:'FCC',
sum:'Dense, very corrosion-resistant, outstanding catalyst. One of the six platinum-group metals (PGMs).',
ores:['Sperrylite PtAs₂','Cooperite (Pt,Pd)S','Native platinum in placers','Ni-Cu sulfide ores (Bushveld Merensky Reef & UG2, Norilsk, Great Dyke, Stillwater, Sudbury)'],
grade:'A few g/t combined PGMs (reported as 3E = Pt + Pd + Au, or 4E = + Rh).',
assay:['Lead fire assay (collects Pt, Pd, Au) with ICP finish','Nickel sulfide fire assay (collects all six PGMs)'],
conc:'Flotation of the sulfides; gravity for placer platinum.',
ext:'Electric furnace matte smelting → converting → base metal refinery leaches out Ni and Cu → PGM concentrate.',
eq:['Pt dissolves in aqua regia as H₂PtCl₆','H₂PtCl₆ + 2NH₄Cl → (NH₄)₂PtCl₆ (yellow precipitate) + 2HCl','(NH₄)₂PtCl₆ → heat → Pt sponge'],
ref:'Precious metal refinery: chlorine/HCl leach, solvent extraction and selective precipitation → sponge → ingot 999.5.',
pur:'Sponge 999.5; jewelry 950 Pt',
alloys:'Pt-Rh (thermocouples, glass fiber bushings), Pt-Ir (standards, medical), Pt-Ru and Pt-Co jewelry.',
ht:'Annealed; ductile and malleable.',
corr:'Excellent; only aqua regia and some molten salts attack it.',
uses:['Catalytic converters (diesel)','Jewelry','Chemical catalysts (nitric acid production, petroleum reforming)','Lab crucibles and electrodes','Thermocouples','Fuel cells and electrolyzers','Medical implants and cancer drugs (cisplatin)'],
haz:'Metal is inert; platinum salts cause allergic sensitization in refinery workers.',
terms:'PGM, 3E/4E, matte, sponge, ammonium chloroplatinate, base metal refinery'},

{g:'Precious',n:'Palladium',sym:'Pd',z:46,m:'106.42',d:'12.02',mp:'1555 °C',bp:'2963 °C',cs:'FCC',
sum:'Lightest PGM; absorbs huge amounts of hydrogen.',
ores:['By-product of Ni-Cu mining (Norilsk is the largest source) and PGM mines in South Africa'],
assay:['Lead or nickel sulfide fire assay with ICP finish'],
ext:'Same matte smelting and PGM refining route as platinum.',
ref:'Solvent extraction / precipitation (as Pd(NH₃)₂Cl₂), reduced to sponge.',
pur:'999.5 sponge',
alloys:'White gold (Au-Pd), dental alloys, Pd-Ag hydrogen membranes.',
corr:'Very good, but it dissolves in hot nitric acid (unlike platinum and gold).',
uses:['Gasoline catalytic converters (largest use)','Electronics (capacitors, plating)','Dentistry','White gold jewelry','Hydrogen purification'],
notes:['Absorbs up to about 900 times its own volume of hydrogen','In fire assay parting, some palladium dissolves into the nitric acid and can be lost or colors the solution']},

{g:'Precious',n:'Rhodium',sym:'Rh',z:45,m:'102.91',d:'12.41',mp:'1964 °C',bp:'3695 °C',cs:'FCC',
sum:'The rarest and usually most expensive PGM; extremely hard to dissolve.',
ores:['By-product of platinum mining (mainly South Africa)'],
assay:['Nickel sulfide fire assay + ICP'],
ref:'Complex chloride chemistry; precipitated and reduced to powder/sponge.',
uses:['Catalytic converters — reduces NOx to nitrogen','Plating white gold and silver (bright, tarnish-free)','Pt-Rh thermocouples (Type R, S, B)','Glass fiber bushings'],
corr:'Resists even aqua regia in solid form.'},

{g:'Base',n:'Copper',sym:'Cu',z:29,m:'63.55',d:'8.96',mp:'1085 °C',bp:'2562 °C',cs:'FCC',
sum:'Second-best electrical conductor; easy to form and join; the main "base metal" of electrical and plumbing work.',
ores:['Chalcopyrite CuFeS₂ (most important)','Chalcocite Cu₂S, bornite Cu₅FeS₄, covellite CuS','Malachite, azurite, cuprite, chrysocolla (oxides)','Native copper (Michigan Keweenaw)'],
grade:'Percent Cu — most modern mines about 0.3–1.0% Cu; porphyry deposits are huge and low-grade.',
assay:['Aqua regia or four-acid digest + AAS/ICP','Iodometric titration (concentrates and high grade)','Electrogravimetric (plate onto a platinum cathode and weigh)','Sequential leach (acid-soluble vs cyanide-soluble vs residual) to choose a process'],
conc:'Froth flotation with xanthate collectors at alkaline pH (lime depresses pyrite) → 20–30% Cu concentrate.',
ext:['Sulfides: flash smelting → matte → Peirce-Smith converter → blister → fire refining → anodes','Oxides: heap leach with sulfuric acid → solvent extraction → electrowinning (SX-EW)'],
eq:['2CuFeS₂ + 4O₂ → Cu₂S + 2FeO + 3SO₂','Cu₂S + O₂ → 2Cu + SO₂','CuO + H₂SO₄ → CuSO₄ + H₂O','Cu²⁺ + 2e⁻ → Cu (cathode)'],
ref:'Electrorefining in CuSO₄–H₂SO₄ → 99.99% cathode; anode slime → gold, silver, selenium, tellurium.',
pur:'Grade A cathode 99.99% · ETP (electrolytic tough pitch, C11000) · OFHC/OF (oxygen-free, C10200)',
alloys:'Brass (Cu-Zn), bronze (Cu-Sn), aluminum bronze, cupronickel (Cu-Ni), beryllium copper, nickel silver (Cu-Ni-Zn).',
ht:'Work hardens fast; anneal at about 400–650 °C (can be water quenched — no hardening). Beryllium copper is age hardened.',
corr:'Good. Forms a green patina (basic copper carbonate/sulfate) outdoors. Attacked by ammonia and oxidizing acids (nitric).',
uses:['Electrical wire, motors, transformers, busbars (about 60%)','Plumbing and HVAC tubing','Heat exchangers','Electronics','Roofing','Coins','EVs and renewable energy (large copper use)'],
haz:'SO₂ and arsenic from smelting; copper salts toxic to fish; acid mine drainage.',
terms:'matte, blister copper, anode, cathode, anode slime, SX-EW, PLS, raffinate, ETP, OFHC',
notes:['Copper sulfate turns iron nails copper-colored (cementation)','Copper in gold ore eats cyanide (a "cyanicide") and lowers gold recovery','Copper gives a green flame and a greenish stain on cupels']},

{g:'Base',n:'Lead',sym:'Pb',z:82,m:'207.2',d:'11.34',mp:'327.5 °C',bp:'1749 °C',cs:'FCC',
sum:'Very dense, soft, low melting, and corrosion resistant. The collector metal in fire assay.',
ores:['Galena PbS (main)','Cerussite PbCO₃, anglesite PbSO₄','Usually mined with zinc and silver'],
grade:'Percent Pb, often 2–10% in Pb-Zn ores.',
assay:['Acid digest + AAS/ICP','EDTA or molybdate titration for concentrates','XRF'],
conc:'Selective flotation (galena floated first, sphalerite depressed with zinc sulfate/cyanide).',
ext:'Sinter roast + blast furnace, or direct smelting (QSL, Kivcet, ISASMELT). Most lead today is recycled from batteries.',
eq:['2PbS + 3O₂ → 2PbO + 2SO₂','PbO + CO → Pb + CO₂','2PbO + C → 2Pb + CO₂ (fire assay)'],
ref:'Kettle refining: drossing (Cu), softening (Sb, As, Sn), Parkes desilvering (Zn), dezincing, Betterton-Kroll debismuthizing; or Betts electrolysis.',
pur:'Refined 99.97–99.99%',
alloys:'Lead-antimony and lead-calcium battery grids, Pb-Sn solders (declining), babbitt bearings, type metal.',
ht:'Recrystallizes below room temperature — it never work hardens at room temperature.',
corr:'Very good; protective sulfate/carbonate film. Used historically for acid tanks and roofs.',
uses:['Lead-acid batteries (about 80%)','Radiation shielding','Fire assay litharge and test lead','Cable sheathing','Ammunition, weights, ballast'],
haz:'Toxic and cumulative (nervous system, kidneys, blood). Fumes from assay and smelting; dust on hands and clothes. Blood lead testing, fume hoods, no eating in labs, wash hands, change clothes.',
terms:'galena, bullion, dross, softening, Parkes process, litharge, button, cupellation'},

{g:'Base',n:'Zinc',sym:'Zn',z:30,m:'65.38',d:'7.14',mp:'419.5 °C',bp:'907 °C',cs:'HCP',
sum:'Low boiling point and highly reactive — the go-to sacrificial metal for protecting steel.',
ores:['Sphalerite ZnS (zinc blende)','Smithsonite ZnCO₃, hemimorphite (oxides)','EAF steel dust (recycling)'],
grade:'Percent Zn, often 4–12%.',
assay:['Acid digest + AAS/ICP','EDTA titration for concentrates'],
conc:'Flotation, after copper/lead — sphalerite "activated" with copper sulfate, floated with xanthate at high pH.',
ext:'Roast → sulfuric acid leach → iron removal → zinc-dust purification → electrowinning (RLE). Or Imperial Smelting Process (zinc distilled as vapor).',
eq:['2ZnS + 3O₂ → 2ZnO + 2SO₂','ZnO + H₂SO₄ → ZnSO₄ + H₂O','Zn + Cu²⁺ → Zn²⁺ + Cu (purification)','Zn²⁺ + 2e⁻ → Zn (cathode)'],
ref:'Electrowinning gives Special High Grade (SHG) 99.995%; distillation for pyro zinc.',
pur:'SHG 99.995% · High Grade · Prime Western',
alloys:'Brass (with Cu), Zamak die-casting alloys (Zn-Al-Mg-Cu), galvanizing alloys, Galvalume (Al-Zn).',
corr:'Corrodes slowly in air to a protective zinc carbonate layer; in wet storage forms "white rust." Sacrificial to steel.',
uses:['Galvanizing steel (about half)','Die castings (Zamak)','Brass','Batteries (alkaline, zinc-air)','Zinc oxide (rubber, paint, sunscreen)','Merrill-Crowe gold precipitation (zinc dust)','Sacrificial anodes'],
haz:'Zinc oxide fume from welding galvanized steel causes metal fume fever (flu-like).',
terms:'sphalerite, calcine, RLE, cementation, jarosite, SHG, galvanizing, white rust'},

{g:'Base',n:'Tin',sym:'Sn',z:50,m:'118.71',d:'7.29 (white tin)',mp:'231.9 °C',bp:'2602 °C',cs:'Body-centered tetragonal (white β-tin); gray α-tin below 13.2 °C',
sum:'Low-melting, non-toxic, corrosion resistant; the base of solder.',
ores:['Cassiterite SnO₂ (practically the only ore)','Placer (alluvial) and hard-rock deposits'],
grade:'Percent Sn, often under 1% in hard rock.',
assay:['Fusion and iodate titration','XRF','Acid digests don\'t dissolve cassiterite well — fusion is needed'],
conc:'Gravity (cassiterite is heavy, SG about 7), then flotation and magnetic cleaning.',
ext:'Roast to remove S and As, then smelt with carbon in reverberatory or electric furnaces; re-smelt slag.',
eq:['SnO₂ + 2C → Sn + 2CO'],
ref:'Liquation, boiling/poling, or electrolytic refining.',
pur:'99.85–99.99%',
alloys:'Solders (Sn-Pb, SAC lead-free), bronze, pewter, babbitt, tinplate coating.',
corr:'Good; non-toxic coating for food cans.',
uses:['Solder (about half)','Tinplate cans','Chemicals and PVC stabilizers','Bronze','Float glass (glass floats on molten tin)','Batteries'],
notes:['"Tin pest": below 13.2 °C, white tin slowly changes to brittle gray tin powder','"Tin cry": a crackling sound when a tin bar is bent (twinning)']},

{g:'Base',n:'Nickel',sym:'Ni',z:28,m:'58.69',d:'8.91',mp:'1455 °C',bp:'2913 °C',cs:'FCC; ferromagnetic',
sum:'Tough, corrosion and heat resistant; makes stainless steel austenitic.',
ores:['Pentlandite (Fe,Ni)₉S₈ in sulfide ores','Laterites — limonite and saprolite/garnierite (tropical weathered soils)'],
grade:'Sulfide about 1–3% Ni; laterite about 1–2% Ni.',
assay:['Acid digest + AAS/ICP','Dimethylglyoxime (DMG) gravimetric (red precipitate)','XRF'],
conc:'Flotation for sulfides; laterites are not concentrated well.',
ext:['Sulfides: flash smelting → matte → converter matte → refining','Laterites: HPAL (acid in autoclaves) or RKEF → ferronickel / nickel pig iron'],
eq:['Ni + 4CO ⇌ Ni(CO)₄ (Mond process: forms at about 50 °C, decomposes at about 200–230 °C)'],
ref:'Mond carbonyl process, electrorefining, or ammonia pressure leach + hydrogen reduction.',
pur:'Class 1 (99.8%+, for batteries and alloys) · Class 2 (ferronickel, NPI for stainless)',
alloys:'Stainless steel, Inconel and other superalloys, Monel (Ni-Cu), Invar (Fe-36Ni, near-zero expansion), Nichrome (heating wire), cupronickel, Alnico magnets.',
corr:'Very good in many environments; nickel plating protects steel.',
uses:['Stainless steel (about two-thirds)','Battery cathodes (NMC, NCA)','Superalloys','Electroplating','Coins'],
haz:'Nickel carbonyl is extremely toxic. Many people are allergic to nickel on skin. Some nickel compounds are carcinogenic.',
terms:'pentlandite, laterite, matte, Mond process, HPAL, ferronickel, Class 1'},

{g:'Base',n:'Cadmium',sym:'Cd',z:48,m:'112.41',d:'8.65',mp:'321 °C',bp:'767 °C',cs:'HCP',
sum:'Soft, low melting; almost all from zinc refining.',
ores:['By-product of zinc processing; greenockite CdS (rare)'],
ext:'Collected in zinc-dust purification residue, leached, and electrowon or distilled.',
uses:['Ni-Cd batteries (declining)','Cadmium plating on aerospace fasteners','Pigments (yellow, red)','CdTe solar panels'],
haz:'Highly toxic (kidneys, lungs, bone); carcinogen. Cadmium-bearing silver solder fumes have killed people — never braze with it in poor ventilation.',
corr:'Good sacrificial protection for steel in marine air.'},

{g:'Ferrous',n:'Iron',sym:'Fe',z:26,m:'55.85',d:'7.87',mp:'1538 °C',bp:'2862 °C',cs:'BCC (α, below 912 °C) · FCC (γ, 912–1394 °C) · BCC (δ, 1394–1538 °C); ferromagnetic below 770 °C',
sum:'About 95% of all metal used by tonnage. The base of steel and cast iron.',
ores:['Hematite Fe₂O₃','Magnetite Fe₃O₄','Goethite FeO(OH), limonite','Siderite FeCO₃','Taconite (low-grade banded iron formation)'],
grade:'Direct-shipping ore about 55–65% Fe; taconite about 25–30% Fe upgraded to 65%+ pellets.',
assay:['Potassium dichromate titration (total iron)','XRF on fused glass beads','Satmagan (magnetic iron)'],
conc:'Magnetic separation (magnetite), gravity, reverse flotation (removes silica), then pelletizing.',
ext:'Blast furnace (coke) → hot metal; or direct reduction (gas/hydrogen) → DRI.',
eq:['C + O₂ → CO₂','CO₂ + C → 2CO','Fe₂O₃ + 3CO → 2Fe + 3CO₂','CaCO₃ → CaO + CO₂','CaO + SiO₂ → CaSiO₃'],
ref:'Steelmaking: BOF or EAF oxidizes carbon, Si, Mn, P; ladle metallurgy finishes chemistry.',
pur:'Hot metal/pig iron about 4% C; steel usually under 1% C; "pure" iron (ingot iron, electrolytic iron) for magnets and labs.',
alloys:'Steels, cast irons, stainless steels, tool steels, ferroalloys.',
ht:'See Heat Treatment — iron\'s allotropic change (BCC ↔ FCC) is what makes steel hardenable.',
corr:'Rusts readily in moist air; rust is porous and doesn\'t protect.',
uses:['Construction, vehicles, machinery, pipelines, ships, appliances, tools — nearly everything'],
haz:'Molten iron and slag; CO gas around blast furnaces; dust.',
terms:'pig iron, hot metal, coke, sinter, pellets, DRI, HBI, tuyere, slag, taconite',
notes:['Magnetite is magnetic and gives a black streak; hematite gives a red-brown streak','Iron gives a dark reddish-brown stain on cupels']},

{g:'Ferrous',n:'Carbon Steel',sym:'Fe + C',z:'—',m:'—',d:'about 7.85',mp:'about 1425–1540 °C',cs:'Ferrite (BCC) + pearlite at room temperature; austenite (FCC) when hot',
sum:'Iron with up to about 2.1% carbon (usually under 1%) plus manganese. The most used engineering material.',
ext:'Made in a basic oxygen furnace (from hot metal + scrap) or electric arc furnace (from scrap/DRI), then continuously cast and rolled.',
alloys:'Low carbon (under 0.3%) · Medium (0.3–0.6%) · High (over 0.6%). AISI 10xx numbering — last two digits = carbon in hundredths of a percent (1045 = 0.45% C).',
ht:'Annealing, normalizing, hardening (quench to martensite) and tempering, case hardening. Low-carbon steel barely hardens by quenching.',
corr:'Rusts; protect with paint, galvanizing, oil, or cathodic protection.',
uses:['Low C: car bodies, beams, pipe, wire, nails','Medium C: shafts, gears, axles, rails','High C: springs, knives, cutting tools, music wire'],
terms:'mild steel, killed steel, hot-rolled, cold-rolled, AISI/SAE number, pearlite, martensite',
notes:['Spark test: low-carbon steel gives long, straight yellow streaks with few bursts; higher carbon gives more and bushier star-like bursts']},

{g:'Ferrous',n:'Stainless Steel',sym:'Fe + Cr (+Ni)',z:'—',m:'—',d:'about 7.7–8.0',mp:'about 1400–1450 °C',cs:'Austenitic (FCC), ferritic (BCC), martensitic (BCT), duplex (both)',
sum:'Steel with at least 10.5% chromium, which forms a self-healing Cr₂O₃ passive film.',
ext:'Melted in an EAF from scrap + ferrochrome + ferronickel, then refined in an AOD converter (argon-oxygen decarburization) to remove carbon without losing chromium.',
alloys:'304 (18-8), 316 (+Mo), 304L/316L (low C), 430 (ferritic), 410/420/440C (martensitic), 2205 (duplex), 17-4 PH.',
ht:'Austenitic: solution anneal about 1040–1100 °C + quench (can\'t harden by heat — only by cold work). Martensitic: harden and temper. PH: solution + age.',
corr:'Excellent in most environments; weak points are chlorides (pitting, crevice, SCC) and sensitization after welding.',
uses:['Kitchen and food equipment','Chemical and pharmaceutical plants','Medical instruments and implants','Architecture','Exhaust systems','Cutlery'],
haz:'Welding fumes contain hexavalent chromium (carcinogen) — use ventilation/fume extraction.',
terms:'passive film, austenitic, ferritic, martensitic, duplex, sensitization, passivation, PREN, AOD',
notes:['Magnet test: 300-series austenitic is (mostly) non-magnetic; 400-series is magnetic. Cold-worked 304 can become slightly magnetic.']},

{g:'Ferrous',n:'Cast Iron',sym:'Fe + C (2–4%) + Si',z:'—',m:'—',d:'about 6.8–7.4',mp:'about 1150–1300 °C',cs:'Ferrite/pearlite matrix with graphite or cementite',
sum:'Iron with over about 2.1% carbon. Melts lower than steel and casts very well.',
ext:'Melted in cupolas or induction furnaces from pig iron, steel scrap, and returns; adjusted with ferrosilicon; ductile iron treated with magnesium.',
alloys:'Gray (graphite flakes), ductile/nodular (graphite spheres), white (cementite), malleable, compacted graphite, high-chrome white iron, Ni-Hard.',
ht:'Stress relief; annealing (ferritizing); austempering ductile iron (ADI); white iron annealed to malleable.',
corr:'Similar to steel; gray iron can suffer graphitization in soil and water.',
uses:['Engine blocks, brake rotors, machine bases (gray)','Pipes, crankshafts, suspension parts (ductile)','Mill liners, pump parts (white)','Cookware'],
notes:['Gray iron breaks with a gray fracture and makes black graphite marks on your hands; it gives short, red, dull sparks']},

{g:'Ferrous',n:'Tool Steel',sym:'Fe + C + W/Mo/Cr/V/Co',z:'—',m:'—',d:'about 7.7–8.7',mp:'about 1400 °C',cs:'Tempered martensite + hard alloy carbides',
sum:'High-carbon alloy steels made to cut, form, or shape other materials.',
alloys:'W1 (water), O1 (oil), A2 (air), D2 (high Cr), S7 (shock), H13 (hot work), M2 (moly high-speed), T1 (tungsten high-speed), P20 (molds).',
ht:'Preheat in stages, austenitize at the grade\'s specific temperature (high-speed steels about 1200 °C), quench in the right medium, double or triple temper; often cryogenic treatment.',
uses:['Drill bits, taps, end mills','Dies, punches, molds','Knives, chisels, shear blades','Forging and die-casting dies'],
notes:['Always follow the steel maker\'s data sheet — tool steels are very sensitive to temperature and time']},

{g:'Ferrous',n:'Manganese',sym:'Mn',z:25,m:'54.94',d:'7.21',mp:'1246 °C',bp:'2061 °C',cs:'Complex cubic (α-Mn)',
sum:'Hard, brittle metal; essential in every steel.',
ores:['Pyrolusite MnO₂','Psilomelane, braunite, rhodochrosite MnCO₃'],
grade:'Commercial ore about 35–50% Mn.',
ext:'Ferromanganese and silicomanganese in submerged arc (or blast) furnaces with coke; electrolytic manganese from MnSO₄ solution.',
eq:['MnO₂ + 2C → Mn + 2CO (simplified)','Mn + S → MnS (in steel, ties up sulfur)'],
alloys:'Ferromanganese, silicomanganese, Hadfield steel (11–14% Mn, work hardens under impact), aluminum 3xxx, manganese bronze.',
uses:['Steel (about 90%) — deoxidizer, desulfurizer, strength, hardenability','Batteries (MnO₂, NMC cathodes)','Aluminum cans (3004)'],
haz:'Inhaled manganese fume (welding, smelting) can cause manganism — a Parkinson-like nerve disease.'},

{g:'Ferrous',n:'Chromium',sym:'Cr',z:24,m:'52.00',d:'7.19',mp:'1907 °C',bp:'2671 °C',cs:'BCC',
sum:'Hard, shiny, corrosion resistant; the element that makes stainless steel stainless.',
ores:['Chromite FeCr₂O₄ (only commercial ore) — South Africa, Kazakhstan, India, Turkey'],
grade:'Ore about 40–50% Cr₂O₃.',
conc:'Gravity (spirals, tables) and magnetic separation.',
ext:['Ferrochrome: chromite + coke + quartz in a submerged arc furnace','Pure Cr: aluminothermic reduction or electrolysis'],
eq:['FeCr₂O₄ + 4C → Fe + 2Cr + 4CO','Cr₂O₃ + 2Al → 2Cr + Al₂O₃'],
alloys:'Stainless steel, chromoly (41xx), Nichrome, superalloys, Stellite, high-chrome white iron.',
corr:'Forms a thin, tough Cr₂O₃ film — protects itself and its alloys.',
uses:['Stainless steel (about 85% of chromium)','Alloy steels','Decorative and hard chrome plating','Refractories (chrome-magnesite brick)','Pigments, leather tanning'],
haz:'Hexavalent chromium Cr(VI) — from chrome plating, stainless welding, chromate pigments — is a carcinogen. Trivalent Cr(III) is far less harmful.',
terms:'chromite, ferrochrome, passive film, hard chrome, hexavalent'},

{g:'Ferrous',n:'Molybdenum',sym:'Mo',z:42,m:'95.95',d:'10.28',mp:'2623 °C',bp:'4639 °C',cs:'BCC',
sum:'Refractory metal; small additions greatly improve steel hardenability, strength, and corrosion resistance.',
ores:['Molybdenite MoS₂ (soft, gray, greasy — looks like graphite but heavier with a greenish streak)','Mostly a by-product of porphyry copper mines'],
grade:'Primary mines about 0.1–0.2% Mo; by-product at even lower grades.',
conc:'Flotation (molybdenite floats naturally; separated from copper concentrate with sodium hydrosulfide depressing copper).',
ext:'Roast MoS₂ to MoO₃ (technical moly oxide); ferromolybdenum by thermite reduction; pure Mo powder by hydrogen reduction.',
eq:['2MoS₂ + 7O₂ → 2MoO₃ + 4SO₂','MoO₃ + 3H₂ → Mo + 3H₂O'],
ref:'Sublimation of MoO₃ or chemical purification (ammonium molybdate).',
alloys:'4130/4140 chromoly, 316 stainless, tool steels (M-series), Hastelloy, TZM.',
ht:'Formed by powder metallurgy (too high melting to cast normally).',
corr:'Oxidizes quickly above about 600 °C in air (MoO₃ evaporates) — used in vacuum or protective atmosphere at high temperature.',
uses:['Alloy and stainless steels (about 80%)','Furnace heating elements and hot zones','Glass melting electrodes','Catalysts (oil refining)','MoS₂ dry lubricant'],
terms:'molybdenite, roasting, technical moly oxide, ferromoly, refractory metal'},

{g:'Ferrous',n:'Tungsten',sym:'W',z:74,m:'183.84',d:'19.25',mp:'3422 °C (highest of all metals)',bp:'5555 °C',cs:'BCC',
sum:'Highest melting point of any metal; as dense as gold.',
ores:['Wolframite (Fe,Mn)WO₄','Scheelite CaWO₄ (glows blue-white under UV light — used in prospecting)'],
grade:'About 0.3–1% WO₃.',
assay:['XRF','Fusion + ICP; colorimetric'],
conc:'Gravity (very heavy), magnetic (wolframite), flotation (scheelite).',
ext:'Alkaline digestion → sodium tungstate → purified ammonium paratungstate (APT) → WO₃ → hydrogen reduction → powder.',
eq:['WO₃ + 3H₂ → W + 3H₂O','W + C → WC (tungsten carbide)'],
alloys:'Tungsten carbide (WC-Co), high-speed steels, heavy alloys (W-Ni-Fe), Stellite.',
ht:'Powder metallurgy: press and sinter, then forge/swage/draw.',
uses:['Cemented carbide cutting and mining tools (about 60%)','High-speed and tool steels','TIG welding electrodes','Light bulb filaments (historic), X-ray targets','Radiation shielding, counterweights, kinetic penetrators'],
notes:['Gold-plated tungsten bars and coins are a known counterfeit — the density nearly matches gold. Use ultrasonic, eddy current, or drill testing.','Scheelite fluoresces under short-wave UV — a prospecting trick']},

{g:'Ferrous',n:'Vanadium',sym:'V',z:23,m:'50.94',d:'6.0',mp:'1910 °C',bp:'3407 °C',cs:'BCC',
sum:'Small additions make very fine grains and hard carbides in steel.',
ores:['Vanadium-bearing titanomagnetite (recovered from steel slag)','Vanadinite Pb₅(VO₄)₃Cl, carnotite, patronite','By-product of oil refinery residues and uranium'],
ext:'Salt roast with soda ash → water-soluble sodium vanadate → ammonium metavanadate → V₂O₅ → ferrovanadium by aluminothermic reduction.',
eq:['3V₂O₅ + 10Al → 6V + 5Al₂O₃'],
alloys:'HSLA and microalloyed steels, rebar, tool steels, Ti-6Al-4V.',
uses:['Steel (about 85–90%)','Titanium alloys','Vanadium redox flow batteries','V₂O₅ catalyst in sulfuric acid plants'],
haz:'V₂O₅ dust is toxic to lungs.'},

{g:'Ferrous',n:'Cobalt',sym:'Co',z:27,m:'58.93',d:'8.90',mp:'1495 °C',bp:'2927 °C',cs:'HCP below about 420 °C, FCC above; ferromagnetic (Curie point about 1115 °C)',
sum:'Keeps strength and hardness at high temperature; key battery metal.',
ores:['Mostly by-product of copper (Central African Copperbelt) and nickel mining','Cobaltite CoAsS, carrollite, heterogenite'],
ext:'Leached with copper (acid) or nickel; purified by precipitation and solvent extraction; cobalt hydroxide intermediate; electrowon to metal or made into battery chemicals.',
alloys:'Superalloys, Stellite (Co-Cr-W wear alloys), Co-Cr medical implants, Alnico and SmCo magnets, HSS (M42), WC-Co binder.',
uses:['Lithium-ion battery cathodes','Superalloys for jet engines','Carbide tool binder','Magnets','Medical implants','Blue pigment'],
haz:'Cobalt dust causes lung disease; ethical concerns over artisanal mining in the DRC.'},

{g:'Light',n:'Aluminum',sym:'Al',z:13,m:'26.98',d:'2.70',mp:'660.3 °C',bp:'2470 °C',cs:'FCC',
sum:'Most abundant metal in Earth\'s crust (about 8%); light, conductive, corrosion resistant; endlessly recyclable.',
ores:['Bauxite (gibbsite Al(OH)₃, boehmite and diaspore AlO(OH))'],
grade:'Bauxite about 40–60% Al₂O₃.',
assay:['XRF of fused beads','Available alumina and reactive silica tests (Bayer digestion)'],
conc:'Washing and screening to remove clay.',
ext:'Bayer process (bauxite → alumina) then Hall-Héroult electrolysis (alumina in molten cryolite).',
eq:['Al(OH)₃ + NaOH → NaAl(OH)₄','2Al(OH)₃ → Al₂O₃ + 3H₂O','2Al₂O₃ + 3C → 4Al + 3CO₂','Al³⁺ + 3e⁻ → Al'],
ref:'Three-layer electrolytic refining (Hoopes) for 99.99%; most use 99.7% primary.',
pur:'P1020 (99.7%) primary · 99.99% high purity',
alloys:'1xxx–8xxx wrought series; cast alloys like A356 and 380.',
ht:'2xxx, 6xxx, 7xxx: solution treat + age (T4, T6). 1xxx, 3xxx, 5xxx: strain hardened (H tempers). Anneal = O temper.',
corr:'Very good — self-healing Al₂O₃ film; anodizing makes it thicker. Attacked by strong alkalis and by chlorides (pitting); galvanic with steel and copper.',
uses:['Transport (cars, aircraft, trains)','Packaging (cans, foil)','Construction (windows, siding)','Power lines and electrical','Cookware','Thermite and deoxidizing steel'],
haz:'Fine powder is explosive. Molten aluminum + water = violent explosion. Bauxite residue (red mud) is caustic.',
terms:'bauxite, alumina, red mud, cryolite, pot, anode effect, temper, anodizing'},

{g:'Light',n:'Magnesium',sym:'Mg',z:12,m:'24.31',d:'1.74',mp:'650 °C',bp:'1091 °C',cs:'HCP',
sum:'The lightest structural metal.',
ores:['Seawater and brines (MgCl₂)','Dolomite CaMg(CO₃)₂','Magnesite MgCO₃','Carnallite'],
ext:'Pidgeon process (ferrosilicon reduction of calcined dolomite under vacuum) or electrolysis of molten MgCl₂.',
eq:['2(MgO·CaO) + Si → 2Mg + Ca₂SiO₄','MgCl₂ → Mg + Cl₂ (electrolysis)'],
alloys:'AZ91, AZ31, AM60, ZK60, WE43.',
ht:'Some alloys T4/T6 aged; formed warm (about 200–300 °C) because HCP is not very ductile cold.',
corr:'Poor — most active structural metal; needs coatings; galvanic attack if touching steel.',
uses:['Alloying aluminum (cans contain Mg)','Die castings (laptops, car parts)','Desulfurizing steel','Ductile iron (makes graphite nodules)','Kroll process reducer for titanium','Sacrificial anodes'],
haz:'Chips, powder, and molten Mg burn fiercely; water makes it worse — use Class D extinguisher or dry sand.'},

{g:'Light',n:'Titanium',sym:'Ti',z:22,m:'47.87',d:'4.51',mp:'1668 °C',bp:'3287 °C',cs:'HCP (α) below 882 °C, BCC (β) above',
sum:'Steel-like strength at 56% of the weight, outstanding corrosion resistance, biocompatible.',
ores:['Rutile TiO₂','Ilmenite FeTiO₃ (beach mineral sands, hard rock)','Leucoxene'],
conc:'Mineral sands: gravity (spirals), magnetic separation (ilmenite), electrostatic (rutile vs zircon).',
ext:'Upgrade ilmenite to slag or synthetic rutile → chlorinate to TiCl₄ → Kroll process (magnesium reduction) → sponge.',
eq:['TiO₂ + 2Cl₂ + 2C → TiCl₄ + 2CO','TiCl₄ + 2Mg → Ti + 2MgCl₂'],
ref:'Vacuum distillation of sponge, then vacuum arc remelting (VAR) or electron beam melting.',
pur:'Commercially pure Grades 1–4 (rising oxygen = stronger); Grade 5 = Ti-6Al-4V',
alloys:'Ti-6Al-4V (most common), Ti-3Al-2.5V, beta alloys (Ti-10V-2Fe-3Al), Nitinol (Ni-Ti shape memory).',
ht:'Alpha-beta and beta alloys solution treated and aged; stress relief; all done in vacuum or argon.',
corr:'Excellent (TiO₂ film) — seawater, chlorides, most acids. Attacked by hydrofluoric acid and hot reducing acids.',
uses:['Aerospace frames and engines','Medical implants','Chemical and desalination plants','Sports gear, jewelry','About 90% of titanium mineral goes to TiO₂ white pigment, not metal'],
haz:'Fine chips and powder are flammable. Hot titanium absorbs O, N, H and goes brittle.'},

{g:'Light',n:'Lithium',sym:'Li',z:3,m:'6.94',d:'0.534 (lightest metal — floats on water)',mp:'180.5 °C',bp:'1342 °C',cs:'BCC',
sum:'Lightest metal and solid element; highly reactive.',
ores:['Brines in salt flats (Chile, Argentina, Bolivia)','Spodumene LiAlSi₂O₆ hard rock (Australia)','Lepidolite, petalite, clays'],
ext:'Brine: solar evaporation → purify → soda ash precipitates Li₂CO₃. Spodumene: concentrate → calcine at about 1050 °C → acid roast → leach → Li₂CO₃ or LiOH. Metal by electrolysis of molten LiCl-KCl.',
eq:['2LiCl + Na₂CO₃ → Li₂CO₃ + 2NaCl','2Li + 2H₂O → 2LiOH + H₂'],
uses:['Lithium-ion batteries (largest use)','Ceramics and glass','Greases','Al-Li aerospace alloys','Pharmaceuticals'],
haz:'Reacts with water to make hydrogen and caustic LiOH; fires need Class D. Battery thermal runaway.'},

{g:'Light',n:'Beryllium',sym:'Be',z:4,m:'9.012',d:'1.85',mp:'1287 °C',bp:'2469 °C',cs:'HCP',
sum:'Very light and very stiff; transparent to X-rays.',
ores:['Beryl Be₃Al₂Si₆O₁₈ (emerald and aquamarine are gem beryl)','Bertrandite (Utah)'],
ext:'Processed to Be(OH)₂ → BeF₂ → reduced with magnesium.',
eq:['BeF₂ + Mg → Be + MgF₂'],
alloys:'Beryllium copper (about 2% Be) — strongest copper alloy, non-sparking; Be-Al.',
uses:['BeCu springs, connectors, non-sparking tools','Aerospace and satellite structures','X-ray windows','Space telescope mirrors'],
haz:'Inhaling beryllium dust or fume causes chronic beryllium disease (incurable lung disease) and is a carcinogen. Machining and grinding need strict controls.'},

{g:'Minor',n:'Mercury',sym:'Hg',z:80,m:'200.59',d:'13.53',mp:'−38.8 °C (liquid at room temperature)',bp:'356.7 °C',cs:'Rhombohedral when frozen',
sum:'The only metal that is liquid at room temperature. Dissolves gold and silver (amalgam).',
ores:['Cinnabar HgS (bright red)','By-product of gold, zinc, and natural gas processing'],
ext:'Roast cinnabar; condense the mercury vapor.',
eq:['HgS + O₂ → Hg + SO₂'],
uses:['Historic: gold/silver amalgamation, thermometers, barometers, mercury-cell chlor-alkali, fluorescent lamps, dental amalgam — all being phased out under the Minamata Convention'],
haz:'Mercury vapor damages the brain and kidneys; methylmercury builds up in fish. Gold plants must retort and capture mercury; workers get urine testing.',
notes:['Mercury boils at a low temperature, which is why retorting separates it from gold']},

{g:'Minor',n:'Antimony',sym:'Sb',z:51,m:'121.76',d:'6.69',mp:'630.6 °C',bp:'1587 °C',cs:'Rhombohedral (metalloid)',
sum:'Brittle metalloid; hardens lead.',
ores:['Stibnite Sb₂S₃'],
ext:'Iron precipitation of stibnite, or roast to Sb₂O₃ and reduce with carbon.',
eq:['Sb₂S₃ + 3Fe → 2Sb + 3FeS'],
uses:['Flame retardants (Sb₂O₃) — largest use','Lead-acid battery grids','Babbitt and type metal','Semiconductors'],
haz:'Toxic; Sb₂O₃ dust is a suspected carcinogen.',
notes:['Problem element in gold ores — consumes cyanide and causes speiss in fire assay; removed by "softening" in lead refining']},

{g:'Minor',n:'Bismuth',sym:'Bi',z:83,m:'208.98',d:'9.78',mp:'271.4 °C',bp:'1564 °C',cs:'Rhombohedral',
sum:'Heavy, brittle, and unusually low in toxicity. Expands about 3% when it freezes (like water).',
ores:['By-product of lead refining (Betterton-Kroll), tungsten, copper, tin','Bismuthinite Bi₂S₃'],
uses:['Low-melting fusible alloys (sprinkler plugs)','Lead-free shot, solders, and free-machining alloys','Pharmaceuticals (bismuth subsalicylate)','Cosmetics pigments'],
notes:['Strongly diamagnetic','Rainbow "hopper crystals" form from the oxide film']},

{g:'Minor',n:'Arsenic',sym:'As',z:33,m:'74.92',d:'5.73',mp:'Sublimes at 615 °C (no liquid at normal pressure)',cs:'Rhombohedral (metalloid)',
sum:'A metalloid that is mostly a problem element in gold and copper metallurgy.',
ores:['Arsenopyrite FeAsS (often gold-bearing)','Realgar, orpiment, enargite Cu₃AsS₄'],
ext:'Captured as arsenic trioxide As₂O₃ from roaster and smelter fumes.',
eq:['2FeAsS + 5O₂ → Fe₂O₃ + As₂O₃ + 2SO₂'],
uses:['Gallium arsenide (GaAs) semiconductors','Hardening lead shot','Historic wood preservative and pesticides'],
haz:'Highly toxic and carcinogenic. Arsenic in waste is stabilized as scorodite FeAsO₄·2H₂O. Arsine gas (AsH₃) can form from acids on arsenical materials — deadly.',
notes:['Arsenic is a "pathfinder" — high arsenic in soil often points to gold','In fire assay, arsenic forms speiss; use iron and extra niter']},

{g:'Minor',n:'Silicon',sym:'Si',z:14,m:'28.09',d:'2.33',mp:'1414 °C',bp:'3265 °C',cs:'Diamond cubic (metalloid)',
sum:'Second most abundant element in the crust (in quartz and silicates). A metalloid and semiconductor.',
ores:['Quartz SiO₂ — very high-purity quartzite for metal'],
ext:'Carbothermic reduction in a submerged arc furnace; ultra-pure by the Siemens process (trichlorosilane).',
eq:['SiO₂ + 2C → Si + 2CO'],
alloys:'Ferrosilicon, Al-Si casting alloys, electrical (silicon) steel, silicon bronze.',
uses:['Deoxidizer and alloy for steel and cast iron','Aluminum alloys','Silicones and chemicals','Solar cells and computer chips'],
haz:'Crystalline silica dust (not the metal) causes silicosis.'},

{g:'Minor',n:'Zirconium',sym:'Zr',z:40,m:'91.22',d:'6.52',mp:'1855 °C',bp:'4409 °C',cs:'HCP (α), BCC above about 863 °C',
sum:'Corrosion resistant and nearly invisible to neutrons.',
ores:['Zircon ZrSiO₄ from mineral sands','Baddeleyite ZrO₂'],
ext:'Chlorinate to ZrCl₄; separate hafnium (chemically almost identical) by solvent extraction; Kroll process with magnesium.',
alloys:'Zircaloy (Zr-Sn-Fe-Cr) nuclear fuel cladding.',
uses:['Nuclear fuel rod cladding','Chemical process equipment','Zirconia (ZrO₂) ceramics, crucibles, refractories, dental crowns, thermal barrier coatings','Foundry sand (zircon)'],
haz:'Fine powder is pyrophoric (ignites by itself).'},

{g:'Minor',n:'Rare Earth Elements',sym:'REE',z:'57–71 + Sc, Y',m:'—',d:'about 4.5–9.8',mp:'about 800–1660 °C',cs:'Mostly HCP',
sum:'17 elements — the lanthanides plus scandium and yttrium. Not actually rare, but rarely concentrated and very hard to separate from each other.',
ores:['Bastnäsite (REE fluorocarbonate)','Monazite (REE phosphate, often radioactive with thorium)','Ionic adsorption clays (southern China)','Xenotime'],
ext:'Concentrate → acid or caustic crack → leach → separate individual elements in long solvent extraction circuits (hundreds of mixer-settler stages) → oxides → metals by molten salt electrolysis or calcium reduction.',
uses:['Permanent magnets (neodymium, praseodymium, dysprosium, terbium) for EV motors and wind turbines','Catalysts (cerium, lanthanum)','Polishing (cerium oxide)','Phosphors and lasers','Nickel-metal hydride batteries'],
terms:'light vs heavy REE, NdFeB magnet, solvent extraction, cracking'}
];
var sec={id:'metals', title:'Metals Library', sub:'Full profiles of 34 metals & alloys', topics:[
{t:'How to Read a Metal Profile', b:`
Every metal entry uses the same headings, so you can compare them:

- **Top box** — symbol, atomic number, atomic mass, density, melting/boiling point, crystal structure
- **Ores & sources** — mineral names and formulas
- **Typical grade** — how much is in the ore
- **How it is assayed**
- **Concentration** — how the mineral is upgraded
- **Extraction** — the process used to make metal
- **Key reactions** — balanced equations
- **Refining** — how it's purified
- **Purity grades**, **main alloys**, **heat treatment**, **corrosion**, **uses**, **hazards**, **terms**, **notes**

# Groups in this library
- **Precious** — gold, silver, platinum, palladium, rhodium
- **Base** — copper, lead, zinc, tin, nickel, cadmium
- **Ferrous family** — iron, carbon steel, stainless, cast iron, tool steel, manganese, chromium, molybdenum, tungsten, vanadium, cobalt
- **Light** — aluminum, magnesium, titanium, lithium, beryllium
- **Minor & by-product** — mercury, antimony, bismuth, arsenic, silicon, zirconium, rare earths

For any metal not listed, use the **"Work Out Any Metal"** section.
`},
{t:'Quick Comparison Table', b:`
Metal — density (g/cm³) — melting point (°C) — structure

# Heaviest to lightest
- Platinum — 21.45 — 1768 — FCC
- Gold — 19.32 — 1064 — FCC
- Tungsten — 19.25 — 3422 — BCC
- Mercury — 13.53 — −39 — liquid
- Lead — 11.34 — 327 — FCC
- Silver — 10.49 — 962 — FCC
- Molybdenum — 10.28 — 2623 — BCC
- Bismuth — 9.78 — 271 — rhombohedral
- Copper — 8.96 — 1085 — FCC
- Nickel — 8.91 — 1455 — FCC
- Cobalt — 8.90 — 1495 — HCP
- Cadmium — 8.65 — 321 — HCP
- Iron — 7.87 — 1538 — BCC
- Tin — 7.29 — 232 — tetragonal
- Manganese — 7.21 — 1246 — complex cubic
- Chromium — 7.19 — 1907 — BCC
- Zinc — 7.14 — 420 — HCP
- Antimony — 6.69 — 631 — rhombohedral
- Zirconium — 6.52 — 1855 — HCP
- Vanadium — 6.0 — 1910 — BCC
- Titanium — 4.51 — 1668 — HCP
- Aluminum — 2.70 — 660 — FCC
- Silicon — 2.33 — 1414 — diamond cubic
- Beryllium — 1.85 — 1287 — HCP
- Magnesium — 1.74 — 650 — HCP
- Lithium — 0.53 — 181 — BCC

# Melting point order (lowest to highest, common metals)
Mercury −39 · Tin 232 · Bismuth 271 · Lead 327 · Zinc 420 · Magnesium 650 · Aluminum 660 · Silver 962 · Gold 1064 · Copper 1085 · Nickel 1455 · Iron 1538 · Titanium 1668 · Platinum 1768 · Chromium 1907 · Molybdenum 2623 · Tungsten 3422
`}
]};
D.forEach(function(o){ var t=M(o); sec.topics.push({t:t.t,b:t.b}); });
GF.sec(sec);
})();
