import img_pocion from '../imgs/objetos/pocion.webp'
import img_porro from '../imgs/objetos/porro.webp'
import img_jagger from '../imgs/objetos/jagger.webp'

export const objetos = [
    {
        nombreDisplay:'CURACIÓN',
        descripcion:'Objetos que curan',
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
                nombre:'pocion2',
                tipo:'cura',
                nombreDisplay : 'Poción',
                imagen : img_pocion,
                descripcion:'Lorem ipsum blablabla',
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
    {
        nombreDisplay:'ATAQUE',
        descripcion:'Objetos que atacan',
        tipo:'ataque',
        objetos:[
            {
                nombre:'pistola',
                tipo:'ataque',
                nombreDisplay : 'Pistola',
                imagen : img_pocion,
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
            {
                nombre:'pistola2',
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
    {
        nombreDisplay:'INTERACTIVO',
        descripcion:'Objetos interactivos',
        tipo:'eleccion',
        objetos:[

        ]
    },
    {
        nombreDisplay:'PORTABLE',
        descripcion:'Efectos durante todo el combate',
        tipo:'amuleto',
        objetos:[
            {
                nombre:'escudoAntidisturbios',
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
    {
        nombreDisplay:'MODIFICADOR',
        descripcion:'Objetos que altera propiedades',
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
]
