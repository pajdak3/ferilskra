var Main = (function() {

    var firstNumberID = 0;
    var secondNumberID = 0;
    var oldNumberID = 0;
    var oldSecondNumberID = 0;
    var timi=0;
    var idBox;
    var idOldBox;


    function showForm(e) {

        firstNumberID = $(this).attr('id').substring(0, 1);
        secondNumberID = $(this).attr('id').substring(2, 3);
        var idString = $(this).attr('id').substring(0, 3);
        idBox = $("#" + firstNumberID + ".contentBox");
        idOldBox= $("#" + oldNumberID + ".contentBox");

        if (firstNumberID != oldNumberID) {
            idOldBox.slideUp(500);
            info(timi, idString);
            timi=450;
        } else {
            if (secondNumberID == oldSecondNumberID){
                idBox.slideToggle(500);
                timi=0;

            }
            else {
                idOldBox.slideUp(500);
                info(timi, idString);
                timi=450;
            }
        }

        oldNumberID = firstNumberID;
        oldSecondNumberID = secondNumberID;

        e.preventDefault();
    }

    function info(time, idString){
        setTimeout(function(){
        idBox.empty();
        idOldBox.empty()
        if(idString=="1_1"){
            idBox.append('<div class="row featurette"><div class="col-md-7"><h2>Leiðbeinandi í Vinnuskóla Reykjavíkurborgar</h2><p class="lead"> </p><p>Síðastu 2 sumur vann ég sem leiðbeinandi í Vinnuskóla Reykjavíkur. Hafði umsjón með unglingum úr 9. og 10. bekk grunnskóla og leiðbeindi þeim við vinnu.</p> <p>Fékk góða reynslu í <b>samskiptum</b> og <b>verkstýringu</b>. Fór á ýmiss undirbúningsnámskeið í fyrrnefndu og einnig í <b>skyndihjálp</b>, <b>hópefli</b> og <b>einelti</b>.</p> <p>Vinnuaðstaðan fyrra árið var í Ingunnarskóla og Úlfarsfelli, þar sem ég leiðbeindi unglingum við gróðursetningu, arfa hreinsun og almenna sorphreinsun. Seinna árið var ég í Seljaskóla að sinna líkum verkum.</p><h3>Meðmælendur/Umsagnaraðilar</h3><p>Hægt er hafa samband við <b>Svavar Jakobsson</b> yfirleiðbeinanda minn úr Vinnuskóla Reykjavíkur 2015. Í síma <b>868-1454</b> eða tölvupóst <b>svavar.helgi.jakobsson@reykjavik.is.</b></p><p>Hægt er hafa samband við <b>Egill Björnsson</b> yfirleiðbeinanda minn úr Vinnuskóla Reykjavíkur 2014. Í síma <b>690-6973</b> eða tölvupóst <b>egillbj@gmail.com.</b></p> </div><div class="col-md-5  contentRightBox"> <img src="images/workingkids.jpeg" alt="vinnuskolinn"> </div></div>');    
            }
        if(idString=="1_2"){
            idBox.append('<div class="row featurette"><div class="col-md-7"><h2>Bæjarframkvæmdir, Reykjavíkurborg</h2><p class="lead"> </p><p>Starfaði sem verkamaður í Þjónustumiðstöð Stórhöfða í 3 sumur.</p> <p>Fyrsta sumarið mitt var ég í viðhaldshóp, þar sem við sáum um að steypa kanta, leggja grasþökur, mála og lakka.</p> <p>Næstu 2 sumur vann ég í slátturhóp með orf og hrífu.</p> </div><div class="col-md-5 contentRightBox"> <img src="images/baejarvinnan.png" alt="baejarvinnan"> </div></div>');    
            }
        if(idString=="1_3"){
            idBox.append('<div class="row featurette"><div class="col-md-7"><h2>Kosningar</h2><p class="lead"> </p><p>Hef unnið í undirkjörstjórn við kosningar síðan ég náði lögaldri. Þar hef ég tekið á móti fólki, haldið utan um manntalsskráningu og séð um utankjörfundaratkvæði. </p> </div><div class="col-md-5 contentRightBox"> <img src="images/voting.png" alt="voting"> </div></div>');    
            }
        if(idString=="1_4"){
            idBox.append('<div class="row featurette"><div class="col-md-7"><h2>Vinnuskóli Reykjavíkur</h2><p class="lead"> </p><p>Eins og hver annar unglingur, vann ég í unglingavinnunni í 8., 9. og 10. bekk.</p> <p>Í 8. bekk vann ég við hreinsun og viðhald á ÍR-svæðinu. </p> <p>Í 9. og 10.bekk vann ég í Heiðmörk við stígagerð og trjágrisjun.</p> </div><div class="col-md-5 contentRightBox"> <img src="images/unglingavinnan.png" alt="unglingavinnan"> </div></div>');    
            }         
        if(idString=="2_1"){
            idBox.append('<div class="row featurette"><div class="col-md-7"><h2>Java</h2><p>Hef mest forritað í <b>Java</b>, en það var grunn forritunarmálið sem ég lærði. Java hefur verið notað í þó nokkrum fögum og hef ég gert fullt af mismunandi verkefnum m.a. reikni-, leitar-, teikni- og leikjaforrit. </p><p>Ég notast mest við textaritilinn <b>Sublime Text 2</b> en hef auk þess notað <b>NetBeans</b> fyrir forrit sem krefjast viðmóts. Hér til hægri er mynd af forriti sem ég hannaði með viðmóti í NetBeans á fyrsta árinu mínu. Það heitir Vpaint, en það er teikniforrit sem á að líkjast paint.</p></div><div class="col-md-5 contentRightBox"><img src="images/java1.png" alt="paintmynd"></div></div>');
            }
        if(idString=="2_2"){
            idBox.append('<div class="row featurette"><div class="col-md-7"> <h2>Önnur forritunarmál</h2> <p>Hef mest unnið í Java, en hef auk þess lært á </p> <ul> <li><b>C</b></li> <li><b>C++</b></li> <li><b>C#</b></li> <li><b>Scheme</b></li> <li><b>CAML</b></li> <li><b>Haskell</b></li> <li><b>Morpho</b> (íslenskt forritunarmál gert af Snorra Agnarsyni)</li> </ul> <p>Hef einungis lært grunninn í þessum tungumálum. Hef ekki mikla reynslu á þeim.</p> </div> </div>');
            }
        if(idString=="2_3"){
            idBox.append( '<div class="row featurette"><div class="col-md-7"><h2>Vefforritun</h2><p class="lead"><p>Tók námskeið í vefforritun og lærði á <b>HTML</b>, <b>CSS</b>, <b>Javascipt+Jquery</b> og <b>Ajax</b> með gagnagrunnum. Farið var í <b>PHP</b> og grunninn í <b>Nodejs</b>. Auk þess kynntist ég <b>HTTP/HTTPS</b> samskiptastaðlinum og <b>öryggi vefkerfa</b>.</p><p>Sem lokaverkefni í vefforritun gerði ég ásamt félaga mínum vefsíðu sem sækir upplýsingar um kvikmyndir í <b>gagnagrunna</b> og með því að <b>web scrape-a</b> vefsíður. Við notuðmst við PHP fyrir MMDB og gerðum útlitið og skölun allt sjálfir án <b>bootstrap</b>. Hér er hægt að sjá lokaverkefnið mitt í vefforritun:</p><p><a href="http://www.mmdb.olafurorng.is">Mini Movie Database</a></p><p>Í fyrra gerði ég einnig ferilskrá síðu í PHP, hana er hægt að sjá hér:</p><p><a href="http://www.vip.olafurorng.is">Gamla Ferilskrá síðan</a></p><p>Þessa síðu gerði ég í Nodejs þar sem ég nýtti mér <b>Gulp</b> og aðra pakka.</p></div><div class="col-md-5 contentRightBox"><img class="contentImage" src="/images/mmdb.jpg" alt="mmdb"></div></div>' );
            }
        if(idString=="2_4"){
             idBox.append('<div class="row featurette"><div class="col-md-6"><h2>Tölvuleikjaforritun</h2><p> Tók námskeið í tölvuleikjaforritun, þar sem unnið var í canvas með <b>Javascript</b> við að gera ýmis tvívídda leiki eins og breakout, astroids og fleiri. Við lærðum um almenna uppsetningu á leik, meðal annars um stýringu rammatíðni, hlutastjórnun, löggengi, minnisstýringu og keyrsluafköst.</p> <p>Hér til hliðar er hægt að sjá lokaverkefnið mitt í faginu, leikurinn <b>Gridrunner.</b></p><p><a href="https://github.com/hlynurf/gridrunner">Github linkur á kóða leiksins</a></p> <p>Önnur verkefni eftir mig:</p> <p><a href="https://jsfiddle.net/vip9/fg29adt3/">Pong</a></p> <p><a href="https://notendur.hi.is/vip9/tolvuleikjavip/Brick/">Breakout</a></p> <p><a href="https://notendur.hi.is/vip9/tolvuleikjavip/Astroids2/">Asteroids</a></p>  </div><div class="col-md-6 tableCenter"> <iframe class="gameIframe" src="https://notendur.hi.is/vip9/tolvuleikjavip/gridrunner/week3/" width="430" height="630"></iframe> </div></div>');
            }
        if(idString=="3_1"){    
            idBox.append('<div class="row featurette"><div class="col-md-5"> <h2>Tölvugrafík</h2> <p> Tók námskeið í tölvugrafík þar ég lærði grunnhugtök og stærðfræði fyrir þrívíddar tölvugrafík. Forritað var í <b>Javascript</b> með <b>openGL</b> og gerð voru ýmis þrívíddar verkefni.</p> <p> Hér til hliðar er hægt að sjá <b>3d Tetris</b> leik sem ég gerði. </p> <p> Til að takkarnir virki verður að ýta á svæðið sem leikurinn er inni í, t.d. á textann fyrir neðan leikinn.</p> <p>Önnur verkefni eftir mig:</p> <p><a href="https://notendur.hi.is/~vip9/tolvugrafik/html,js/cube-pr.html" target="_blank">Órói</a></p> <p><a href="https://notendur.hi.is/~vip9/tolvugrafik/verk3/Vik/HIveggur.html" target="_blank">Veggur</a></p> <p><a href="https://notendur.hi.is/~vip9/tolvugrafik/verk3/hhpyramid.html" target="_blank">Demantur</a></p> <p><a href="https://notendur.hi.is/~vip9/tolvugrafik/" target="_blank">Allt annað (óflokkað)</a></p> </div> <div class="col-md-7 tableCenter"> <iframe class="gameIframe" src="https://notendur.hi.is/~vip9/tolvugrafik/verk3/tetris/trisis.html" width="620" height="775"> </iframe></div> </div>');
            }
        if(idString=="3_2"){
            idBox.append('  <div class="row featurette"><div class="col-md-6"><h2>Hugbúnaðarverkefni</h2><p>Sem hugbúnaðarverkefni fyrir seinustu önn. Gerði ég ásamt 2 öðrum félögum mínum vefsíðuna <b>ÍsFar</b>. Sú vefsíða á að einfalda samskipti milli bílstjóra og farþega sem þegar nota facebook grúbbuna skutlarar.</p><p>Til að auðkenna notendur notum við facebook fyrir innskráningu. Á síðunni er hægt að pósta þörf á fari eða að maður sé að skutla.</p><p>Við munum síðan halda áfram með þetta verkefni á næstu önn, þar sem við munum gera app með sömu hugmynd.</p><p>Því miður er síðan ekki komin upp, svo ég get ekki linkað á hana.</p><a href="https://github.com/pajdak3/hermes-server">Github linkur á kóða síðunnar</a></div><div class="col-md-6"><img src="/images/isfar3.png" alt="isfar"/><img src="/images/isfar.png" alt="isfar1"/><img src="/images/isfar2.png" alt="isfar2"/></div></div>');
            }
        if(idString=="3_3"){
            idBox.append('<div class="row featurette"><div class="col-md-7"> <h2>Defend the Goal</h2> <p>Hef gert android app. Við gerð þess notaðist ég við <b>libGDX Java frameworkið</b>. </p> <p>Í leiknum er menu sem hægt er að velja play, rules, highscore eða settings. </p> <p>Leikurinn gengur út á það að verja mark undan boltum með mismunandi eiginleika. Það mega ekki komast 3 boltar í gegn. Auk boltana eru 3 gerðir af power-ups.</p> <p>Hægt er að sækja leikinn á Play Store hér: <a href="https://play.google.com/store/apps/details?id=com.defend.android&hl=en" target="_blank">Defend the Goal</a> </p> <p>Hægt er að skoða kóða á Github hér: <a href="https://github.com/hlynurf/defendGoal" target="_blank">Github</a></p> </div> <div class="col-md-5 contentRightBox"> <img src="images/android.png" alt="android game"> </div> </div>');
            }
        if(idString=="3_4"){
            idBox.append('<div class="row featurette"><div class="col-md-7"> <h2>Samskipta forrit</h2> <p>Hef unnið þó nokkuð mikið í <b>Github</b> og hef fína reynslu á að vinna í því. Nýlega hef ég einnig verið að notast við <b>Slack</b> við gerð stærri hópaverkefna. En þar höfum við verið að tengja Github við og síðan skipulagningar tól svo sem <b>Asana</b> eða <b>Trello</b>.</p><p>Í faginu þróun hugbúnaðar sem og í hugbúnaðarverkefninu, höfum við verið að læra að vinna eftir ákveðnum vinnuaðferðum, eins og <b>Agile</b>. En stór hluti námskeiðanna er að læra undirbúninginn fyrir stór verkefni.</p> </div> <div class="col-md-5 contentRightBox"> <img src="images/slack.png" alt="slack"> </div> </div>');
            }
        if(idString=="4_2"){
            idBox.append('<div class="row featurette"><div class="col-md-7"> <h2>Öryggi tölvukerfa</h2> <p>Tók áfanga í öryggi tölvukerfa og lærði ýmisslegt um hættur og helstu öryggisgalla. Meðal annars aðferðir og aðferðafræði, verkferla til að vernda öryggi bæði fyrir og eftir atburði, tæknileg og stjórnunarleg viðbrögð, tilheyrandi áætlunargerð og úthlutun verkefna til starfsmanna, áhættumat, aðgangsstýring, öryggishliðar á vefsamskiptum og skráaflutning, kynning á dulmálsfræði, högun öryggiskerfa, eldveggir og skyldar varnir og högun tölvuneta. </p> </div> </div>');
            }
        if(idString=="4_1"){
            idBox.append('<div class="row featurette"><div class="col-md-7"> <h2>Gagnasafnsfræði</h2> <p>Hef lokið við áfanga í gagnasafnsfræði. Hef lært á <b>SQL</b> og <b>SQLite</b>. Kann að útfæra miðlungsstóran venslagagnagrunn þ.m.t</p> <ul> <li>Hanna E/R líkan og fært yfir í venslagagnagrunn</li> <li>Forritað flóknar fyrirspurnir í SQL</li> <li>Nota fræðileg tæki, t.d. staðalform og venslaalgebru, til að bæta hönnun gagnagrunna</li> <li>Búið til gagnagrunn með skorðum t.d. vísunarheilleika</li> <li>Bætt hraða og afköst gagnagrunna með vísum</li> </ul> </div> </div>');
            }
        if(idString=="6_1"){
            idBox.append('<div class="row featurette"><div class="col-md-6"> <h2>Tungumál</h2> <p>Í grunn- og menntaskóla lærði eg ensku í 9 ár, dönsku í 6 ár og spænsku í 3 ár.</p></div><div class="col-md-6 contentRightBox tableCenter"><table> <thead> <tr> <td>Tungumál</td> <td>Kunnátta í töluðu máli</td> <td>Kunnátta í rituðu máli</td> </tr> </thead> <tr class="table-gray"> <td><b>Íslenska</b></td> <td>Fullkomin</td> <td>Fullkomin</td> </tr> <tr> <td><b>Enska</b></td> <td>Fullkomin</td> <td>Fullkomin</td> </tr> <tr class="table-gray"> <td><b>Danska</b></td> <td>Ágæt</td> <td>Ágæt</td> </tr> <tr> <td><b>Spænska</b></td> <td>Hræðileg</td> <td>Góð</td> </tr> </table></div> </div>');
            }
        if(idString=="6_2"){
            idBox.append('<div class="row featurette"><div class="col-md-6"> <h2>Stýrikerfi</h2> <p>Hef langmest notast við <b>Windows</b> en hef auk þess notað <b>iOS</b> og <b>Android</b> mikið. Hef auk þess einhverja reynslu á <b>Linux</b>. Tók einnig fag sem kenndi mér hvernig stýrikerfi hegða sér og virka.</p> </div> </div>');
            }
        if(idString=="6_3"){
            idBox.append('<div class="row featurette"><div class="col-md-6"> <h2>Office</h2> <p>Hef mikla kunnáttu á <b>Word</b>, <b>Excel</b> og <b>Powerpoint</b> eins og flestir eflaust. Ég tók námskeið í menntaskóla sem kenndi mér dýpri skilning á þessi forrit og fékk þar toppeinkunn.</p> </div> </div>');
            }
        if(idString=="6_4"){
            idBox.append('<div class="row featurette"> <div class="col-md-6"> <h2>Tónlistarforrit </h2> <p>Hef unnið þó nokkuð í <b>Fl Studio</b> við að búa til takta og lög. Einnig reynslu af vinnslu hljóða og samsetningu í <b>Mixcraft</b> og <b>Steinberg Cubase</b>.</p> <p> </p> <p>Hér má heyra tvo takta gerða í Fl Studio.</p> <audio controls> <source src="audio/vikiloop.mp3" type="audio/mpeg"/> </audio> <audio controls> <source src="audio/Rappmix.mp3" type="audio/mpeg"/> </audio> <br> <h2>Klippiforrit </h2> <p>Hef að áhuga unnið í <b>VegasPro</b> við að klippa myndbönd.</p> <p> </p> <p>Hér til hliðar má sjá eitt þeirra. Ég að byggja 2 metra krónuturn ásamt bróður mínum í stop motion formati.</p> </div> <div class="col-md-6 contentRightBox"> <iframe src="https://www.youtube.com/embed/smWrhupY5fM" frameborder="0" height="300" width="500" allowfullscreen></iframe> </div> </div>');
            }
        if(idString=="8_1"){
            idBox.append('<div class="row featurette"> <div class="col-md-6"> <h2>Háskóli Íslands</h2> <p class="lead"> </p> <p>Ég er að læra <b>Hugbúnaðarverkfræði</b>, BS, 180e á Verkfræði- og náttúruvísindasvið | Iðnaðarverkfræði-, vélaverkfræði- og tölvunarfræðideild.</p> <p>Meðaleinkunn á ferli 1 er <b>8,14</b> og fjöldi eininga lokið er <b>162/180</b>. Ég hef hér sett upp einkannir úr háskólanum sem og skjáskot af uglu.hi.is til staðfestingar.</p> <a href="images/histadfesting.png" target="_blank">Staðfesting</a> </div> <div class="col-md-6 contentRightBox"> <div class="tableCenter"> <table> <thead> <tr class="table-gray"> <td>Námskeiðsn.</td> <td>Námskeiðsheiti</td> <td>Einingar</td> <td>Einkunn</td> <td>Prófmisseri</td> </tr> </thead> <tr> <td>TÖL403G</td> <td>Greining reiknirita</td>  <td>6.0</td> <td>Ólokið</td> <td>maí 2016</td> </tr> <tr> <td>HBV601G</td> <td>Hugbúnaðarverkefni 2</td> <td>6.0</td> <td>Ólokið</td> <td>maí 2016</td> </tr> <tr> <td>TÖL402G</td> <td>Rökfræði í hugbúnaðargerð</td> <td>6.0</td> <td>Ólokið</td> <td>maí 2016</td> </tr> <tr class="table-finish"> <td>TÖL501G</td> <td>Tölvuleikjaforritun</td> <td>6.0</td> <td>9.0</td> <td>des 2015</td> </tr> <tr class="table-finish"> <td>REI101M</td> <td>Reiknigreind</td> <td>6.0</td> <td>7.0</td> <td>des 2015</td> </tr> <tr class="table-finish"> <td>TÖL501G</td> <td>Hugbúnaðarverkefni 1</td> <td>6.0</td> <td>8.0</td> <td>des 2015</td> </tr> <tr class="table-finish"> <td>TÖL501G</td> <td>Verkefnastjórnun</td> <td>6.0</td> <td>9.0</td> <td>des 2015</td> </tr> <tr class="table-finish"> <td>TÖL501G</td> <td>Hagverkfræði</td> <td>6.0</td> <td>8.0</td> <td>des 2015</td> </tr> <tr class="table-finish"> <td>STÆ203G</td> <td>Líkindareikningur og tölfræði</td> <td>6.0</td> <td>9.0</td> <td>maí 2015</td> </tr> <tr class="table-finish"> <td>TÖL203M</td> <td>Tölvugrafík</td> <td>6.0</td> <td>7.5</td> <td>maí 2015</td> </tr> <tr class="table-finish"> <td>TÖL401G</td> <td>Stýrikerfi</td> <td>6.0</td> <td>8.5</td> <td>maí 2015</td> </tr> <tr class="table-finish"> <td>HBV401G</td> <td>Þróun hugbúnaðar</td> <td>6.0</td> <td>9.5</td> <td>maí 2015</td> </tr> <tr class="table-finish"> <td>IÐN401G</td> <td>Aðgerðagreining</td> <td>6.0</td> <td>8.0</td> <td>maí 2015</td> </tr> <tr class="table-finish"> <td>STÆ302G</td> <td>Stærðfræðigreining IIIB</td> <td>6.0</td> <td>7,5</td> <td>des 2014</td> </tr> <tr class="table-finish"> <td>TÖL501M</td> <td>Öryggi tölvukerfa</td> <td>6.0</td> <td>9,0</td> <td>des 2014</td> </tr> <tr class="table-finish"> <td>TÖL306G</td> <td>Vefforritun</td> <td>6.0</td> <td>8,0</td> <td>des 2014</td> </tr> <tr class="table-finish"> <td>TÖL304G</td> <td>Forritunarmál</td> <td>6.0</td> <td>10,0</td> <td>des 2014</td> </tr> <tr class="table-finish"> <td>TÖL303G</td> <td>Gagnasafnsfræði</td> <td>6.0</td> <td>8,0</td> <td>des 2014</td> </tr> <tr class="table-finish"> <td>IÐN101G</td> <td>Rekstrarfræði</td> <td>6.0</td> <td>9,0</td> <td>des 2014</td> </tr> <tr class="table-finish"> <td>TÖV202G</td> <td>Greining og hönnun stafrænna rása - verklegt</td> <td>2.0</td> <td>9,5</td> <td>maí 2014</td> </tr> <tr class="table-finish"> <td>EÐL201G</td> <td>Eðlisfræði 2 V</td> <td>6.0</td> <td>9,0</td> <td>maí 2014</td> </tr> <tr class="table-finish"> <td>STÆ205G</td> <td>Stærðfræðigreining IIB</td> <td>6.0</td> <td>7,0</td> <td>maí 2014</td> </tr> <tr class="table-finish"> <td>TÖL203G</td> <td>Tölvunarfræði 2</td> <td>6.0</td> <td>8,0</td> <td>maí 2014</td> </tr> <tr class="table-finish"> <td>HBV201G</td> <td>Viðmótsforritun</td> <td>8.0</td> <td>7,0</td> <td>maí 2014</td> </tr> <tr class="table-finish"> <td>TÖV201G</td> <td>Greining og hönnun stafrænna rása</td> <td>6.0</td> <td>7,5</td> <td>maí 2014</td> </tr> <tr class="table-finish"> <td>EÐL102G</td> <td>Eðlisfræði 1 V</td> <td>6.0</td> <td>6.5</td> <td>des 2013</td> </tr> <tr class="table-finish"> <td>STÆ107G</td> <td>Línuleg algebra B</td> <td>6.0</td> <td>7,0</td> <td>des 2013</td> </tr> <tr class="table-finish"> <td>STÆ104G</td> <td>Stærðfræðigreining IB</td> <td>6.0</td> <td>8,0</td> <td>des 2013</td> </tr> <tr class="table-finish"> <td>TÖL104G</td> <td>Stærðfræðimynstur í tölvunarfræði</td> <td>8.0</td> <td>8,0</td> <td>des 2013</td> </tr> <tr class="table-finish"> <td>TÖL101G</td> <td>Tölvunarfræði 1</td> <td>6.0</td> <td>8,5</td> <td>des 2013</td> </tr> <tr class="table-white"> <td colspan="3"><b>Meðaleinkunn</b></td> <td><b>8.14</b></td> </tr> </table> </div> </div> </div>');
            }
        if(idString=="8_2"){
            idBox.append('<div class="row featurette"><div class="col-md-6"><h2>Menntaskólinn í Reykjavík</h2><p>Gekk í Menntaskólann í Reykjavík á árunum 2009-2013.</p><p>Fyrstu 2 árin var ég á náttúrufræðibraut og á seinni tveimur á eðlisfræði II. Útskrifaðist síðan með <b>Fyrstu einkunn</b> af eðlisfræðibraut II sumarið 2013.</p> <p> Hef eins og sést mikla raungreina menntun. Kláraði 27 einingar í stærðfræði, 13 einingar í eðlisfræði og 12 einingar í efnafræði í MR. Hef auk þess lært mikla stærðfræði og eðlisfræði í háskóla.</p><p>Ég hef hér sett upp skannaðar einkannir úr stúdentsprófum í menntaskóla. </p> </div><div class="col-md-6"><div class="tableCenter"><iframe src="images/MR.pdf" width="500" height="500"></iframe> </div></div></div>');
            }
        if(idString=="8_3"){
            idBox.append('<div class="row featurette"><div class="col-md-6"><h2>Grunnskóli</h2><p>Gekk í Ölduselsskóla á árunum 1998-2009.</p><p> Tók samræmt próf í stærðfræði í 9. bekk og tók svo eitt og hálft ár í FB stærðfræði. Fékk 10 í öllum FB stærðfræði áföngunum og fékk verðlaun fyrir stærðfræði í grunnskóla.</p><p> Ég hef hér sett upp lokaeinkannir úr grunnskóla.</p></div><div class="col-md-6"><div class="tableCenter"><iframe src="images/Grunnskoli.pdf" width="500" height="500"></iframe> </div> </div></div>');
            }
        if(idString==""){
            idBox.append('');
            }
        idBox.slideDown(500);
         }, time);
    }

    function init()  {
        $('.cvContent').on('click', showForm);

        // Lazy loading content divs
        $("div.lazy").lazyload({
            effect : "fadeIn",
            threshold : 200,
            effectspeed: 1200
        });
        // Lazy loading content divs
        $("img.lazy").lazyload({
            threshold : 200,
        });


    }
    return {
        init: init
    };
})();

$(document).ready(function() {
    Main.init();
});
