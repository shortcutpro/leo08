/**
 * logo-db.js — Local logo database untuk tim-tim populer.
 * Digunakan sebagai fallback ketika api_logo.php tidak tersedia (GitHub Pages mode).
 *
 * Key: nama tim lowercase (setelah cleanName()).
 * Value: URL logo langsung.
 *
 * Tambah entry baru sesuai kebutuhan.
 * Format: LOGO_DB['nama tim'] = 'https://url-logo.png';
 */

var LOGO_DB = {};

// ── FLAG NEGARA (via Flagpedia) ────────────────────────────
function flagUrl(cc) {
    return 'https://flagcdn.com/w40/' + cc.toLowerCase() + '.png';
}

// ── LIGA PREMIER INGGRIS ──────────────────────────────────
LOGO_DB['manchester united']    = 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg';
LOGO_DB['manchester city']      = 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg';
LOGO_DB['liverpool']            = 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg';
LOGO_DB['chelsea']              = 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg';
LOGO_DB['arsenal']              = 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg';
LOGO_DB['tottenham']            = 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg';
LOGO_DB['tottenham hotspur']    = 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg';
LOGO_DB['newcastle']            = 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg';
LOGO_DB['newcastle united']     = 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg';
LOGO_DB['aston villa']          = 'https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg';
LOGO_DB['west ham']             = 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg';
LOGO_DB['west ham united']      = 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg';
LOGO_DB['brighton']             = 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg';
LOGO_DB['crystal palace']       = 'https://upload.wikimedia.org/wikipedia/en/0/0c/Crystal_Palace_FC_logo_%282022%29.svg';
LOGO_DB['brentford']            = 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg';
LOGO_DB['fulham']               = 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg';
LOGO_DB['wolves']               = 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg';
LOGO_DB['wolverhampton']        = 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg';
LOGO_DB['wolverhampton wanderers'] = 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg';
LOGO_DB['everton']              = 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg';
LOGO_DB['nottingham forest']    = 'https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg';
LOGO_DB['bournemouth']          = 'https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg';
LOGO_DB['leicester']            = 'https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg';
LOGO_DB['leicester city']       = 'https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg';
LOGO_DB['ipswich']              = 'https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg';
LOGO_DB['ipswich town']         = 'https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg';
LOGO_DB['southampton']          = 'https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg';

// ── LA LIGA ───────────────────────────────────────────────
LOGO_DB['real madrid']          = 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg';
LOGO_DB['barcelona']            = 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg';
LOGO_DB['atletico madrid']      = 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg';
LOGO_DB['sevilla']              = 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg';
LOGO_DB['real sociedad']        = 'https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg';
LOGO_DB['villarreal']           = 'https://upload.wikimedia.org/wikipedia/en/b/b9/Villarreal_CF_logo-en.svg';
LOGO_DB['athletic bilbao']      = 'https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_de_Bilbao_logo.svg';
LOGO_DB['betis']                = 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg';
LOGO_DB['real betis']           = 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg';
LOGO_DB['valencia']             = 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg';
LOGO_DB['getafe']               = 'https://upload.wikimedia.org/wikipedia/en/b/b0/Getafe_CF.svg';
LOGO_DB['osasuna']              = 'https://upload.wikimedia.org/wikipedia/en/8/8c/Club_Atlético_Osasuna.svg';
LOGO_DB['celta vigo']           = 'https://upload.wikimedia.org/wikipedia/en/1/12/Celta_de_Vigo_logo.svg';

