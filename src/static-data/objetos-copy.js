import img_litrona from '../imgs/objetos/litrona.png'
import img_humo from '../imgs/objetos/humo.gif'
import img_seta from '../imgs/objetos/seta.png'
import img_guitarra from '../imgs/objetos/guitarra.png'
import img_pocion from '../imgs/objetos/pocion.png'
import img_pocion2 from '../imgs/objetos/pocion2.png'
import img_escudo from '../imgs/objetos/escudo.png'
import img_pocion4 from '../imgs/objetos/pocion4.png'
import img_porro from '../imgs/objetos/porro.png'
import img_jagger from '../imgs/objetos/jagger.webp'
import img_pistola from '../imgs/objetos/pistola.png'
import img_tarjetCredito from '../imgs/objetos/tarjetaCredito.png'

export const objetos = [
//cura
    {
        nombreDisplay:'CURACIÓN',
        descripcion:'Estos objetos aumentan la vida a tu pokemon.',
        tipo:'cura',
        objetos:[
            {
                nombre:'pocion',
                tipo:'cura',
                nombreDisplay : 'Poción',
                imagen : img_pocion,
                descripcion:'Cura 50HP',
                usos: 1,
                efecto: {
                    'cura':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'superpocion',
                tipo:'cura',
                nombreDisplay:'Superpoción',
                imagen: img_pocion2,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'seta',
                tipo:'cura',
                nombreDisplay : 'Setas',
                imagen : img_seta,
                descripcion:'Unas buenas setitas...',
                usos: 1,
                efecto: {
                    'cura':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'superpocion2',
                tipo:'cura',
                nombreDisplay:'Superpoción',
                imagen: img_humo,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
        ]
    },
//ataque
    {
        nombreDisplay:'ATAQUE',
        descripcion:'Estos objetos causan daño al rival.',
        tipo:'ataque',
        objetos:[
            {
                nombre:'pistola',
                tipo:'ataque',
                nombreDisplay : 'Pistola',
                imagen : img_pistola,
                descripcion:'Daña 50HP',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'pistola1',
                tipo:'ataque',
                nombreDisplay : 'Pistola',
                imagen : img_pistola,
                descripcion:'Lorem ipsum blablabla',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'pistola2',
                tipo:'ataque',
                nombreDisplay : 'Pistola',
                imagen : img_pistola,
                descripcion:'Lorem ipsum blablabla',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'pistola3',
                tipo:'ataque',
                nombreDisplay : 'Pistola',
                imagen : img_pocion,
                descripcion:'Lorem ipsum blablabla',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
        ]
    },
//alteraStats
    {
        nombreDisplay:'MODIFICADOR',
        descripcion:'Estos objetos modifican las propiedades de los pokemon.',
        tipo:'alterStats',
        objetos:[
            {
                nombre:'porro',
                tipo:'alteraStats',
                nombreDisplay:'Porro',
                imagen: img_porro,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'porro1',
                tipo:'alteraStats',
                nombreDisplay:'Porro',
                imagen: img_porro,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'porro2',
                tipo:'alteraStats',
                nombreDisplay:'Porro',
                imagen: img_porro,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'porro3',
                tipo:'alteraStats',
                nombreDisplay:'Porro',
                imagen: img_porro,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
        ]
    },
//eleccion
    {
        nombreDisplay:'INTERACTIVO',
        descripcion:'Objetos multiuso',
        tipo:'eleccion',
        objetos:[
            {
                nombre:'litrona',
                tipo:'interactivo',
                nombreDisplay : 'Litrona',
                imagen : img_litrona,
                descripcion:'Podrás bebertela o...',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'tarjetaCredito',
                tipo:'interactivo',
                nombreDisplay : 'Tarjeta de crédito',
                imagen : img_tarjetCredito,
                descripcion:'¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'guitarra',
                tipo:'interactivo',
                nombreDisplay : 'Guitarra',
                imagen : img_guitarra,
                descripcion:'¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'tarjetaCredito3',
                tipo:'interactivo',
                nombreDisplay : 'Tarjeta de crédito',
                imagen : img_tarjetCredito,
                descripcion:'¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            }
        ]
    },
//amuleto
    {
        nombreDisplay:'PORTABLE',
        descripcion:'Tu pokemon llevará este objeto durante todo el combate',
        tipo:'amuleto',
        objetos:[
            {
                nombre:'escudo',
                tipo:'amuleto',
                nombreDisplay:'Escudo antidisturbios',
                imagen: img_escudo,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'escudoAntidisturbios2',
                tipo:'amuleto',
                nombreDisplay:'Escudo antidisturbios',
                imagen: img_pocion,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'escudoAntidisturbios3',
                tipo:'amuleto',
                nombreDisplay:'Escudo antidisturbios',
                imagen: img_pocion,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
            {
                nombre:'escudoAntidisturbios4',
                tipo:'amuleto',
                nombreDisplay:'Escudo antidisturbios',
                imagen: img_pocion,
                usos: 1,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{}
            },
        ]
    },
]
