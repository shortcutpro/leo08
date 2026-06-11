// logo-db.js — Lazy loader untuk logos.json (~30k entries)
var LOGO_DB = {};
var _LOGO_DB_LOADED = false;
var _LOGO_DB_LOADING = false;
var _LOGO_DB_QUEUE = [];

function loadLogoDb(callback) {
    if (_LOGO_DB_LOADED) { if(callback) callback(); return; }
    if (callback) _LOGO_DB_QUEUE.push(callback);
    if (_LOGO_DB_LOADING) return;
    _LOGO_DB_LOADING = true;

    var base = (function(){
        var scripts = document.querySelectorAll('script[src]');
        for(var i=0;i<scripts.length;i++){
            var s=scripts[i].src;
            if(s.indexOf('logo-db.js')!==-1) return s.replace('logo-db.js','');
        }
        return 'assets/js/';
    })();

    function fireCallbacks() {
        _LOGO_DB_LOADING = false;
        _LOGO_DB_LOADED = true;
        _LOGO_DB_QUEUE.forEach(function(cb){ try{ cb(); }catch(e){} });
        _LOGO_DB_QUEUE = [];
    }

    fetch(base + 'logos.json', {cache:'force-cache'})
        .then(function(r){
            if(!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        })
        .then(function(data){
            LOGO_DB = data;
            console.log('[LOGO_DB] Loaded ' + Object.keys(LOGO_DB).length + ' entries.');
            fireCallbacks();
        })
        .catch(function(e){
            // Tetap jalankan callbacks supaya auto-fetch berjalan tanpa logo
            console.warn('[LOGO_DB] Failed to load logos.json:', e.message, '— continuing without logo DB');
            fireCallbacks();
        });
}

// Auto-load saat script dieksekusi
loadLogoDb();
