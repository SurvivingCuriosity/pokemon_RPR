import img_litrona from '../imgs/objetos/litrona.png'
import img_seta from '../imgs/objetos/seta.png'
import img_guitarra from '../imgs/objetos/guitarra.png'
import img_pocion from '../imgs/objetos/pocion.png'
import img_polvos from '../imgs/objetos/polvos.png'
import img_escudo from '../imgs/objetos/escudo.png'
import img_porro from '../imgs/objetos/porro.png'
import img_pistola from '../imgs/objetos/pistola.png'
import img_tarjetaCredito from '../imgs/objetos/tarjetaCredito.png'
import img_libro from '../imgs/objetos/libro.png'
import img_shuriken from '../imgs/objetos/shuriken.png'
import img_monster from '../imgs/objetos/monster.png'
import img_cruz from '../imgs/objetos/cruz.png'
import img_altavoz from '../imgs/objetos/altavoz.png'
import img_boli from '../imgs/objetos/boli.png'
import img_magdalena from '../imgs/objetos/magdalena.png'
import img_pastillas from '../imgs/objetos/pastillas.png'
import img_vino from '../imgs/objetos/vino.png'
import img_rinonera from '../imgs/objetos/rinonera.png'
import img_carro from '../imgs/objetos/carro.png'

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
                imagen: img_seta,
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
                imagen : img_magdalena,
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
                imagen: img_monster,
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
                imagen : img_carro,
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
                imagen : img_boli,
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
                imagen : img_shuriken,
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
                imagen: img_pastillas,
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
                imagen: img_altavoz,
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
                imagen: img_polvos,
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
                imagen : img_tarjetaCredito,
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
                imagen : img_vino,
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
                imagen: img_cruz,
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
                imagen: img_guitarra,
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
                imagen: img_rinonera,
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
                imagen: img_libro,
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
