import charmander from '../imgs/charmander.png'
import pikachu from '../imgs/pikachu.png'
import bulbasour from '../imgs/bulbasour.png'
import mew from '../imgs/mew.png'

export const pokemons = [
    {
        nombre:"Charmander",
        tipo:"Fuego",
        imagen:charmander,
        color:'naranja',
        propiedades:{
            vida:100,
            velocidad:100,
            ataque:100,
            defensa:100
        },
        ataques:[
            {nombre:'Placaje',potencia:10, usos:3},
            {nombre:'Ascuas',potencia:20, usos:2},
            {nombre:'Lanzallamas',potencia:30, usos:1},
            {nombre:'Gruñido',potencia:0, usos:3}
        ]
    },
    {
        nombre:"Bulbasour",
        tipo:"Planta",
        color:'verde',
        imagen:bulbasour,
        propiedades:{
            vida:100,
            velocidad:100,
            ataque:100,
            defensa:100
        },
        ataques:[
            {nombre:'Látigo cepa',potencia:20, usos:2},
            {nombre:'Ataque hoja',potencia:30, usos:1},
            {nombre:'Absorver',potencia:10, usos:3},
            {nombre:'Chupavidas',potencia:0, usos:3}
        ]
    },
    {
        nombre:"Mew",
        tipo:"Psiquico",
        imagen:mew,
        color:'morado',
        propiedades:{
            vida:90,
            velocidad:70,
            ataque:90,
            defensa:90
        },
        ataques:[
            {nombre:'Confusión',potencia:30, usos:1},
            {nombre:'Psíquico',potencia:20, usos:2},
            {nombre:'Placaje',potencia:10, usos:3},
            {nombre:'Meditar',potencia:0, usos:3}
        ]
    },
    {
        nombre:"Pikachu",
        tipo:"Electrico",
        imagen:pikachu,
        color:'amarillo',
        propiedades:{
            vida:80,
            velocidad:100,
            ataque:70,
            defensa:60
        },
        ataques:[
            {nombre:'Onda trueno',potencia:20, usos:2},
            {nombre:'Rayo',potencia:30, usos:1},
            {nombre:'Ataque rápido',potencia:10, usos:3},
            {nombre:'Latigo',potencia:0, usos:3}
        ]
    }
]