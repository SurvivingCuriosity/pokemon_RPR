import img_litrona from '../imgs/objetos/litrona.png'
import img_seta from '../imgs/objetos/seta.png'
import img_guitarra from '../imgs/objetos/guitarra.png'
import img_pocion from '../imgs/objetos/pocion.png'
import img_nintendo from '../imgs/objetos/nintendo.png'
import img_pistola from '../imgs/objetos/pistola.png'
import img_pajaro from '../imgs/objetos/pajaro.png'
import img_limon from '../imgs/objetos/limon.png'
import img_libro from '../imgs/objetos/libro.png'
import img_shuriken from '../imgs/objetos/shuriken.png'
import img_monster from '../imgs/objetos/monster.png'
import img_cruz from '../imgs/objetos/cruz.png'
import img_altavoz from '../imgs/objetos/altavoz.png'
import img_boli from '../imgs/objetos/boli.png'
import img_magdalena from '../imgs/objetos/magdalena.png'
import img_paloma from '../imgs/objetos/paloma.png'
import img_vino from '../imgs/objetos/vino.png'
import img_rinonera from '../imgs/objetos/rinonera.png'
import img_carro from '../imgs/objetos/carro.png'
import img_hoja_misteriosa from '../imgs/objetos/hoja-misteriosa.png'

