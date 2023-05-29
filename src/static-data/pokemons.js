import charmander from "../imgs/pokemons/charmander.png";
import pikachu from "../imgs/pokemons/pikachu.png";
import bulbasour from "../imgs/pokemons/bulbasour.png";
import groudon from "../imgs/pokemons/groudon.png";
import mew from "../imgs/pokemons/mew.png";
import kyogre from "../imgs/pokemons/kyogre.webp";

import explosion from '../imgs/animaciones/explosion.gif'
import agua from '../imgs/animaciones/agua.gif'
import rayo from '../imgs/animaciones/rayo.gif'
import fuego from '../imgs/animaciones/fuego.gif'
import humo from '../imgs/animaciones/humo.gif'
import hoja from '../imgs/animaciones/hoja.gif'

export const pokemons = [
  {
    nombre: "Charmander",
    tipo: "Fuego",
    imagen: charmander,
    color: "naranja",
    propiedades: {
      vida: 90,
      velocidad: 90,
      ataque: 90,
      defensa: 90,
      precision: 80,
    },
    ataques: [
      { nombre: "Placaje", potencia: 15, usos: 3, tipo: "Normal", animacion: humo },
      { nombre: "Ascuas", potencia: 20, usos: 2, tipo: "Normal" , animacion: fuego},
      { nombre: "Lanzallamas", potencia: 35, usos: 1, tipo: "Normal", animacion: fuego},
      { nombre: "Gruñido", potencia: 0, usos: 3, tipo: "Especial" },
    ],
  },
  {
    nombre: "Kyogre",
    tipo: "Agua",
    imagen: kyogre,
    color: "azuloscuro",
    propiedades: {
      vida: 100,
      velocidad: 80,
      ataque: 100,
      defensa: 100,
      precision: 60,
    },
    ataques: [
      { nombre: "Hidropulso", potencia: 15, usos: 3, tipo: "Normal" , animacion: agua},
      { nombre: "Tsunami", potencia: 20, usos: 2, tipo: "Normal" , animacion: agua},
      { nombre: "Hidrobomba", potencia: 40, usos: 1, tipo: "Normal" , animacion: agua},
      { nombre: "Paz mental", potencia: 0, usos: 3, tipo: "Especial" },
    ],
  },
  {
    nombre: "Groudon",
    tipo: "Fuego",
    imagen: groudon,
    color: "rojo",
    propiedades: {
      vida: 100,
      velocidad: 80,
      ataque: 100,
      defensa: 85,
      precision: 70,
    },
    ataques: [
      { nombre: "Llamarada", potencia: 15, usos: 3, tipo: "Normal" , animacion:fuego  },
      { nombre: "Terremoto", potencia: 20, usos: 2, tipo: "Normal", animacion:explosion },
      { nombre: "Fisura", potencia: 40, usos: 1, tipo: "Normal" },
      { nombre: "Cara susto", potencia: 0, usos: 3, tipo: "Especial"},
    ],
  },
  {
    nombre: "Bulbasour",
    tipo: "Planta",
    color: "azul",
    imagen: bulbasour,
    propiedades: {
      vida: 100,
      velocidad: 60,
      ataque: 80,
      defensa: 90,
      precision: 80,
    },
    ataques: [
      { nombre: "Absorver", potencia: 15, usos: 3, tipo: "Especial", animacion: hoja },
      { nombre: "Látigo cepa", potencia: 25, usos: 2, tipo: "Normal", animacion: hoja },
      { nombre: "Ataque hoja", potencia: 30, usos: 1, tipo: "Normal", animacion: hoja },
      { nombre: "Gruñido", potencia: 0, usos: 3, tipo: "Especial", animacion: hoja },
    ],
  },
  {
    nombre: "Mew",
    tipo: "Psiquico",
    imagen: mew,
    color: "morado",
    propiedades: {
      vida: 90,
      velocidad: 70,
      ataque: 90,
      defensa: 85,
      precision: 80,
    },
    ataques: [
      { nombre: "Placaje", potencia: 15, usos: 3, tipo: "Normal" },
      { nombre: "Psíquico", potencia: 20, usos: 2, tipo: "Normal" },
      { nombre: "Confusión", potencia: 30, usos: 1, tipo: "Normal" },
      { nombre: "Meditar", potencia: 0, usos: 3, tipo: "Especial" },
    ],
  },
  {
    nombre: "Pikachu",
    tipo: "Electrico",
    imagen: pikachu,
    color: "amarillo",
    propiedades: {
      vida: 80,
      velocidad: 100,
      ataque: 85,
      defensa: 60,
      precision: 80,
    },
    ataques: [
      { nombre: "Ataque rápido", potencia: 15, usos: 3, tipo: "Normal" },
      { nombre: "Onda trueno", potencia: 20, usos: 2, tipo: "Normal", animacion: rayo},
      { nombre: "Rayo", potencia: 35, usos: 1, tipo: "Normal", animacion: rayo },
      { nombre: "Latigo", potencia: 0, usos: 3, tipo: "Especial" },
    ],
  },
];
