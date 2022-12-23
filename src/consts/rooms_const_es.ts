import { AZUL, BRANCO, LARANJA, ROSA, VERDE } from "./images"
import { otas } from "./otas"

const subtituloSuite = 'PRIVACTIVO 2 A 4 PERSONAS'
const subtituloAptos = 'PRIVACTIVO 4 A 6 PERSONAS'
const subtituloChales = 'PRIVACTIVO 1 A 3 PERSONAS'

const descriptionSuite = 'Acogedora y minimalista, tiene capacidad para 4 personas. Tiene baño privado con ducha eléctrica, aire acondicionado y balcón con hamaca. Perfecto para relajarse después de un día lleno de actividades como surf, senderismo o paseos.'
const descriptionAptos = 'Nuestra opción para grupos y familias. 2 ambientes: uno con cama de matrimonio y el otro con 2 literas. Aire acondicionado, baño privado y terraza con hamaca.'
const descriptionChales = 'Nuestra opción de entrada, la más económica. Ventilador y baño privado. Para hasta 3 personas: 1 cama doble + 1 cama flotante.'

const itemsSuite = [
    'Una cama doble',
    'Una litera',
    'Ropa de cama',
    'Toallas',
    'Aire condicionado',
    'Wifi',
    'Balcón con Hamaca',
];

const itemsAptos = [
    'Dos ambientes',
    'Uno con cama de matrimonio',
    'Dos literas',
    'Ropa de cama',
    'Toallas',
    'Aire condicionado',
    'Wifi',
    'Balcón con Hamaca',
];

const itemsChales = [
    'Una cama doble (tamaño viuda)',
    'Una cama flotante',
    'Ropa de cama',
    'Toallas',
    'Eletric Fan',
    'Wifi',
];


export const rooms = [
    {
        name: 'laranja',    
        title: 'SUITE POR DO SOL',
        subtitulo: subtituloSuite,
        description: 'Ubicado en el 1er piso con acceso exclusivo al jardín.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: LARANJA,
        alt: 'SUITE POR DO SOL - POUSADA TOA TOA EM PIPA',
        href: 'quartos/laranja',
        price: ' 3 DIAS a partir de R$ 4.770',
        price2: '5 DIAS a partir de R$ 5.100',
        book: otas.laranja
    },
    {
        name: 'verde',
        title: 'SUITE BOSQUE',
        subtitulo: subtituloSuite,
        description: 'La suite verde, o más poéticamente, nuestra suite Forest está en el segundo piso con vista al bosque.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: VERDE,
        alt: 'SUITE BOSQUE - POUSADA TOA TOA EM PIPA',
        href: 'quartos/verde',
        price: ' 3 DIAS a partir de R$ 3.180',
        price2: '5 DIAS a partir de R$ 3.400',
        book: otas.verde
    },
    {
        name: 'azul',
        title: 'APTO CIELO',
        subtitulo: subtituloAptos,
        description: 'Opción en 1ª planta con acceso exclusivo al jardín.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: AZUL,
        alt: 'APTO CIELO - POUSADA TOA TOA EM PIPA',
        href: 'quartos/azul',
        price: '3 DIAS a partir de R$ 5.400',
        price2: '5 DIAS a partir de R$ 5.800',
        book: otas.azul
    },
    {
        name: 'rosa',
        title: 'HOLAS APTO',
        subtitulo: subtituloAptos,
        description: 'Opción en 2do piso con vista al bosque.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: ROSA,
        alt: 'HOLAS APTO - POUSADA TOA TOA EM PIPA',
        href: 'quartos/rosa',
        price: '3 DIAS a partir de R$ 3.6000',
        price2: '5 DIAS a partir de R$ 3.900',
        book: otas.rosa
    },
    {
        name: 'branco',
        title: 'CHALET DE PAZ',
        subtitulo: subtituloChales,
        description: 'Nuestro Chalet de la Paz está en el 1er piso.',
        subDescription: descriptionChales,
        items: itemsChales,
        src: BRANCO,
        alt: 'CHALET DE PAZ - POUSADA TOA TOA EM PIPA',
        href: 'quartos/branco',
        price: '3 DIAS a partir de R$ 2.600',
        price2: '5 DIAS a partir de R$ 2.800',
        book: otas.branco
    }
];
