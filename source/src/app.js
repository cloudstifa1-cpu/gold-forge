(function(){
'use strict';
var S=GF.sections, byId={};
S.forEach(function(s,i){s.n=i;byId[s.id]=s;});
var app=document.getElementById('app'), back=document.getElementById('back');

/* ---------- storage (optional, never required) ---------- */
function load(k,d){try{var v=localStorage.getItem('gf.'+k);return v===null?d:JSON.parse(v);}catch(e){return d;}}
function save(k,v){try{localStorage.setItem('gf.'+k,JSON.stringify(v));}catch(e){}}

/* ---------- text size ---------- */
var fs=load('fs',19);
function setFs(v){fs=Math.max(15,Math.min(28,v));document.documentElement.style.setProperty('--fs',fs+'px');save('fs',fs);}
setFs(fs);
document.getElementById('aminus').onclick=function(){setFs(fs-2);};
document.getElementById('aplus').onclick=function(){setFs(fs+2);};

/* ---------- helpers ---------- */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function inl(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');}
function plain(s){return s.replace(/\*\*/g,'').replace(/^[#>!\-] ?/gm,'').replace(/^\d+\. /gm,'');}
function el(h){var d=document.createElement('div');d.innerHTML=h;return d;}

/* Mini markup: "# " heading, "- " bullet, "1. " numbered, "> " equation slip, "! " safety box, **bold** */
function render(src){
  var lines=src.replace(/^\n+|\n+$/g,'').split('\n'), out=[], i=0;
  while(i<lines.length){
    var L=lines[i];
    if(/^\s*$/.test(L)){i++;continue;}
    if(L.indexOf('# ')===0){out.push('<h3>'+inl(L.slice(2))+'</h3>');i++;continue;}
    if(L.indexOf('> ')===0){var e=[];while(i<lines.length&&lines[i].indexOf('> ')===0){e.push('<div>'+inl(lines[i].slice(2))+'</div>');i++;}out.push('<div class="eq">'+e.join('')+'</div>');continue;}
    if(L.indexOf('! ')===0){out.push('<div class="warn">'+inl(L.slice(2))+'</div>');i++;continue;}
    if(L.indexOf('- ')===0){var u=[];while(i<lines.length&&lines[i].indexOf('- ')===0){u.push('<li>'+inl(lines[i].slice(2))+'</li>');i++;}out.push('<ul>'+u.join('')+'</ul>');continue;}
    if(/^\d+\. /.test(L)){var o=[],st=parseInt(L,10);while(i<lines.length&&/^\d+\. /.test(lines[i])){o.push('<li>'+inl(lines[i].replace(/^\d+\. /,''))+'</li>');i++;}out.push('<ol'+(st>1?' start="'+st+'"':'')+'>'+o.join('')+'</ol>');continue;}
    var p=[];while(i<lines.length&&!/^\s*$/.test(lines[i])&&!/^(# |> |! |- |\d+\. )/.test(lines[i])){p.push(inl(lines[i]));i++;}
    out.push('<p>'+p.join('<br>')+'</p>');
  }
  return out.join('');
}

/* ---------- router (plain #tokens only) ---------- */
function go(h){if(location.hash==='#'+h){route();}else{location.hash=h;}}
window.addEventListener('hashchange',route);
back.onclick=function(){var h=location.hash.slice(1),p=h.split('.');
  if(p[0]==='t'){go('s.'+p[1]);}else{go('home');}};
document.getElementById('brand').onclick=function(){go('home');};

function view(html){app.innerHTML='<div class="view wrap">'+html+'</div>';window.scrollTo(0,0);}

function route(){
  var h=location.hash.slice(1)||'home', p=h.split('.');
  back.hidden=(p[0]==='home');
  if(p[0]==='s'&&byId[p[1]])return showSection(byId[p[1]]);
  if(p[0]==='t'&&byId[p[1]])return showTopic(byId[p[1]],parseInt(p[2],10)||0);
  if(p[0]==='search')return showSearch();
  if(p[0]==='glossary')return showGlossary();
  if(p[0]==='quiz')return showQuiz();
  if(p[0]==='saved')return showSaved();
  showHome();
}

var ICON={
 search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
 glossary:'<svg viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17a3 3 0 013-3h11"/></svg>',
 quiz:'<svg viewBox="0 0 24 24"><path d="M9 9a3 3 0 115 2c-1 .7-2 1.3-2 3"/><circle cx="12" cy="18" r=".6"/><rect x="3" y="3" width="18" height="18" rx="3"/></svg>',
 saved:'<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>'
};

function showHome(){
  var rows=S.map(function(s,i){return '<li><button data-go="s.'+s.id+'"><span class="n">'+String(i+1).padStart(2,'0')+'</span><span class="tx"><span class="tt">'+esc(s.title)+'</span><span class="sb">'+esc(s.sub)+' · '+s.topics.length+' topics</span></span><span class="ch">›</span></button></li>';}).join('');
  view('<section class="mark"><div class="stamp"><b>Gold Forge</b><small>FINE · 999.9 · AU</small></div><p>Metallurgy study guide: assaying, extraction, smelting, refining, and the metals themselves.</p></section>'+
  '<div class="tools">'+
  '<button data-go="search">'+ICON.search+'Search</button>'+
  '<button data-go="glossary">'+ICON.glossary+'Glossary</button>'+
  '<button data-go="quiz">'+ICON.quiz+'Quiz</button>'+
  '<button data-go="saved">'+ICON.saved+'Saved</button></div>'+
  '<p class="label">Sections</p><ul class="rows">'+rows+'</ul>'+
  '<div class="foot">A study reminder. Follow your instructor, your lab procedures, and each chemical\'s safety data sheet. Values are typical and rounded.</div>');
}

function showSection(s){
  var rows=s.topics.map(function(t,i){return '<li><button data-go="t.'+s.id+'.'+i+'"><span class="tx"><span class="tt">'+esc(t.t)+'</span></span><span class="ch">›</span></button></li>';}).join('');
  view('<header class="head"><button class="crumb" data-go="home">Section '+(s.n+1)+'</button><h1>'+esc(s.title)+'</h1><p>'+esc(s.sub)+'</p></header><ul class="rows" style="margin-top:1rem">'+rows+'</ul><div style="height:2rem"></div>');
}

var saved=load('saved',[]);
function isSaved(k){return saved.indexOf(k)>=0;}
function toggleSave(k){var i=saved.indexOf(k);if(i>=0)saved.splice(i,1);else saved.push(k);save('saved',saved);}

function showTopic(s,i){
  var t=s.topics[i]; if(!t)return showSection(s);
  var k=s.id+'.'+i, prev=s.topics[i-1], next=s.topics[i+1];
  var pg='<nav class="pager">'+
    (prev?'<button data-go="t.'+s.id+'.'+(i-1)+'"><small>‹ Previous</small><span>'+esc(prev.t)+'</span></button>':'<span></span>')+
    (next?'<button data-go="t.'+s.id+'.'+(i+1)+'"><small>Next ›</small><span>'+esc(next.t)+'</span></button>':'<button data-go="s.'+s.id+'"><small>Done</small><span>Back to '+esc(s.title)+'</span></button>')+'</nav>';
  view('<header class="head"><button class="crumb" data-go="s.'+s.id+'">'+esc(s.title)+'</button><h1>'+esc(t.t)+'</h1>'+
    '<div class="tbar"><button class="star" id="star" aria-pressed="'+isSaved(k)+'">'+(isSaved(k)?'★ Saved':'☆ Save')+'</button></div></header>'+
    '<article class="art">'+render(t.b)+'</article>'+pg);
  document.getElementById('star').onclick=function(){toggleSave(k);this.setAttribute('aria-pressed',isSaved(k));this.textContent=isSaved(k)?'★ Saved':'☆ Save';};
}

function showSaved(){
  var list=saved.filter(function(k){var p=k.split('.');return byId[p[0]]&&byId[p[0]].topics[p[1]];});
  var rows=list.map(function(k){var p=k.split('.'),s=byId[p[0]],t=s.topics[p[1]];return '<li><button data-go="t.'+k+'"><span class="hs">'+esc(s.title)+'</span><span class="ht">'+esc(t.t)+'</span></button></li>';}).join('');
  view('<header class="head"><h1>Saved</h1><p>Topics you starred for quick review.</p></header>'+(rows?'<ul class="hits">'+rows+'</ul>':'<p class="empty">Nothing saved yet. Open any topic and tap ☆ Save to keep it here.</p>'));
}

/* ---------- search ---------- */
var IDX=[];
S.forEach(function(s){s.topics.forEach(function(t,i){IDX.push({k:s.id+'.'+i,sec:s.title,t:t.t,tl:t.t.toLowerCase(),body:plain(t.b),bl:plain(t.b).toLowerCase()});});});
var lastQ=load('q','');
function snippet(body,bl,q){var i=bl.indexOf(q);if(i<0)return '';var a=Math.max(0,i-50),b=Math.min(body.length,i+q.length+80);
  var s=(a>0?'…':'')+body.slice(a,b).replace(/\n/g,' ')+(b<body.length?'…':'');
  var j=s.toLowerCase().indexOf(q);return esc(s.slice(0,j))+'<span class="hl">'+esc(s.slice(j,j+q.length))+'</span>'+esc(s.slice(j+q.length));}
function showSearch(){
  view('<header class="head"><h1>Search</h1><p>Any term, metal, mineral, chemical, or formula.</p></header><input class="field" id="q" type="search" placeholder="e.g. cupel, Kroll, CuFeS₂, temper" autocomplete="off" value="'+esc(lastQ)+'"><ul class="hits" id="hits"></ul>');
  var q=document.getElementById('q'),hits=document.getElementById('hits');
  function run(){
    var v=q.value.trim().toLowerCase();lastQ=q.value;save('q',lastQ);
    if(v.length<2){hits.innerHTML='<li class="empty">Type at least two letters.</li>';return;}
    var words=v.split(/\s+/);
    var r=IDX.map(function(x){var sc=0;words.forEach(function(w){if(x.tl.indexOf(w)>=0)sc+=10;var c=x.bl.split(w).length-1;if(c)sc+=Math.min(c,5);else if(x.tl.indexOf(w)<0)sc=-999;});return {x:x,sc:sc};})
      .filter(function(o){return o.sc>0;}).sort(function(a,b){return b.sc-a.sc;}).slice(0,40);
    var g=GF.glossary.filter(function(e){return e[0].toLowerCase().indexOf(v)>=0;}).slice(0,6);
    var h=g.map(function(e){return '<li><button data-go="glossary"><span class="hs">Glossary</span><span class="ht">'+esc(e[0])+'</span><span class="hx">'+esc(e[1])+'</span></button></li>';}).join('');
    h+=r.map(function(o){return '<li><button data-go="t.'+o.x.k+'"><span class="hs">'+esc(o.x.sec)+'</span><span class="ht">'+esc(o.x.t)+'</span><span class="hx">'+snippet(o.x.body,o.x.bl,words[0])+'</span></button></li>';}).join('');
    hits.innerHTML=h||'<li class="empty">No matches. Try a shorter word or a chemical symbol.</li>';
  }
  q.oninput=run; run(); if(!lastQ)q.focus();
}

/* ---------- glossary ---------- */
function showGlossary(){
  var G=GF.glossary.slice().sort(function(a,b){return a[0].localeCompare(b[0]);});
  var letters=[];G.forEach(function(e){var c=e[0][0].toUpperCase();if(letters.indexOf(c)<0)letters.push(c);});
  view('<header class="head"><h1>Glossary</h1><p>'+G.length+' terms used in metallurgy.</p></header><input class="field" id="gq" type="search" placeholder="Filter terms" autocomplete="off"><div class="letters">'+letters.map(function(c){return '<button data-l="'+c+'">'+c+'</button>';}).join('')+'</div><dl class="gl" id="gl"></dl>');
  var gl=document.getElementById('gl'),gq=document.getElementById('gq');
  function draw(){var v=gq.value.trim().toLowerCase();
    gl.innerHTML=G.filter(function(e){return !v||e[0].toLowerCase().indexOf(v)>=0||e[1].toLowerCase().indexOf(v)>=0;})
      .map(function(e){return '<dt id="g-'+e[0][0].toUpperCase()+'">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'</dd>';}).join('')||'<p class="empty">No terms match.</p>';}
  gq.oninput=draw;draw();
  app.querySelectorAll('[data-l]').forEach(function(b){b.onclick=function(){gq.value='';draw();var t=document.getElementById('g-'+b.dataset.l);if(t)t.scrollIntoView({behavior:'smooth',block:'start'});};});
}

/* ---------- quiz ---------- */
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
var qState=null, qPick=load('qpick','all');
function showQuiz(){
  var secs=S.filter(function(s){return GF.quiz.some(function(q){return q.s===s.id;});});
  var opts='<option value="all">All sections</option>'+secs.map(function(s){return '<option value="'+s.id+'"'+(qPick===s.id?' selected':'')+'>'+esc(s.title)+'</option>';}).join('');
  view('<header class="head"><h1>Quiz</h1><p>Ten questions at a time, including step-order questions.</p></header><label class="label" for="qsec" style="display:block">Section</label><select class="field" id="qsec" style="margin-top:0">'+opts+'</select><div id="qz"></div>');
  var sel=document.getElementById('qsec'); sel.onchange=function(){qPick=sel.value;save('qpick',qPick);start();};
  start();
}
function start(){
  var pool=GF.quiz.filter(function(q){return qPick==='all'||q.s===qPick;});
  qState={qs:shuffle(pool).slice(0,10),i:0,score:0};
  ask();
}
function ask(){
  var box=document.getElementById('qz'); if(!box)return;
  var st=qState, q=st.qs[st.i];
  if(!q){box.innerHTML='<div class="qcard"><p class="label">Result</p><div class="score">'+st.score+' / '+st.qs.length+'</div><p>'+(st.score===st.qs.length?'Perfect score.':st.score>=st.qs.length*0.7?'Solid. Review the ones you missed.':'Keep studying the sections you missed, then try again.')+'</p><button class="next" id="again">New quiz</button></div>';
    document.getElementById('again').onclick=start;return;}
  var meta='<div class="qmeta"><span>Question '+(st.i+1)+' of '+st.qs.length+'</span><span>Score '+st.score+'</span></div>';
  if(q.type==='order'){
    var picked=[], opts=shuffle(q.steps);
    box.innerHTML='<div class="qcard">'+meta+'<p class="qq">'+esc(q.q)+'</p><p class="ordhint">Tap the steps in order.</p><ol class="ord" id="ord"></ol><div class="opts" id="opts">'+opts.map(function(o,i){return '<button data-i="'+i+'">'+esc(o)+'</button>';}).join('')+'</div><button class="ghost" id="undo">Undo last</button><div id="fb"></div></div>';
    var ord=document.getElementById('ord');
    function draw(){ord.innerHTML=picked.map(function(i){return '<li>'+esc(opts[i])+'</li>';}).join('');
      box.querySelectorAll('#opts button').forEach(function(b){b.hidden=picked.indexOf(+b.dataset.i)>=0;});}
    box.querySelectorAll('#opts button').forEach(function(b){b.onclick=function(){picked.push(+b.dataset.i);draw();if(picked.length===opts.length)check();};});
    document.getElementById('undo').onclick=function(){picked.pop();draw();};
    function check(){
      var ok=true;ord.querySelectorAll('li').forEach(function(li,n){var r=opts[picked[n]]===q.steps[n];if(!r)ok=false;li.className=r?'right':'wrong';});
      document.getElementById('undo').hidden=true;
      if(ok)st.score++;
      document.getElementById('fb').innerHTML='<div class="fb '+(ok?'ok':'no')+'"><b>'+(ok?'Correct order':'Correct order is')+'</b>'+(ok?'':'<ol>'+q.steps.map(function(s){return '<li>'+esc(s)+'</li>';}).join('')+'</ol>')+'</div><button class="next" id="nx">Next question</button>';
      document.getElementById('nx').onclick=function(){st.i++;ask();};
    }
    return;
  }
  var order=shuffle(q.a.map(function(_,i){return i;}));
  box.innerHTML='<div class="qcard">'+meta+'<p class="qq">'+esc(q.q)+'</p><div class="opts">'+order.map(function(i){return '<button data-i="'+i+'">'+esc(q.a[i])+'</button>';}).join('')+'</div><div id="fb"></div></div>';
  box.querySelectorAll('.opts button').forEach(function(b){b.onclick=function(){
    var pick=+b.dataset.i, ok=pick===q.c; if(ok)st.score++;
    box.querySelectorAll('.opts button').forEach(function(x){x.disabled=true;if(+x.dataset.i===q.c)x.classList.add('right');else if(x===b)x.classList.add('wrong');});
    document.getElementById('fb').innerHTML='<div class="fb '+(ok?'ok':'no')+'"><b>'+(ok?'Correct':'Not quite — answer: '+esc(q.a[q.c]))+'</b>'+esc(q.e||'')+'</div><button class="next" id="nx">'+(st.i+1<st.qs.length?'Next question':'See score')+'</button>';
    document.getElementById('nx').onclick=function(){st.i++;ask();};
  };});
}

/* ---------- delegated navigation ---------- */
app.addEventListener('click',function(e){var b=e.target.closest('[data-go]');if(b){e.preventDefault();go(b.dataset.go);}});

route();

/* ---------- offline (installed app only; ignored where not allowed) ---------- */
try{if('serviceWorker' in navigator&&location.protocol==='https:'&&window.top===window.self){navigator.serviceWorker.register('sw.js').catch(function(){});}}catch(e){}
})();
