
const themeToggle = document.getElementById('themeToggle');

function applyTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    themeToggle.checked = true;
  } else {
    document.body.classList.remove('dark');
    themeToggle.checked = false;
  }
  localStorage.setItem('theme', mode);
}

themeToggle.addEventListener('change', () => {
  const mode = themeToggle.checked ? 'dark' : 'light';
  applyTheme(mode);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  // Dynamische Timeline-Erstellung
  const timelineContainer = document.getElementById('timeline');
  const image = document.getElementById('displayed-image');
  const textBox = document.getElementById('timeline-text');
  const textTitle = document.getElementById('text-title');
  const textContent = document.getElementById('text-content');

 const clubAchievementsData = {
  achievements: [
    {
      pikto: "../Bilder/Pokale/CL.png",
      title: "Gründung des FC Barcelona (1899)",
      image: "../BILDER/Historie/1899.jpg",
      report: "Der FC Barcelona wurde am 29. November 1899 vom Schweizer Hans Gamper – besser bekannt als Joan Gamper – gegründet. In einer Zeitungsanzeige rief er fußballinteressierte Sportler in Barcelona zusammen, um gemeinsam einen Verein zu gründen. Dieser unscheinbare Aufruf wurde zum Ausgangspunkt einer der größten Erfolgsgeschichten des Weltfußballs. Bereits in den Anfangsjahren war klar, dass Barça nicht einfach nur ein Sportklub sein würde – er wurde zu einem Symbol für die katalanische Identität, für Offenheit, Widerstand und Gemeinschaftssinn. Die Vereinsfarben Blau und Granatrot (Blaugrana) sind heute weltweit bekannt und stehen für Stolz, Geschichte und Emotion. Auch das Motto „Més que un club“ – „Mehr als ein Verein“ – ist kein leeres Versprechen, sondern Ausdruck einer jahrzehntelangen Verbindung zwischen Fußball, Politik und Kultur. Von den bescheidenen Anfängen mit nur 11 Amateurspielern auf einem Sandplatz entwickelte sich der FC Barcelona rasch zu einer sportlichen Institution. Die Gründung 1899 war weit mehr als ein sportlicher Akt – sie war der erste Schritt auf einem Weg, der Barça zu einem der populärsten und einflussreichsten Fußballklubs der Welt machen sollte. Heute ist der Verein mit Millionen von Fans weltweit, legendären Spielern und einer einzigartigen Philosophie ein Inbegriff des modernen Fußballs – und all das nahm seinen Anfang mit einer Zeitungsanzeige und dem Traum eines Schweizers in Katalonien.",
    },
    {
      title: "Logo-Entwicklung des FC Barcelona (1900)",
      image: "../BILDER/Historie/Logo_Entwicklung.webp",
      report: "Das Wappen des FC Barcelona ist ein visuelles Symbol, das die Identität des Klubs seit über einem Jahrhundert begleitet – und immer wieder neu interpretiert wurde. Die erste Version aus dem Jahr 1900 war noch stark vom Stadtwappen Barcelonas geprägt: eine stilisierte Fledermaus, das Kreuz des heiligen Georgs und die Farben der katalanischen Flagge dominierten das Design. 1910 rief der Verein einen Designwettbewerb aus, um ein eigenes Logo zu kreieren. Das Ergebnis war ein Wappen mit drei zentralen Bereichen: Oben links das rote Kreuz auf weißem Grund (für die Stadt Barcelona), daneben die rot-gelben Streifen der katalanischen Senyera. Im unteren Bereich prangt ein Ball inmitten der ikonischen Blaugrana-Farben. Dieses Grundlayout blieb über Jahrzehnte hinweg erhalten – nur Details und Formen wurden angepasst. Besonders 2002 erfolgte eine Modernisierung mit klareren Linien, weniger Verschnörkelungen und stärkerem Fokus auf Wiedererkennbarkeit. Das Logo ist heute mehr als ein Erkennungszeichen – es ist ein Symbol für Loyalität, Stolz und den Geist Kataloniens. Überall auf der Welt erkennen Fans das Wappen auf Trikots, Fahnen oder Tattoos. Es transportiert nicht nur sportlichen Erfolg, sondern auch die Philosophie eines Klubs, der mehr sein will als nur ein sportlicher Wettbewerber. Die Geschichte des Logos ist somit auch die Geschichte eines Vereins, der sich immer wieder neu erfindet, ohne seine Wurzeln zu verlieren.",
    },
    {
      title: "Inter-Cities Fairs Cup (1958)",
       image: "../BILDER/Historie/ITFC.jpg",
      report: "Der Gewinn des Inter-Cities Fairs Cup 1958 war für den FC Barcelona ein Meilenstein in der internationalen Vereinsgeschichte. Der sogenannte 'Messestädte-Pokal' war ein Vorläufer der UEFA-Pokalwettbewerbe und ursprünglich für Städte mit bedeutenden Handelsmessen konzipiert. Doch schnell entwickelte sich der Wettbewerb zu einem echten internationalen Kräftemessen zwischen Europas besten Klubs. Für Barça bedeutete der erste Titelgewinn 1958 nicht nur sportlichen Erfolg, sondern auch den Aufbruch in eine neue Ära des internationalen Fußballs. Der Club gewann diesen Wettbewerb insgesamt drei Mal (1958, 1960 und 1966) – eine herausragende Leistung zu einer Zeit, als internationale Titel für viele spanische Vereine noch in weiter Ferne lagen. Besonders der Sieg 1966 war symbolträchtig: Barça etablierte sich endgültig als europäisches Schwergewicht. Trotz späterer Umwandlung in den UEFA-Cup und später die Europa League, behielt der Fairs Cup für den Verein einen besonderen Platz in der Vereinsgeschichte. Er war der erste Beweis dafür, dass Barça nicht nur national, sondern auch auf der europäischen Bühne mithalten konnte. Diese frühen Titel legten den Grundstein für ein internationales Renommee, das bis heute ungebrochen ist. Der Fairs Cup mag heute in der öffentlichen Wahrnehmung verblasst sein – für Barça aber bleibt er ein wertvoller Baustein des Mythos.",
    },
    {
      title: "UEFA Pokalsieger-Cup (1979)",
      image: "https://www.fcbarcelona.com/fcbarcelona/photo/2019/03/28/83420454-29f0-4e90-90d4-6df89b8bd5d4/jldCRPSb.jpg",
      report: "Vor der Einführung der Europa League war der UEFA Pokalsieger-Cup einer der prestigeträchtigsten Wettbewerbe im europäischen Vereinsfußball. Für den FC Barcelona war dieser Wettbewerb eine entscheidende Bühne – denn während man in der heimischen Liga oft hinter Real Madrid stand, konnten hier bedeutende internationale Erfolge gefeiert werden. Der erste große Triumph gelang 1979 in einem dramatischen Finale gegen Fortuna Düsseldorf. Es war nicht nur ein sportlicher Sieg, sondern ein emotionaler Befreiungsschlag – erstmals seit langem holte Barça einen bedeutenden internationalen Titel. In den folgenden Jahren gewann der Club den Pokalsieger-Cup insgesamt viermal: 1979, 1982, 1989 und 1997. Jeder dieser Titel war ein Meilenstein, besonders der letzte unter Trainer Bobby Robson mit einem jungen Ronaldo, der in Europa für Furore sorgte. Der Wettbewerb bot dem Verein immer wieder die Chance, sich trotz wechselhafter nationaler Leistungen international zu behaupten. Die Geschichte des Pokalsieger-Cups ist eng mit Barças Entwicklung zum europäischen Topklub verknüpft. Obwohl der Wettbewerb 1999 eingestellt wurde, bleibt seine Bedeutung für die Vereinsidentität unbestritten. Für Barça waren diese Siege mehr als nur Pokale – sie waren Symbole für Ausdauer, Talentförderung und die Fähigkeit, sich auf höchstem Niveau immer wieder neu zu beweisen.",
    },{
      title: "La Masia – Die Talentschmiede (1979)",
      image: "https://assets.goal.com/images/v3/bltae0521a2b1f7f447/Yaman_Messi.jpg",
      report: "La Masia, die legendäre Jugendakademie des FC Barcelona, ist weit mehr als nur ein Ausbildungszentrum – sie ist das Herzstück einer Fußballphilosophie, die weltweit ihresgleichen sucht. 1979 wurde La Masia offiziell gegründet, in einem historischen Bauernhaus in unmittelbarer Nähe des Camp Nou. Ziel war es, junge Talente nicht nur fußballerisch, sondern auch menschlich zu formen. Die Philosophie von Johan Cruyff, die auf Ballbesitz, Technik und intelligentem Spielaufbau basiert, wurde zum Leitbild der Ausbildung. Talente wie Xavi, Andrés Iniesta, Sergio Busquets oder Lionel Messi durchliefen diese Kaderschmiede und wurden zu Symbolfiguren eines einzigartigen Fußballstils. Der Höhepunkt der La-Masia-Ära war 2010, als drei Eigengewächse – Messi, Xavi und Iniesta – die drei Finalisten bei der Wahl zum Weltfußballer stellten. Ein einmaliger Beleg für die Effizienz der Akademie. La Masia ist dabei kein Internat wie jedes andere: Hier wird großer Wert auf Bildung, Wertevermittlung und Integration gelegt. Die jungen Spieler lernen früh, Verantwortung zu übernehmen und im Kollektiv zu denken – ganz im Sinne des Vereinsmottos 'Més que un club'. Auch wenn sich der Fußball stetig wandelt, bleibt La Masia ein Symbol für Kontinuität, Qualität und Identität. Sie ist der Nährboden, aus dem die Seele des FC Barcelona wächst – Generation für Generation.",
    },
     {
      title: "Johan Cruyff & das Dream Team (1991)",
      image: "https://e0.365dm.com/16/03/1600x900/cruyff-dream-team-barcelona-european-cup_3436671.jpg?20160324131759",
      report: "Johan Cruyff übernahm den FC Barcelona 1988 als Trainer – und veränderte den Klub für immer. Was folgte, war weit mehr als sportlicher Erfolg: Cruyff brachte eine revolutionäre Spielphilosophie mit nach Katalonien, die bis heute die DNA des Vereins prägt. Mit seiner Idee des „Totalen Fußballs“, basierend auf Ballbesitz, Pressing, Positionsspiel und Technik, formte er das berühmte 'Dream Team', das zwischen 1991 und 1994 vier Meistertitel in Folge gewann. Der größte Triumph: der Gewinn des Europapokals der Landesmeister 1992 – die erste Champions-League-Trophäe für Barça. Doch Cruyff war mehr als ein erfolgreicher Trainer. Er war Visionär, Lehrer, Erneuerer. Er formte Spieler wie Pep Guardiola, Ronald Koeman oder Michael Laudrup und legte den Grundstein für La Masia als weltbeste Fußballschule. Seine Vorstellungen durchzogen den gesamten Klub – von der Jugend bis zur Profimannschaft. In Zeiten der Unsicherheit gab Cruyff dem Klub Identität und Richtung. Viele seiner Ideen wurden später von seinen ehemaligen Spielern übernommen, darunter Guardiola, der Barcelonas modernste Ära prägte. Cruyffs Einfluss reicht weit über seine Amtszeit hinaus – in jedem Passspiel, jeder Kombination lebt sein Geist weiter. Er veränderte nicht nur Barcelona, sondern den Weltfußball. Und so gilt Cruyff bis heute als Architekt des modernen FC Barcelona – ein Mann, der aus einem Klub eine Philosophie machte.",
    },
    {
      title: "UEFA Champions League (1992)",
      image: "https://images.daznservices.com/di/library/DAZN_News/e5/eb/fc-barcelona-champions-league-titel_ka5w79ir7o8p1erbqpvdqig1n.jpg?t=914868605",
    report: "Der Gewinn der UEFA Champions League 1992 war ein historischer Moment für den FC Barcelona – der erste große europäische Triumph im modernisierten Format. Am 20. Mai 1992 besiegte Barça Sampdoria im Finale von Wembley mit 1:0 nach Verlängerung durch einen legendären Freistoß von Ronald Koeman. Dieses Spiel war weit mehr als ein Titelgewinn: Es war der Moment, in dem Barcelona zu einem europäischen Giganten wurde. Das von Johan Cruyff geprägte 'Dream Team' verkörperte erstmals auf der ganz großen Bühne den attraktiven Ballbesitzfußball, für den der Verein heute berühmt ist. Die Spielweise – geprägt von Technik, Kreativität und Teamgeist – machte Barça international bewundert. Der Titel bedeutete auch eine emotionale Genugtuung nach vielen verpassten Gelegenheiten auf europäischer Ebene. Für die Fans war es ein magischer Abend, der eine neue Ära einläutete. Viele sahen diesen Erfolg als das symbolische Erwachsenwerden des Klubs in Europa. Jahrzehnte später gilt der Wembley-Sieg als Geburtsstunde des modernen Barcelona – eine Initialzündung, die unzählige weitere Erfolge nach sich zog. Die Champions-League-Titel von 2006, 2009, 2011 und 2015 stehen in dieser Tradition. Doch 1992 war der erste Schritt. Und manchmal ist der erste Schritt der wichtigste.",
    },
    {
      title: "Messi-Ära (2004)",
      image: "https://www.fussballeuropa.com/images/xtra/imago-lionel-messi-ronaldinho-201021.jpg",
      report: "Als Lionel Messi im Jahr 2004 sein Debüt für die erste Mannschaft des FC Barcelona gab, ahnte kaum jemand, dass eine neue Ära beginnen würde. Doch was folgte, war eine der größten Karrieren in der Geschichte des Fußballs – eng verknüpft mit dem Aufstieg Barcelonas zu einem globalen Giganten. Zwischen 2004 und 2021 erzielte Messi über 670 Tore für den Verein, gewann unzählige Titel, darunter 10 spanische Meisterschaften, 7 Copa del Rey, 4 Champions-League-Trophäen und wurde sechsmal mit dem Ballon d’Or ausgezeichnet. Seine Spielweise war einzigartig: ein magisches Zusammenspiel aus Dribbling, Übersicht, Effizienz und Bescheidenheit. Messi war oft der entscheidende Faktor in den größten Momenten des Klubs – von seinem legendären Solo gegen Getafe über das Tor im CL-Finale 2009 bis hin zu seinem tränenreichen Abschied 2021. In diesen 17 Jahren verkörperte Messi alles, was Barça ausmacht: Talent, Leidenschaft, Loyalität. Seine Verbindung zu La Masia, sein Zusammenspiel mit Xavi und Iniesta und sein Einfluss auf Generationen von Fans und Spielern machen ihn zur Legende. Die Messi-Ära war nicht nur sportlich herausragend – sie war ein kulturelles Phänomen, ein Identitätsmerkmal für eine ganze Ära des Vereins. Auch wenn seine Zeit bei Barça endete, wird sein Vermächtnis ewig leuchten.",
    },
    {
      title: "Triple (2008)",
      image: "https://assets.goal.com/images/v3/bltb0c421d81ff3e5c1/7b5ac9e075d8ffe155be540df9ff3b4e65349987.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      report: "Die Saison 2008/09 war ein Meilenstein in der Geschichte des FC Barcelona – denn in diesem Jahr gelang dem Klub das historische Triple: der Gewinn der spanischen Meisterschaft, der Copa del Rey und der UEFA Champions League in nur einer Spielzeit. Unter dem jungen Trainer Pep Guardiola spielte Barça einen revolutionären Fußball, der Fans und Experten weltweit in Staunen versetzte. Das Team um Lionel Messi, Xavi und Iniesta kombinierte technisches Können mit taktischer Disziplin – und verwandelte den Rasen in eine Bühne für spektakulären Kombinationsfußball. Besonders das Champions-League-Finale gegen Manchester United in Rom (2:0) war sinnbildlich: Barcelona dominierte das Spiel, ließ dem Gegner kaum Luft zum Atmen und gewann souverän. Der Gewinn aller drei großen Titel in einer Saison war in Spanien bis dahin einmalig und setzte neue Maßstäbe. Doch es war nicht nur der sportliche Erfolg, der diese Saison unvergesslich machte, sondern die Art und Weise: Schönheit, Strategie und Teamgeist vereinten sich zu einer Mannschaft, die Geschichte schrieb. Dieses Triple markierte den Beginn der goldenen Guardiola-Ära und inspirierte eine neue Generation von Trainern weltweit. Der Fußball, den Barcelona 2009 spielte, war nicht nur erfolgreich – er war Kunst.",
    },
    {
      title: "Sextuple (2009)",
      image: "https://i.eurosport.com/2015/12/31/1762346-37245086-2560-1440.jpg",
      report: "2009 war das Jahr, in dem der FC Barcelona das scheinbar Unmögliche möglich machte: den Gewinn aller sechs möglichen Titel in einem Kalenderjahr – das sogenannte Sextuple. Nach dem historischen Triple aus Liga, Pokal und Champions League folgten auch der spanische Supercup, der UEFA Supercup und die FIFA Klub-Weltmeisterschaft. Damit schrieb Barça unter Pep Guardiola Fußballgeschichte – als erstes Team überhaupt, das diese Trophäen-Sammlung in einem Jahr komplettierte. Jeder Titel hatte seine eigene Dramatik: Sei es das kämpferische Finale der Klub-WM gegen Estudiantes mit einem Last-Minute-Tor oder das technisch brillante Spiel im UEFA Supercup. Herzstück dieser Erfolge war die Generation aus La Masia – Messi, Xavi, Iniesta, Piqué und Busquets – ergänzt durch Spieler wie Dani Alves und Puyol. Barcelona demonstrierte, dass man mit eigenem Stil, hohem Anspruch und Teamgeist alles erreichen kann. Das Sextuple war nicht nur ein sportlicher Triumph, sondern eine ideelle Krönung des 'Barça Way'. Noch heute wird 2009 als das wohl größte Jahr in der Vereinsgeschichte gefeiert. Es bleibt das Symbol für Perfektion, Philosophie und Fußball der Extraklasse – ein Jahr, in dem Barça nicht nur Titel gewann, sondern Maßstäbe setzte.",
    },
    {
      title: "Spanischer Supercup(2010)",
      image: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/30/ee2fa0a7-a7ee-4bf0-9de3-12ea40337d7c/OTioEnWk.jpg",
      report: "Der spanische Supercup ist ein Prestigeduell zwischen Meister und Pokalsieger. Barcelona gewann ihn 14-mal, oft in direkten Duellen mit Real Madrid. Besonders spektakulär waren die Triumphe 2010, 2011 und 2023. Der Wettbewerb hat sich verändert – früher war es ein Hin- und Rückspiel, heute wird ein Mini-Turnier in Saudi-Arabien ausgetragen. Barça zeigte dabei oft offensive Brillanz und taktische Flexibilität. Auch wenn der Supercup oft als „kleiner Titel“ gilt, wird er in Spanien sehr ernst genommen – vor allem, wenn er gegen den Erzrivalen gewonnen wird. Er rundet erfolgreiche Saisons oft ab.",
    },
 {
      title: "FIFA Klub-Weltmeisterschaft(2011)",
      image: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/464606723_8560786287353559_1330884607678397646_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EStMqj9BIckQ7kNvwE--ycw&_nc_oc=AdkjozXUoV-EvL7-ogfUaF1QfEhwpW9RamCf4W8lJg7pwS8TSiYN0uTX6jRK3DR5QoE&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=owxQdrIRT9Ci-E7o0D9J5g&oh=00_AfKtsnlFTf-pX-z3K81uXRXyS4lmfCRUhXbGMabC_2M6pw&oe=683293F0",
      report: "Die FIFA Klub-Weltmeisterschaft kürt den besten Verein der Welt. Barcelona gewann diesen globalen Titel dreimal: 2009, 2011 und 2015. Die Turniere fanden in Asien statt und bedeuteten für europäische Teams hohe Belastungen. Barça stellte sich dieser Herausforderung jedes Mal erfolgreich. Im Finale 2009 gegen Estudiantes (ARG) siegte man erst in der Verlängerung. 2011 wurde der brasilianische Klub Santos mit 4:0 deklassiert – ein Spiel, das als Lehrstunde für den jungen Neymar galt, der später zu Barcelona wechselte. Auch 2015 dominierte Barça mit MSN-Sturmtrio. Der Titel unterstreicht Barcelonas Status als globaler Topklub.",
    },
     {
      title: "Copa del Rey(2015)",
      image: "https://www.fcbarcelona.com/fcbarcelona/photo/2025/04/26/c734b966-283c-4289-88d7-382951aa8f0b/_GP20794.jpg",
      report: "Mit 31 Siegen ist Barcelona Rekordsieger der Copa del Rey, dem wichtigsten spanischen Pokalwettbewerb. Der erste Titel kam bereits 1910, die letzten in der modernen Ära: 2009, 2012, 2015, 2017, 2018 und 2021. Besonders emotional war der Finaltriumph 2015 gegen Athletic Bilbao – inklusive einem Solo-Tor von Messi, das als eines der besten aller Zeiten gilt. Die Copa ist nicht nur ein traditioneller Titel, sondern auch wichtig für die Katalanen, da sie viele emotionale Derbys und Clásicos beinhaltet. Selbst in schwächeren Ligasaisons konnte Barça oft über die Copa noch einen Titel sichern.",
    },
    {
      title: "Unbesiegte La Liga-Saison (2017)",
      image: "https://news.cgtn.com/news/3d3d774d30416a4e7a457a6333566d54/img/13b0084a1bb04724bd94115d3655162d/13b0084a1bb04724bd94115d3655162d.jpg",
      report: "In der Saison 2017/18 blieb Barcelona in 43 aufeinanderfolgenden Ligaspielen ungeschlagen – eine Rekordserie in Spanien. Auch wenn die letzte Partie (5:4 gegen Levante) verlorenging, war das Team praktisch die gesamte Saison über dominant. Der Schlüssel zum Erfolg lag in der Balance zwischen Defensive (mit Umtiti und Piqué) und Offensive (Messi, Suárez). Trainer Ernesto Valverde wurde für seine pragmatische Taktik gelobt. Trotz einiger Kritik blieb Barça konstant stark und sicherte sich frühzeitig den Titel. Diese Saison wurde als ein Meisterstück der Konstanz und Effizienz angesehen – nicht spektakulär, aber hochprofessionell.",
    },
    {
      title: "6:1 gegen PSG – La Remontada(2017)",
      image: "https://e0.365dm.com/17/03/2048x1152/skysports-barcelona-psg-sergi-roberto-paris-saint-germain-champions-league-goal_3905912.jpg?20170308215409",
  report: "La Remontada – das Wunder gegen Paris Saint-Germain am 8. März 2017 – ist einer der spektakulärsten Abende in der Geschichte des FC Barcelona. Nach einem desaströsen 0:4 im Hinspiel in Paris standen die Katalanen mit dem Rücken zur Wand. Kaum jemand glaubte an eine Wende. Doch was im Rückspiel im Camp Nou geschah, übertraf alle Erwartungen: Barcelona gewann mit 6:1 – und schrieb damit Fußballgeschichte. Früh ging Barça durch Suárez in Führung, Layvin Kurzawa traf ins eigene Netz, Messi verwandelte einen Elfmeter. Als PSG durch Cavani auf 3:1 verkürzte, schien das Wunder vorbei. Doch dann begann das Unfassbare: Neymar erzielte das 4:1 per Freistoß, verwandelte einen Elfmeter zum 5:1 – und bereitete in der 95. Minute das entscheidende 6:1 durch Sergi Roberto vor. Das Stadion explodierte, die Welt hielt den Atem an. Noch nie zuvor hatte ein Team in der Champions-League-Geschichte ein 0:4 aus dem Hinspiel gedreht. Es war ein Abend voller Emotionen, Wahnsinn und purer Leidenschaft. Neymar wuchs über sich hinaus, das Team kämpfte bis zur letzten Sekunde. Die Partie wurde zu einem Mythos – ein Symbol dafür, dass im Fußball nichts unmöglich ist. La Remontada bleibt für immer ein Monument des Mutes, der Hoffnung und der Magie des FC Barcelona.",
    },
    {
      title: "La Liga  Meistert (2018)",
      image: "https://www.barcawelt.de/wp-content/uploads/2023/05/fc-barcelona-spanischer-meister.jpg",
      report: "Barcelona gewann bisher 27 Mal die spanische Meisterschaft..."
    },
    
  ]
};
        

  // Erstelle Timeline-Punkte dynamisch
  clubAchievementsData.achievements.forEach((item, index) => {
    const point = document.createElement('div');
    point.classList.add('timeline-point');
    point.setAttribute('data-img', item.image);
    point.setAttribute('data-title', item.title);
    point.setAttribute('data-report', item.report);

    const dot = document.createElement('div');
    dot.classList.add('dot');
    const span = document.createElement('span');
    span.classList.add('year');
    span.textContent = item.title.split('(')[1]?.split(')')[0] || index + 1;
    

    point.appendChild(dot);
    point.appendChild(span);
    timelineContainer.appendChild(point);
  });

  // Klickfunktion
  const points = document.querySelectorAll('.timeline-point');

  points.forEach(point => {
    point.addEventListener('click', () => {
      const img = point.getAttribute('data-img');
      const title = point.getAttribute('data-title');
      const report = point.getAttribute('data-report');

      image.style.opacity = 0;
      textBox.style.opacity = 0;

      setTimeout(() => {
        image.src = img;
        textTitle.textContent = title;
        textContent.textContent = report;
        textBox.style.display = 'block';
        image.style.opacity = 1;
        textBox.style.opacity = 1;
      }, 300);
    });
  });
});


