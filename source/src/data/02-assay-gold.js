GF.sec({id:'assay', title:'Assaying', sub:'Finding out how much metal is in the rock', topics:[
{t:'What Assaying Is', b:`
**Assaying** = measuring how much of a valuable metal is in a sample. The result is the **grade**.

The grade decides whether rock is ore or waste, where the mine digs, what the deposit is worth, and how well the plant is recovering metal.

# How grade is reported
- **g/t** — grams per metric tonne (same as **ppm**, parts per million)
- **oz/t** or **opt** — troy ounces per short ton (US)
- **%** — for base metals (copper ore at 0.6% Cu)
- **ppb** — parts per billion, for very low gold values in soil and exploration samples

Grade is always by **weight**, not volume. To estimate how much is in a block of ground, you multiply its volume by the rock's **density (specific gravity)** to get tonnes, then by grade.

> Tonnes = Volume (m³) × Specific gravity
> Contained metal (g) = Tonnes × Grade (g/t)

Example: a block 10 m × 10 m × 10 m = 1,000 m³. Rock SG 2.7 → 2,700 t. At 3 g/t gold → 8,100 g ≈ **260 troy oz**.

# Typical gold grades
- Open pit heap leach: around 0.3–1 g/t can pay
- Open pit mill: about 1–3 g/t
- Underground: often 5–10+ g/t
- "Bonanza" grade: tens to thousands of g/t

# Methods (pick by metal and level)
- **Fire assay** — the standard for gold, silver, platinum-group metals
- **Acid digestion + AAS or ICP** — base metals, and as a "finish" for fire assay
- **XRF** — fast screening of higher-grade samples; not sensitive enough for low gold
- **Wet chemistry (titration, gravimetric)** — classic methods for higher-grade base metals and concentrates
- **Cyanide leach assays (bottle roll, LeachWELL)** — how much gold cyanide can actually recover
- **PhotonAssay** — newer method that uses high-energy X-rays on a large jar of crushed sample, no chemicals
`},
{t:'Sampling: The Biggest Source of Error', b:`
An assay is only as good as the sample. A 30 g fire assay charge may represent thousands of tonnes of rock, so every step must keep the sample **representative**.

# Where samples come from
- **Grab samples** — pieces picked by hand; quick but biased
- **Channel samples** — a cut across the vein; better
- **Soil and stream sediment** — exploration
- **Drill core (diamond drilling)** — solid rock cylinder; split in half, half saved
- **RC chips (reverse circulation)** — crushed cuttings blown up the drill pipe
- **Blast-hole cuttings** — for grade control in the pit
- **Plant samples** — feed, tails, solutions, carbon, concentrates

# Sample preparation steps
1. **Log and label** — sample ID, depth, location; chain of custody
2. **Dry** — oven at about 105 °C (lower if mercury or sulfides could be lost)
3. **Crush** — jaw crusher to about 70% passing 2 mm (−10 mesh)
4. **Split** — riffle splitter or rotary splitter to about 250 g–1 kg
5. **Pulverize** — ring-and-puck mill to about **85% passing 75 µm (−200 mesh)**
6. **Mix and split** the pulp; scoop the assay charge from a well-mixed pulp
7. **Clean equipment between samples** — run barren quartz "wash" to stop contamination

# Splitting methods
- **Riffle splitter** — chutes alternate left and right; pour evenly across the full width
- **Rotary splitter** — best accuracy
- **Coning and quartering** — pile into a cone, flatten, cut into quarters, keep opposite quarters; old method, OK in the field

# Nugget effect
Gold often occurs as scattered particles. A small sample may miss them (assay too low) or catch one (assay way too high). Fixes:
- Larger samples and charges
- Finer grinding
- **Screen fire assay (metallic screen assay)** for coarse gold
- **Duplicates** to measure the variation

**Gy's sampling theory** links the minimum sample mass to particle size: the coarser the particles, the bigger the sample must be.

# QA/QC (quality control)
- **Blanks** — barren material; should assay near zero (checks contamination)
- **Certified reference materials (CRMs / standards)** — known grade; checks accuracy
- **Field, crush, and pulp duplicates** — check precision at each stage
- **Check assays** at a second lab
`},
{t:'Fire Assay: Overview', b:`
Fire assay is the **referee method for gold and silver** — the most trusted way to measure them. It is a miniature smelting operation done in a crucible.

# The idea in one line
Melt the sample with **lead oxide** and fluxes. Lead forms, sinks, and **collects the gold and silver**. Burn the lead off in a **cupel**. Weigh the tiny precious-metal bead that is left.

# The 5 stages
1. **Weigh and flux** — mix the sample with the flux charge
2. **Fusion** — melt at about 1000–1100 °C; lead collects precious metals into a **button**
3. **Cupellation** — oxidize the lead away in a bone-ash or magnesia cupel; a **prill (bead)** remains
4. **Parting** — dissolve the silver from the bead with nitric acid; gold remains
5. **Weighing (gravimetric finish)** or **instrument finish (AAS/ICP)**

# Why it works so well
- Lead dissolves gold and silver strongly at fusion temperature, but doesn't dissolve the oxides and silicates of the rock.
- Molten lead is **very dense (about 10.7 g/cm³)**, so it sinks through the slag like a falling net, collecting precious-metal particles.
- The rock forms a light, glassy **slag** that floats on top.
- Lead oxide is easy to remove later by oxidizing it.

# Sample sizes
- **1 assay ton (AT) = 29.167 g** — the classic charge
- Common charges: **15 g, 30 g, or 50 g**
- Larger charges reduce the nugget effect
`},
{t:'The Assay Ton: Why 29.167 Grams', b:`
The **assay ton (AT)** is a sample weight chosen to make the math automatic.

- 1 short ton = 2,000 avoirdupois lb = 29,166.67 troy ounces
- 1 assay ton = **29.167 grams**

So:
> **1 milligram of gold from a 1 AT sample = 1 troy ounce per short ton**

The weight of the bead in milligrams *is* the grade in oz/ton. No calculator needed.

# Other sizes
- ½ AT = 14.58 g → mg × 2 = oz/ton
- 2 AT = 58.33 g → mg ÷ 2 = oz/ton
- A charge of **32.15 g** works the same way for metric tonnes: 1 mg of gold = 1 troy oz per metric tonne. (Many labs just report in g/t from a 30 g or 50 g charge instead.)

# Converting g/t from any charge
> Grade (g/t) = gold (mg) ÷ sample weight (g) × 1000

Example: 0.42 mg gold from a 30 g charge → 0.42 ÷ 30 × 1000 = **14.0 g/t**

# Converting units
- **1 oz/short ton = 34.286 g/t**
- **1 g/t = 0.02917 oz/short ton**
- **1 oz/metric tonne = 31.103 g/t**
`},
{t:'Fire Assay Fluxes: What Each One Does', b:`
The flux turns the rock into a fluid slag and supplies the lead. Each ingredient has a job.

# Litharge — PbO (lead(II) oxide)
- **The collector source.** Some of it is reduced to metallic lead, which collects gold and silver.
- The rest acts as a **basic flux** and oxidizer, dissolving metal oxides into the slag.
- Usually the largest part of the charge.

# Sodium carbonate — Na₂CO₃ (soda ash)
- **Basic flux.** Reacts with silica to make low-melting sodium silicate.
> Na₂CO₃ + SiO₂ → Na₂SiO₃ + CO₂
- Also helps desulfurize.

# Borax — Na₂B₄O₇ (sodium tetraborate)
- **Acid flux and glass former.** Lowers the slag melting point, dissolves metal oxides (especially basic oxides like CaO, MgO, Fe₂O₃), and makes the slag fluid.
- Too much makes a sticky slag that can hold back lead.

# Silica — SiO₂
- **Acid flux.** Balances basic ores (limestone, iron oxide) and protects the crucible from being eaten by litharge.

# Flour, charcoal, or sugar (carbon) — the reducing agent
- Turns a measured amount of PbO into lead metal:
> 2PbO + C → 2Pb + CO₂
- More flour = bigger lead button. Target button usually about **25–35 g**.

# Potassium nitrate — KNO₃ (niter)
- **Oxidizer.** Used when the ore has a lot of sulfides (pyrite, arsenopyrite) or other natural reducers, which would otherwise make too big a lead button.

# Silver — inquart
- A known small amount of pure silver (often as silver nitrate solution or foil) is added so the gold-silver bead can be **parted** later (see Inquartation).

# Fluorspar — CaF₂ (sometimes)
- Thins high-alumina or high-calcium slags.

# Salt cover — NaCl or borax glass (sometimes)
- A layer on top to reduce boil-over and protect the melt.

# Reducing power and oxidizing power
Every ore either **reduces** litharge (sulfides, carbon, metallic iron) or **oxidizes** it (iron oxides, manganese dioxide). Assayers test the ore's **reducing power (RP)** and adjust flour or niter so the button comes out the right size.
- **1 g of pyrite** can reduce roughly **11–12 g of lead** from litharge.
- Button too big → lead carries too many impurities; add niter.
- Button too small → poor collection; add flour.
`},
{t:'Fire Assay Fusion: Step by Step', b:`
1. **Weigh the sample** (e.g. 30 g pulp) on a balance accurate to 0.01 g.
2. **Weigh the flux** — premixed or individual components — into a **fire clay crucible** (sized by number, e.g. a 40 g or 50 g crucible).
3. **Add the sample, then mix thoroughly** (by spatula or rolling). Poor mixing = poor collection.
4. **Add the silver inquart** if required.
5. **Add a borax or salt cover** if your procedure calls for it.
6. **Load the crucibles** into a furnace at about **850–900 °C**, then raise to about **1000–1100 °C**. (Some labs load directly into a hot furnace.)
7. **Fuse about 45–60 minutes.** The melt bubbles as CO₂ and SO₂ escape, then goes quiet. A quiet surface means fusion is done.
8. **Pour** into a cast-iron conical mold with one smooth motion. Lead sinks to the tip; slag sits on top.
9. **Cool**, then tap the slag off the lead **button** with a hammer.
10. **Hammer the button into a cube** to knock off the last slag. Check its weight.

# What a good fusion looks like
- Slag: fluid, glassy, uniform, no lumps or "shots" of lead inside
- Button: one clean, bright, malleable lump of about 25–35 g
- No matte (dull sulfide layer between slag and lead) — matte means too many sulfides, add niter or soda
- No speiss (hard, brittle arsenide/antimonide layer) — means arsenic, antimony, or nickel issues

# Chemistry inside the crucible
> 2PbO + C → 2Pb + CO₂   (lead forms)
> Na₂CO₃ + SiO₂ → Na₂SiO₃ + CO₂   (silica fluxed)
> PbO + SiO₂ → PbSiO₃   (lead silicate slag)
> FeS₂ + PbO → reduces lead; sulfur leaves as SO₂ or goes into slag
Gold and silver dissolve in the falling lead droplets.

! Fusion releases lead fumes. Use a fume hood, heat-resistant gloves, face shield, aluminized apron, and safety boots. Never pour molten metal into a damp mold.
`},
{t:'Cupellation: Step by Step', b:`
**Cupellation** removes the lead and leaves a precious-metal bead (**prill**).

# The cupel
A small shallow cup made of **bone ash (calcium phosphate)** or **magnesia (MgO)** — porous, like a sponge for molten lead oxide.

# Steps
1. **Preheat cupels** in the furnace at about **900–950 °C** for 10–20 minutes to drive off moisture and organics (wet cupels make beads spit).
2. **Place the lead button** in the hot cupel with tongs.
3. The button melts and briefly shows a dull skin. Then it **"opens" (uncovers)** — the surface brightens as lead oxide forms and air reaches the metal.
4. Lead oxidizes:
> 2Pb + O₂ → 2PbO
5. Molten PbO is **absorbed into the cupel** (about 98%); some fumes off.
6. Keep enough air flowing through the muffle (door slightly open). Lead oxide needs oxygen.
7. Watch the temperature:
- **Feathers** — small reddish-yellow crystals of PbO on the cupel rim mean the temperature is about right (not too hot)
- Too hot → precious-metal losses into the cupel and by volatilization
- Too cold → the button "freezes" (solid crust) and stops
8. Near the end, the bead rounds up, gets smaller, and shows colored rainbow films.
9. The **"blick" (flash)** — the bead suddenly brightens as the last lead leaves and heat is released when the bead solidifies. Cupellation is done.
10. **Cool slowly** at the furnace door. Fast cooling makes silver-rich beads **"sprout" or "spit"** (oxygen dissolved in silver is released violently) and lose metal.
11. Remove the prill with tweezers, brush it clean, and flatten it slightly on an anvil.

# Reading the bead
- **Bright silver-white** → mostly silver
- **Yellow** → gold-rich (or not enough silver for parting)
- **Dull, frosted, or colored** → base metals still there (copper, nickel, tellurium); re-cupel or scorify
- **Copper** gives a greenish stain on the cupel; **nickel** greenish-black; **iron** dark red-brown.

# Typical temperatures
- Opening the button: about 950–1000 °C
- Driving: about 850–900 °C
- Gold-silver beads lose metal fast above about 1000 °C late in the run.
`},
{t:'Inquartation & Parting', b:`
# Inquartation
Adding silver so the bead has enough silver to be parted.
- Nitric acid can only dissolve the silver out of the bead if there is enough of it — the bead needs about **2.5–3 parts silver to 1 part gold** (the old "quartation" rule was 3:1, gold being one quarter — hence the name).
- With too little silver, the gold **shields** the silver and the acid can't reach it. Parting fails and gold reads high.
- The silver is added at the fusion stage (in the flux) or later by re-cupelling the bead with silver foil.

# Parting
Dissolving silver out of the bead with **nitric acid (HNO₃)**, leaving pure gold.

Steps:
1. **Weigh the doré bead** (gold + silver) on a microbalance. Record it.
2. **Flatten the bead** on a polished anvil so acid can reach the inside.
3. Put it in a **porcelain crucible or parting cup**.
4. Add **dilute nitric acid** — a weaker first acid (about 1 part acid to 6–7 parts water), heated near boiling.
5. Heat until bubbling stops. Silver dissolves:
> 3Ag + 4HNO₃ → 3AgNO₃ + NO + 2H₂O
6. Pour off the acid, add **stronger nitric acid** (about 1:1) to remove the last silver.
7. Rinse several times with **hot distilled water**.
8. **Dry and anneal** the gold at about 600–700 °C. It turns from dark brown/black spongy gold to bright yellow gold.
9. **Weigh the gold**.

> Silver = doré bead weight − gold weight − silver added as inquart

Gold left after parting should hold together as one piece. If it breaks into fine powder, handle carefully so nothing is lost when decanting.

! Nitric acid gives off brown NO₂ gas. Work in a fume hood.
`},
{t:'Instrument Finishes: AAS, ICP, XRF', b:`
For low-grade samples, the gold bead is too small to weigh accurately. The bead (or lead button) is dissolved and measured with an instrument instead.

# AAS — Atomic Absorption Spectroscopy
1. Dissolve the bead in **aqua regia** (HCl + HNO₃).
2. Dilute to a known volume.
3. Spray the solution into a flame. Gold atoms absorb light from a gold lamp at **242.8 nm**.
4. The amount absorbed is compared to **calibration standards** of known strength.
- Good for about 0.005 to a few g/t gold.
- **Fire assay with AAS finish (FA-AAS)** is the most common gold assay in exploration.

# ICP-OES and ICP-MS
- **Inductively coupled plasma** — sample sprayed into a plasma at about 6,000–10,000 K
- **OES** reads emitted light; **MS** counts the atoms by mass
- Measures dozens of elements at once
- ICP-MS can read parts per billion and lower
- Used for multi-element exploration packages after a **four-acid digest** (HF, HNO₃, HClO₄, HCl) or **aqua regia digest**

# XRF — X-ray Fluorescence
- X-rays knock out inner electrons; atoms emit their own characteristic X-rays
- Fast, little preparation; handheld guns in the field
- Fine for base metals and higher-grade samples; poor for low gold
- **Fire assay jewelry testing** still beats XRF for gold karat accuracy because XRF only reads the surface

# Gravimetric finish
- Weigh the parted gold directly
- Used for **high grades** (often above about 10 g/t) where beads are big enough to weigh

# Wet chemistry for base metals
- **Titration** — e.g. copper by iodometric titration; iron by dichromate titration
- **Electrogravimetric** — plate copper onto a weighed platinum cathode and weigh the gain
- **Gravimetric** — precipitate and weigh (e.g. silver as AgCl)
`},
{t:'Special Gold Assays', b:`
# Screen fire assay (metallic screen assay)
For ore with **coarse gold** that won't grind fine (gold flattens instead of breaking).
1. Pulverize a large sample (often 500 g–1 kg).
2. **Screen at 75 or 106 µm.**
3. Fire assay the **entire coarse (+) fraction**.
4. Fire assay duplicates of the fine (−) fraction.
5. Calculate a **weighted average** by the mass of each fraction.

# Bottle roll test
Measures how much gold **cyanide can actually leach**, and how fast.
1. Grind a sample to the plant grind size.
2. Make a slurry with water (often 40–50% solids).
3. Add lime to pH about 10.5–11, then sodium cyanide.
4. Roll the bottle (with air) for 24–72 hours, taking solution samples over time.
5. Assay the solution and the leached residue.
> Recovery % = gold dissolved ÷ (gold dissolved + gold in residue) × 100
Also measures **cyanide and lime consumption**.

# Column leach test
Simulates **heap leaching** in a tall column of crushed ore over weeks or months.

# LeachWELL / accelerated cyanide leach
Large sample (often 1–2 kg) with intense cyanide and an accelerant; good for coarse gold and fast cyanide-soluble gold.

# Preg-robbing test
Checks if the ore contains natural carbon that steals gold back out of solution.

# Diagnostic leach
Leach in stages (cyanide, then acid digestions that destroy carbonates, sulfides, then carbon) to find **where the unrecoverable gold is locked**.

# Pan and gravity tests
- **Panning** — quick field check for free gold
- **GRG test (gravity recoverable gold)** — repeated centrifugal concentrator passes to see how much gold gravity can catch
`},
{t:'Assay Calculations Worked Out', b:`
# 1. Grade from a bead
30.0 g charge, gold weighed 0.153 mg.
> 0.153 ÷ 30.0 × 1000 = **5.10 g/t**
> 5.10 ÷ 34.286 = **0.149 oz/short ton**

# 2. Assay-ton shortcut
1 AT charge, gold = 0.38 mg → **0.38 oz/ton** (no math needed).

# 3. Silver in the bead
Doré bead 2.465 mg; gold after parting 0.215 mg; no silver inquart added.
> Silver = 2.465 − 0.215 = 2.250 mg
> 2.250 ÷ 30 × 1000 = **75 g/t silver** (30 g charge)
If 2.000 mg silver was added as inquart: silver from the ore = 0.250 mg → 8.3 g/t.

# 4. Contained gold in a block
50,000 t at 2.4 g/t:
> 50,000 × 2.4 = 120,000 g = 120 kg
> 120,000 ÷ 31.1035 = **3,858 troy oz**

# 5. Recoverable gold
Same block, 88% plant recovery:
> 3,858 × 0.88 = **3,395 oz**

# 6. Plant recovery from assays
Head grade 3.20 g/t, tailings 0.28 g/t (assuming tonnage barely changes in leaching):
> Recovery = (3.20 − 0.28) ÷ 3.20 × 100 = **91.3%**

# 7. Recovery with a concentrate (two-product formula)
For flotation or gravity, where the concentrate is much smaller than the feed:
> Recovery % = c (f − t) ÷ [ f (c − t) ] × 100
f = feed grade, c = concentrate grade, t = tailings grade

Example: f = 2.0 g/t, c = 60 g/t, t = 0.2 g/t
> = 60 × 1.8 ÷ (2.0 × 59.8) × 100 = **90.3%**

# 8. Ratio of concentration
> Ratio = (c − t) ÷ (f − t) = 59.8 ÷ 1.8 ≈ **33** tonnes of feed per tonne of concentrate

# 9. Cut-off grade (basic idea)
> Cut-off grade (g/t) = cost per tonne ÷ (gold price per gram × recovery)

Example: cost $40/t, gold $80/g, recovery 90%:
> 40 ÷ (80 × 0.90) = **0.56 g/t** — rock below this loses money.

(Gold price changes daily. Use the current price.)
`}
]});

