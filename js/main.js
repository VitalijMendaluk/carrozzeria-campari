/* ============================================================
   CARROZZERIA CAMPARI — main.js
   i18n (IT/EN) · Header · Menu · Reveals · Counters · Modal ·
   BA-slider · Lightbox · Cookies/Map · Floating · Lang switch
   ============================================================ */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     0. DIZIONARIO I18N
     ============================================================ */
  var I18N = {
    it: {
      // --- shared ---
      'logo.tag': 'Pogliano Milanese <b>·</b> dal 1964',
      'nav.servizi': 'Servizi',
      'nav.fastboll': 'Fast Boll 95®',
      'nav.assicurazioni': 'Assicurazioni',
      'nav.storia': 'La Nostra Storia',
      'nav.contatti': 'Contatti',
      'cta.preventivo': 'Richiedi un preventivo',
      'drawer.contact': 'Via Aldo Moro 1, Pogliano Milanese<br><a href="tel:+39029341208">+39 02.9341208</a> · <a href="mailto:carrozzeria.campari@libero.it">carrozzeria.campari@libero.it</a>',

      // --- hero ---
      'hero.kicker': 'Carrozzeria di alta gamma · Pogliano Milanese',
      'hero.t1': 'L\'arte della',
      'hero.t2': 'carrozzeria',
      'hero.t3': 'Dal 1964.',
      'hero.sub': 'Tre generazioni della famiglia Campari al servizio della vostra auto. Tecnologie d\'avanguardia, vernici Sikkens, garanzia europea Acoat® Selected di due anni.',
      'hero.cta1': 'Richiedi un preventivo',
      'hero.cta2': 'Scopri i servizi',
      'hero.scroll': 'Scorri',

      // --- numbers ---
      'num.anni': 'Anni di esperienza',
      'num.gen': 'Generazioni',
      'num.formati': 'Carrozzieri formati',
      'num.garanzia': 'Anni di garanzia Acoat®',

      // --- servizi ---
      'serv.kicker': 'I nostri servizi',
      'serv.title': 'Ogni dettaglio, <em>a regola d\'arte</em>',
      'serv.lead': 'Dalla verniciatura in cabina forno al soccorso stradale: un unico interlocutore per la cura completa della vostra vettura.',
      'serv.1.title': 'Carrozzeria e verniciatura',
      'serv.1.text': 'Cabine forno, lampade a infrarossi su binari sopraelevati e banco dima CAR-O-TRONIC®. Cicli di verniciatura Sikkens all\'acqua, certificati e garantiti.',
      'serv.2.title': 'Fast Boll 95® levabolli',
      'serv.2.text': 'Il nostro brevetto del 1995: bolli da grandine e ammaccature spariscono senza verniciatura. L\'auto conserva la sua originalità, i costi si riducono.',
      'serv.3.title': 'Soccorso stradale',
      'serv.3.text': 'Recupero e assistenza con mezzi attrezzati. Un solo numero da ricordare: Andrea Campari risponde al +39 338.1120408.',
      'serv.4.title': 'Cristalli',
      'serv.4.text': 'Riparazione rapida e sostituzione di cristalli per ogni marca e modello, in convenzione assicurativa con Euroglass.',
      'serv.5.title': 'Pneumatici',
      'serv.5.text': 'Sostituzione, equilibratura e riparazione. Deposito stagionale del vostro treno gomme nel nostro magazzino, smaltimento incluso.',
      'serv.6.title': 'Servizi assicurativi ANIA',
      'serv.6.text': 'Gestione diretta delle pratiche con le principali compagnie. In convenzione ANIA il cliente non anticipa nulla: pensiamo a tutto noi.',
      'serv.cta': 'Preventivo',

      // --- fast boll section ---
      'fb.kicker': 'Brevetto esclusivo',
      'fb.title': 'Fast Boll 95®. <em>La grandine non lascia traccia.</em>',
      'fb.patent': 'Brevetto OCE-MAN · 1995',
      'fb.p1': 'Dall\'esperienza di <strong>Giuseppe Campari</strong>, maestro carrozziere, nasce un sistema che ripara bolli da grandine e ammaccature <strong>senza verniciare, stuccare né smerigliare</strong>. Nessun pannello da smontare, nessun intervento invasivo.',
      'fb.p2': 'La vettura conserva la sua verniciatura originale. I tempi si accorciano, i costi si riducono. Un set di 32 leve speciali, progettate e brevettate nella nostra officina, fa il resto.',
      'fb.cta1': 'Scopri Fast Boll 95®',
      'fb.cta2': 'Richiedi un intervento',
      'fb.before': 'Prima',
      'fb.after': 'Dopo',

      // --- insurance ---
      'ins.kicker': 'Convenzioni assicurative',
      'ins.title': 'Zero pensieri, <em>zero anticipi</em>',
      'ins.note': 'Gestiamo le pratiche direttamente con le principali compagnie italiane ed estere. Con constatazione amichevole, in convenzione <strong>ANIA</strong>, eseguiamo la riparazione <strong>senza alcun esborso da parte del cliente</strong>.',

      // --- fleet ---
      'fleet.kicker': 'Mobilità garantita',
      'fleet.title': 'Vetture sostitutive <em>e noleggio</em>',
      'fleet.lead': 'Per gli interventi più lunghi mettiamo a disposizione vetture di cortesia: Smart, Fiat Panda, Fiat 500L, Renault Mégane, Volkswagen Polo. E per il giorno più importante, il fascino senza tempo del Maggiolino d\'epoca.',
      'fleet.cap1': 'Maggiolino d\'epoca · Cerimonie',
      'fleet.cap2': 'Maggiolino bianco · Cerimonie',
      'fleet.cap3': 'Noleggio personalizzato',
      'fleet.cap4': 'Fiat 500L · Cortesia',
      'fleet.cap5': 'Fiat Panda · Cortesia',

      // --- why ---
      'why.kicker': 'Perché sceglierci',
      'why.title': 'Garanzie che <em>parlano da sole</em>',
      'why.1.title': 'Acoat® Selected',
      'why.1.text': 'Membri della rete europea delle migliori carrozzerie. Due anni di garanzia scritta su ogni lavoro di carrozzeria e verniciatura.',
      'why.1.doc': 'Vedi l\'attestato',
      'why.2.title': 'Partner Sikkens',
      'why.2.text': 'Vernici all\'acqua AkzoNobel, fra le più ecocompatibili al mondo. Cicli applicativi certificati secondo le schede tecniche Sikkens.',
      'why.2.doc': 'Vedi il certificato',
      'why.3.title': 'ISO 9001 · TÜV',
      'why.3.text': 'Sistema di qualità certificato dall\'ente tedesco TÜV: processi controllati, risultati costanti, documentazione di ogni intervento.',
      'why.3.doc': 'Vedi il certificato',
      'why.4.title': 'CAR-O-TRONIC®',
      'why.4.text': 'Banco dima a tecnologia svedese, leader mondiale: l\'allineamento della scocca segue al millimetro le direttive di ogni costruttore.',
      'why.4.doc': 'Vedi il reparto',

      // --- heritage ---
      'her.kicker': 'La nostra storia',
      'her.quote': 'Nel 1964, in uno scantinato di Pogliano Milanese, Fedele Campari vide il futuro dell\'automobile. E decise di prendersene cura.',
      'her.meta': 'Da quello scantinato a una struttura d\'avanguardia alimentata dal sole: tre generazioni, una sola idea di perfezione.',
      'her.cta': 'Leggi la storia completa',
      'her.cap': 'Fedele Campari · Fondatore',

      // --- contacts ---
      'con.kicker': 'Dove siamo',
      'con.title': 'Sulla Statale del Sempione, <em>a due passi da Milano</em>',
      'con.map': 'La mappa di Google viene caricata dopo il consenso ai cookie.',
      'con.loadmap': 'Carica la mappa',
      'con.addr.label': 'Indirizzo',
      'con.addr.value': 'Via Aldo Moro 1, 20010 Pogliano Milanese (MI)<br><small>Ai margini della SS33 del Sempione</small>',
      'con.phone.label': 'Telefono / Fax',
      'con.phone.note': '— Andrea Campari (soccorso e noleggio)',
      'con.email.label': 'Email',

      // --- form (shared) ---
      'form.nome': 'Nome <b>*</b>',
      'form.telefono': 'Telefono <b>*</b>',
      'form.email': 'Email',
      'form.servizio': 'Servizio',
      'form.messaggio': 'Messaggio',
      'form.sel': 'Seleziona un servizio',
      'form.opt.carrozzeria': 'Carrozzeria e verniciatura',
      'form.opt.fastboll': 'Riparazione grandine — Fast Boll 95®',
      'form.opt.soccorso': 'Soccorso stradale',
      'form.opt.cristalli': 'Cristalli',
      'form.opt.pneumatici': 'Pneumatici',
      'form.opt.assicurative': 'Pratiche assicurative',
      'form.opt.noleggio': 'Vettura sostitutiva / Noleggio',
      'form.opt.corso': 'Corso Fast Boll 95®',
      'form.opt.altro': 'Altro',
      'form.privacy': 'Ho letto l\'<a href="#" rel="nofollow">informativa privacy</a> e acconsento al trattamento dei dati ai sensi del GDPR (Reg. UE 2016/679). <b>*</b>',
      'form.privacy.short': 'Ho letto l\'<a href="#" rel="nofollow">informativa privacy</a> e acconsento al trattamento dei dati (GDPR). <b>*</b>',
      'form.submit': 'Invia la richiesta',
      'form.err.nome': 'Inserire il nome',
      'form.err.tel': 'Inserire un numero valido',
      'form.err.email': 'Inserire un\'email valida',
      'form.success': 'Grazie. La vostra richiesta è stata inviata: vi risponderemo al più presto.',

      // --- footer ---
      'foot.about': 'Tre generazioni di maestri carrozzieri. Verniciatura Sikkens, brevetto Fast Boll 95®, garanzia europea Acoat® Selected: l\'eccellenza, dal 1964.',
      'foot.nav': 'Navigazione',
      'foot.contacts': 'Contatti',
      'foot.follow': 'Seguici',
      'foot.rights': '© 2026 Carrozzeria Campari srl — P.IVA 00000000000',
      'foot.privacy': 'Privacy &amp; Cookie Policy',

      // --- modal ---
      'modal.kicker': 'Risposta entro 24 ore',
      'modal.title': 'Richiedi un preventivo',
      'modal.sub': 'Compilate il modulo: un membro della famiglia Campari vi ricontatterà personalmente.',
      'modal.success.title': 'Richiesta inviata',
      'modal.success.text': 'Grazie per la fiducia. Vi ricontatteremo entro 24 ore lavorative.',

      // --- cookie ---
      'cookie.text': 'Questo sito utilizza cookie tecnici e, previo consenso, cookie di terze parti (Google Maps) per la mappa interattiva. <a href="#" rel="nofollow">Cookie policy</a>',
      'cookie.accept': 'Accetta',
      'cookie.decline': 'Solo necessari',
      'mb.call': 'Chiama',
      'idx.title': 'Carrozzeria Campari — L\'arte della carrozzeria a Pogliano Milanese, dal 1964',

      // --- fast-boll page ---
      'fbp.title': 'Fast Boll 95® — Riparazione grandine senza verniciatura | Carrozzeria Campari',
      'fbp.crumb': 'Fast Boll 95®',
      'fbp.hero.kicker': 'Brevetto OCE-MAN · dal 1995',
      'fbp.hero.title': 'Fast Boll 95®. <em>L\'arte di cancellare la grandine.</em>',
      'fbp.hero.sub': 'Il sistema levabolli ideato e brevettato da Giuseppe Campari: ammaccature e bolli da grandine scompaiono senza verniciare, senza stuccare, senza smontare.',
      'fbp.met.kicker': 'Il metodo',
      'fbp.met.title': 'Perché <em>senza verniciatura</em>',
      'fbp.met.lead': 'Dall\'esperienza cinquantennale di Giuseppe Campari, maestro carrozziere, nasce un brevetto che restituisce alla lamiera la sua forma originale lavorandola dall\'interno, con leve di precisione.',
      'fbp.s1.t': 'L\'originalità resta intatta',
      'fbp.s1.p': 'Nessuna riverniciatura: la vettura conserva la vernice di fabbrica e con essa il proprio valore. Un vantaggio decisivo per auto di pregio, in leasing o destinate alla rivendita.',
      'fbp.s2.t': 'Nessun intervento invasivo',
      'fbp.s2.p': 'Non si stucca, non si smeriglia, non si smontano pannelli né interni. La riparazione è precisa, localizzata e dall\'esito certo.',
      'fbp.s3.t': 'Tempi e costi ridotti',
      'fbp.s3.p': 'L\'eliminazione delle fasi di preparazione e verniciatura accorcia drasticamente la lavorazione. Il risparmio, rispetto ai metodi tradizionali, è una conseguenza naturale.',
      'fbp.s4.t': 'Anche per i danni estesi',
      'fbp.s4.p': 'La stessa tecnica consente raddrizzature di altissima qualità sulle ammaccature più ampie: dove la verniciatura resta necessaria, la superficie da trattare si riduce al minimo.',
      'fbp.kit.kicker': 'Il Kit',
      'fbp.kit.title': '32 leve, <em>un solo brevetto</em>',
      'fbp.kit.lead': 'Fast Boll 95® è un kit professionale prodotto da Giuseppe Campari, pensato per ogni carrozziere che voglia specializzarsi nell\'arte del levabolli.',
      'fbp.kit.1': '<strong>Set di 32 leve speciali</strong> — progettate e messe a punto da Giuseppe Campari, coperte dal brevetto OCE-MAN.',
      'fbp.kit.2': '<strong>Lampada e accessori</strong> — tutto il necessario per completare la raffinata lavorazione.',
      'fbp.kit.3': '<strong>Distribuzione Morgancolor</strong> — la commercializzazione del kit è affidata in esclusiva a Morgancolor.',
      'fbp.kit.4': '<strong>Corso incluso</strong> — l\'acquisto del kit dà diritto al corso esclusivo di formazione presso la nostra sede.',
      'fbp.cor.kicker': 'I corsi',
      'fbp.cor.title': 'Una scuola, <em>non un segreto</em>',
      'fbp.cor.p1': 'Acquistare gli attrezzi senza conoscere l\'arte di usarli non produrrebbe un risultato apprezzabile. Per questo i corsi pratici e teorici si tengono direttamente nella nostra carrozzeria di Pogliano Milanese, <strong>sotto la guida personale di Giuseppe Campari</strong>.',
      'fbp.cor.p2': 'Nessun segreto gelosamente custodito: un\'autentica scuola che ha già formato <strong>oltre 250 carrozzieri italiani e stranieri</strong>, e una tecnica che ha conquistato l\'attenzione della stampa specializzata.',
      'fbp.cor.p3': 'L\'elenco delle carrozzerie che utilizzano il sistema Fast Boll 95® è disponibile su richiesta: <a href="mailto:carrozzeria.campari@libero.it">carrozzeria.campari@libero.it</a>',
      'fbp.cor.cta': 'Iscriviti al corso',
      'fbp.proc.kicker': 'Il processo',
      'fbp.proc.title': 'Dal danno alla <em>perfezione</em>',
      'fbp.proc.1.b': 'La scuola', 'fbp.proc.1.t': 'Giuseppe Campari e gli allievi del corso Fast Boll 95',
      'fbp.proc.2.b': '01 · Il danno', 'fbp.proc.2.t': 'Tipologia del danno da riparare con il sistema Fast Boll 95',
      'fbp.proc.3.b': '02 · Il primo intervento', 'fbp.proc.3.t': 'Aspetto del danno subito dopo il primo intervento',
      'fbp.proc.4.b': '03 · La finitura', 'fbp.proc.4.t': 'Fase di finitura con il sistema Fast Boll 95',
      'fbp.proc.5.b': '04 · Il risultato', 'fbp.proc.5.t': 'Riparazione eseguita senza alcun intervento di verniciatura',
      'fbp.cta.kicker': 'Grandine o ammaccature?',
      'fbp.cta.title': 'Affidatevi a chi <em>ha inventato il metodo</em>',
      'fbp.cta.lead': 'Un preventivo chiaro, una riparazione invisibile. La vostra auto torna originale.',

      // --- storia page ---
      'stp.title': 'La Nostra Storia — Tre generazioni dal 1964 | Carrozzeria Campari',
      'stp.crumb': 'La Nostra Storia',
      'stp.hero.kicker': 'Tre generazioni · una passione',
      'stp.hero.title': 'Da uno scantinato, <em>un\'idea di perfezione.</em>',
      'stp.hero.sub': 'La storia della famiglia Campari è la storia dell\'automobile italiana: sessant\'anni di lavoro, intuizione e rispetto per il mestiere.',
      'stp.tl.kicker': 'Le tappe',
      'stp.tl.title': '1964 — <em>oggi</em>',
      'stp.tl.1.t': 'L\'intuizione',
      'stp.tl.1.p': 'Nello scantinato della propria abitazione, con le attrezzature strettamente indispensabili, Fedele Campari intuisce il futuro della motorizzazione privata. Insieme ai figli Agostino e Giuseppe inizia un\'attività destinata a diventare una solida realtà.',
      'stp.tl.2.t': 'Il primo capannone',
      'stp.tl.2.p': 'Dallo scantinato si passa a un piccolo capannone di 120 metri quadri. L\'anno successivo, la superficie cresce di altri 180: l\'attività si consolida, la reputazione anche.',
      'stp.tl.3.t': 'Il grande salto',
      'stp.tl.3.p': 'Nasce la sede attuale: due cabine forno, due banchi dima di riscontro e il meglio che il mercato delle attrezzature per carrozzieri potesse offrire, nel pieno rispetto dell\'ambiente di lavoro.',
      'stp.tl.4.t': 'La modernizzazione',
      'stp.tl.4.p': 'Forti investimenti con la consulenza del team Sikkens: nuova cabina forno con bruciatori in vena d\'aria, lampade a infrarosso su binari sopraelevati, vernici all\'acqua senza solventi. Meno emissioni, più qualità dell\'aria, tempi di essiccazione ridotti.',
      'stp.tl.5.y': 'Oggi',
      'stp.tl.5.t': 'L\'officina del futuro',
      'stp.tl.5.p': 'Un impianto fotovoltaico da 62 kW rende la struttura teoricamente autosufficiente, a impatto ambientale zero. Il prossimo obiettivo: una luminosa zona di consegna, nuove aree verdi per compensare la CO₂ emessa e un\'officina modello — efficiente, salubre, sicura.',
      'stp.val.kicker': 'I valori della famiglia',
      'stp.val.title': 'Ciò che non <em>cambia mai</em>',
      'stp.val.1.t': 'Il mestiere',
      'stp.val.1.p': 'L\'arte del carrozziere si tramanda di padre in figlio. Ogni riparazione è eseguita a regola d\'arte, come Fedele insegnava nel 1964.',
      'stp.val.2.t': 'L\'innovazione',
      'stp.val.2.p': 'Dal banco dima CAR-O-TRONIC® al brevetto Fast Boll 95®: la tradizione vive solo se guarda avanti.',
      'stp.val.3.t': 'L\'ambiente',
      'stp.val.3.p': 'Energia dal sole, vernici all\'acqua, emissioni ridotte. Il sogno: un\'officina a impatto zero, per le generazioni che verranno.',
      'stp.cta.kicker': 'Sessant\'anni di fiducia',
      'stp.cta.title': 'La vostra auto merita <em>questa storia</em>',
      'stp.cta.lead': 'Venite a trovarci sulla Statale del Sempione, o raccontateci di cosa ha bisogno la vostra vettura.'
    },

    en: {
      'logo.tag': 'Pogliano Milanese <b>·</b> since 1964',
      'nav.servizi': 'Services',
      'nav.fastboll': 'Fast Boll 95®',
      'nav.assicurazioni': 'Insurance',
      'nav.storia': 'Our Story',
      'nav.contatti': 'Contact',
      'cta.preventivo': 'Request a quote',
      'drawer.contact': 'Via Aldo Moro 1, Pogliano Milanese<br><a href="tel:+39029341208">+39 02.9341208</a> · <a href="mailto:carrozzeria.campari@libero.it">carrozzeria.campari@libero.it</a>',

      'hero.kicker': 'High-end body shop · Pogliano Milanese',
      'hero.t1': 'The art of',
      'hero.t2': 'body & paint',
      'hero.t3': 'Since 1964.',
      'hero.sub': 'Three generations of the Campari family caring for your car. Cutting-edge technology, Sikkens paint, a two-year European Acoat® Selected warranty.',
      'hero.cta1': 'Request a quote',
      'hero.cta2': 'Explore services',
      'hero.scroll': 'Scroll',

      'num.anni': 'Years of experience',
      'num.gen': 'Generations',
      'num.formati': 'Specialists trained',
      'num.garanzia': 'Years Acoat® warranty',

      'serv.kicker': 'Our services',
      'serv.title': 'Every detail, <em>done to perfection</em>',
      'serv.lead': 'From oven-cabin painting to roadside recovery: a single point of contact for the complete care of your car.',
      'serv.1.title': 'Body & paint',
      'serv.1.text': 'Oven cabins, overhead infrared lamps and a CAR-O-TRONIC® jig bench. Water-based Sikkens paint cycles, certified and guaranteed.',
      'serv.2.title': 'Fast Boll 95® dent removal',
      'serv.2.text': 'Our 1995 patent: hail dents and dings disappear without repainting. The car keeps its originality, costs come down.',
      'serv.3.title': 'Roadside recovery',
      'serv.3.text': 'Recovery and assistance with fully equipped vehicles. One number to remember: Andrea Campari on +39 338.1120408.',
      'serv.4.title': 'Glass',
      'serv.4.text': 'Fast repair and replacement of windscreens and glass for every make and model, with Euroglass insurance partnership.',
      'serv.5.title': 'Tyres',
      'serv.5.text': 'Replacement, balancing and repair. Seasonal storage of your tyre set in our warehouse, disposal included.',
      'serv.6.title': 'ANIA insurance services',
      'serv.6.text': 'Direct handling of claims with the leading companies. Under ANIA agreement the client pays nothing upfront: we handle it all.',
      'serv.cta': 'Quote',

      'fb.kicker': 'Exclusive patent',
      'fb.title': 'Fast Boll 95®. <em>Hail leaves no trace.</em>',
      'fb.patent': 'Patent OCE-MAN · 1995',
      'fb.p1': 'From the expertise of <strong>Giuseppe Campari</strong>, master body technician, comes a system that repairs hail dents and dings <strong>without painting, filling or sanding</strong>. No panels to remove, no invasive work.',
      'fb.p2': 'The car keeps its original paint. Times shorten, costs drop. A set of 32 special levers, designed and patented in our workshop, does the rest.',
      'fb.cta1': 'Discover Fast Boll 95®',
      'fb.cta2': 'Request a repair',
      'fb.before': 'Before',
      'fb.after': 'After',

      'ins.kicker': 'Insurance agreements',
      'ins.title': 'Zero worries, <em>zero upfront</em>',
      'ins.note': 'We handle claims directly with the leading Italian and foreign companies. With a mutual accident report, under <strong>ANIA</strong> agreement, we carry out the repair <strong>at no cost to the client</strong>.',

      'fleet.kicker': 'Mobility guaranteed',
      'fleet.title': 'Courtesy cars <em>& rental</em>',
      'fleet.lead': 'For longer jobs we provide courtesy cars: Smart, Fiat Panda, Fiat 500L, Renault Mégane, Volkswagen Polo. And for your most important day, the timeless charm of the vintage Beetle.',
      'fleet.cap1': 'Vintage Beetle · Ceremonies',
      'fleet.cap2': 'White Beetle · Ceremonies',
      'fleet.cap3': 'Bespoke rental',
      'fleet.cap4': 'Fiat 500L · Courtesy',
      'fleet.cap5': 'Fiat Panda · Courtesy',

      'why.kicker': 'Why choose us',
      'why.title': 'Guarantees that <em>speak for themselves</em>',
      'why.1.title': 'Acoat® Selected',
      'why.1.text': 'Members of the European network of the finest body shops. A two-year written warranty on every body and paint job.',
      'why.1.doc': 'View certificate',
      'why.2.title': 'Sikkens Partner',
      'why.2.text': 'AkzoNobel water-based paints, among the most eco-friendly in the world. Application cycles certified to Sikkens technical specs.',
      'why.2.doc': 'View certificate',
      'why.3.title': 'ISO 9001 · TÜV',
      'why.3.text': 'A quality system certified by the German body TÜV: controlled processes, consistent results, documentation of every job.',
      'why.3.doc': 'View certificate',
      'why.4.title': 'CAR-O-TRONIC®',
      'why.4.text': 'A Swedish-technology jig bench, world leader: body alignment follows every manufacturer\'s directives to the millimetre.',
      'why.4.doc': 'View workshop',

      'her.kicker': 'Our story',
      'her.quote': 'In 1964, in a basement in Pogliano Milanese, Fedele Campari saw the future of the automobile. And chose to take care of it.',
      'her.meta': 'From that basement to a cutting-edge facility powered by the sun: three generations, one idea of perfection.',
      'her.cta': 'Read the full story',
      'her.cap': 'Fedele Campari · Founder',

      'con.kicker': 'Where we are',
      'con.title': 'On the Sempione state road, <em>minutes from Milan</em>',
      'con.map': 'The Google map loads after you accept cookies.',
      'con.loadmap': 'Load the map',
      'con.addr.label': 'Address',
      'con.addr.value': 'Via Aldo Moro 1, 20010 Pogliano Milanese (MI)<br><small>Just off the SS33 Sempione road</small>',
      'con.phone.label': 'Phone / Fax',
      'con.phone.note': '— Andrea Campari (recovery & rental)',
      'con.email.label': 'Email',

      'form.nome': 'Name <b>*</b>',
      'form.telefono': 'Phone <b>*</b>',
      'form.email': 'Email',
      'form.servizio': 'Service',
      'form.messaggio': 'Message',
      'form.sel': 'Select a service',
      'form.opt.carrozzeria': 'Body & paint',
      'form.opt.fastboll': 'Hail repair — Fast Boll 95®',
      'form.opt.soccorso': 'Roadside recovery',
      'form.opt.cristalli': 'Glass',
      'form.opt.pneumatici': 'Tyres',
      'form.opt.assicurative': 'Insurance claims',
      'form.opt.noleggio': 'Courtesy car / Rental',
      'form.opt.corso': 'Fast Boll 95® course',
      'form.opt.altro': 'Other',
      'form.privacy': 'I have read the <a href="#" rel="nofollow">privacy policy</a> and consent to the processing of my data under the GDPR (EU Reg. 2016/679). <b>*</b>',
      'form.privacy.short': 'I have read the <a href="#" rel="nofollow">privacy policy</a> and consent to data processing (GDPR). <b>*</b>',
      'form.submit': 'Send request',
      'form.err.nome': 'Please enter your name',
      'form.err.tel': 'Please enter a valid number',
      'form.err.email': 'Please enter a valid email',
      'form.success': 'Thank you. Your request has been sent: we will reply as soon as possible.',

      'foot.about': 'Three generations of master body technicians. Sikkens paint, the Fast Boll 95® patent, the European Acoat® Selected warranty: excellence, since 1964.',
      'foot.nav': 'Navigation',
      'foot.contacts': 'Contact',
      'foot.follow': 'Follow us',
      'foot.rights': '© 2026 Carrozzeria Campari srl — VAT 00000000000',
      'foot.privacy': 'Privacy &amp; Cookie Policy',

      'modal.kicker': 'Reply within 24 hours',
      'modal.title': 'Request a quote',
      'modal.sub': 'Fill in the form: a member of the Campari family will get back to you personally.',
      'modal.success.title': 'Request sent',
      'modal.success.text': 'Thank you for your trust. We will get back to you within 24 working hours.',

      'cookie.text': 'This site uses technical cookies and, with your consent, third-party cookies (Google Maps) for the interactive map. <a href="#" rel="nofollow">Cookie policy</a>',
      'cookie.accept': 'Accept',
      'cookie.decline': 'Necessary only',
      'mb.call': 'Call',
      'idx.title': 'Carrozzeria Campari — The art of body & paint in Pogliano Milanese, since 1964',

      'fbp.title': 'Fast Boll 95® — Hail repair without repainting | Carrozzeria Campari',
      'fbp.crumb': 'Fast Boll 95®',
      'fbp.hero.kicker': 'Patent OCE-MAN · since 1995',
      'fbp.hero.title': 'Fast Boll 95®. <em>The art of erasing hail.</em>',
      'fbp.hero.sub': 'The dent-removal system devised and patented by Giuseppe Campari: dings and hail dents vanish without painting, filling or dismantling.',
      'fbp.met.kicker': 'The method',
      'fbp.met.title': 'Why <em>without repainting</em>',
      'fbp.met.lead': 'From the fifty-year experience of Giuseppe Campari, master body technician, comes a patent that returns the metal to its original shape, working it from the inside with precision levers.',
      'fbp.s1.t': 'Originality stays intact',
      'fbp.s1.p': 'No repainting: the car keeps its factory paint and, with it, its value. A decisive advantage for prestige cars, leased vehicles or those destined for resale.',
      'fbp.s2.t': 'No invasive work',
      'fbp.s2.p': 'No filling, no sanding, no removing panels or interiors. The repair is precise, localised and with a certain outcome.',
      'fbp.s3.t': 'Reduced time and cost',
      'fbp.s3.p': 'Removing the prep and paint stages drastically shortens the work. The saving, compared with traditional methods, is a natural consequence.',
      'fbp.s4.t': 'Even for larger damage',
      'fbp.s4.p': 'The same technique allows very high quality straightening on wider dents: where painting is still needed, the surface to treat is reduced to a minimum.',
      'fbp.kit.kicker': 'The Kit',
      'fbp.kit.title': '32 levers, <em>one single patent</em>',
      'fbp.kit.lead': 'Fast Boll 95® is a professional kit produced by Giuseppe Campari, designed for any body technician who wants to specialise in the art of dent removal.',
      'fbp.kit.1': '<strong>Set of 32 special levers</strong> — designed and perfected by Giuseppe Campari, covered by the OCE-MAN patent.',
      'fbp.kit.2': '<strong>Lamp and accessories</strong> — everything needed to complete the refined work.',
      'fbp.kit.3': '<strong>Morgancolor distribution</strong> — the kit is marketed exclusively through Morgancolor.',
      'fbp.kit.4': '<strong>Course included</strong> — purchasing the kit grants access to the exclusive training course at our premises.',
      'fbp.cor.kicker': 'The courses',
      'fbp.cor.title': 'A school, <em>not a secret</em>',
      'fbp.cor.p1': 'Buying the tools without knowing the art of using them would produce no worthwhile result. That is why the practical and theory courses are held directly in our body shop in Pogliano Milanese, <strong>under the personal guidance of Giuseppe Campari</strong>.',
      'fbp.cor.p2': 'No jealously guarded secret: a genuine school that has already trained <strong>over 250 Italian and foreign body technicians</strong>, and a technique that has won the attention of the specialist press.',
      'fbp.cor.p3': 'The list of body shops using the Fast Boll 95® system is available on request: <a href="mailto:carrozzeria.campari@libero.it">carrozzeria.campari@libero.it</a>',
      'fbp.cor.cta': 'Enrol in the course',
      'fbp.proc.kicker': 'The process',
      'fbp.proc.title': 'From damage to <em>perfection</em>',
      'fbp.proc.1.b': 'The school', 'fbp.proc.1.t': 'Giuseppe Campari and the students of the Fast Boll 95 course',
      'fbp.proc.2.b': '01 · The damage', 'fbp.proc.2.t': 'The type of damage repaired with the Fast Boll 95 system',
      'fbp.proc.3.b': '02 · First pass', 'fbp.proc.3.t': 'The damage right after the first pass',
      'fbp.proc.4.b': '03 · Finishing', 'fbp.proc.4.t': 'Finishing stage with the Fast Boll 95 system',
      'fbp.proc.5.b': '04 · The result', 'fbp.proc.5.t': 'Repair completed without any painting',
      'fbp.cta.kicker': 'Hail or dents?',
      'fbp.cta.title': 'Trust those who <em>invented the method</em>',
      'fbp.cta.lead': 'A clear quote, an invisible repair. Your car returns to original.',

      'stp.title': 'Our Story — Three generations since 1964 | Carrozzeria Campari',
      'stp.crumb': 'Our Story',
      'stp.hero.kicker': 'Three generations · one passion',
      'stp.hero.title': 'From a basement, <em>an idea of perfection.</em>',
      'stp.hero.sub': 'The Campari family story is the story of the Italian automobile: sixty years of work, intuition and respect for the craft.',
      'stp.tl.kicker': 'The milestones',
      'stp.tl.title': '1964 — <em>today</em>',
      'stp.tl.1.t': 'The intuition',
      'stp.tl.1.p': 'In the basement of his own home, with only the essential equipment, Fedele Campari foresees the future of private motoring. Together with his sons Agostino and Giuseppe he begins a venture destined to become a solid reality.',
      'stp.tl.2.t': 'The first workshop',
      'stp.tl.2.p': 'From the basement to a small 120-square-metre workshop. The following year it grows by another 180: the business consolidates, and so does its reputation.',
      'stp.tl.3.t': 'The big leap',
      'stp.tl.3.p': 'The current premises are born: two oven cabins, two reference jig benches and the best the body-shop equipment market could offer, with full respect for the working environment.',
      'stp.tl.4.t': 'Modernisation',
      'stp.tl.4.p': 'Major investment with the Sikkens team: a new oven cabin with forced-air burners, overhead infrared lamps, solvent-free water-based paints. Fewer emissions, better air quality, shorter drying times.',
      'stp.tl.5.y': 'Today',
      'stp.tl.5.t': 'The workshop of the future',
      'stp.tl.5.p': 'A 62 kW photovoltaic plant makes the facility theoretically self-sufficient, at zero environmental impact. Next goal: a bright delivery area, new green spaces to offset emitted CO₂ and a model workshop — efficient, healthy, safe.',
      'stp.val.kicker': 'The family values',
      'stp.val.title': 'What never <em>changes</em>',
      'stp.val.1.t': 'The craft',
      'stp.val.1.p': 'The body technician\'s art is handed down from father to son. Every repair is done to perfection, just as Fedele taught in 1964.',
      'stp.val.2.t': 'Innovation',
      'stp.val.2.p': 'From the CAR-O-TRONIC® jig bench to the Fast Boll 95® patent: tradition lives only if it looks ahead.',
      'stp.val.3.t': 'The environment',
      'stp.val.3.p': 'Energy from the sun, water-based paints, reduced emissions. The dream: a zero-impact workshop, for the generations to come.',
      'stp.cta.kicker': 'Sixty years of trust',
      'stp.cta.title': 'Your car deserves <em>this story</em>',
      'stp.cta.lead': 'Come and see us on the Sempione state road, or tell us what your car needs.'
    }
  };

  /* ============================================================
     1. MOTORE I18N
     ============================================================ */
  var STORE_LANG = 'campari-lang';
  var currentLang = 'it';
  try { currentLang = localStorage.getItem(STORE_LANG) || 'it'; } catch (e) {}
  if (currentLang !== 'it' && currentLang !== 'en') currentLang = 'it';

  function t(key) {
    var d = I18N[currentLang] || I18N.it;
    return (d[key] !== undefined) ? d[key] : (I18N.it[key] !== undefined ? I18N.it[key] : null);
  }

  function applyLang(lang) {
    currentLang = (lang === 'en') ? 'en' : 'it';
    try { localStorage.setItem(STORE_LANG, currentLang); } catch (e) {}
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v !== null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-ph'));
      if (v !== null) el.setAttribute('placeholder', v.replace(/<[^>]+>/g, ''));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-aria'));
      if (v !== null) el.setAttribute('aria-label', v.replace(/<[^>]+>/g, ''));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-title'));
      if (v !== null) document.title = v.replace(/<[^>]+>/g, '');
    });

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === currentLang);
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === currentLang));
    });
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  applyLang(currentLang); // primo render

  /* ============================================================
     2. HEADER scroll
     ============================================================ */
  var header = document.querySelector('.header');
  function onScrollHeader() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ============================================================
     3. BURGER + drawer
     ============================================================ */
  var burger = document.querySelector('.burger');
  var drawer = document.querySelector('.drawer');
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked', 'drawer-open');
  }
  if (burger && drawer) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drawer.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
      document.body.classList.toggle('drawer-open', open);
    });
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
    // chiusura: clic fuori + Esc
    document.addEventListener('click', function (e) {
      if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && !burger.contains(e.target)) closeDrawer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });
  }

  /* ---------- Sfondo interattivo di sezione (segue il mouse) ---------- */
  var fxSections = document.querySelectorAll('[data-fx]');
  if (fxSections.length && !reducedMotion && window.matchMedia('(pointer:fine)').matches) {
    fxSections.forEach(function (sec) {
      var fx = sec.querySelector('.sec-fx');
      if (!fx) return;
      sec.addEventListener('pointermove', function (e) {
        var r = sec.getBoundingClientRect();
        fx.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        fx.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
      sec.addEventListener('pointerenter', function () { fx.classList.add('is-hot'); });
      sec.addEventListener('pointerleave', function () { fx.classList.remove('is-hot'); });
    });
  }

  /* ============================================================
     4. SCROLL REVEAL
     ============================================================ */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealIO.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ============================================================
     5. LICHILNYKY / COUNTERS
     ============================================================ */
  var counters = document.querySelectorAll('[data-count]');
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = 1800, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.firstChild.nodeValue = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length) {
    if ('IntersectionObserver' in window && !reducedMotion) {
      var countIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { animateCounter(entry.target); countIO.unobserve(entry.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { countIO.observe(el); });
    } else {
      counters.forEach(function (el) { el.firstChild.nodeValue = el.getAttribute('data-count'); });
    }
  }

  /* ============================================================
     6. SLIDER PRIMA/DOPO
     ============================================================ */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var dragging = false;
    function setPos(clientX) {
      var rect = ba.getBoundingClientRect();
      var x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      ba.style.setProperty('--ba-pos', (x / rect.width * 100).toFixed(2) + '%');
    }
    ba.addEventListener('pointerdown', function (e) { dragging = true; ba.setPointerCapture(e.pointerId); setPos(e.clientX); });
    ba.addEventListener('pointermove', function (e) { if (dragging) setPos(e.clientX); });
    ba.addEventListener('pointerup', function () { dragging = false; });
    ba.addEventListener('pointercancel', function () { dragging = false; });
  });

  /* ============================================================
     7. MODAL PREVENTIVO
     ============================================================ */
  var modal = document.getElementById('quote-modal');
  var modalPanel = modal ? modal.querySelector('.modal__panel') : null;
  var serviceSelect = modal ? modal.querySelector('#m-servizio') : null;
  var lastFocused = null;
  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function openModal(service) {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.remove('is-success');
    if (service && serviceSelect) {
      Array.prototype.forEach.call(serviceSelect.options, function (opt) {
        if (opt.value === service) serviceSelect.value = service;
      });
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    var first = modalPanel.querySelector('input, select, textarea');
    if (first) setTimeout(function () { first.focus(); }, 420);
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocused) lastFocused.focus();
  }
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-modal]');
    if (trigger) { e.preventDefault(); openModal(trigger.getAttribute('data-service') || ''); }
  });
  if (modal) {
    modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    modal.querySelectorAll('[data-modal-close]').forEach(function (btn) { btn.addEventListener('click', closeModal); });
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key !== 'Tab') return;
      var f = modalPanel.querySelectorAll(FOCUSABLE);
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ============================================================
     8. VALIDAZIONE + INVIO
     ============================================================ */
  function validateField(field) {
    var wrap = field.closest('.field') || field.closest('.check');
    if (!wrap) return true;
    var ok = true;
    if (field.required) { ok = (field.type === 'checkbox') ? field.checked : field.value.trim() !== ''; }
    if (ok && field.type === 'email' && field.value.trim()) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    if (ok && field.type === 'tel' && field.value.trim()) ok = /^[+\d][\d\s./()-]{5,}$/.test(field.value.trim());
    wrap.classList.toggle('is-error', !ok);
    return ok;
  }
  function bindForm(form) {
    form.setAttribute('novalidate', '');
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        var wrap = field.closest('.field') || field.closest('.check');
        if (wrap && wrap.classList.contains('is-error')) validateField(field);
      });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('input, select, textarea').forEach(function (field) { if (!validateField(field)) valid = false; });
      if (!valid) {
        var fe = form.querySelector('.is-error input, .is-error select, .is-error textarea');
        if (fe) fe.focus();
        return;
      }
      sendForm(form);
    });
  }
  function sendForm(form) {
    var data = {
      nome:      (form.querySelector('[name="nome"]') || {}).value || '',
      telefono:  (form.querySelector('[name="telefono"]') || {}).value || '',
      email:     (form.querySelector('[name="email"]') || {}).value || '',
      servizio:  (form.querySelector('[name="servizio"]') || {}).value || '',
      messaggio: (form.querySelector('[name="messaggio"]') || {}).value || ''
    };

    /* --- VARIANTE A (attiva): mailto fallback --- */
    var body = 'Nome: ' + data.nome + '\n' +
      'Telefono: ' + data.telefono + '\n' +
      'Email: ' + data.email + '\n' +
      'Servizio: ' + data.servizio + '\n\n' + data.messaggio;
    window.location.href = 'mailto:carrozzeria.campari@libero.it' +
      '?subject=' + encodeURIComponent('Richiesta preventivo — ' + (data.servizio || 'Sito web')) +
      '&body=' + encodeURIComponent(body);

    /* --- VARIANTE B (consigliata): fetch su endpoint ---
       1. Registra l'email su https://formsubmit.co
       2. Commenta la VARIANTE A, scommenta il blocco sotto
       3. Sostituisci YOUR_ENDPOINT, es:
          https://formsubmit.co/ajax/carrozzeria.campari@libero.it

    fetch('YOUR_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error('Errore');
      showSuccess(form);
    }).catch(function () {
      alert('Si è verificato un errore. Riprovare o chiamare +39 02.9341208');
    });
    return;
    ------------------------------------------------------ */

    showSuccess(form);
  }
  function showSuccess(form) {
    if (modal && modal.contains(form)) { modal.classList.add('is-success'); }
    else { var n = form.querySelector('.form__success-note'); if (n) n.hidden = false; }
    form.reset();
  }
  document.querySelectorAll('form[data-quote-form]').forEach(bindForm);

  /* ============================================================
     9. LIGHTBOX
     ============================================================ */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        lbImg.src = el.getAttribute('data-lightbox');
        lbImg.alt = el.getAttribute('data-lightbox-alt') || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('is-locked');
      });
    });
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
    }
    lightbox.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  /* ============================================================
     10. FAB
     ============================================================ */
  var fabStack = document.querySelector('.fab-stack');
  if (fabStack) {
    window.addEventListener('scroll', function () {
      fabStack.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.85);
    }, { passive: true });
  }

  /* ============================================================
     11. COOKIE + MAPPA
     ============================================================ */
  var cookies = document.getElementById('cookie-banner');
  var mapBox = document.getElementById('map');
  var MAP_SRC = 'https://www.google.com/maps?q=Carrozzeria+Campari,+Via+Aldo+Moro+1,+20010+Pogliano+Milanese+MI&z=15&output=embed';
  function loadMap() {
    if (!mapBox || mapBox.querySelector('iframe')) return;
    var iframe = document.createElement('iframe');
    iframe.src = MAP_SRC;
    iframe.loading = 'lazy';
    iframe.title = 'Mappa — Carrozzeria Campari, Pogliano Milanese';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    mapBox.appendChild(iframe);
    var ph = mapBox.querySelector('.map__placeholder');
    if (ph) ph.remove();
  }
  var consent = null;
  try { consent = localStorage.getItem('campari-cookies'); } catch (e) {}
  if (consent === 'accepted') { loadMap(); }
  else if (cookies) { setTimeout(function () { cookies.classList.add('is-visible'); }, 1600); }
  if (cookies) {
    var ba2 = cookies.querySelector('[data-cookies="accept"]');
    var bd2 = cookies.querySelector('[data-cookies="decline"]');
    if (ba2) ba2.addEventListener('click', function () {
      try { localStorage.setItem('campari-cookies', 'accepted'); } catch (e) {}
      cookies.classList.remove('is-visible'); loadMap();
    });
    if (bd2) bd2.addEventListener('click', function () {
      try { localStorage.setItem('campari-cookies', 'declined'); } catch (e) {}
      cookies.classList.remove('is-visible');
    });
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-load-map]')) {
      try { localStorage.setItem('campari-cookies', 'accepted'); } catch (err) {}
      if (cookies) cookies.classList.remove('is-visible');
      loadMap();
    }
  });

  /* ============================================================
     12. NAV ATTIVA (ancore index)
     ============================================================ */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link[href^="#"], .nav__link[href*="index.html#"]');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href').indexOf('#' + id) !== -1);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { navIO.observe(s); });
  }
})();
