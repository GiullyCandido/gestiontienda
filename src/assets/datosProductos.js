const productosIniciales = [
    {
        "foto": "BolsoTwistWest.png",
        "nombre": "Bolso Twist West",
        "precio": 4824000,
        "stock": 10
    },
    {
        "foto": "BolsoPicoLooping.png",
        "nombre": "Bolso Pico Looping",
        "precio": 2546000,
        "stock": 3
    },
    {
        "foto": "BolsoMiniMoon.png",
        "nombre": "Bolso Mini Moon",
        "precio": 2010000,
        "stock": 15
    },
    {
        "foto": "BolsoTwistMM.png",
        "nombre": "Bolso Twist MM",
        "precio": 5226000,
        "stock": 5
    },
    {
        "foto": "BolsoCapucinesEast-WestMini.png",
        "nombre": "Bolso Capucines East-West Mini",
        "precio": 7906000,
        "stock": 0
    },
    {
        "foto": "Polodepunto.png",
        "nombre": "Polo de punto",
        "precio": 1474000,
        "stock": 20
    },
    {
        "foto": "PoloDePique.png",
        "nombre": "Polo de piqué",
        "precio": 656600,
        "stock": 25
    },
    {
        "foto": "CamisaDeSargaEstampada.png",
        "nombre": "Camisa de sarga estampada",
        "precio": 2211000,
        "stock": 12
    },
    {
        "foto": "FaldaConVueloDeRe-Nylon.png",
        "nombre": "Falda con vuelo de Re-Nylon",
        "precio": 2412000,
        "stock": 18
    },
    {
        "foto": "ChaquetaCortaConvertible.png",
        "nombre": "Chaqueta corta convertible de plumón y terciopelo",
        "precio": 2948000,
        "stock": 10
    },
    {
        "foto": "CamisaDePopelInBordada.png",
        "nombre": "Camisa de popelín bordada",
        "precio": 1675000,
        "stock": 0
    },
    {
        "foto": "MocasinesDeCharolMonolith.png",
        "nombre": "Mocasines de charol Monolith",
        "precio": 1326600,
        "stock": 22
    },
    {
        "foto": "NariFlowersFlat.png",
        "nombre": "Nari Flowers Flat",
        "precio": 2311500,
        "stock": 9
    },
    {
        "foto": "JimmyChooJeanPaulGaultierBing90.png",
        "nombre": "Jean Paul Gaultier Bing 90",
        "precio": 3283000,
        "stock": 5
    },
    {
        "foto": "BingFlat.png",
        "nombre": "Bing Flat",
        "precio": 1306500,
        "stock": 2
    },
    {
        "foto": "Bing100.png",
        "nombre": "Bing 100",
        "precio": 1467300,
        "stock": 12
    }
  ];
  
  // Inicializar datos en localStorage si no están presentes
  if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(productosIniciales));
  }
  