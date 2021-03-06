
    // Pillar of Salt 1

      LongLat = new google.maps.LatLng(-37.829690400000000000, 144.997327600000060000);
      var marker1 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Pillar of Salt'
    });

    var infoWindow1 = new google.maps.InfoWindow({
      content: '<h5>Pillar of Salt</h5><p>541 Church Street,</p><p>Richmond VIC</p><p>3.5/5</p>'
    });

    google.maps.event.addListener(marker1, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow1.open(window.map, marker1);
    window.previousInfoWindow = infoWindow1;


    });


    // Cumulus 2

      LongLat = new google.maps.LatLng(-37.814913, 144.973123);
      var marker2 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Cumulus'
    });

    var infoWindow2 = new google.maps.InfoWindow({
      content: '<h5>Cumulus</h5><p>45 Flinders Lane</p><p>Melbourne</p><p>3.5/5</p>'
    });

    google.maps.event.addListener(marker2, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow2.open(window.map, marker2);
    window.previousInfoWindow = infoWindow2;


    });


    // Barry 3

    LongLat = new google.maps.LatLng(-37.780202400000000000, 144.996597599999970000);
    var marker3 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Barry'
    });

   var infoWindow3 = new google.maps.InfoWindow({
      content: '<h5>Barry</h5><p>85 High Street,</p><p>Northcote VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker3, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow3.open(window.map, marker3);
    window.previousInfoWindow = infoWindow3;

    });

   // // Borsch Vodka Tears 4


     LongLat = new google.maps.LatLng(-37.852122000000000000, 144.993040999999950000);
    var marker4 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Borsch Vodka Tears'
    }); 

   var infoWindow4 = new google.maps.InfoWindow({
      content: '<h5>Borsch Vodka Tears</h5><p>173 Chapel Street,</p><p>Windsor VIC</p><p>4.5/5</p>' 
    });

    google.maps.event.addListener(marker4, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow4.open(window.map, marker4);
    window.previousInfoWindow = infoWindow4;

    });

   //    // Dr Morse   5

     LongLat = new google.maps.LatLng(-37.799552, 144.99412699999993);
    var marker5 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Dr. Morse'
    });

   var infoWindow5 = new google.maps.InfoWindow({
      content: '<h5>Dr. Morse</h5><p>274 Johnston Street</p><p>Abbotsford VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker5, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow5.open(window.map, marker5);
    window.previousInfoWindow = infoWindow5;

    });



   //  // Feast of merit 6


     LongLat = new google.maps.LatLng(-37.825183000000000000, 144.995009999999980000);
    var marker6 = new google.maps.Marker({
      position: LongLat,
      icon: 'images/bloodymary.png',
      map: window.map,
      title: 'Feast of Merit'
    });  


    var infoWindow6 = new google.maps.InfoWindow({
      content: '<h5>Feast of Merit</h5><p>117 Swan Street</p><p>Richmond VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker6, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow6.open(window.map, marker6);
    window.previousInfoWindow = infoWindow6;

    });

   //  // Friend of mine 7

     LongLat = new google.maps.LatLng(-37.827158000000000000, 145.009236999999980000 );
    var marker7 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Friend of Mine'

    }); 

    var infoWindow7 = new google.maps.InfoWindow({
      content: '<h5>Friend of Mine</h5><p>506 Swan Street</p><p>Richmond VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker7, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow7.open(window.map, marker7);
    window.previousInfoWindow = infoWindow7;

    });



     //  // Mr Scruffs 8

     LongLat = new google.maps.LatLng(-37.8065573, 144.98307679999994 );
    var marker8 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Mr Scruffs'

    }); 

    var infoWindow8 = new google.maps.InfoWindow({
      content: '<h5>Mr Scruffs</h5><p>60 Smith Street</p><p>Collingwood VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker8, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow8.open(window.map, marker8);
    window.previousInfoWindow = infoWindow8;

    });

     //  // Naked for Satan 9

     LongLat = new google.maps.LatLng(-37.798727500000000000, 144.978394200000030000 );
    var marker9 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Naked For Satan'

    }); 

    var infoWindow9 = new google.maps.InfoWindow({
      content: '<h5>Naked For Satan</h5><p>285 Brunswick Street</p><p>Fitzroy VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker9, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow9.open(window.map, marker9);
    window.previousInfoWindow = infoWindow9;

    });

     //  // Yellow Bird 10

     LongLat = new google.maps.LatLng(-37.853889, 144.993143 );
    var marker10 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Yellow Bird'
    }); 

    var infoWindow10 = new google.maps.InfoWindow({
      content: '<h5>Yellow Bird</h5><p>1/122 Chapel Street</p><p>Windsor VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker10, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow10.open(window.map, marker10);
    window.previousInfoWindow = infoWindow10;

    });


     //  // The Catfish 11

     LongLat = new google.maps.LatLng(-37.805687, 144.975187);
    var marker11 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The Catfish'
    }); 

    var infoWindow11 = new google.maps.InfoWindow({
      content: '<h5>The Catfish</h5><p>30 Gertrude St</p><p>Fitzroy, VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker11, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow11.open(window.map, marker11);
    window.previousInfoWindow = infoWindow11;

    });



     //  // Smith and daughters 12

     LongLat = new google.maps.LatLng(-37.802215, 144.977612);
    var marker12 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Smith & Daughters'
    }); 

    var infoWindow12 = new google.maps.InfoWindow({
      content: '<h5>Smith & Daughters</h5><p>175 Brunswick St</p><p>Fitzroy, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker12, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow12.open(window.map, marker12);
    window.previousInfoWindow = infoWindow12;

    });

     //  // Mamasita 13

     LongLat = new google.maps.LatLng(-37.813784, 144.97346600000003);
    var marker13 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Mamasita'
    }); 

    var infoWindow13 = new google.maps.InfoWindow({
      content: '<h5>Mamasita</h5><p>11 Collins Street</p><p>Melbourne CBD, VIC</p><p>3/5</p>' 
    });

    google.maps.event.addListener(marker13, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow13.open(window.map, marker13);
    window.previousInfoWindow = infoWindow13;

    });

     //  // Veggie Bar 14

     LongLat = new google.maps.LatLng(-37.795848, 144.979101);
    var marker14 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Veggie Bar'
    }); 

    var infoWindow14 = new google.maps.InfoWindow({
      content: '<h5>Veggie Bar</h5><p>380 Brunswick St</p><p>Fitzroy, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker14, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow14.open(window.map, marker14);
    window.previousInfoWindow = infoWindow14;

    });

   //  // The Evelyn 15

     LongLat = new google.maps.LatLng(37.796559, 144.978552);
    var marker15 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The Evelyn'
    }); 

    var infoWindow15 = new google.maps.InfoWindow({
      content: '<h5>The Evelyn</h5><p>351 Brunswick St</p><p>Fitzroy, VIC</p><p>3/5</p>' 
    });

    google.maps.event.addListener(marker15, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow15.open(window.map, marker15);
    window.previousInfoWindow = infoWindow15;

    });



   //  // Archies Allday 16

     LongLat = new google.maps.LatLng(-37.805981, 144.980919);
    var marker16 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Archies Allday'
    }); 

    var infoWindow16 = new google.maps.InfoWindow({
      content: '<h5>Archies All Day</h5><p>189 Gertrude St</p><p>Fitzroy, VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker16, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow16.open(window.map, marker16);
    window.previousInfoWindow = infoWindow16;

    });



   //  // The BEAST 17

     LongLat = new google.maps.LatLng(-37.776264, 144.971214);
    var marker17 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The B EAST'
    }); 

    var infoWindow17 = new google.maps.InfoWindow({
      content: '<h5>The B EAST</h5><p>80 Lygon St</p><p>Brunswick VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker17, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow17.open(window.map, marker17);
    window.previousInfoWindow = infoWindow17;

    });


   //  // The Kodiak Club 18

     LongLat = new google.maps.LatLng(-37.799283, 144.978642);
    var marker18 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The Kodiak club'
    }); 

    var infoWindow18 = new google.maps.InfoWindow({
      content: '<h5>The Kodiak Club</h5><p>272 Brunswick st</p><p>Fitzroy, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker18, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow18.open(window.map, marker18);
    window.previousInfoWindow = infoWindow18;

    });


    //  // South of Johnson 19

     LongLat = new google.maps.LatLng(-37.805999, 144.984621);
    var marker19 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'South of Johnson'
    }); 

    var infoWindow19 = new google.maps.InfoWindow({
      content: '<h5>South of Johnson</h5><p>46 Oxford St,</p><p>Collingwood, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker19, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow19.open(window.map, marker19);
    window.previousInfoWindow = infoWindow19;

    });


    //  // Magic Mountain 20

     LongLat = new google.maps.LatLng(-37.812810, 144.971442);
    var marker20 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Magic Mountain'
    }); 

    var infoWindow20 = new google.maps.InfoWindow({
      content: '<h5>Magic Mountain</h5><p>62 Little Collins Street,</p><p>Melbourne, VIC</p><p>4.5/5</p>' 
    });

    google.maps.event.addListener(marker20, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow20.open(window.map, marker20);
    window.previousInfoWindow = infoWindow20;

    });


    //  // The Provincial Hotel 21

     LongLat = new google.maps.LatLng(-37.798140, 144.978304);
    var marker21 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The Provincial Hotel'
    }); 

    var infoWindow21 = new google.maps.InfoWindow({
      content: '<h5>The Provincial Hotel</h5><p>299 Brunswick St,</p><p>Fitzroy, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker21, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow21.open(window.map, marker21);
    window.previousInfoWindow = infoWindow21;

    });

    //  // Georges Bar 22

     LongLat = new google.maps.LatLng(-37.798557, 144.97894);
    var marker22 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Georges Bar'
    }); 

    var infoWindow22 = new google.maps.InfoWindow({
      content: '<h5>Georges Bar</h5><p>120 Johnson St,</p><p>Fitzroy, VIC</p><p>4.5/5</p>' 
    });

    google.maps.event.addListener(marker22, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow22.open(window.map, marker22);
    window.previousInfoWindow = infoWindow22;

    });

    //  // Young Bloods 23

     LongLat = new google.maps.LatLng(-37.795919, 144.977457);
    var marker23 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Young Bloods Diner'
    }); 

    var infoWindow23 = new google.maps.InfoWindow({
      content: '<h5>Young Bloods Diner</h5><p>60 Rose St,</p><p>Fitzroy, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker23, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow23.open(window.map, marker23);
    window.previousInfoWindow = infoWindow23;

    });

    //  // Auction Rooms 24

     LongLat = new google.maps.LatLng(-37.802490, 144.94944);
    var marker24 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Auction Rooms'
    }); 

    var infoWindow24 = new google.maps.InfoWindow({
      content: '<h5>Auction Rooms</h5><p>103 Eroll St,</p><p>North Melbourne, VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker24, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow24.open(window.map, marker24);
    window.previousInfoWindow = infoWindow24;


    });


    // The Gem 25

     LongLat = new google.maps.LatLng(-37.796385, 144.987581);
    var marker25 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The Gem'
    }); 

    var infoWindow25 = new google.maps.InfoWindow({
      content: '<h5>The Gem</h5><p>289 Wellington St,</p><p>Collingwood VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker25, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow25.open(window.map, marker25);
    window.previousInfoWindow = infoWindow25;


    });


    // The Hack 26

     LongLat = new google.maps.LatLng(-37.834618, 144.946425);
    var marker26 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'The Hack'
    }); 

    var infoWindow26 = new google.maps.InfoWindow({
      content: '<h5>The Hack</h5><p>1 Crockford St</p><p>South Melbourne VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker26, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow26.open(window.map, marker26);
    window.previousInfoWindow = infoWindow26;


    });

    // Leonards House of Love 27

     LongLat = new google.maps.LatLng(-37.843675, 144.995640);
    var marker27 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Leonards House of Love'
    }); 

    var infoWindow27 = new google.maps.InfoWindow({
      content: '<h5>Leonards House of Love</h5><p>3 Wilson St</p><p>South Yarra VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker27, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow27.open(window.map, marker27);
    window.previousInfoWindow = infoWindow27;


    });
    

    // Galleon 28

     LongLat = new google.maps.LatLng(-37.867056,144.978980);
    var marker28 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Galleon'
    }); 

    var infoWindow28 = new google.maps.InfoWindow({
      content: '<h5>Galleon</h5><p>9 Carlisle St,</p><p>St Kilda VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker28, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow28.open(window.map, marker28);
    window.previousInfoWindow = infoWindow28;


    });


    // Oscar Cooper 29

     LongLat = new google.maps.LatLng(-37.849512, 144.992056);
    var marker29 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Oscar Cooper'
    }); 

    var infoWindow29 = new google.maps.InfoWindow({
      content: '<h5>Oscar Cooper</h5><p>160 Greville St</p><p>Prahran VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker29, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow29.open(window.map, marker29);
    window.previousInfoWindow = infoWindow29;


    });


    // Cookie 30

     LongLat = new google.maps.LatLng(-37.811994, 144.965251);
    var marker30 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/bloodymary.png',
      title: 'Cookie'
    }); 

    var infoWindow30 = new google.maps.InfoWindow({
      content: '<h5>Cookie</h5><p>252 Swanston St</p><p>Melbourne VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker30, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow30.open(window.map, marker30);
    window.previousInfoWindow = infoWindow30;


    });

