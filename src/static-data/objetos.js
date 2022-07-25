import img_litrona from '../imgs/objetos/litrona.png'
import img_humo from '../imgs/objetos/humo.gif'
import img_seta from '../imgs/objetos/seta.png'
import img_guitarra from '../imgs/objetos/guitarra.png'
import img_pocion from '../imgs/objetos/pocion.png'
import img_pocion2 from '../imgs/objetos/pocion2.png'
import img_escudo from '../imgs/objetos/escudo.png'
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
                cantidadCura:30,
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'seta',
                tipo:'cura',
                nombreDisplay:'Seta',
                imagen: img_pocion2,
                usos: 1,
                cantidadCura:30,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'magdalena',
                tipo:'cura',
                nombreDisplay : 'Magdalenas',
                imagen : img_seta,
                descripcion:'Unas buenas setitas...',
                usos: 1,
                cantidadCura:30,
                efecto: {
                    'cura':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'monster',
                tipo:'cura',
                nombreDisplay:'Monster',
                imagen: img_pocion2,
                usos: 1,
                cantidadCura:30,
                efecto: {
                    'alteraStats':[
                        {'velocidad': -20},
                        {'precision': -20},
                        {'ataque': 20}
                    ]
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'carroCompra',
                tipo:'ataque',
                nombreDisplay : 'Carro de la compra',
                imagen : img_pistola,
                descripcion:'Lorem ipsum blablabla',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'boli',
                tipo:'ataque',
                nombreDisplay : 'Bolígrafo',
                imagen : img_pistola,
                descripcion:'Lorem ipsum blablabla',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'shuriken',
                tipo:'ataque',
                nombreDisplay : 'Shuriken',
                imagen : img_pocion,
                descripcion:'Lorem ipsum blablabla',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'pastillas',
                tipo:'alteraStats',
                nombreDisplay:'Pastillas',
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'altavoz',
                tipo:'alteraStats',
                nombreDisplay:'Altavoz',
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'polvos',
                tipo:'alteraStats',
                nombreDisplay:'Polvos sospechosos',
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
                respuestaAnteEventoAleatorio:{},
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
                respuestaAnteEventoAleatorio:{},
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'raton',
                tipo:'interactivo',
                nombreDisplay : 'Ratón',
                imagen : img_guitarra,
                descripcion:'¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'vino',
                tipo:'interactivo',
                nombreDisplay : 'Copa de vino',
                imagen : img_tarjetCredito,
                descripcion:'¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque':{
                        cantidad:50
                    }
                },
                consecuencia:{},
                respuestaAnteEventoAleatorio:{},
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
                nombre:'crucifijo',
                tipo:'amuleto',
                nombreDisplay:'Crucifijo',
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'guitarra',
                tipo:'amuleto',
                nombreDisplay:'Guitarra',
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'rinonera',
                tipo:'amuleto',
                nombreDisplay:'Riñonera',
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
                respuestaAnteEventoAleatorio:{},
            },
            {
                nombre:'libro',
                tipo:'amuleto',
                nombreDisplay:'Libro',
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
                respuestaAnteEventoAleatorio:{},
            },
        ]
    },
]
