(function(){


/* ═══════════════════════════════════════════════
   KONFIGURASI
═══════════════════════════════════════════════ */
var SOURCE_URL    = 'https://shortq.xyz/prediksibola'; // sumber data prediksi
var SITE_NAME     = 'IBC138';
var SITE_LOGO     = 'https://ibc138.com/img/logoibc138.png';
var MBAPPE_GIF    = 'https://photoku.io/images/2026/05/31/giffmbappee-finall.gif';
var MARQUEE_TEXT  = '🔥 PREDIKSI BOLA TERUPDATE ! Tunggu apa lagi? Daftar di IBC138 dan nikmati pengalaman taruhan terbaik dengan peluang besar! 🔥';
var COLOR_MAIN    = '#FF6600';
var COLOR_TEXT    = '#ffe8d0';
var BG_IMAGE      = '';
var BG_OVERLAY    = 'rgba(15,3,0,0.88), rgba(30,8,0,0.90)';
var AUTO_REFRESH  = 5 * 60 * 1000; // 5 menit

var PROXIES = [
  { name:'AllOrigins',   url:function(u){return 'https://api.allorigins.win/raw?url='+encodeURIComponent(u);}, text:true },
  { name:'Hexlet',       url:function(u){return 'https://allorigins.hexlet.app/get?disableCache=true&url='+encodeURIComponent(u);}, json:true },
  { name:'CodeTabs',     url:function(u){return 'https://api.codetabs.com/v1/proxy?quest='+encodeURIComponent(u);}, text:true },
  { name:'corsproxy.io', url:function(u){return 'https://corsproxy.io/?'+encodeURIComponent(u);}, text:true }
];

/* ═══════════════════════════════════════════════
   SUMBER JPKOLONI4D — URL OTOMATIS IKUT TANGGAL (WIB)
   Format : prediksi-bola-{tgl1}-{tgl2}-{bulan}-{tahun}
   Contoh : prediksi-bola-28-29-juli-2026
   Set JPK_ENABLED = false untuk kembali ke sumber lama.
═══════════════════════════════════════════════ */
var JPK_ENABLED = true;
var JPK_BASE    = 'https://jpbolepalngi.pagesco.de/prediksi-bola-';
var JPK_BULAN   = ['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember'];

function jpkTanggalWIB(offsetHari){
  var now = new Date(Date.now() + 7*3600*1000);
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + (offsetHari||0)));
}
function jpkKandidat(d1){
  var d2 = new Date(Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate()+1));
  var t1=d1.getUTCDate(), t2=d2.getUTCDate();
  var b1=JPK_BULAN[d1.getUTCMonth()], b2=JPK_BULAN[d2.getUTCMonth()];
  var y1=d1.getUTCFullYear(), y2=d2.getUTCFullYear();
  if(b1===b2) return [JPK_BASE+t1+'-'+t2+'-'+b1+'-'+y1];
  var v=[JPK_BASE+t1+'-'+b1+'-'+t2+'-'+b2+'-'+y2,
         JPK_BASE+t1+'-'+t2+'-'+b1+'-'+y1,
         JPK_BASE+t1+'-'+t2+'-'+b2+'-'+y2];
  if(y1!==y2) v.push(JPK_BASE+t1+'-'+b1+'-'+y1+'-'+t2+'-'+b2+'-'+y2);
  return v;
}
function jpkDaftarUrl(){
  // hari ini dulu, lalu kemarin (kalau halaman hari ini belum terbit)
  return jpkKandidat(jpkTanggalWIB(0)).concat(jpkKandidat(jpkTanggalWIB(-1)));
}
function jpkFlat(s){
  return s.replace(/<script[\s\S]*?<\/script>/gi,' ')
          .replace(/<style[\s\S]*?<\/style>/gi,' ')
          .replace(/<[^>]+>/g,' ')
          .replace(/&amp;/g,'&').replace(/&nbsp;|&#160;/g,' ')
          .replace(/&bull;|&#8226;/g,'•')
          .replace(/\s+/g,' ').trim();
}
/* Konversi halaman jpkoloni → format lines pipeline lama:
   "NAMA LIGA" lalu "28/07 18:00 WIB Home VS Away 1 : 0" */
function parseJpkoloni(html){
  if(!html) return [];
  var out=[];
  var MRE=/(\d{1,2}:\d{2})\s*WIB\s*•?\s*(\d{2}\/\d{2})\s+(.+?)\s+VS\s+(.+?)\s+(\d+)\s*[:\-]\s*(\d+)(?=\s|$)/g;
  var parts=html.split(/<h[23][^>]*>/gi);
  for(var p=1;p<parts.length;p++){
    var seg=parts[p];
    var cut=seg.search(/<\/h[23]>/i);
    if(cut<0) continue;
    var liga=jpkFlat(seg.slice(0,cut));
    var body=jpkFlat(seg.slice(cut));
    if(!liga || liga.length>60 || /rincian|prediksi bola \d/i.test(liga)) continue;
    var rows=[]; var m; MRE.lastIndex=0;
    while((m=MRE.exec(body))!==null){
      rows.push(m[2]+' '+m[1]+' WIB '+m[3].replace(/^\s+|\s+$/g,'')+' VS '+m[4].replace(/^\s+|\s+$/g,'')+' '+m[5]+' : '+m[6]);
    }
    if(rows.length){ out.push(liga.toUpperCase()); out.push.apply(out,rows); }
  }
  return out;
}


/* ═══════════════════════════════════════════════
   ELEMEN ROOT
═══════════════════════════════════════════════ */
var root = document.getElementById('ibc138-root');

// Inject progress bar CSS
(function(){
  var s=document.createElement('style');
  s.textContent=
    '#ibc138-root .ibc-progress-wrap{width:80%;max-width:320px;margin-top:2px;}'
    +'#ibc138-root .ibc-progress-track{width:100%;height:10px;background:rgba(255,255,255,0.06);border-radius:8px;overflow:hidden;border:1px solid #FF660026;position:relative;}'
    +'#ibc138-root .ibc-progress-fill{height:100%;width:0%;background:linear-gradient(90deg,#CC4400,#FF6600,#FF8C00);border-radius:8px;transition:width .4s ease;box-shadow:0 0 12px #FF660066,inset 0 1px 0 rgba(255,255,255,0.25);}'
    +'#ibc138-root .ibc-progress-pct{color:#FF6600;font-size:12px;font-weight:700;letter-spacing:1px;text-align:center;margin-top:6px;text-shadow:0 0 8px #FF660060;}';
  document.head.appendChild(s);
})();

function showLoading(msg, pct){
  var pctVal = (typeof pct === 'number') ? pct : -1;
  var hasBar = pctVal >= 0;
  root.innerHTML =
    '<div class="ibc-loading-wrap">'+
    '<img src="https://ibc138.com/img/logoibc138.png" alt="IBC138" style="width:110px;max-height:72px;object-fit:contain;filter:drop-shadow(0 0 16px #FF6600);margin-bottom:8px;"/>'+
    '<div class="ibc-spinner"></div>'+
    '<div class="ibc-loading-text">⚽ '+(msg||'Memuat Prediksi IBC138…')+'</div>'+
    (hasBar?
      '<div class="ibc-progress-wrap">'+
        '<div class="ibc-progress-track"><div class="ibc-progress-fill" id="ibc-pbar" style="width:'+pctVal+'%"></div></div>'+
        '<div class="ibc-progress-pct" id="ibc-ppct">'+Math.round(pctVal)+'%</div>'+
      '</div>'
    :'')+
    '</div>';
}

function updateProgress(pct){
  var bar = document.getElementById('ibc-pbar');
  var lbl = document.getElementById('ibc-ppct');
  if(bar) bar.style.width = pct+'%';
  if(lbl) lbl.textContent = Math.round(pct)+'%';
}

function animateProgress(from, to, duration){
  return new Promise(function(resolve){
    var start = performance.now();
    function tick(now){
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var current = from + (to - from) * progress;
      updateProgress(current);
      if(progress < 1) requestAnimationFrame(tick);
      else resolve();
    }
    requestAnimationFrame(tick);
  });
}
function showError(msg){
  root.innerHTML =
    '<div class="ibc-loading-wrap">'+
    '<div class="ibc-loading-text" style="color:#ff5555">⚠ '+msg+'</div>'+
    '<div class="ibc-loading-sub">Coba reload halaman</div>'+
    '</div>';
}

/* ═══════════════════════════════════════════════
   FETCH dengan fallback multi-proxy
═══════════════════════════════════════════════ */
async function fetchHTML(url){
  var totalProxies = PROXIES.length;
  var perProxy = 60 / totalProxies;

  for(var i=0;i<totalProxies;i++){
    var px=PROXIES[i];
    var baseP = i * perProxy;
    try{
      updateProgress(baseP);
      console.log('[IBC138] Mencoba '+px.name+'…');
      var ctrl=new AbortController();
      var tid=setTimeout(function(){ctrl.abort();},10000);

      var fetchDone = false;
      var animProm = (function(bp, pp){
        return new Promise(function(res){
          var s = performance.now();
          function t(now){
            if(fetchDone){ res(); return; }
            var p = Math.min((now-s)/9000, 0.9);
            updateProgress(bp + pp * p);
            requestAnimationFrame(t);
          }
          requestAnimationFrame(t);
        });
      })(baseP, perProxy);

      var resp=await fetch(px.url(url),{signal:ctrl.signal,cache:'no-store'});
      clearTimeout(tid);
      fetchDone = true;
      if(!resp.ok) throw new Error('HTTP '+resp.status);
      var html;
      if(px.json){ var j=await resp.json(); html=j.contents||''; }
      else { html=await resp.text(); }
      if(!html||html.length<200) throw new Error('Respons kosong');
      console.log('[IBC138] OK via '+px.name);
      updateProgress(60);
      return html;
    }catch(e){
      fetchDone = true;
      console.warn('[IBC138] '+px.name+' gagal:',e.message);
    }
  }
  throw new Error('Semua proxy gagal');
}

/* ═══════════════════════════════════════════════
   PARSER — adaptasi dari generator.html
═══════════════════════════════════════════════ */
function preNorm(line){
  return line.trim()
    .replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').replace(/&#160;/g,' ')
    .replace(/[\u2013\u2014]/g,'-')
    .replace(/\s+/g,' ').trim();
}

var MATCH_RE = /^(\d{1,2}[\/\-]\d{1,2})[\s,]+(\d{1,2}[:\.]\d{2})(?:\s*WIB)?\s+(.+?)\s+v\.?s\.?\s+(.+?)\s+(\d+\s*[:\-\u2013\u2014]\s*\d+)\s*$/i;

function parseRawHtml(html){
  var doc=(new DOMParser()).parseFromString(html,'text/html');
  var result=[];
  var targetBodies=[];

  // Cari button PREDIKSI (shortq.xyz accordion Bootstrap)
  var buttons=doc.querySelectorAll('button[data-target],button[data-bs-target]');
  buttons.forEach(function(btn){
    var txt=(btn.textContent||'').toUpperCase();
    if(txt.indexOf('PREDIKSI')<0||txt.indexOf('JADWAL')>=0) return;
    var targetId=(btn.getAttribute('data-target')||btn.getAttribute('data-bs-target')||'').replace('#','');
    if(!targetId) return;
    var body=doc.getElementById(targetId);
    if(!body) return;
    var cb=body.querySelector('.card-body')||body.querySelector('.accordion-body')||body;
    if(cb) targetBodies.push({btn:txt,body:cb});
  });

  // Fallback: collapse show
  if(!targetBodies.length){
    doc.querySelectorAll('.collapse.show .card-body').forEach(function(b){ targetBodies.push({btn:'',body:b}); });
  }
  // Fallback: accordion-collapse show
  if(!targetBodies.length){
    doc.querySelectorAll('.accordion-collapse.show .accordion-body').forEach(function(b){ targetBodies.push({btn:'',body:b}); });
  }

  // Generic fallback
  if(!targetBodies.length){ return parseGeneric(doc); }

  targetBodies.forEach(function(item){
    var raw=item.body.innerHTML||'';
    raw=raw
      .replace(/<br\s*\/?>/gi,'\n').replace(/<\/p>/gi,'\n').replace(/<p[^>]*>/gi,'\n')
      .replace(/<\/li>/gi,'\n').replace(/<li[^>]*>/gi,'\n')
      .replace(/<\/div>/gi,'\n').replace(/<div[^>]*>/gi,'\n')
      .replace(/<[^>]+>/g,' ');
    var lines=raw.split('\n');
    lines.forEach(function(line){
      var clean=preNorm(line);
      if(!clean||clean.length<3) return;
      if(MATCH_RE.test(clean)){ result.push(clean); return; }
      var isNoise=/https?:\/\/|www\.|@/i.test(clean)||/^\d+$/.test(clean)||clean.length>100||/klik|login|daftar|register|promo|bonus|copyright/i.test(clean)||/\bv\.?s\.?\b/i.test(clean)||/^\d/.test(clean);
      if(!isNoise&&/[A-Za-z]/.test(clean)){
        var up=clean.toUpperCase();
        if(result.length===0||result[result.length-1]!==up) result.push(up);
      }
    });
  });

  var hasMatch=result.some(function(l){ return MATCH_RE.test(l); });
  if(!hasMatch) return parseGeneric(doc);

  // Deduplicate
  var clean=[];
  result.forEach(function(l){ if(!l.trim()) return; if(clean.length&&clean[clean.length-1]===l) return; clean.push(l); });
  return clean;
}

function parseGeneric(doc){
  ['script','style','nav','header','footer','button','a','img','noscript','iframe','form'].forEach(function(tag){
    doc.querySelectorAll(tag).forEach(function(el){ el.remove(); });
  });
  var text=(doc.body&&(doc.body.innerText||doc.body.textContent))||'';
  var NOISE=/klik|disini|whatsapp|telegram|instagram|copyright|privacy|verified|https?:|www\.|@/i;
  var allLines=text.split(/\r?\n/).map(function(l){ return preNorm(l); }).filter(function(l){ return l.length>1; });
  // PENTING: ambil HANYA section PREDIKSI (heading "PREDIKSI BOLA ..." terakhir yang
  // masih punya baris match setelahnya). Section JADWAL (angka handicap) di-skip total.
  var startIdx=-1;
  for(var i=0;i<allLines.length;i++){
    if(!/PREDIKSI\s*BOLA/i.test(allLines[i])) continue;
    if(/\bv\.?s\.?\b/i.test(allLines[i])) continue;
    for(var j=i+1;j<allLines.length;j++){ if(MATCH_RE.test(allLines[j])){ startIdx=i; break; } }
  }
  var lines=startIdx>=0?allLines.slice(startIdx+1):allLines;
  // Jika section PREDIKSI ketemu, langsung capture dari awal supaya
  // header liga pertama (sebelum baris match pertama) tidak hilang.
  var result=[];var capturing=(startIdx>=0);var lastLg=false;
  lines.forEach(function(line){
    var isMatch=MATCH_RE.test(line);
    if(!capturing&&isMatch) capturing=true;
    if(!capturing) return;
    if(isMatch){ result.push(line); lastLg=false; return; }
    var isNoise=NOISE.test(line)||/^\d+$/.test(line)||line.length>90||/\bv\.?s\.?\b/i.test(line)||/^\d/.test(line);
    var isLg=!isNoise&&line.length>=3&&/[A-Za-z]/.test(line);
    if(isLg&&!lastLg){ var up=line.toUpperCase(); if(!result.length||result[result.length-1]!==up) result.push(up); lastLg=true; }
    else if(!isLg) lastLg=false;
  });
  return result;
}

/* ═══════════════════════════════════════════════
   PARSE MATCH LINES → leagues[]
═══════════════════════════════════════════════ */
function cleanName(name){
  return name.replace(/\[\s*W\s*\]/gi,'').replace(/\(\s*W\s*\)/gi,'')
    .replace(/\[\s*[nN]\s*\]/g,'').replace(/\bU\s*1[0-9]\b/gi,'').replace(/\bU\s*2[0-3]\b/gi,'')
    .replace(/\(\s*U\s*\d{2}\s*\)/gi,'').replace(/\bSenior\b/gi,'').replace(/\bJunior\b/gi,'')
    .replace(/\s+/g,' ').trim();
}

function parseMatchLine(line){
  var tmp=line.trim().replace(/\r/g,'');
  if(!/\bv\.?s\.?\b/i.test(tmp)) return null;
  var date='',time='',score1='',score2='';
  var sm=tmp.match(/\b(\d{1,2})\s*[:\-\u2013\u2014]\s*(\d{1,2})\s*$/);
  if(sm){ score1=sm[1]; score2=sm[2]; tmp=tmp.substring(0,sm.index).trim(); }
  var dtm=tmp.match(/^(\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?)(?:\s+(\d{1,2}[:.](\d{2}))(?:\s+(WIB|WITA|WIT))?)?/i);
  if(dtm){
    date=dtm[1].replace('-','/');
    if(dtm[2]){ time=dtm[2].replace('.',':'); }
    tmp=tmp.substring(dtm[0].length).trim();
  } else {
    var tm=tmp.match(/^(\d{1,2}[:.](\d{2}))(?:\s+(WIB|WITA|WIT))?/i);
    if(tm){ time=tm[1].replace('.',':'); tmp=tmp.substring(tm[0].length).trim(); }
  }
  var vm=tmp.match(/^(.+?)\s+v\.?s\.?\s+(.+)$/i);
  if(!vm) return null;
  var t1=vm[1].trim().replace(/^\[\d+\]\s*/,'').replace(/\[\s*[nN]\s*\]/g,'').replace(/\s+/g,' ').trim();
  var t2=vm[2].trim().replace(/^\[\d+\]\s*/,'').replace(/\[\s*[nN]\s*\]/g,'').replace(/\s+/g,' ').trim();
  if(!t1||!t2) return null;
  if(score1===''){score1='-';score2='-';}
  return {date:date||'-',time:time||'-',team1:t1,team2:t2,team1Clean:cleanName(t1),team2Clean:cleanName(t2),score1:score1,score2:score2};
}

function parseAll(input){
  var lines=input.split('\n').filter(function(l){ return l.trim()!==''; });
  var result=[],curLeague=null,matches=[];
  for(var i=0;i<lines.length;i++){
    var line=lines[i].trim();
    var m=parseMatchLine(line);
    if(!m){
      if(curLeague&&matches.length) result.push({name:curLeague,matches:matches.slice()});
      curLeague=line; matches=[];
    } else {
      if(curLeague) matches.push(m);
    }
  }
  if(curLeague&&matches.length) result.push({name:curLeague,matches:matches.slice()});
  return result;
}

/* ═══════════════════════════════════════════════
   AUTO PREDICTION
═══════════════════════════════════════════════ */
function autoPred(m){
  var s1=parseInt(m.score1)||0,s2=parseInt(m.score2)||0;
  var hasScore=(m.score1!=='-'&&m.score2!=='-');
  var total=s1+s2,diff=Math.abs(s1-s2);
  var homeWin=s1>s2,awayWin=s2>s1;
  var hcp,hcpClass,hcpNote;
  if(!hasScore){ hcp=m.team1+' -0.5';hcpClass='green';hcpNote='Prediksi Awal'; }
  else if(s1===s2){ hcp='Draw / AH 0';hcpClass='';hcpNote='Imbang ketat'; }
  else if(homeWin){ hcp=diff>=2?m.team1+' -'+(diff-1)+'.5':m.team1+' -0.5';hcpClass='green';hcpNote='Home unggul'; }
  else { hcp=diff>=2?m.team2+' -'+(diff-1)+'.5':m.team2+' -0.5';hcpClass='green';hcpNote='Away unggul'; }
  var ouLine=total<=2?'2.5':(total<=4?'3.5':'4.5');
  var seed=(m.team1+m.team2+new Date().toDateString()).split('').reduce(function(a,c){return a+c.charCodeAt(0);},0);
  var ouSide=seed%2===0?'Over':'Under';
  var ouPick=ouSide+' '+ouLine;
  var ouClass=ouSide==='Over'?'green':'red';
  var ouNotes={'Over 2.5':'Laga Terbuka','Over 3.5':'Kedua Tim Menyerang','Over 4.5':'Banyak Gol','Under 2.5':'Laga Ketat','Under 3.5':'Pertahanan Solid','Under 4.5':'Tempo Rendah'};
  var ouNote=ouNotes[ouPick]||'Analisis AI';
  var ox2,ox2Class,ox2Note;
  if(homeWin){ox2='Home Win';ox2Class='green';ox2Note=m.team1;}
  else if(awayWin){ox2='Away Win';ox2Class='green';ox2Note=m.team2;}
  else{ox2='Draw';ox2Class='';ox2Note='Hasil imbang';}
  return {hcp:hcp,hcpClass:hcpClass,hcpNote:hcpNote,ou:ouPick,ouClass:ouClass,ouNote:ouNote,ox2:ox2,ox2Class:ox2Class,ox2Note:ox2Note,acc:m.score1+' - '+m.score2};
}

/* ═══════════════════════════════════════════════
   LOGO — flag + SVG fallback
═══════════════════════════════════════════════ */

// ── FLAG MAP ──
var FLAG_MAP={
  'mexico':'mx','south africa':'za','canada':'ca','usa':'us','united states':'us',
  'brazil':'br','argentina':'ar','france':'fr','germany':'de','spain':'es',
  'england':'gb','portugal':'pt','netherlands':'nl','belgium':'be','italy':'it',
  'japan':'jp','korea republic':'kr','south korea':'kr','australia':'au',
  'indonesia':'id','thailand':'th','vietnam':'vn','malaysia':'my','philippines':'ph',
  'cambodia':'kh','singapore':'sg','myanmar':'mm','laos':'la',
  'venezuela':'ve','paraguay':'py','chile':'cl','colombia':'co','peru':'pe',
  'uruguay':'uy','ecuador':'ec','bolivia':'bo','sweden':'se','finland':'fi',
  'norway':'no','denmark':'dk','ireland':'ie','scotland':'gb-sct','wales':'gb-wls',
  'switzerland':'ch','austria':'at','poland':'pl','czech republic':'cz',
  'slovakia':'sk','hungary':'hu','romania':'ro','bulgaria':'bg','croatia':'hr',
  'serbia':'rs','ukraine':'ua','russia':'ru','turkey':'tr','greece':'gr',
  'morocco':'ma','senegal':'sn','ghana':'gh','nigeria':'ng','egypt':'eg',
  'cameroon':'cm','ivory coast':'ci','algeria':'dz','tunisia':'tn',
  'saudi arabia':'sa','iran':'ir','iraq':'iq','qatar':'qa','uae':'ae',
  'united arab emirates':'ae','china':'cn','india':'in','pakistan':'pk',
  'new zealand':'nz','usa u23':'us','canada u20':'ca','portugal u20':'pt',
  'japan u19':'jp','venezuela u20':'ve','indonesia u19':'id','thailand u19':'th',
  'australia u19':'au','cambodia u19':'kh','bosnia-herzegovina':'ba',
  'bosnia herzegovina':'ba','paraguay':'py'
};

// ── MERGE MANUAL logo-db.js (override DB inline, jika file ada) ──


var LOGO_DB_EXTRA={
  'helsingborgs':'https://r2.thesportsdb.com/images/media/team/badge/yb5a4f1759508230.png',
  'landscrona bois':'https://media.api-sports.io/football/teams/2176.png',
  'japs':'https://r2.thesportsdb.com/images/media/team/badge/5zd4oh1738203859.png',
  'pk-35 helsinki':'https://r2.thesportsdb.com/images/media/team/badge/6e9t451725427142.png',
  'kerry fc':'https://r2.thesportsdb.com/images/media/team/badge/nxbjkl1679078647.png',
  'athlone town':'https://r2.thesportsdb.com/images/media/team/badge/61tq6g1758171532.png',
  'cork city':'https://r2.thesportsdb.com/images/media/team/badge/0ec2061602255755.png',
  'finn harps':'https://r2.thesportsdb.com/images/media/team/badge/pfu09n1579281537.png',
  'uc dublin':'https://r2.thesportsdb.com/images/media/team/badge/8lsfra1751280876.png',
  'treaty united':'https://r2.thesportsdb.com/images/media/team/badge/xqe0bv1616104889.png',
  'bray wanderers':'https://r2.thesportsdb.com/images/media/team/badge/givpep1724691570.png',
  'wexford fc':'https://r2.thesportsdb.com/images/media/team/badge/yb5a4f1759508230.png',
  'audax italiano':'https://r2.thesportsdb.com/images/media/team/badge/xbowln1672950178.png',
  'deportes la serena':'https://r2.thesportsdb.com/images/media/team/badge/vs7mxv1677600646.png',
  'czech republic':'https://r2.thesportsdb.com/images/media/team/badge/1o0cx31654205806.png',
  'korea republic':'https://apiv2.allsportsapi.com/logo/651_korea-republic.jpg',
  'bosnia-herzegovina':'https://r2.thesportsdb.com/images/media/team/badge/wtqqst1455463120.png',
  'usa':'https://r2.thesportsdb.com/images/media/team/badge/21f0oi1597948195.png'
};

function makeSVG(name){
  var words=name.replace(/[^a-zA-Z\s]/g,' ').trim().split(/\s+/).filter(function(w){return w.length>0;});
  var ini=words.map(function(w){return w[0].toUpperCase();}).join('').substring(0,3)||'TM';
  var cols=['#FFD700','#FDB931','#FF8C00','#00BFFF','#FF4C4C','#00CC88','#8A2BE2','#DC143C','#20B2AA'];
  var h=0; for(var i=0;i<name.length;i++) h=name.charCodeAt(i)+((h<<5)-h);
  var col=cols[Math.abs(h)%cols.length];
  var svg='<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><circle cx="60" cy="60" r="55" fill="'+col+'" stroke="#000" stroke-width="5"/><text x="50%" y="55%" text-anchor="middle" fill="#000" font-size="38" font-weight="bold" font-family="Arial" dy=".3em">'+ini+'</text></svg>';
  try{return 'data:image/svg+xml;base64,'+btoa(svg);}catch(e){return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);}
}

// ── 6-STEP FUZZY LOOKUP — mirror bola_lookup_team() di api_logo.php ──────────
function _fuzzyLookup(name, keyIn) {
    if (typeof window.LOGO_DB === 'undefined') return null;
    var key = (keyIn !== undefined) ? keyIn : name.toLowerCase();

    // ── step 0: strip gender/age/bracket suffixes ────────────────────────
    var clean = key
        .replace(/\[\s*w\s*\]/gi, '')
        .replace(/\(\s*w\s*\)/gi, '')
        .replace(/\bu\s*1[0-9]\b/gi, '')
        .replace(/\bu\s*2[0-3]\b/gi, '')
        .replace(/\(u\s*\d{2}\)/gi, '')
        .replace(/\[youth\]/gi, '')
        .replace(/\b(senior|junior|women|femenino)\b/gi, '')
        .replace(/\s+/g, ' ').trim();

    // ── step 1: exact original ───────────────────────────────────────────
    if (window.LOGO_DB[key]) return window.LOGO_DB[key];
    // ── step 2: exact clean ─────────────────────────────────────────────
    if (clean && clean !== key && window.LOGO_DB[clean]) return window.LOGO_DB[clean];
    // ── step 3: strip [N] prefix ─────────────────────────────────────────
    var nonum = clean.replace(/^\[\d+\]\s*/, '');
    if (nonum !== clean && window.LOGO_DB[nonum]) return window.LOGO_DB[nonum];
    // ── step 4: strip trailing (bracket) ────────────────────────────────
    var nob = clean.replace(/\s*\(.*?\)\s*$/, '').trim();
    if (nob && nob !== clean && window.LOGO_DB[nob]) return window.LOGO_DB[nob];
    if (nob && nob !== nonum  && window.LOGO_DB[nob]) return window.LOGO_DB[nob];

    // ── step 5: strip common prefix (FC,FK,AC,SK,FA,etc.) → retry step1-4 ──
    var _PREFIXES = {'fc':1,'fk':1,'ac':1,'sk':1,'fa':1,'ia':1,'bk':1,
                     'bfc':1,'afc':1,'as':1,'cf':1,'cs':1,'sd':1,'cd':1,'if':1};
    var _SUFFIXES = {'fc':1,'if':1,'bk':1,'fk':1,'sc':1,'ac':1,'sk':1,'cf':1};
    var parts = clean.split(' ');
    if (parts.length > 1 && _PREFIXES[parts[0]]) {
        var nopfx = parts.slice(1).join(' ');
        if (window.LOGO_DB[nopfx]) return window.LOGO_DB[nopfx];
    }
    if (parts.length > 1 && _SUFFIXES[parts[parts.length-1]]) {
        var nosfx = parts.slice(0, parts.length-1).join(' ');
        if (window.LOGO_DB[nosfx]) return window.LOGO_DB[nosfx];
    }

    // ── step 6: try each individual word as exact DB key (handles CRB, KTP etc.) ──
    for (var wi = 0; wi < parts.length; wi++) {
        var pw = parts[wi];
        if (pw.length >= 2 && window.LOGO_DB[pw]) return window.LOGO_DB[pw];
    }

    // ── step 7: ALL words >=4 chars present in DB key ────────────────────
    var base  = nonum || clean;
    var words = base.split(/\s+/).filter(function(w){ return w.length >= 4; });
    if (words.length > 0) {
        var ks = Object.keys(window.LOGO_DB);
        for (var i = 0; i < ks.length; i++) {
            var ok = true;
            for (var j = 0; j < words.length; j++) {
                if (ks[i].indexOf(words[j]) < 0) { ok = false; break; }
            }
            if (ok) return window.LOGO_DB[ks[i]];
        }
        // ── step 8: any word >=5 chars present — last resort ────────────
        for (var i = 0; i < ks.length; i++) {
            for (var j = 0; j < words.length; j++) {
                if (words[j].length >= 5 && ks[i].indexOf(words[j]) >= 0) {
                    return window.LOGO_DB[ks[i]];
                }
            }
        }
    }

    return null;
}

function getLogoUrl(teamName){
  var clean=cleanName(teamName);
  var key=clean.toLowerCase();
  // 1. Fuzzy 8-step — SAMA PERSIS dengan generator (ibc138.html dkk)
  var url=_fuzzyLookup(clean,key);
  if(url) return url;
  // 2. Bendera negara (fallback)
  if(FLAG_MAP[key]) return 'https://flagcdn.com/w320/'+FLAG_MAP[key]+'.png';
  // 3. Extra DB (fallback terakhir sebelum SVG)
  if(LOGO_DB_EXTRA[key]) return LOGO_DB_EXTRA[key];
  var ks=Object.keys(LOGO_DB_EXTRA);
  for(var i=0;i<ks.length;i++){ if(ks[i].indexOf(key)!==-1||key.indexOf(ks[i])!==-1) return LOGO_DB_EXTRA[ks[i]]; }
  // 4. SVG inisial
  return makeSVG(teamName);
}

/* ═══════════════════════════════════════════════
   BUILD AUTO DATE STRING
═══════════════════════════════════════════════ */
function buildDateRange(leagues){
  var days=[];
  var BULAN=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  leagues.forEach(function(l){
    l.matches.forEach(function(m){
      if(m.date&&m.date!=='-'){
        var p=m.date.split('/');
        if(p.length>=2){
          var dd=parseInt(p[0]),mm=parseInt(p[1])-1;
          days.push({d:dd,m:mm});
        }
      }
    });
  });
  if(!days.length){
    var n=new Date(); return n.getDate()+' '+BULAN[n.getMonth()]+' '+n.getFullYear();
  }
  days.sort(function(a,b){ return a.m!==b.m?a.m-b.m:a.d-b.d; });
  var yr=new Date().getFullYear();
  var first=days[0],last=days[days.length-1];
  if(first.d===last.d&&first.m===last.m) return first.d+' '+BULAN[first.m]+' '+yr;
  // Format: "27 Juli - 28 Juli 2026" (bulan selalu ditulis di kedua tanggal)
  return first.d+' '+BULAN[first.m]+' - '+last.d+' '+BULAN[last.m]+' '+yr;
}

/* ═══════════════════════════════════════════════
   BUILD OUTPUT HTML — identik dengan generator.html
═══════════════════════════════════════════════ */
function adjustColor(c,a){
  var n=parseInt(c.replace('#',''),16);
  var r=Math.min(255,Math.max(0,(n>>16)+a));
  var g=Math.min(255,Math.max(0,((n>>8)&0xFF)+a));
  var b=Math.min(255,Math.max(0,(n&0xFF)+a));
  return '#'+(r<<16|g<<8|b).toString(16).padStart(6,'0');
}

function buildOutputHTML(leagues){
  var autoDate=buildDateRange(leagues);
  var bg=COLOR_MAIN, txt=COLOR_TEXT;
  var ltr=adjustColor(bg,30), drk=adjustColor(bg,-20);
  var totalMatches=leagues.reduce(function(a,l){return a+l.matches.length;},0);
  var totalLeagues=leagues.length;

  var blocks='';
  leagues.forEach(function(league){
    var enc=league.name.replace(/"/g,'&quot;');
    var mc=league.matches.length;
    blocks+='<div class="league-block" data-league="'+enc+'">\n';
    blocks+='<div class="league-inner">\n';
    blocks+='<div class="league-crown">\n';
    blocks+='  <div class="crown-name">&#127942; '+league.name+' &#127942;</div>\n';
    blocks+='  <div class="match-count">'+mc+' Match</div>\n';
    blocks+='</div>\n';
    league.matches.forEach(function(m,mi){
      var cls=mi%2===0?'even':'odd';
      var l1=getLogoUrl(m.team1Clean),l2=getLogoUrl(m.team2Clean);
      var p=autoPred(m);
      var hcpAccent=p.hcpClass==='green'?'accent-green':(p.hcpClass==='red'?'accent-red':'accent-gold');
      var ouAccent=p.ouClass==='green'?'accent-green':'accent-red';
      var ox2Accent=p.ox2Class==='green'?'accent-green':'accent-gold';
      var teamKey=(m.team1+' '+m.team2).toLowerCase();
      blocks+='<div class="match-card '+cls+'" data-teams="'+teamKey+'" onclick="ibcToggleCard(this)">\n';
      blocks+='<div class="match-row">\n';
      blocks+='  <div class="team-side left">\n    <div class="box-image">\n      <img class="team-logo" src="'+l1+'" alt="'+m.team1+'"/>\n      <img class="character" src="'+l1+'" alt=""/>\n    </div>\n    <span class="team-name">'+m.team1+'</span>\n  </div>\n';
      blocks+='  <div class="score-center"><div class="score-num">'+m.score1+' : '+m.score2+'</div><div class="match-dt">'+m.date+'<br/>'+m.time+' WIB</div></div>\n';
      blocks+='  <div class="team-side right">\n    <div class="box-image">\n      <img class="team-logo" src="'+l2+'" alt="'+m.team2+'"/>\n      <img class="character" src="'+l2+'" alt=""/>\n    </div>\n    <span class="team-name">'+m.team2+'</span>\n  </div>\n';
      blocks+='  <div class="chev"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>\n';
      blocks+='</div>\n';
      blocks+='<div class="pred-panel"><div class="pred-inner"><div class="pred-grid">\n';
      blocks+='  <div class="pred-col '+hcpAccent+'"><span class="col-title">Handicap</span><span class="col-answer '+p.hcpClass+'">'+p.hcp+'</span><span class="col-note">'+p.hcpNote+'</span></div>\n';
      blocks+='  <div class="pred-col '+ouAccent+'"><span class="col-title">Over / Under</span><span class="col-answer '+p.ouClass+'">'+p.ou+'</span><span class="col-note">'+p.ouNote+'</span></div>\n';
      blocks+='  <div class="pred-col '+ox2Accent+'"><span class="col-title">1X2</span><span class="col-answer '+p.ox2Class+'">'+p.ox2+'</span><span class="col-note">'+p.ox2Note+'</span></div>\n';
      blocks+='  <div class="pred-col accent-gold"><span class="col-title">Skor Akurat</span><span class="col-answer">'+p.acc+'</span><span class="col-note">Top Pick</span></div>\n';
      blocks+='</div></div></div>\n';
      blocks+='</div>\n';
    });
    blocks+='</div>\n</div>\n\n';
  });

  var leagueOpts=leagues.map(function(l){
    return '<option value="'+l.name.replace(/"/g,'&quot;')+'">&#127942; '+l.name+'</option>';
  }).join('\n');

  return '<!-- Generated by IBC138 Auto Embed -->\n'
+'<style>\n'
+'*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}\n'
+':root{--g:'+bg+';--gl:'+ltr+';--g2:'+drk+';--gd:'+bg+'66;--gs:'+bg+'22;--cr:'+txt+';--bg:#000000;--bg2:#0d0d0d;}\n'
+'body{background:linear-gradient(135deg,'+BG_OVERLAY+'),url("'+BG_IMAGE+'") center/cover fixed no-repeat #000;font-family:\'Poppins\',sans-serif;color:var(--cr);min-height:100vh;overflow-x:hidden;}\n'
+'#ibc138-root{background:linear-gradient(135deg,'+BG_OVERLAY+'),url("'+BG_IMAGE+'") center/cover fixed no-repeat #000;padding:1px 0;border-radius:0;min-height:100px;}\n'
+'.site-logo{display:flex;align-items:center;justify-content:space-between;margin:22px auto 10px;width:95%;padding:0;gap:4px;}\n'
+'.mbappe-gif{width:22vw;max-width:110px;min-width:56px;height:auto;object-fit:contain;flex-shrink:0;filter:drop-shadow(0 0 18px var(--g));transition:transform .35s ease,filter .35s ease;cursor:pointer;}\n'
+'.mbappe-gif.flip{transform:scaleX(-1);}\n'
+'.mbappe-gif.flip:hover{transform:scaleX(-1) scale(1.1);filter:drop-shadow(0 0 28px var(--gl)) brightness(1.2);}\n'
+'.mbappe-gif:not(.flip):hover{transform:scale(1.1);filter:drop-shadow(0 0 28px var(--gl)) brightness(1.2);}\n'
+'.site-logo img.logo-main{flex:1;min-width:0;max-width:275px;width:100%;object-fit:contain;filter:drop-shadow(0 0 22px var(--g));z-index:1;display:block;margin:0 auto;padding:0 4px;}\n'
+'@media(max-width:380px){.mbappe-gif{width:20vw;min-width:48px;}.site-logo img.logo-main{max-width:140px;}}\n'
+'.date-display{display:flex;align-items:center;justify-content:space-between;margin:14px auto;width:90%;padding:8px 10px;border:3px solid var(--g);border-radius:15px;background:linear-gradient(180deg,#1a1a1a,#000);box-shadow:0 0 20px var(--gd);overflow:hidden;}\n'
+'.date-text{flex:1;text-align:center;font-family:\'Cinzel\',serif;font-size:clamp(11px,2.8vw,16px);font-weight:700;color:var(--g);text-shadow:0 0 14px var(--gd);letter-spacing:2px;word-break:break-word;padding:0 6px;}\n'
+'.stats-bar{width:90%;margin:0 auto 14px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}\n'
+'.stat-item{background:linear-gradient(180deg,#1a1200,#0a0800);border:2px solid var(--gd);border-radius:13px;padding:11px 6px;text-align:center;}\n'
+'.stat-num{font-family:\'Cinzel\',serif;font-size:20px;font-weight:900;color:var(--g);line-height:1;display:block;}\n'
+'.stat-lbl{font-size:9px;font-weight:700;color:var(--g);opacity:.6;letter-spacing:1.2px;text-transform:uppercase;display:block;margin-top:3px;}\n'
+'.marquee-wrap{overflow:hidden;white-space:nowrap;width:90%;margin:0 auto 16px;border:3px solid var(--g);border-radius:15px;background:linear-gradient(135deg,#1a1a1a,#000,#1a1a1a);padding:15px 0;box-shadow:0 0 20px var(--gd);}\n'
+'.marquee-inner{display:inline-block;animation:marquee 38s linear infinite;padding-left:100%;font-size:clamp(11px,2.8vw,14px);font-weight:900;color:var(--g);text-shadow:0 0 10px var(--gd);letter-spacing:1.5px;}\n'
+'@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}\n'
+'.filter-wrap{width:90%;margin:0 auto 14px;display:grid;grid-template-columns:1fr 1fr;gap:10px;}\n'
+'.filter-label{font-size:10px;color:var(--g);opacity:.75;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;margin-bottom:6px;display:block;}\n'
+'.select-box{position:relative;}\n'
+'.select-box::after{content:"\\25BC";position:absolute;right:12px;top:50%;transform:translateY(-50%);color:var(--g);font-size:10px;pointer-events:none;}\n'
+'.fselect{width:100%!important;height:38px!important;padding:0 30px 0 12px!important;background:rgba(0,0,0,.85)!important;border:2px solid var(--gd)!important;border-radius:10px!important;color:var(--g)!important;font-size:12px!important;font-weight:700!important;appearance:none!important;-webkit-appearance:none!important;outline:none!important;cursor:pointer;line-height:34px!important;box-shadow:none!important;box-sizing:border-box!important;}\n'
+'.fselect option{background:#0a0a0a;color:#fff;}\n'
+'.search-box{position:relative;}\n'
+'.search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--gd);font-size:11px;pointer-events:none;z-index:2;line-height:1;}\n'
+'.fsearch{width:100%!important;height:38px!important;padding:0 12px 0 28px!important;background:rgba(0,0,0,.85)!important;border:2px solid var(--gd)!important;border-radius:10px!important;color:var(--g)!important;font-size:12px!important;font-weight:700!important;outline:none!important;font-family:\'Poppins\',sans-serif!important;line-height:34px!important;box-shadow:none!important;-webkit-appearance:none!important;appearance:none!important;box-sizing:border-box!important;}\n'
+'.fsearch::placeholder{color:var(--gd)!important;font-weight:600!important;opacity:1!important;}\n'
+'.fsearch:focus{border-color:var(--g)!important;background:rgba(0,0,0,.85)!important;}\n'
+'.tap-hint{width:90%;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 16px;border:2px solid var(--g);border-radius:10px;background:var(--gs);}\n'
+'.hint-arrow{font-size:16px;display:inline-block;animation:arrowbounce 1s ease-in-out infinite;line-height:1;}\n'
+'@keyframes arrowbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}\n'
+'.hint-text{font-family:\'Cinzel\',serif;font-size:clamp(9px,2.2vw,11px);font-weight:700;color:var(--g);opacity:.7;letter-spacing:1px;}\n'
+'.league-block{width:90%;margin:0 auto 22px;border:3px solid var(--g);border-radius:15px;padding:5px;background:rgba(0,0,0,.5);box-shadow:0 0 20px var(--gd);}\n'
+'.league-inner{border-radius:10px;overflow:hidden;border:1px solid var(--gd);}\n'
+'.league-crown{background:linear-gradient(180deg,#1a1200,#0d0d0d);padding:8px 10px 6px;display:flex;align-items:center;justify-content:center;position:relative;border-bottom:1px solid var(--gs);overflow:hidden;}\n'
+'.league-crown::after{content:\'\';position:absolute;top:0;left:-120%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);transform:skewX(-20deg);animation:crownshine 1.8s ease-in-out infinite;}\n'
+'@keyframes crownshine{0%{left:-120%}50%{left:130%}100%{left:130%}}\n'
+'.crown-name{font-family:\'Cinzel\',serif;font-size:clamp(9px,2.4vw,12px);font-weight:900;color:var(--g);letter-spacing:2px;text-transform:uppercase;text-align:center;}\n'
+'.match-count{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:var(--g);color:#000;font-family:\'Cinzel\',serif;font-size:8px;font-weight:900;padding:2px 8px;border-radius:20px;white-space:nowrap;}\n'
+'.match-card{border-bottom:1px solid #2a2a2a;cursor:pointer;user-select:none;}\n'
+'.match-card:last-child{border-bottom:none;}\n'
+'.match-card.hidden{display:none;}\n'
+'.match-row{display:flex;align-items:center;padding:10px;transition:background .2s;}\n'
+'.match-card.even .match-row{background:linear-gradient(180deg,#3a3a3a,#2d2d2d);}\n'
+'.match-card.odd  .match-row{background:linear-gradient(180deg,#2d2d2d,#3a3a3a);}\n'
+'.match-card.open .match-row{background:linear-gradient(180deg,#2a1e00,#1a1200)!important;}\n'
+'.match-card:not(.open) .match-row:hover{background:linear-gradient(135deg,var(--g),var(--gl))!important;}\n'
+'.match-card:not(.open) .match-row:hover .team-name,.match-card:not(.open) .match-row:hover .score-num,.match-card:not(.open) .match-row:hover .match-dt{color:#000!important;text-shadow:none!important;}\n'
+'.match-card:not(.open) .match-row:hover .chev svg{color:#000;}\n'
+'.team-side{flex:1;display:flex;align-items:center;gap:7px;min-width:0;}\n'
+'.team-side.right{flex-direction:row-reverse;}\n'
+'.box-image{position:relative;width:38px;height:38px;flex-shrink:0;}\n'
+'.box-image img.team-logo{width:38px;height:38px;object-fit:contain;display:block;filter:drop-shadow(0 0 4px rgba(0,0,0,.7));transition:transform .4s ease,filter .4s ease;position:relative;z-index:1;}\n'
+'.box-image img.character{display:none !important;}\n'
+'.match-row:hover .box-image img.team-logo{transform:scale(1.45);filter:drop-shadow(0 0 14px var(--g)) drop-shadow(0 0 28px var(--gl)) brightness(1.2);}\n'
+'.box-image::before{content:\'\';display:none;}\n'
+'.team-name{font-size:clamp(8px,2vw,11px);font-weight:700;color:var(--cr);line-height:1.3;word-break:break-word;}\n'
+'.team-side.right .team-name{text-align:right;}\n'
+'.score-center{flex-shrink:0;width:80px;text-align:center;padding:0 4px;}\n'
+'.score-num{font-family:\'Cinzel\',serif;font-size:clamp(15px,4vw,20px);font-weight:900;color:var(--g);text-shadow:0 0 10px var(--gd);letter-spacing:3px;line-height:1;margin-bottom:4px;}\n'
+'.match-dt{font-size:clamp(8px,1.8vw,10px);font-weight:700;color:var(--g);opacity:.8;line-height:1.5;}\n'
+'.chev{width:18px;flex-shrink:0;margin-left:4px;display:flex;align-items:center;justify-content:center;}\n'
+'.chev svg{transition:transform .25s;color:var(--gd);}\n'
+'.match-card.open .chev svg{transform:rotate(180deg);color:var(--g);}\n'
+'@media(min-width:600px){.crown-name{font-size:15px;}.team-name{font-size:13px;}.score-num{font-size:22px;}.match-dt{font-size:11px;}.score-center{width:100px;}}\n'
+'.pred-panel{overflow:hidden;max-height:0;transition:max-height .32s ease;}\n'
+'.match-card.open .pred-panel{max-height:220px;}\n'
+'.pred-inner{background:#080500;border-top:1px solid var(--gs);padding:10px 12px;}\n'
+'.pred-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;}\n'
+'@media(max-width:440px){.pred-grid{grid-template-columns:repeat(2,1fr);}}\n'
+'.pred-col{background:rgba(212,175,55,.05);border:1px solid var(--gs);border-radius:9px;padding:8px 6px;text-align:center;position:relative;overflow:hidden;}\n'
+'.pred-col::before{content:\'\';position:absolute;top:0;left:0;right:0;height:3px;}\n'
+'.pred-col.accent-green::before{background:linear-gradient(90deg,transparent,#00d166,transparent);}\n'
+'.pred-col.accent-red::before{background:linear-gradient(90deg,transparent,#ff5555,transparent);}\n'
+'.pred-col.accent-gold::before{background:linear-gradient(90deg,transparent,var(--gl),transparent);}\n'
+'.col-title{font-family:\'Cinzel\',serif;font-size:11px;font-weight:900;color:var(--g);letter-spacing:1px;text-transform:uppercase;display:block;margin-bottom:6px;opacity:.7;}\n'
+'.col-answer{font-family:\'Cinzel\',serif;font-size:clamp(13px,3.8vw,18px);font-weight:900;color:var(--gl);letter-spacing:.5px;line-height:1.3;display:block;}\n'
+'.col-answer.green{color:#00d166;}\n'
+'.col-answer.red{color:#ff5555;}\n'
+'.col-note{font-family:\'Cinzel\',serif;font-size:10px;font-weight:700;color:rgba(255,255,255,0.65);display:block;margin-top:4px;letter-spacing:.3px;line-height:1.3;}\n'
+'</style>\n'
+'\n'
+'<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">\n'
+'\n'
+'<header class="site-logo">\n'
+'  <img class="mbappe-gif flip" src="'+MBAPPE_GIF+'" alt="Mbappe"/>\n'
+'  <img class="logo-main" src="'+SITE_LOGO+'" alt="'+SITE_NAME+'"/>\n'
+'  <img class="mbappe-gif" src="'+MBAPPE_GIF+'" alt="Mbappe"/>\n'
+'</header>\n'
+'\n'
+'<div class="date-display">\n'
+'  <span class="date-text">&#128197; '+autoDate+'</span>\n'
+'</div>\n'
+'\n'
+'<div class="stats-bar">\n'
+'  <div class="stat-item"><span class="stat-num">'+totalLeagues+'</span><span class="stat-lbl">Liga</span></div>\n'
+'  <div class="stat-item"><span class="stat-num">'+totalMatches+'</span><span class="stat-lbl">Pertandingan</span></div>\n'
+'  <div class="stat-item"><span class="stat-num">100%</span><span class="stat-lbl">Terupdate</span></div>\n'
+'</div>\n'
+'\n'
+'<div class="marquee-wrap"><div class="marquee-inner">'+MARQUEE_TEXT+'&nbsp;&nbsp;&nbsp;&nbsp;'+MARQUEE_TEXT+'</div></div>\n'
+'\n'
+'<div class="filter-wrap">\n'
+'  <div>\n'
+'    <span class="filter-label">&#127942; Pilih Liga</span>\n'
+'    <div class="select-box">\n'
+'      <select class="fselect" id="leagueFilter" onchange="ibcFilterLeague(this.value)">\n'
+'        <option value="all">Semua Liga</option>\n'
+leagueOpts+'\n'
+'      </select>\n'
+'    </div>\n'
+'  </div>\n'
+'  <div>\n'
+'    <span class="filter-label">&#128269; Cari Tim</span>\n'
+'    <div class="search-box">\n'
+'      <span class="search-icon">&#9917;</span>\n'
+'      <input class="fsearch" id="teamSearch" type="text" placeholder="Nama tim..." oninput="ibcSearchTeam(this.value)"/>\n'
+'    </div>\n'
+'  </div>\n'
+'</div>\n'
+'\n'
+'<div class="tap-hint">\n'
+'  <span class="hint-arrow">&#11015;</span>\n'
+'  <span class="hint-text">Klik pertandingan di bawah untuk melihat prediksi</span>\n'
+'  <span class="hint-arrow">&#11015;</span>\n'
+'</div>\n'
+'\n'
+blocks
+'\n'
+'<script>\n'
+'var ibcOpenCard=null;\n'
+'function ibcToggleCard(card){\n'
+'  if(ibcOpenCard&&ibcOpenCard!==card)ibcOpenCard.classList.remove("open");\n'
+'  card.classList.toggle("open");\n'
+'  ibcOpenCard=card.classList.contains("open")?card:null;\n'
+'}\n'
+'function ibcFilterLeague(val){\n'
+'  document.getElementById("teamSearch").value="";\n'
+'  document.querySelectorAll(".match-card").forEach(function(c){c.classList.remove("hidden");});\n'
+'  document.querySelectorAll(".league-block").forEach(function(b){\n'
+'    b.style.display=(val==="all"||b.dataset.league===val)?"":"none";\n'
+'  });\n'
+'}\n'
+'function ibcSearchTeam(val){\n'
+'  document.getElementById("leagueFilter").value="all";\n'
+'  document.querySelectorAll(".league-block").forEach(function(b){b.style.display="";});\n'
+'  var q=val.trim().toLowerCase();\n'
+'  document.querySelectorAll(".match-card").forEach(function(c){\n'
+'    if(!q){c.classList.remove("hidden");return;}\n'
+'    c.classList.toggle("hidden",(c.dataset.teams||"").indexOf(q)===-1);\n'
+'  });\n'
+'  document.querySelectorAll(".league-block").forEach(function(b){\n'
+'    b.style.display=b.querySelectorAll(".match-card:not(.hidden)").length?"":"none";\n'
+'  });\n'
+'}\n'
+'<\/script>\n';
}

/* ═══════════════════════════════════════════════
   INJECT ke root
═══════════════════════════════════════════════ */
function injectHTML(html){
  root.innerHTML = html;
  // Re-run scripts di dalam output
  root.querySelectorAll('script').forEach(function(old){
    var s=document.createElement('script');
    s.textContent=old.textContent;
    old.parentNode.replaceChild(s,old);
  });
}

/* ═══════════════════════════════════════════════
   MAIN FLOW
═══════════════════════════════════════════════ */
async function loadAndRender(){
  try {
    showLoading('Memuat Prediksi IBC138…', 0);
    await animateProgress(0, 5, 400);

    var lines = null;

    // 1) SUMBER UTAMA: jpbolepalngi — URL otomatis mengikuti tanggal hari ini (WIB)
    if (JPK_ENABLED) {
      var jpkUrls = jpkDaftarUrl();
      for (var ju = 0; ju < jpkUrls.length && !lines; ju++) {
        try {
          console.log('[SUMBER] Coba jpkoloni: ' + jpkUrls[ju]);
          var jpkHtml = await fetchHTML(jpkUrls[ju]);
          var jpkLines = parseJpkoloni(jpkHtml);
          if (jpkLines.length) {
            lines = jpkLines;
            console.log('[SUMBER] jpkoloni OK (' + jpkLines.length + ' baris): ' + jpkUrls[ju]);
          } else {
            console.warn('[SUMBER] jpkoloni kosong: ' + jpkUrls[ju]);
          }
        } catch (eJpk) { console.warn('[SUMBER] jpkoloni gagal: ' + eJpk.message); }
      }
    }

    await animateProgress(60, 75, 300);

    // 2) FALLBACK: sumber lama (shortq.xyz) kalau jpkoloni tidak tersedia
    if (!lines || !lines.length) {
      var html = await fetchHTML(SOURCE_URL);
      lines = parseRawHtml(html);
    }
    if(!lines.length) throw new Error('Tidak ada data ditemukan');
    var input = lines.join('\n');

    await animateProgress(75, 85, 200);
    var leagues = parseAll(input);
    if(!leagues.length) throw new Error('Data tidak dapat diparse');

    await animateProgress(85, 95, 200);
    var output = buildOutputHTML(leagues);

    await animateProgress(95, 100, 200);
    await new Promise(function(r){ setTimeout(r, 150); });

    injectHTML(output);
  } catch(e) {
    console.error('[IBC138 Embed]',e);
    showError(e.message||'Gagal memuat data');
  }
}

/* ═══════════════════════════════════════════════
   INIT + AUTO REFRESH
═══════════════════════════════════════════════ */
function init(){
  loadAndRender();
  setInterval(loadAndRender, AUTO_REFRESH);
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
