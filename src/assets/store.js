import { ref } from 'vue';

export const useStore = () => {
  const productos = ref([
    {
      "id": 1,
      "foto": "BolsoTwistWest.png",
      "nombre": "Bolso Twist West",
      "precio": 4824000,
      "stock": 10
    },
    {
      "id": 2,
      "foto": "BolsoPicoLooping.png",
      "nombre": "Bolso Pico Looping",
      "precio": 2546000,
      "stock": 3
    },
    {
      "id": 3,
      "foto": "BolsoMiniMoon.png",
      "nombre": "Bolso Mini Moon",
      "precio": 2010000,
      "stock": 15
    },
    {
      "id": 4,
      "foto": "BolsoTwistMM.png",
      "nombre": "Bolso Twist MM",
      "precio": 5226000,
      "stock": 5
    },
    {
      "id": 5,
      "foto": "BolsoCapucinesEast-WestMini.png",
      "nombre": "Bolso Capucines East-West Mini",
      "precio": 7906000,
      "stock": 0
    },
    {
      "id": 6,
      "foto": "Polodepunto.png",
      "nombre": "Polo de punto",
      "precio": 1474000,
      "stock": 20
    },
    {
      "id": 7,
      "foto": "PoloDePique.png",
      "nombre": "Polo de piqué",
      "precio": 656600,
      "stock": 25
    },
    {
      "id": 8,
      "foto": "CamisaDeSargaEstampada.png",
      "nombre": "Camisa de sarga estampada",
      "precio": 2211000,
      "stock": 12
    },
    {
      "id": 9,
      "foto": "FaldaConVueloDeRe-Nylon.png",
      "nombre": "Falda con vuelo de Re-Nylon",
      "precio": 2412000,
      "stock": 18
    },
    {
      "id": 10,
      "foto": "ChaquetaCortaConvertible.png",
      "nombre": "Chaqueta corta convertible de plumón y terciopelo",
      "precio": 2948000,
      "stock": 10
    },
    {
      "id": 11,
      "foto": "CamisaDePopelInBordada.png",
      "nombre": "Camisa de popelín bordada",
      "precio": 1675000,
      "stock": 0
    },
    {
      "id": 12,
      "foto": "MocasinesDeCharolMonolith.png",
      "nombre": "Mocasines de charol Monolith",
      "precio": 1326600,
      "stock": 22
    },
    {
      "id": 13,
      "foto": "NariFlowersFlat.png",
      "nombre": "Nari Flowers Flat",
      "precio": 2311500,
      "stock": 9
    },
    {
      "id": 14,
      "foto": "JimmyChooJeanPaulGaultierBing90.png",
      "nombre": "Jean Paul Gaultier Bing 90",
      "precio": 3283000,
      "stock": 5
    },
    {
      "id": 15,
      "foto": "BingFlat.png",
      "nombre": "Bing Flat",
      "precio": 1306500,
      "stock": 2
    },
    {
      "id": 16,
      "foto": "Bing100.png",
      "nombre": "Bing 100",
      "precio": 1467300,
      "stock": 12
    }
  ]);

  const getProductoById = (id) => {
    return productos.value.find((producto) => producto.id === id);
  };

  const actualizarProducto = (productoActualizado) => {
    const index = productos.value.findIndex((p) => p.id === productoActualizado.id);
    if (index !== -1) {
      productos.value[index] = { ...productoActualizado };
    }
  };

  return {
    productos,
    getProductoById,
    actualizarProducto,
  };
};
