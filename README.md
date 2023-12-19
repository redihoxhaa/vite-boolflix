<p></p>
<p align="center"> 
<img src="https://imgur.com/64Pcke8.jpg" width="200" />
<p>

### <p style="text-align: center;">CODING & CHILL</p>

Giunti verso la fine del capitolo del front-end, in questa sfida interessante, abbiamo ricreato il sito di Netflix. In questo esercizio facciamo i conti con l'approccio a componenti, cercando di lasciare il codice
quanto più neutro possibile, e specializzando i componenti per svolgere solamente funzioni appropriate al loro contesto. Basandoci sull'API di https://www.themoviedb.org, abbiamo quindi scoperto il mondo delle chiamate AJAX nelle loro variazioni, leggendo documentazioni e usando per la prima volta dei parametri.

L'esercizio inizia tassativamente con una fase di progrettazione logica dei componenti e della struttura del global state, senza curare inizialmente la grafica.

Per quanto ci stiamo allenando ad immaginare e a scrivere quelli che possano essere i componenti necessari e i relativi casi d'uso, ammetto di trovare ancora qualche difficoltà in fase di esecuzione, ove sorgono imprevisti non considerati, che puntualmente mi rovinano i piani.

Essendo un progetto complesso e pieno di funzionalità, è stato di grande aiuto per imparare un approccio più calmo e rilassato sulla progettazione.

L'interfaccia si apre con una homepage minimale, animata grazie alla libreria di [**AOS**](https://michalsnik.github.io/aos/) che è stata parte fondamentale di questo progetto. Da questa gif potete avere rappresentata l'homepage.

![Logo](https://s5.gifyu.com/images/SiyOV.gif)

Troviamo quindi un logo e una barra di ricerca, con la quale abbiamo gestito diversi casi (es. ricerca vuota, ricerca che non da risultati), mostrando dei messaggi che fanno capire all'utente l'esito della propria ricerca.

I risultati che otteniamo sono di due tipi come si può notare dall'immagine sottostante:

![Ricerca](https://imgur.com/FAFuys6.jpg)

Nella parte superiore troviamo i _Film_ e in quella inferiore le _Serie Tv_. L'utente ha la possibilità di scrollare orizzontalmente le opere dei film che sono limitate a 20 risultati inizialmente, con la possibilità di arricchire la ricerca premendo sul pulsante rosso affianco l'ultimo risultato (che compare solamente nel caso in cui ci siano 20 schede in pagina, e vibra se l'ulteriore ricerca non porta ulteriori risultati).

![+Ricerca](https://imgur.com/j6hLM8H.jpg)

Abbiamo anche la possibilità di filtrare i nostri risultati tramite il toggle dei generi dell'opera, che rimuoveranno dai risultati di ricerca tutti i film, o le serie tv, che non sono inerenti al genere selezionato.

Andando in hover su una scheda, noteremo un piccolo ingrandimento ed evidenziamento della stessa, e compariranno diverse informazioni utili all'utente per saperne di più sull'opera. Nello specifico sullo sfondo comparirà la bandiera che rappresenta la lingua originale dell'opera, successivamente il titolo, il titolo originale, una descrizione, e il voto in stelle da 1 a 5.

![Hover](https://imgur.com/Mn1uiFI.jpg)

Solo se sono disponibili ulteriori info, quali genere e primi 5 attori del cast, verrà visualizzato un pulsante _Altre info_ che al click mostrerà tali informazioni.

![+ Info Hover](https://imgur.com/s782nVo.jpg)

Come potete notare dalle immagini, abbiamo gestito anche il caso di resize della viewport, offrendo all'utente attraverso il click di un pulsante di passare rispettivamente tra risultati di film e serie tv.

Ovviamente in tutti le situazioni l'utente può sempre effettuare una nuova ricerca avendo a disposizione la barra di ricerca nella parte superiore dello schermo.

---

#### <p style="text-align: center;">CONSIDERAZIONI FINALI</p>

Tirando le somme su questo esercizio, ho imparato principalmente 3 cose.

1. Prendersi tutto il tempo possibile per progettare e farlo quando si è calmi e rilassati, non facendosi prendere dall'istinto di cominciare a scrivere subito codice.

2. Non ossessionarsi su aspetti dell'interfaccia che vede principalmente solo chi la progetta, e usare quel tempo per fare refactoring, snellire il codice e semplificare i processi.

3. Non farsi sopraffare dalla voglia di finire tutto subito. Dare alla mente il tempo di metabolizzare e di maturare le soluzioni, che come sempre, arrivano nei momenti di spensieratezza e di calma (l'accanimento peggiora solamente le cose).

Il supporto dei tutor è stato fondamentale per settare al meglio la metodologia di approccio e di lavoro su questo tipo di esercizi un po' più articolati.

E' stato comunque bello spingersi oltre i propri limiti, anche toccando arogmenti non affrontati durante le lezioni. Guardandomi indietro, sono passati già 3 mesi, ma mai avrei immaginato, partito da zero, che questa materia mi affascinasse così tanto, e di raggiungere tale livello di competenza. La soddisfazione che da il raggiungere un risultato imposto, e vedere che i propri componenti lavorano come abbiamo deciso noi, ripaga tutte le ore della giornata occupate dallo sviluppo.

Alla prossima sfida.