// ── SERIE A ───────────────────────────────────────────────
LOGO_DB['juventus']             = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_icon_%28black%29.svg';
LOGO_DB['inter milan']          = 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg';
LOGO_DB['inter']                = 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg';
LOGO_DB['ac milan']             = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg';
LOGO_DB['milan']                = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg';
LOGO_DB['napoli']               = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg';
LOGO_DB['roma']                 = 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg';
LOGO_DB['as roma']              = 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg';
LOGO_DB['lazio']                = 'https://upload.wikimedia.org/wikipedia/en/7/71/SS_Lazio_Badge.svg';
LOGO_DB['ss lazio']             = 'https://upload.wikimedia.org/wikipedia/en/7/71/SS_Lazio_Badge.svg';
LOGO_DB['fiorentina']           = 'https://upload.wikimedia.org/wikipedia/commons/1/13/ACF_Fiorentina_logo_2022.png';
LOGO_DB['atalanta']             = 'https://upload.wikimedia.org/wikipedia/de/4/4a/Atalanta_BC_logo_2019.svg';
LOGO_DB['bologna']              = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bologna_FC_1909_logo.svg';
LOGO_DB['torino']               = 'https://upload.wikimedia.org/wikipedia/en/5/5a/Torino_FC_1906.svg';

// ── BUNDESLIGA ────────────────────────────────────────────
LOGO_DB['bayern munich']        = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%93present%29.svg';
LOGO_DB['bayern']               = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%93present%29.svg';
LOGO_DB['borussia dortmund']    = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg';
LOGO_DB['dortmund']             = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg';
LOGO_DB['bvb']                  = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg';
LOGO_DB['rb leipzig']           = 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg';
LOGO_DB['bayer leverkusen']     = 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg';
LOGO_DB['leverkusen']           = 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg';
LOGO_DB['borussia monchengladbach'] = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg';
LOGO_DB['eintracht frankfurt']  = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg';
LOGO_DB['frankfurt']            = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg';
LOGO_DB['wolfsburg']            = 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg';
LOGO_DB['vfl wolfsburg']        = 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg';
LOGO_DB['stuttgart']            = 'https://upload.wikimedia.org/wikipedia/commons/8/8c/VfB_Stuttgart_logo.svg';
LOGO_DB['vfb stuttgart']        = 'https://upload.wikimedia.org/wikipedia/commons/8/8c/VfB_Stuttgart_logo.svg';
LOGO_DB['hoffenheim']           = 'https://upload.wikimedia.org/wikipedia/commons/6/64/TSG_Logo_2007.svg';
LOGO_DB['tsg hoffenheim']       = 'https://upload.wikimedia.org/wikipedia/commons/6/64/TSG_Logo_2007.svg';
LOGO_DB['freiburg']             = 'https://upload.wikimedia.org/wikipedia/de/8/84/SC_Freiburg_Logo.svg';
LOGO_DB['sc freiburg']          = 'https://upload.wikimedia.org/wikipedia/de/8/84/SC_Freiburg_Logo.svg';

// ── LIGUE 1 ───────────────────────────────────────────────
LOGO_DB['paris saint-germain']  = 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg';
LOGO_DB['psg']                  = 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg';
LOGO_DB['paris sg']             = 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg';
LOGO_DB['marseille']            = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
LOGO_DB['olympique marseille']  = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
LOGO_DB['lyon']                 = 'https://upload.wikimedia.org/wikipedia/en/e/e2/Olympique_Lyonnais.svg';
LOGO_DB['olympique lyonnais']   = 'https://upload.wikimedia.org/wikipedia/en/e/e2/Olympique_Lyonnais.svg';
LOGO_DB['monaco']               = 'https://upload.wikimedia.org/wikipedia/en/e/ea/AS_Monaco_FC.svg';
LOGO_DB['as monaco']            = 'https://upload.wikimedia.org/wikipedia/en/e/ea/AS_Monaco_FC.svg';
LOGO_DB['nice']                 = 'https://upload.wikimedia.org/wikipedia/en/4/4d/OGC_Nice_logo.svg';
LOGO_DB['ogc nice']             = 'https://upload.wikimedia.org/wikipedia/en/4/4d/OGC_Nice_logo.svg';
LOGO_DB['rennes']               = 'https://upload.wikimedia.org/wikipedia/en/a/a6/Stade_Rennais_FC.svg';
LOGO_DB['stade rennais']        = 'https://upload.wikimedia.org/wikipedia/en/a/a6/Stade_Rennais_FC.svg';
LOGO_DB['lens']                 = 'https://upload.wikimedia.org/wikipedia/en/b/b8/RC_Lens.svg';
LOGO_DB['rc lens']              = 'https://upload.wikimedia.org/wikipedia/en/b/b8/RC_Lens.svg';
LOGO_DB['lille']                = 'https://upload.wikimedia.org/wikipedia/commons/6/62/LOSC_Lille_2011_logo.svg';
LOGO_DB['losc lille']           = 'https://upload.wikimedia.org/wikipedia/commons/6/62/LOSC_Lille_2011_logo.svg';

