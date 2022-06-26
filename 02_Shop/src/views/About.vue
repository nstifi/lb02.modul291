<template>
  <div class="about">
    <h2>ÜBER SONY</h2>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Sony ist nach Hitachi und Panasonic der drittgrößte japanische Elektronikkonzern, mit Sitz im Tokioter Bezirk Minato. Kerngeschäft ist die Playstation, CMOS-Bildsensoren, das Musik- und Filmgeschäft sowie die Unterhaltungselektronik. Sehr bekannt sind sie auch führ ihre Kameras. Im August 1981 hatte Sony-Chef Akio Morita die erste filmlose (aber noch analoge) Magnetkamera unter der Bezeichnung Mavica vorgestellt. Bei den Olympischen Spielen in Los Angeles 1984 konnten Sony und Canon bei Bildübertragungsversuchen mit Zeitungsverlagen ordentliche Ergebnisse vorweisen. Seit den 1990er Jahren stellt Sony Digitalkameras in größerer Zahl her. Fast zeitgleich erschienen die Serien Digital Mavica und Cyber-shot. 2002 stellte Sony die Digital-Mavica-Reihe ein. Weiterhin produziert Sony digitale Camcorder unter der Marke Handycam. Schon in den 1980er-Jahren hatte Sony mit der Mavica-Reihe einige Kameras mit elektronischer Aufzeichnung auf den Markt gebracht, die jedoch keine Digitalkameras waren, sondern analoge Still-Video-Kameras.\n' +
        '\n' +
        'Seit 1996 der erste Sony-Camcorder mit einem Zeiss-Objektiv vorgestellt wurde, besteht zwischen beiden Unternehmen eine Partnerschaft. Bis 2009 wurden über 100 Millionen Systeme verkauft.\n' +
        '\n' +
        '2005 Sony stellte mit der Cybershot R1 eine digitale Bridgekamera mit 10,2-Megapixelsensor in APS-C-Größe vor, die als Alternative zu einer SLR-Kamera betrachtet werden kann.\n' +
        '\n' +
        'Neben der Herstellung eigener Kameras ist Sony auch Zulieferer von Bildsensoren für viele weitere Unternehmen. Kehrseite dieser Dominanz sind zum Beispiel die Rückrufe von Digitalkameras mit Sony-Sensoren (2005: Canon, Fujifilm, Konica Minolta, Nikon, Ricoh, Olympus).\n' +
        '\n' +
        'Im Januar 2006 übernahm Sony das Kamerageschäft von Konica Minolta.Im Juni desselben Jahres erschien die weitgehend auf Konica-Minolta-Technik beruhende erste Sony-Spiegelreflex-Kamera Sony Alpha A100. 2013 brachte Sony als erster Anbieter die spiegellose Kamera A7 mit Sensor im Kleinbildformat auf den Markt. 2015 erzielte die Sony Alpha 7 II sehr gute Testergebnisse. Zur Photokina 2018 zogen Canon mit der EOS R und Nikon mit der Z 7 und Z 6 nach. 2019 hat Sony einen weltweiten Marktanteil von 20,2 Prozent, liegt damit vor Nikon; in Japan war Sony Ende 2019 nach Zuwächsen in allen Kamerabereichen Marktführer.\n' +
        '\n' +
        'Von 2012 bis 2019 hielt Sony Anteile von Olympus (zu Beginn 11,46 Prozent Stimmrechtsanteil).\n' +
        '\n' +
        'Sony Group Corporation ist mit einer Beteiligung von 14,8 Prozent der größte Aktionär des japanischen Kameraobjektiv-Herstellers Tamron.',
      ]
    }
  }
}
</script>
