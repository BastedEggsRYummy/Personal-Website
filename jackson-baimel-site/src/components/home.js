import React from 'react';
import ImageMapper from 'react-img-mapper';
import BackgroundImage from '../assets/WebsiteBackground.png'

const imageMapData = [
  {
    "id": "88ef46f3-4194-4e14-9696-794342abcf2a",
    "title": "Washing-Machine",
    "shape": "rect",
    "name": "Washing-Machine",
    "fillColor": "#00ff194c",
    "strokeColor": "black",
    "coords": [
      1133,
      762,
      1288,
      959
    ],
    "polygon": [
      [
        1133,
        762
      ],
      [
        1288,
        959
      ]
    ]
  },
  {
    "id": "d62903ea-edaa-4eb8-9d9e-840e11b2c80f",
    "title": "Tic-Tac-Toe",
    "shape": "poly",
    "name": "Tic-Tac-Toe",
    "fillColor": "#00ff194c",
    "strokeColor": "black",
    "coords": [
      709,
      972,
      709,
      874,
      652,
      624,
      436,
      606,
      384,
      961,
      501,
      989
    ],
    "polygon": [
      [
        709,
        972
      ],
      [
        709,
        874
      ],
      [
        652,
        624
      ],
      [
        436,
        606
      ],
      [
        384,
        961
      ],
      [
        501,
        989
      ]
    ]
  },
  {
    "id": "15d7f5ee-dd47-454e-8fea-92af6e40d40a",
    "title": "Boy",
    "shape": "poly",
    "name": "Boy",
    "fillColor": "#00ff194c",
    "strokeColor": "black",
    "coords": [
      1087,
      760,
      1114,
      977,
      887,
      978,
      887,
      944,
      937,
      934,
      960,
      909,
      951,
      838,
      1000,
      744
    ],
    "polygon": [
      [
        1087,
        760
      ],
      [
        1114,
        977
      ],
      [
        887,
        978
      ],
      [
        887,
        944
      ],
      [
        937,
        934
      ],
      [
        960,
        909
      ],
      [
        951,
        838
      ],
      [
        1000,
        744
      ]
    ]
  },
  {
    "id": "fe1a54e2-2d70-46d5-a477-970adc57046a",
    "title": "Tree",
    "shape": "poly",
    "name": "Tree",
    "fillColor": "#00ff194c",
    "strokeColor": "black",
    "coords": [
      949,
      887,
      948,
      747,
      1182,
      673,
      1233,
      600,
      1220,
      518,
      1206,
      455,
      1166,
      390,
      1092,
      330,
      987,
      292,
      916,
      276,
      777,
      312,
      666,
      404,
      626,
      542,
      650,
      616,
      707,
      663,
      789,
      684,
      843,
      697,
      878,
      739,
      881,
      876,
      783,
      918,
      929,
      925,
      954,
      909
    ],
    "polygon": [
      [
        949,
        887
      ],
      [
        948,
        747
      ],
      [
        1182,
        673
      ],
      [
        1233,
        600
      ],
      [
        1220,
        518
      ],
      [
        1206,
        455
      ],
      [
        1166,
        390
      ],
      [
        1092,
        330
      ],
      [
        987,
        292
      ],
      [
        916,
        276
      ],
      [
        777,
        312
      ],
      [
        666,
        404
      ],
      [
        626,
        542
      ],
      [
        650,
        616
      ],
      [
        707,
        663
      ],
      [
        789,
        684
      ],
      [
        843,
        697
      ],
      [
        878,
        739
      ],
      [
        881,
        876
      ],
      [
        783,
        918
      ],
      [
        929,
        925
      ],
      [
        954,
        909
      ]
    ]
  },
  {
    "id": "dc2a8053-b236-4977-9589-a76eeae3504c",
    "title": "Spaceship",
    "shape": "poly",
    "name": "Spaceship",
    "fillColor": "#00ff194c",
    "strokeColor": "black",
    "coords": [
      1185,
      108,
      1233,
      136,
      1345,
      141,
      1407,
      101,
      1342,
      3,
      1244,
      6
    ],
    "polygon": [
      [
        1185,
        108
      ],
      [
        1233,
        136
      ],
      [
        1345,
        141
      ],
      [
        1407,
        101
      ],
      [
        1342,
        3
      ],
      [
        1244,
        6
      ]
    ],
  },
  {
    "id": "93a34836-d40e-40e7-a4d1-429a8c9cf3f6",
    "title": "Sun",
    "shape": "circle",
    "name": "Sun",
    "fillColor": "#00ff194c",
    "strokeColor": "black",
    "coords": [
      906,
      138,
      137
    ],
    "polygon": null
  }
];

const Mapper = props => {
  const URL = BackgroundImage;
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE AND PUT IT HERE
    areas: imageMapData,
  };

  return(
      <div style={{ width: '100%', maxWidth: '100vw', maxHeight: '100vh', overflow: 'hidden' }}>
        <ImageMapper src={URL} map={MAP} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
  );
};

export default Mapper;