// ── UEFA CHAMPIONS LEAGUE / EUROPA ───────────────────────
LOGO_DB['porto']                = 'https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg';
LOGO_DB['fc porto']             = 'https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg';
LOGO_DB['benfica']              = 'https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg';
LOGO_DB['sl benfica']           = 'https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg';
LOGO_DB['sporting cp']          = 'https://upload.wikimedia.org/wikipedia/en/4/4e/Sporting_CP_logo.svg';
LOGO_DB['sporting lisbon']      = 'https://upload.wikimedia.org/wikipedia/en/4/4e/Sporting_CP_logo.svg';
LOGO_DB['ajax']                 = 'https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg';
LOGO_DB['psv']                  = 'https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg';
LOGO_DB['psv eindhoven']        = 'https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg';
LOGO_DB['celtic']               = 'https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg';
LOGO_DB['rangers']              = 'https://upload.wikimedia.org/wikipedia/en/6/61/Rangers_FC_logo.svg';
LOGO_DB['shakhtar donetsk']     = 'https://upload.wikimedia.org/wikipedia/en/a/a3/FC_Shakhtar_Donetsk.svg';
LOGO_DB['galatasaray']          = 'https://upload.wikimedia.org/wikipedia/en/e/ea/Galatasaray_logo.svg';
LOGO_DB['fenerbahce']           = 'https://upload.wikimedia.org/wikipedia/en/9/95/Fenerbahce.svg';
LOGO_DB['feyenoord']            = 'https://upload.wikimedia.org/wikipedia/en/e/e9/Feyenoord_logo.svg';
LOGO_DB['club brugge']          = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Club_Brugge_logo.svg';
LOGO_DB['anderlecht']           = 'https://upload.wikimedia.org/wikipedia/en/5/56/R.S.C._Anderlecht_logo.svg';
LOGO_DB['red bull salzburg']    = 'https://upload.wikimedia.org/wikipedia/en/3/34/Red_Bull_Salzburg_logo.svg';
LOGO_DB['rb salzburg']          = 'https://upload.wikimedia.org/wikipedia/en/3/34/Red_Bull_Salzburg_logo.svg';
LOGO_DB['dínamo zagreb']        = 'https://upload.wikimedia.org/wikipedia/en/9/9c/GNK_Dinamo_Zagreb.svg';
LOGO_DB['dinamo zagreb']        = 'https://upload.wikimedia.org/wikipedia/en/9/9c/GNK_Dinamo_Zagreb.svg';