export const objetos = [
    //cura
    {
        nombreDisplay: 'CURACIÓN',
        descripcion: 'Estos objetos aumentan la vida a tu pokemon.',
        tipo: 'cura',
        objetos: [
            {
                nombre: 'pocion',
                tipo: 'cura',
                nombreDisplay: 'Poción',
                nombreCombate: 'poción',
                imagen: img_pocion,
                descripcion: 'Rico mejunje que cura 25HP',
                usos: 2,
                efecto: [
                    { nombre: 'cura', cantidad: 35 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'seta',
                tipo: 'cura',
                nombreDisplay: 'Seta',
                nombreCombate: 'seta',
                imagen: img_seta,
                descripcion: 'Una seta',
                usos: 1,
                cantidadCura: 30,
                efecto: [
                    { nombre: 'cura', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'magdalena',
                tipo: 'cura',
                nombreDisplay: 'Magdalena',
                nombreCombate: 'magdalena',
                imagen: img_magdalena,
                descripcion: 'Unas buenas magdalena...',
                usos: 1,
                cantidadCura: 30,
                efecto: [
                    { nombre: 'cura', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'monster',
                tipo: 'cura',
                nombreDisplay: 'Monster',
                nombreCombate: 'monster',
                imagen: img_monster,
                descripcion: 'Chute de energía que cura 50HP',
                usos: 1,
                cantidadCura: 30,
                efecto: [
                    { nombre: 'cura', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
        ]
    },
    //ataque
    {
        nombreDisplay: 'ATAQUE',
        descripcion: 'Estos objetos causan daño al rival.',
        tipo: 'ataque',
        objetos: [
            {
                nombre: 'pistola',
                tipo: 'ataque',
                nombreDisplay: 'Pistola',
                nombreCombate: 'pistola',
                imagen: img_pistola,
                descripcion: 'Fácil, dispara y quita 50HP.',
                usos: 1,
                efecto: [
                    { nombre: 'ataque', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'carroCompra',
                tipo: 'ataque',
                nombreDisplay: 'Carro de la compra',
                nombreCombate: 'carro de la compra',
                imagen: img_carro,
                descripcion: 'Lorem ipsum blablabla',
                usos: 1,
                efecto: [
                    { nombre: 'ataque', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'boli',
                tipo: 'ataque',
                nombreDisplay: 'Bolígrafo',
                nombreCombate: 'bolígrafo',
                imagen: img_boli,
                descripcion: 'Lorem ipsum blablabla',
                usos: 1,
                efecto: [
                    { nombre: 'ataque', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'shuriken',
                tipo: 'ataque',
                nombreDisplay: 'Shuriken',
                nombreCombate: 'shuriken',
                imagen: img_shuriken,
                descripcion: 'Lorem ipsum blablabla',
                usos: 1,
                efecto: [
                    { nombre: 'ataque', cantidad: 50 }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
        ]
    },
    //alteraStats
    {
        nombreDisplay: 'MODIFICADOR',
        descripcion: 'Estos objetos modifican las propiedades de los pokemon.',
        tipo: 'alterStats',
        objetos: [
            {
                nombre: 'hoja',
                tipo: 'alteraStats',
                nombreDisplay: 'Hoja misteriosa',
                nombreCombate: 'hoja misteriosa',
                imagen: img_hoja_misteriosa,
                descripcion: 'Emite un humo extraño al quemarse...',
                usos: 1,
                efecto: [
                    {
                        nombre: 'alterastats',
                        cantidad: 50,
                        stats: ['velocidad', 50]
                    }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'paloma',
                tipo: 'alteraStats',
                nombreDisplay: 'Paloma',
                nombreCombate: 'paloma',
                imagen: img_paloma,
                descripcion: 'Paloma adiestrada con mal genio...',
                usos: 1,
                efecto: [
                    {
                        nombre: 'alterastats',
                        cantidad: 50,
                        stats: ['velocidad', 50]
                    }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'altavoz',
                tipo: 'alteraStats',
                nombreDisplay: 'Altavoz',
                nombreCombate: 'altavoz',
                imagen: img_altavoz,
                descripcion: 'Pones música y te vienes arriba',
                usos: 1,
                efecto: [
                    {
                        nombre: 'alterastats',
                        cantidad: 50,
                        stats: ['velocidad', 50]
                    }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'nintendo',
                tipo: 'alteraStats',
                nombreDisplay: 'Nintendo',
                nombreCombate: 'nintendo robada',
                imagen: img_nintendo,
                descripcion: 'Juega a pokemon en el metaverso',
                usos: 1,
                efecto: [
                    {
                        nombre: 'alterastats',
                        cantidad: 50,
                        stats: ['velocidad', 50]
                    }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
        ]
    },
    //eleccion
    {
        nombreDisplay: 'INTERACTIVO',
        descripcion: 'Objetos multiuso',
        tipo: 'eleccion',
        objetos: [
            {
                nombre: 'litrona',
                tipo: 'interactivo',
                nombreDisplay: 'Litrona',
                nombreCombate: 'litrona',
                imagen: img_litrona,
                descripcion: 'Podrás bebertela o...',
                usos: 1,
                efecto: [
                    {
                        nombre: 'eleccion',
                        opciones: [
                            {

                            }, {

                            }
                        ]
                    }
                ],
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'limon',
                tipo: 'interactivo',
                nombreDisplay: 'Limón',
                nombreCombate: 'limón',
                imagen: img_limon,
                descripcion: '¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque': {
                        cantidad: 50
                    }
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'pajaro',
                tipo: 'interactivo',
                nombreDisplay: 'Pájaro',
                nombreCombate: 'pájaro',
                imagen: img_pajaro,
                descripcion: '¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque': {
                        cantidad: 50
                    }
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'vino',
                tipo: 'interactivo',
                nombreDisplay: 'Copa de vino',
                nombreCombate: 'copa de vino',
                imagen: img_vino,
                descripcion: '¿Cómo la usarás...?',
                usos: 1,
                efecto: {
                    'ataque': {
                        cantidad: 50
                    }
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            }
        ]
    },
    //amuleto
    {
        nombreDisplay: 'PORTABLE',
        descripcion: 'Tu pokemon llevará este objeto durante todo el combate',
        tipo: 'amuleto',
        objetos: [
            {
                nombre: 'crucifijo',
                tipo: 'amuleto',
                nombreDisplay: 'Crucifijo',
                imagen: img_cruz,
                descripcion: 'Reza... quizás venga Dios a verte',
                usos: 1,
                efecto: {
                    'alteraStats': [
                        { 'velocidad': -20 },
                        { 'precision': -20 },
                        { 'ataque': 20 }
                    ]
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'guitarra',
                tipo: 'amuleto',
                nombreDisplay: 'Guitarra',
                imagen: img_guitarra,
                usos: 1,
                descripcion: 'Invoca a Melendi',
                efecto: {
                    'alteraStats': [
                        { 'velocidad': -20 },
                        { 'precision': -20 },
                        { 'ataque': 20 }
                    ]
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'rinonera',
                tipo: 'amuleto',
                nombreDisplay: 'Riñonera',
                imagen: img_rinonera,
                descripcion: 'Parecido al bolsillo de Doraemon',
                usos: 1,
                efecto: {
                    'alteraStats': [
                        { 'velocidad': -20 },
                        { 'precision': -20 },
                        { 'ataque': 20 }
                    ]
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
            {
                nombre: 'libro',
                tipo: 'amuleto',
                nombreDisplay: 'Libro',
                imagen: img_libro,
                descripcion: 'Contiene sabiduría',
                usos: 1,
                efecto: {
                    'alteraStats': [
                        { 'velocidad': -20 },
                        { 'precision': -20 },
                        { 'ataque': 20 }
                    ]
                },
                consecuencia: {},
                respuestaAnteEventoAleatorio: {},
            },
        ]
    },
]
