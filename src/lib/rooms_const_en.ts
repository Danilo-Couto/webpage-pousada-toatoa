import { AZUL, BRANCO, LARANJA, ROSA, VERDE } from "./images"
import { otas } from "./otas"

const subtituloSuite = 'PRIVATES FOR 2 TO 4 PEOPLE'
const subtituloAptos = 'PRIVATES FOR 4 TO 6 PEOPLE'
const subtituloChales = 'PRIVATES FOR 1 TO 3 PEOPLE'

const descriptionSuite = 'Cozy and minimalist, sleeps up to 4 people. It has a private bathroom with electric shower, air conditioning and a balcony with a hammock. Perfect for relaxing after a day full of activities such as surfing, hiking or sightseeing.' 
const descriptionAptos = 'Our option for groups and families. 2 environments: one with a double bed and the other with 2 bunk beds. Air conditioning, private bathroom and balcony with hammock.' 
const descriptionChales = 'Our entry option, the most economical. Fan and private bathroom. For up to 3 people: 1 double bed + 1 floating bed.' 

const itemsSuite = [
    'A double bed',
    'A bunk',
    'Bedding',
    'Towels',
    'Air conditioner',
    'WiFi',
    'Balcony with Hammock',
];

const itemsAptos = [
    'Two environments',
    'One with double bed',
    'and another with two bunk beds',
    'Bedding',
    'Towels',
    'Air conditioner',
    'WiFi',
    'Balcony with Hammock',
];

const itemsChales = [
    'A double bed (widow size)',
    'A floating bed',
    'Bedding',
    'Towels',
    'Fan',
    'WiFi',
];

export const rooms = [
    {
        name: 'laranja',    
        title: 'SUNSET ENSUITE',
        subtitulo: subtituloSuite,
        description: 'Located on the 1st floor with exclusive access to the garden.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: LARANJA,
        alt: 'SUNSET ENSUITE - POUSADA TOA TOA EM PIPA',
        href: 'quartos/laranja',
        book: otas.laranja
    },
    {
        name: 'verde',
        title: 'FOREST ENSUITE',
        subtitulo: subtituloSuite,
        description: 'The green suite, or more poetically put, our Forest Suite is on the 2nd floor overlooking the forest.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: VERDE,
        alt: 'FOREST ENSUITE - POUSADA TOA TOA EM PIPA',
        href: 'quartos/verde',

        book: otas.verde
    },
    {
        name: 'azul',
        title: 'HEAVEN APART',
        subtitulo: subtituloAptos,
        description: 'Located on the 1st floor with exclusive access to the garden.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: AZUL,
        alt: 'APTO DO CÉU - POUSADA TOA TOA EM PIPA',
        href: 'quartos/azul',
        book: otas.azul
    },
    {
        name: 'rosa',
        title: 'WAVES APART',
        subtitulo: subtituloAptos,
        description: 'Located on the 2nd floor overlooking the forest.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: ROSA,
        alt: 'APTO DA ONDA - POUSADA TOA TOA EM PIPA',
        href: 'quartos/rosa',
        book: otas.rosa
    },
    {
        name: 'branco',
        title: 'PEACE CABIN',
        subtitulo: subtituloChales,
        description: 'Our Peace Chalet is on the 1st floor.',
        subDescription: descriptionChales,
        items: itemsChales,
        src: BRANCO,
        alt: 'CHALE DA PAZ - POUSADA TOA TOA EM PIPA',
        href: 'quartos/branco',
        book: otas.branco
    }
];