// ── ASIA / SEPAK BOLA NASIONAL ───────────────────────────
LOGO_DB['indonesia']            = flagUrl('id');
LOGO_DB['malaysia']             = flagUrl('my');
LOGO_DB['thailand']             = flagUrl('th');
LOGO_DB['vietnam']              = flagUrl('vn');
LOGO_DB['philippines']          = flagUrl('ph');
LOGO_DB['singapore']            = flagUrl('sg');
LOGO_DB['myanmar']              = flagUrl('mm');
LOGO_DB['cambodia']             = flagUrl('kh');
LOGO_DB['laos']                 = flagUrl('la');
LOGO_DB['china']                = flagUrl('cn');
LOGO_DB['japan']                = flagUrl('jp');
LOGO_DB['south korea']          = flagUrl('kr');
LOGO_DB['korea']                = flagUrl('kr');
LOGO_DB['australia']            = flagUrl('au');
LOGO_DB['india']                = flagUrl('in');
LOGO_DB['iran']                 = flagUrl('ir');
LOGO_DB['saudi arabia']         = flagUrl('sa');
LOGO_DB['qatar']                = flagUrl('qa');
LOGO_DB['uae']                  = flagUrl('ae');
LOGO_DB['iraq']                 = flagUrl('iq');
LOGO_DB['jordan']               = flagUrl('jo');
LOGO_DB['uzbekistan']           = flagUrl('uz');
LOGO_DB['tajikistan']           = flagUrl('tj');
LOGO_DB['kyrgyzstan']           = flagUrl('kg');
LOGO_DB['bahrain']              = flagUrl('bh');
LOGO_DB['oman']                 = flagUrl('om');
LOGO_DB['kuwait']               = flagUrl('kw');

// ── TIMNAS EROPA ──────────────────────────────────────────
LOGO_DB['france']               = flagUrl('fr');
LOGO_DB['england']              = flagUrl('gb-eng');
LOGO_DB['germany']              = flagUrl('de');
LOGO_DB['spain']                = flagUrl('es');
LOGO_DB['italy']                = flagUrl('it');
LOGO_DB['portugal']             = flagUrl('pt');
LOGO_DB['netherlands']          = flagUrl('nl');
LOGO_DB['holland']              = flagUrl('nl');
LOGO_DB['belgium']              = flagUrl('be');
LOGO_DB['croatia']              = flagUrl('hr');
LOGO_DB['denmark']              = flagUrl('dk');
LOGO_DB['sweden']               = flagUrl('se');
LOGO_DB['norway']               = flagUrl('no');
LOGO_DB['switzerland']          = flagUrl('ch');
LOGO_DB['austria']              = flagUrl('at');
LOGO_DB['poland']               = flagUrl('pl');
LOGO_DB['hungary']              = flagUrl('hu');
LOGO_DB['romania']              = flagUrl('ro');
LOGO_DB['czechia']              = flagUrl('cz');
LOGO_DB['czech republic']       = flagUrl('cz');
LOGO_DB['ukraine']              = flagUrl('ua');
LOGO_DB['russia']               = flagUrl('ru');
LOGO_DB['turkey']               = flagUrl('tr');
LOGO_DB['scotland']             = flagUrl('gb-sct');
LOGO_DB['wales']                = flagUrl('gb-wls');
LOGO_DB['serbia']               = flagUrl('rs');
LOGO_DB['slovakia']             = flagUrl('sk');
LOGO_DB['albania']              = flagUrl('al');
LOGO_DB['greece']               = flagUrl('gr');
LOGO_DB['moldova']              = flagUrl('md');
LOGO_DB['slovenia']             = flagUrl('si');
LOGO_DB['finland']              = flagUrl('fi');
LOGO_DB['iceland']              = flagUrl('is');
LOGO_DB['north macedonia']      = flagUrl('mk');
LOGO_DB['luxembourg']           = flagUrl('lu');
LOGO_DB['lithuania']            = flagUrl('lt');
LOGO_DB['latvia']               = flagUrl('lv');
LOGO_DB['estonia']              = flagUrl('ee');
LOGO_DB['kosovo']               = flagUrl('xk');
LOGO_DB['israel']               = flagUrl('il');
LOGO_DB['georgia']              = flagUrl('ge');
LOGO_DB['armenia']              = flagUrl('am');
LOGO_DB['azerbaijan']           = flagUrl('az');
LOGO_DB['kazakhstan']           = flagUrl('kz');
LOGO_DB['belarus']              = flagUrl('by');
LOGO_DB['gibraltar']            = flagUrl('gi');
LOGO_DB['andorra']              = flagUrl('ad');
LOGO_DB['san marino']           = flagUrl('sm');
LOGO_DB['liechtenstein']        = flagUrl('li');
LOGO_DB['malta']                = flagUrl('mt');
LOGO_DB['cyprus']               = flagUrl('cy');
LOGO_DB['faroe islands']        = flagUrl('fo');
LOGO_DB['northern ireland']     = flagUrl('gb-nir');
LOGO_DB['ireland']              = flagUrl('ie');
LOGO_DB['republic of ireland']  = flagUrl('ie');
LOGO_DB['bosnia']               = flagUrl('ba');
LOGO_DB['bosnia and herzegovina'] = flagUrl('ba');
LOGO_DB['montenegro']           = flagUrl('me');
LOGO_DB['bulgaria']             = flagUrl('bg');