GF.sec({id:'gold', title:'Gold: Mine to Bar', sub:'Every step of gold recovery and refining', topics:[
{t:'Gold Facts Every Student Needs', b:`
- Symbol **Au** (Latin *aurum*), atomic number **79**
- Atomic mass **196.97**
- Density **19.32 g/cm³** — about 7× quartz (2.65)
- Melting point **1064 °C**; boiling point about **2856 °C**
- Crystal structure: **FCC**
- Hardness: Mohs **2.5–3**
- Most malleable and one of the most ductile metals: 1 g can be beaten into a sheet about 1 m² or drawn into a wire over 2 km long
- Doesn't tarnish or rust; won't dissolve in any single common acid
- Dissolves in **aqua regia**, **cyanide** (with oxygen), **chlorine/chloride**, **thiosulfate**, **mercury** (amalgam)
- Oxidation states **+1** (aurous) and **+3** (auric)

# Units
- **Troy ounce = 31.1035 g** (not the kitchen ounce of 28.35 g)
- 12 troy oz = 1 troy pound
- **1 kg = 32.15 troy oz**
- **Pennyweight (dwt) = 1.555 g**; 20 dwt = 1 troy oz
- **Grain** = 0.0648 g; 480 grains = 1 troy oz

# Purity
- **Fineness** = parts gold per 1000. 999.9 = "four nines" = 99.99%
- **Karat (K)** = parts gold per 24
- 24K = 99.9%+ · 22K = 91.7% · 18K = 75.0% · 14K = 58.3% · 10K = 41.7%
> Fineness = Karat ÷ 24 × 1000
- **London Good Delivery bar**: about 400 troy oz (≈12.4 kg), at least 995.0 fine

# Where gold occurs
- **Free (native) gold** — visible particles in quartz veins
- **Electrum** — natural gold-silver alloy (over about 20% silver)
- **Tellurides** — calaverite (AuTe₂), sylvanite ((Au,Ag)Te₂)
- **Invisible gold** — locked inside pyrite (FeS₂) and arsenopyrite (FeAsS), sometimes in the crystal lattice itself
- **Placer (alluvial) gold** — eroded and concentrated in streams and gravels
- **By-product** — from copper ores (comes out in anode slimes)

Common pathfinder elements that point to gold: arsenic, antimony, bismuth, tellurium, mercury, tungsten.
`},
{t:'Gold Ore Types: Pick the Process', b:`
The process a mine uses depends on the ore type. This is the first decision in any gold flowsheet.

# Free-milling ore
Gold is loose or exposed after grinding. **More than about 90% recovery** with simple cyanidation.
→ Gravity + cyanide leach (CIL/CIP)

# Placer / alluvial
Loose gold particles in gravel.
→ Gravity only: sluices, jigs, spirals, shaking tables, centrifugal concentrators

# Oxide ore
Weathered rock; sulfides already broken down. Often low grade.
→ **Heap leach** with cyanide

# Refractory ore
Gold is **locked** and cyanide recovers less than about 80% (sometimes under 50%). Three main causes:
- **Sulfide-locked** — gold inside pyrite or arsenopyrite grains; cyanide can't reach it
- **Preg-robbing** — natural carbon in the ore grabs dissolved gold back out of solution
- **Telluride / other** — gold in minerals that dissolve slowly
→ Pre-treatment first: roasting, pressure oxidation, bio-oxidation, or ultra-fine grinding, then leach

# Copper-gold ore
Gold rides along with copper minerals.
→ Flotation to a copper concentrate; gold paid for by the smelter, recovered from anode slime

# Cyanide-consuming ore
Copper minerals, soluble sulfides, or arsenic eat cyanide.
→ May need special reagents, SART process, or flotation first

Hook: **"Free, Placer, Oxide, Refractory"** — from easiest to hardest: **"Fast Panning Often Rewards."**
`},
{t:'Mining Gold Ore', b:`
# Open pit (surface) mining
1. Clear and strip **overburden** (soil and waste rock on top)
2. **Drill** blast holes in a pattern on a bench
3. **Sample blast holes** for grade control
4. Load holes with explosive (often ANFO — ammonium nitrate and fuel oil) and **blast**
5. **Load and haul** — ore to the mill or heap, waste to the dump
6. Benches step down in a spiral; walls are cut at a safe slope angle

**Strip ratio** = tonnes of waste ÷ tonnes of ore. A 4:1 strip ratio means moving 4 t of waste for every 1 t of ore.

# Underground mining
For deeper, higher-grade, narrow veins.
- Access by **shaft** (vertical) or **decline/ramp** (sloped tunnel)
- **Drifts** follow the vein horizontally; **crosscuts** cross the rock
- **Stopes** are where ore is mined
- Methods: cut-and-fill, sublevel open stoping, shrinkage, room and pillar
- Ground support: rock bolts, mesh, shotcrete
- Ventilation removes blast fumes and diesel exhaust

# Placer mining
- **Sluicing** — water carries gravel over riffles; heavy gold drops behind them
- **Dredging** — floating plant digs river gravels
- **Hydraulic mining** — high-pressure water (heavily restricted)

# Grade control
Separating ore from waste at the dig face using blast-hole assays, mapping, and markers so ore isn't sent to the dump (**ore loss**) and waste isn't sent to the mill (**dilution**).
`},
{t:'Crushing & Grinding (Comminution)', b:`
**Comminution** = making rock smaller to **liberate** the gold (expose it so cyanide or gravity can get to it). It is the **biggest energy user** in most mills.

# Stages
1. **Primary crushing** — jaw or gyratory crusher; run-of-mine rock (up to about 1 m) down to about 150–200 mm
2. **Secondary and tertiary crushing** — cone crushers; down to about 10–20 mm
3. **Grinding** — rotating mills with water:
- **SAG mill (semi-autogenous)** — big diameter; ore grinds itself with some steel balls
- **Ball mill** — steel balls; grinds to the final size
- **Rod mill** — older; steel rods
- **HPGR (high-pressure grinding rolls)** — crushes between two rolls; energy efficient; good before heap leach
4. **Classification** — **hydrocyclones** spin the slurry; fine particles go up and out (overflow) to leaching; coarse ones go down (underflow) back to the mill for more grinding. This loop is the **circulating load**.

# Grind size
Reported as **P80** — the screen size that 80% of the material passes. Typical gold leach feed: **P80 of about 75–150 µm**.
- Too coarse → gold stays locked; lower recovery
- Too fine → wastes power, slow settling and filtering

# Bond Work Index (BWi)
Measures how hard ore is to grind, in kWh per tonne. Used to size mills.
> W = 10 × Wi × (1 ÷ √P80 − 1 ÷ √F80)
(P80 and F80 in microns; W in kWh/t)

# Gravity circuit in the grinding loop
Because gold is so heavy and doesn't grind easily, free gold builds up in the cyclone underflow. A **centrifugal concentrator** (Knelson, Falcon) on part of the underflow catches it early before it gets ground into flakes or locked.
`},
{t:'Gravity Concentration', b:`
Gravity methods separate gold from rock by **density**. Gold (19.3) is about 7 times heavier than quartz (2.65), so it settles much faster in water.

> Concentration criterion = (heavy SG − water) ÷ (light SG − water)
> Gold in quartz: (19.3 − 1) ÷ (2.65 − 1) ≈ **11**  (above 2.5 = easy gravity separation)

# Equipment
- **Gold pan** — swirling motion; heavy gold sinks to the bottom
- **Sluice box** — riffles or matting trap gold as water carries sand over
- **Jig** — pulsing water lets heavy particles sink through a bed
- **Spiral** — slurry flows down a spiral trough; heavies hug the inside
- **Shaking table (Wilfley table)** — tilted, vibrating deck with riffles fans particles out by density; gives a very clean gold concentrate
- **Centrifugal concentrators (Knelson, Falcon)** — spin at about 60–200 g's, catching fine gold in rings
- **InLine Pressure Jig, Gemeni table** — fine cleaning

# Typical gravity steps in a mill
1. Cyclone underflow → centrifugal concentrator
2. Concentrate (small, rich) → **intensive cyanide leach reactor** (e.g. Acacia, InLine Leach Reactor) or **shaking table**
3. Table concentrate → dried → smelted directly to doré
4. Gravity tails → back to the grinding circuit

# Why gravity first
- Coarse gold leaches slowly in cyanide (it takes days to dissolve a big particle)
- Gravity gets it out cheaply, early, and with no chemicals
- Reduces gold "lockup" in the mill
`},
{t:'Flotation', b:`
**Froth flotation** separates minerals by making the wanted ones **water-repellent (hydrophobic)** so they stick to air bubbles and float to the top as froth.

# Steps
1. Grind ore and mix with water (slurry)
2. **Condition** with reagents
3. Pump air into a flotation cell with an impeller
4. Hydrophobic particles attach to bubbles and rise
5. Froth overflows the lip as **concentrate**
6. Hydrophilic gangue stays in the slurry as **tailings**
7. **Rougher → scavenger → cleaner** stages improve grade and recovery

# Reagents
- **Collectors** — coat the mineral, make it hydrophobic: **xanthates** (potassium amyl xanthate, PAX; sodium isopropyl xanthate), dithiophosphates
- **Frothers** — make stable bubbles: MIBC (methyl isobutyl carbinol), pine oil, glycols
- **Activators** — help a mineral take collector: **copper sulfate (CuSO₄) activates sphalerite and pyrite**
- **Depressants** — stop a mineral from floating: lime (pyrite), cyanide, sodium silicate (silica), starch
- **pH modifiers** — lime, soda ash, sulfuric acid

# When flotation is used for gold
- Gold is associated with sulfides (pyrite, arsenopyrite, chalcopyrite)
- Makes a small, rich concentrate that can be roasted, oxidized, sold to a smelter, or leached
- Cuts the tonnage that needs expensive pre-treatment
`},
{t:'Cyanide Leaching: The Chemistry', b:`
About 80–90% of the world's gold is recovered with cyanide. Very dilute cyanide dissolves gold when oxygen is present.

# The Elsner equation
> 4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH

In ionic form:
> 4Au + 8CN⁻ + O₂ + 2H₂O → 4Au(CN)₂⁻ + 4OH⁻

Gold goes into solution as the **dicyanoaurate (aurocyanide) ion, Au(CN)₂⁻**.

# Why it works
Gold alone is very hard to oxidize (E° about +1.7 V for Au⁺/Au). Cyanide grabs Au⁺ so tightly into Au(CN)₂⁻ that the potential needed drops to about −0.6 V. Now ordinary oxygen from air is a strong enough oxidizer.

# The two half-reactions (it's really a tiny corrosion cell)
- Anode (gold surface): Au + 2CN⁻ → Au(CN)₂⁻ + e⁻
- Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻   (some H₂O₂ forms along the way)

# Conditions
- **pH 10–11** (lime, CaO or Ca(OH)₂). Below about pH 9.2, cyanide turns into **HCN gas** — deadly and also wasted.
> CN⁻ + H₂O ⇌ HCN + OH⁻
- **Free cyanide**: typically about 100–500 mg/L NaCN in tanks; higher in some heaps
- **Dissolved oxygen**: about 5–8 mg/L from air; oxygen or peroxide can be injected to speed things up
- **Time**: tanks 24–48 hours; heaps weeks to months
- **Slurry density**: often 40–50% solids
- **Temperature**: ambient; warmer is faster but oxygen dissolves less

# Things that cause trouble
- **Cyanicides** — minerals that eat cyanide: copper minerals, pyrrhotite, zinc, arsenic and antimony sulfides
- **Oxygen consumers** — pyrrhotite, ferrous iron
- **Preg-robbers** — natural carbon, some clays
- **Coarse gold** — dissolves slowly
- **Passivation** — films on gold surfaces (from sulfides or lime scale); lead nitrate is often added to help

# Silver dissolves the same way
> 4Ag + 8CN⁻ + O₂ + 2H₂O → 4Ag(CN)₂⁻ + 4OH⁻
Silver usually leaches slower and needs more cyanide.
`},
{t:'Tank Leaching: CIL and CIP', b:`
For milled ore, leaching is done in big agitated tanks in series. Gold is pulled out of solution onto **activated carbon**.

# Activated carbon
Made from **coconut shell**, heated and steamed to create a huge internal surface (about 1,000 m² per gram). Carbon granules (about 1–3 mm) adsorb Au(CN)₂⁻ and can load to several thousand grams of gold per tonne of carbon.

# CIP — Carbon-In-Pulp
1. Leach tanks first (no carbon) — gold dissolves
2. Then a separate train of adsorption tanks with carbon — carbon loads gold
3. Carbon moves **counter-current** to the slurry (pumped upstream tank by tank)
4. Loaded carbon is pulled from the first adsorption tank

# CIL — Carbon-In-Leach
- Carbon is in the leach tanks themselves — leaching and adsorption happen together
- Better for **mildly preg-robbing ores** (the added carbon grabs gold before the ore's natural carbon does)
- Fewer tanks

# Screens
**Inter-tank screens** keep carbon in its tank while slurry flows through. Damaged screens leak loaded carbon downstream — lost gold.

# Typical CIL flow
1. Ground slurry from cyclones → **trash screen** (removes wood chips and plastic)
2. **Thickener** (raises solids density; recycles water)
3. **Pre-aeration / lime** tank
4. **Leach/CIL tanks** (6–8 in series), air sparged, cyanide added
5. **Loaded carbon** screened out of tank 1 → to elution
6. **Tailings** → cyanide destruction → tailings storage facility (TSF)

# Merrill-Crowe alternative
Instead of carbon, the clear pregnant solution is treated with zinc (see Merrill-Crowe). Better for **high-silver** ores, since silver would overload carbon.
`},
{t:'Heap Leaching', b:`
For **low-grade oxide ores** where milling would cost too much. Ore is piled on a lined pad and cyanide solution trickles through it.

# Steps
1. **Crush** ore (or "run-of-mine" with no crushing for very low grade)
2. **Agglomerate** fines with cement and/or lime so the heap stays permeable (solution can flow through)
3. **Stack** on a pad lined with **HDPE plastic liners** over compacted clay, with drainage pipes and a leak-detection system
4. **Irrigate** with drip lines or sprinklers: dilute cyanide solution at pH 10–11
5. Solution percolates down, dissolving gold
6. **Pregnant leach solution (PLS)** drains to a collection pond
7. Gold is recovered by **carbon columns (CIC — Carbon-In-Column)** or **Merrill-Crowe**
8. **Barren solution** is topped up with cyanide and lime and pumped back to the heap
9. Lifts of ore are stacked on top over years

# Key numbers
- Grade: often about 0.3–1.0 g/t
- Recovery: often 50–80% (lower than milling)
- Leach cycle: about 60–120+ days

# Problems
- Clay and fines block flow → **ponding**, channeling
- Cold weather slows leaching
- Liner leaks must be prevented and monitored
- Large water balance — storms can overflow ponds

# Vat leaching
Older method: crushed ore leached in large tanks (vats) that are flooded and drained.
`},
{t:'Elution (Stripping), Electrowinning & Carbon Regeneration', b:`
# Elution (stripping)
Getting gold **back off** the loaded carbon into a small volume of rich solution.

Steps (AARL method):
1. **Acid wash** — loaded carbon soaked in dilute HCl (about 3%) to remove calcium carbonate scale and some base metals
2. Rinse with water
3. **Pre-soak** in hot caustic cyanide (about 2–3% NaOH + 2–3% NaCN)
4. **Elute** with hot water at about **110–130 °C** under pressure. Heat and high pH reverse the adsorption; gold comes off as Au(CN)₂⁻
5. The rich **eluate** goes to electrowinning

**Zadra method**: continuous hot caustic-cyanide solution at about 95–135 °C, recirculating through the electrowinning cells. Slower but simpler.

Hook: **"Heat and high pH push gold off carbon. Cold and lower pH let carbon grab it."**

# Electrowinning
1. Eluate flows through cells with **stainless steel wool or mesh cathodes** and stainless steel anodes
2. DC current (low voltage, a few volts) reduces gold onto the cathode:
> Au(CN)₂⁻ + e⁻ → Au + 2CN⁻
3. At the anode: oxygen evolves (4OH⁻ → O₂ + 2H₂O + 4e⁻)
4. Silver, copper, mercury also plate out
5. Gold-rich **cathode sludge** is washed off and filtered

# Calcining the sludge
Sludge is dried, sometimes **retorted** to remove mercury (critical — mercury vapor is toxic), then calcined to burn off moisture and oxidize base metals before smelting.

# Carbon regeneration
After stripping, carbon is "fouled" with organics.
1. **Kiln** heats carbon to about **650–750 °C** in steam with no air — organics burn off and pores reopen
2. **Quench** in water
3. **Screen** out fines
4. Return to the CIL/CIP circuit
Carbon loses some mass to breakage each cycle; fresh carbon is added.
`},
{t:'Merrill-Crowe (Zinc Precipitation)', b:`
Recovers gold and silver from clear cyanide solution by **cementation** onto zinc dust. Best for **high-silver** solutions and some heap leaches.

# Steps
1. **Clarify** — filter the pregnant solution until it's very clear (pressure leaf filters with diatomaceous earth). Solids would coat the zinc.
2. **Deaerate** — pull a vacuum in a **Crowe tower** to remove dissolved oxygen (to below about 1 mg/L). Oxygen would re-dissolve the gold and waste zinc.
3. **Add zinc dust** plus a little **lead nitrate** (lead coats the zinc and makes it react better).
4. Gold and silver precipitate:
> 2Au(CN)₂⁻ + Zn → 2Au + Zn(CN)₄²⁻
> 2Ag(CN)₂⁻ + Zn → 2Ag + Zn(CN)₄²⁻
5. **Filter** the precipitate in a plate-and-frame press
6. **Dry, (retort if mercury present), and smelt** the precipitate to doré
7. Barren solution returns to the leach

# Why zinc works
Zinc is more reactive than gold in cyanide, so it gives electrons to the gold ions (a displacement/cementation reaction from the reactivity series).

# Side reaction (wastes zinc)
> Zn + 4CN⁻ + 2H₂O → Zn(CN)₄²⁻ + 2OH⁻ + H₂
`},
{t:'Treating Refractory Gold Ore', b:`
When gold is locked in sulfides or the ore steals gold back, a pre-treatment step is needed before cyanide.

# 1. Roasting
Heat the concentrate in air at about **600–700 °C** to burn the sulfides into porous iron oxide (**calcine**). Gold is exposed.
> 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂
> 2FeAsS + 5O₂ → Fe₂O₃ + As₂O₃ + 2SO₂ (arsenic fumes off as As₂O₃)
- Also burns off preg-robbing carbon
- SO₂ goes to an acid plant (makes sulfuric acid)
- **Arsenic trioxide is extremely toxic** and must be captured
- Over-roasting (too hot) melts and seals the calcine — gold gets locked again

# 2. Pressure oxidation (POX)
Slurry is oxidized in an **autoclave** at about **190–230 °C** and high-pressure oxygen. Sulfides turn to sulfuric acid and iron precipitates.
> 4FeS₂ + 15O₂ + 2H₂O → 2Fe₂(SO₄)₃ + 2H₂SO₄
- No SO₂ gas; arsenic fixed as stable **scorodite** (FeAsO₄·2H₂O)
- Slurry is neutralized with limestone/lime before cyanide

# 3. Bio-oxidation (BIOX)
**Bacteria** (e.g. *Acidithiobacillus ferrooxidans*, *Leptospirillum*) oxidize sulfides in aerated tanks at about 35–50 °C, pH 1–2, over several days.
- Lower energy, no gas emissions
- Slower; sensitive to temperature and toxins

# 4. Ultra-fine grinding
Grind to about **P80 of 10–20 µm** to physically expose sub-microscopic gold. Good for partly refractory ores.

# 5. Albion process
Ultra-fine grinding plus atmospheric oxidation in tanks.

# Preg-robbing fixes
- CIL (carbon added early competes for gold)
- Blanking agents (kerosene, diesel) coat the natural carbon
- Roasting burns the carbon

# Alternative lixiviants (non-cyanide)
- **Thiosulfate** (S₂O₃²⁻) with copper and ammonia — used commercially for some preg-robbing ores
- **Chlorine/chloride** — fast, used historically and in refining
- **Glycine**, **thiourea** — studied alternatives
`},
{t:'Smelting Gold to Doré', b:`
The gold products from the plant (cathode sludge, Merrill-Crowe precipitate, gravity concentrate) are melted into **doré bars** — impure gold-silver bars (often 60–95% gold + silver combined) shipped to a refinery.

# Steps
1. **Dry** the material
2. **Retort** if mercury is present (heat in a closed vessel; condense Hg; about 357 °C is mercury's boiling point, retorts run hotter)
3. **Calcine** (optional) — oxidize base metals so they slag easily
4. **Mix with flux** in a clay-graphite or silicon carbide crucible
5. **Melt** in an induction furnace or diesel/gas tilting furnace at about **1150–1250 °C**
6. **Pour** into a cascade of conical or bar molds — gold-silver sinks to the bottom; slag on top
7. **Separate** slag; slag is crushed and re-treated (it still holds gold prills)
8. **Clean, stamp, weigh, and sample** the bar (drill or dip sample for assay)

# Smelting flux (typical ingredients)
- **Borax (Na₂B₄O₇)** — main flux, lowers melting point, dissolves metal oxides
- **Silica (SiO₂)** — acid flux; forms glassy silicate slag with iron, zinc
- **Sodium carbonate (Na₂CO₃)** — basic flux
- **Sodium nitrate (NaNO₃) / niter** — **oxidizer**; turns base metals (Fe, Cu, Zn, Pb) into oxides that go into the slag
- **Fluorspar (CaF₂)** — thins the slag

Typical example ratios are adjusted to the material — base metals need more niter and silica; a clean gravity concentrate needs mostly borax.

# Why oxidize base metals?
Gold and silver don't oxidize at smelting temperatures (their oxides are unstable — top of the Ellingham diagram). Base metals do. Once oxidized, they dissolve in the borax-silica slag and leave the bullion.
> 2Zn + O₂ → 2ZnO (then into slag)
> 5Cu + 2NaNO₃ → 5CuO + Na₂O + N₂ (niter oxidizes copper)
`},
{t:'Refining Gold to 99.99%', b:`
Refineries turn doré into pure gold (and pure silver).

# 1. Miller process (chlorine refining) — fast, to about 99.5%
1. Melt doré in a clay crucible at about **1100 °C**, with a borax cover
2. Bubble **chlorine gas (Cl₂)** through the melt with a ceramic lance
3. Base metals and **silver** react first and form chlorides:
> 2Ag + Cl₂ → 2AgCl
> Cu + Cl₂ → CuCl₂ (and other base metal chlorides)
4. Chlorides float as a slag or fume off (zinc, iron chlorides)
5. When gold starts to chlorinate (a **reddish-brown/purple fume** appears), stop
6. Gold is about **99.5%**; silver is recovered from the AgCl slag
- Can't remove platinum-group metals

# 2. Wohlwill process (electrolytic) — to 99.99%
1. Cast Miller gold (or doré) into **anodes**
2. Electrolyte: **gold chloride (HAuCl₄) in hydrochloric acid**, warm (about 60–70 °C)
3. Cathodes: thin pure gold sheets (or titanium)
4. Pass current; gold dissolves at the anode and plates pure on the cathode
5. Silver forms AgCl at the anode; PGMs (Pt, Pd) stay in solution and are recovered
- Gives **999.9+** gold; slow and ties up a lot of gold inventory

# 3. Aqua regia refining (small refiners, labs)
1. Dissolve gold in **aqua regia** (3 parts HCl : 1 part HNO₃):
> Au + HNO₃ + 4HCl → HAuCl₄ + NO + 2H₂O
2. Silver stays behind as **silver chloride (AgCl)** — filter it out (high-silver material should be inquarted and parted first or it coats the gold)
3. Remove excess nitric (evaporate with HCl, or add urea or sulfamic acid)
4. **Precipitate gold** with a reducing agent:
> 2HAuCl₄ + 3SO₂ + 6H₂O → 2Au + 8HCl + 3H₂SO₄   (sulfur dioxide)
Also used: **sodium metabisulfite (SMB)**, **ferrous sulfate**, **oxalic acid**
5. Gold drops as brown powder; wash with HCl and water repeatedly
6. Dry, melt, and cast; purity often 99.95–99.99%

# 4. Inquartation and nitric parting (large scale)
Melt with silver to about 3:1 silver:gold, granulate, dissolve silver in nitric acid; gold remains.

# 5. Solvent extraction refining
Modern plants (e.g. using dibutyl carbitol) selectively pull gold from chloride solution.

# Silver refining
**Moebius / Balbach-Thum electrolytic cells** — silver nitrate electrolyte; pure silver crystals form on the cathode; gold stays in the anode slime.

! Chlorine, aqua regia, and NO₂ fumes are very dangerous. Aqua regia must never be stored in a sealed container — it gives off gas and can burst.
`},
{t:'Mercury Amalgamation (History & Hazards)', b:`
**Amalgamation** — liquid mercury wets and dissolves gold, forming a soft alloy called **amalgam**. It was the main gold recovery method for centuries and is still used illegally and in artisanal mining.

# How it worked
1. Ore is ground with water and mercury, or run over **mercury-coated copper plates**
2. Gold particles stick to the mercury
3. Amalgam is scraped up and squeezed through cloth to remove excess mercury
4. The amalgam is heated in a **retort** — mercury boils off at **357 °C** and is condensed back to liquid
5. A spongy gold remains ("sponge gold") and is melted

# Why it's banned or restricted
- **Mercury vapor** is a serious nerve poison. Burning amalgam in the open (common in small-scale mining) poisons workers and families.
- Mercury in rivers converts to **methylmercury**, which builds up in fish.
- The **Minamata Convention** (international treaty) works to phase it out.

# Where mercury still shows up in modern plants
Some ores naturally contain mercury. It leaches with cyanide, plates out in electrowinning, and must be **retorted** out of the sludge before smelting, then captured. Workers are monitored.

! Never heat amalgam outside a closed retort with mercury capture.
`},
{t:'Cyanide Destruction & Tailings', b:`
Leftover cyanide in tailings must be destroyed before the slurry goes to the tailings storage facility (TSF).

# Methods
- **SO₂/Air (INCO process)** — sulfur dioxide (or sodium metabisulfite) + air + copper catalyst at pH about 8–9 oxidizes cyanide to cyanate:
> CN⁻ + SO₂ + O₂ + H₂O → CNO⁻ + H₂SO₄
- **Hydrogen peroxide** — CN⁻ + H₂O₂ → CNO⁻ + H₂O
- **Caro's acid (H₂SO₅)** — fast oxidizer
- **Alkaline chlorination** (older) — hypochlorite
- **Natural degradation** — sunlight, air, and time in ponds
- **Cyanide recovery** (SART, AVR) — recover and reuse it

Cyanate (CNO⁻) is much less toxic and breaks down further to ammonia and carbonate.

# Types of cyanide measured
- **Free cyanide** — CN⁻ and HCN
- **WAD cyanide (weak acid dissociable)** — free + weak metal complexes (Zn, Cu, Ni); the regulatory measure for toxicity
- **Total cyanide** — includes strong iron complexes

# Tailings storage
- Tailings dams must be engineered, monitored, and inspected (dam failures have caused disasters)
- Water reclaimed back to the plant
- **International Cyanide Management Code** — industry standard for safe transport, use, and disposal
- Acid rock drainage from sulfide tailings must be controlled
`},
{t:'Typical Gold Plant Flowsheet (Summary)', b:`
1. **Mine** — drill, blast, load, haul
2. **Primary crush** — jaw/gyratory
3. **Grind** — SAG + ball mill with cyclones
4. **Gravity** — centrifugal concentrator on cyclone underflow → intensive leach or table → smelt
5. **Thicken** — raise slurry density
6. **Leach** — CIL tanks, lime to pH 10–11, cyanide, air
7. **Adsorb** — activated carbon loads gold
8. **Acid wash** loaded carbon
9. **Elute** — hot caustic cyanide strips gold
10. **Electrowin** — gold plates on steel wool
11. **Regenerate carbon** in a kiln → back to CIL
12. **Retort and calcine** sludge (remove mercury)
13. **Smelt** with borax, silica, niter → **doré bars**
14. **Ship to refinery** → Miller and/or Wohlwill → **99.99% gold**
15. **Detox tailings** → TSF

Refractory ores add: flotation → roasting / POX / BIOX → neutralize → then step 6.
Heap leach replaces steps 2–6 with: crush → agglomerate → stack → irrigate → collect PLS → carbon columns.
`}
]});
