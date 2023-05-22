import charmander from '../imgs/pokemons/charmander.png'
import pikachu from '../imgs/pokemons/pikachu.png'
import bulbasour from '../imgs/pokemons/bulbasour.png'
import groudon from '../imgs/pokemons/groudon.png'
import mew from '../imgs/pokemons/mew.png'
import kyogre from '../imgs/pokemons/kyogre.webp'

export const pokemons = [
    {
        nombre:"Charmander",
        tipo:"Fuego",
        imagen:charmander,
        color:'naranja',
        propiedades:{
            vida:90,
            velocidad:90,
            ataque:90,
            defensa:90,
            precision:80
        },
        ataques:[
            {nombre:'Placaje',potencia:15, usos:3,categoria:'normal'},
            {nombre:'Ascuas',potencia:20, usos:2,categoria:'normal'},
            {nombre:'Lanzallamas',potencia:100, usos:1, categoria:'normal'},
            {nombre:'Gruñido',potencia:0, usos:3, categoria:'especial'}
        ]
    },
    {
        nombre:"Kyogre",
        tipo:"Agua",
        imagen:kyogre,
        color:'azuloscuro',
        propiedades:{
            vida:100,
            velocidad:80,
            ataque:100,
            defensa:100,
            precision:60
        },
        ataques:[
            {nombre:'Tsunami',potencia:15, usos:3,categoria:'normal'},
            {nombre:'Tsunami',potencia:20, usos:2,categoria:'normal'},
            {nombre:'Tsunami',potencia:100, usos:1, categoria:'normal'},
            {nombre:'Tsunami',potencia:0, usos:3, categoria:'especial'}
        ]
    },
    {
        nombre:"Groudon",
        tipo:"Fuego",
        imagen: groudon,
        color:'rojo',
        propiedades:{
            vida:100,
            velocidad:80,
            ataque:100,
            defensa:85,
            precision:70
        },
        ataques:[
            {nombre:'Terremoto',potencia:15, usos:3,categoria:'normal'},
            {nombre:'Terremoto',potencia:20, usos:2,categoria:'normal'},
            {nombre:'Terremoto',potencia:100, usos:1, categoria:'normal'},
            {nombre:'Terremoto',potencia:0, usos:3, categoria:'especial'}
        ]
    },
    {
        nombre:"Bulbasour",
        tipo:"Planta",
        color:'azul',
        imagen:bulbasour,
        propiedades:{
            vida:100,
            velocidad:60,
            ataque:80,
            defensa:90,
            precision:80
        },
        ataques:[
            {nombre:'Látigo cepa',potencia:25, usos:2, categoria:'tipo'},
            {nombre:'Ataque hoja',potencia:20, usos:1, categoria:'tipo'},
            {nombre:'Absorver',potencia:15, usos:3, categoria:'especial'},
            {nombre:'Gruñido',potencia:0, usos:3, categoria:'especial'}
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
            defensa:85,
            precision:80
        },
        ataques:[
            {nombre:'Confusión',potencia:30, usos:1, categoria:'tipo'},
            {nombre:'Psíquico',potencia:20, usos:2, categoria:'tipo'},
            {nombre:'Placaje',potencia:10, usos:3, categoria:'normal'},
            {nombre:'Meditar',potencia:0, usos:3, categoria:'especial'}
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
            ataque:85,
            defensa:60,
            precision:80
        },
        ataques:[
            {nombre:'Onda trueno',potencia:20, usos:2, categoria:'tipo'},
            {nombre:'Rayo',potencia:30, usos:1, categoria:'tipo'},
            {nombre:'Ataque rápido',potencia:15, usos:3, categoria:'normal'},
            {nombre:'Latigo',potencia:0, usos:3, categoria:'especial'}
        ]
    },
    
]