// ── TIMNAS AMERICAS ───────────────────────────────────────
LOGO_DB['brazil']               = flagUrl('br');
LOGO_DB['argentina']            = flagUrl('ar');
LOGO_DB['colombia']             = flagUrl('co');
LOGO_DB['uruguay']              = flagUrl('uy');
LOGO_DB['chile']                = flagUrl('cl');
LOGO_DB['peru']                 = flagUrl('pe');
LOGO_DB['ecuador']              = flagUrl('ec');
LOGO_DB['venezuela']            = flagUrl('ve');
LOGO_DB['paraguay']             = flagUrl('py');
LOGO_DB['bolivia']              = flagUrl('bo');
LOGO_DB['usa']                  = flagUrl('us');
LOGO_DB['united states']        = flagUrl('us');
LOGO_DB['mexico']               = flagUrl('mx');
LOGO_DB['canada']               = flagUrl('ca');
LOGO_DB['costa rica']           = flagUrl('cr');
LOGO_DB['panama']               = flagUrl('pa');
LOGO_DB['honduras']             = flagUrl('hn');
LOGO_DB['el salvador']          = flagUrl('sv');
LOGO_DB['guatemala']            = flagUrl('gt');
LOGO_DB['jamaica']              = flagUrl('jm');
LOGO_DB['haiti']                = flagUrl('ht');
LOGO_DB['trinidad']             = flagUrl('tt');
LOGO_DB['trinidad and tobago']  = flagUrl('tt');

// ── AFRICA ────────────────────────────────────────────────
LOGO_DB['nigeria']              = flagUrl('ng');
LOGO_DB['ghana']                = flagUrl('gh');
LOGO_DB['senegal']              = flagUrl('sn');
LOGO_DB['egypt']                = flagUrl('eg');
LOGO_DB['morocco']              = flagUrl('ma');
LOGO_DB['cameroon']             = flagUrl('cm');
LOGO_DB['ivory coast']          = flagUrl('ci');
LOGO_DB['south africa']         = flagUrl('za');
LOGO_DB['tunisia']              = flagUrl('tn');
LOGO_DB['algeria']              = flagUrl('dz');
LOGO_DB['mali']                 = flagUrl('ml');
LOGO_DB['dr congo']             = flagUrl('cd');
LOGO_DB['guinea']               = flagUrl('gn');
LOGO_DB['zambia']               = flagUrl('zm');
LOGO_DB['zimbabwe']             = flagUrl('zw');
LOGO_DB['kenya']                = flagUrl('ke');
LOGO_DB['ethiopia']             = flagUrl('et');
LOGO_DB['tanzania']             = flagUrl('tz');
LOGO_DB['angola']               = flagUrl('ao');
LOGO_DB['mozambique']           = flagUrl('mz');
LOGO_DB['uganda']               = flagUrl('ug');

// ── TAMBAH ENTRY CUSTOM DI SINI ───────────────────────────
// LOGO_DB['nama tim kustom'] = 'https://url-logo.png';

console.log('[LOGO_DB] Loaded ' + Object.keys(LOGO_DB).length + ' logo entries.');
