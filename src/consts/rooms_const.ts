import { AZUL, BRANCO, LARANJA, ROSA, VERDE } from "./images"
import { otas } from "./otas"

const subtituloSuite = 'PRIVATIVO 2 A 4 PESSOAS'
const subtituloAptos = 'PRIVATIVO 4 A 6 PESSOAS'
const subtituloChales = 'PRIVATIVO 1 A 3 PESSOAS'

const descriptionSuite = 'Aconchegante e minimalista acomoda até 4 pessoas. Tem banheiro privativo com chuveiro elétrico, ar-condicionado e varanda com rede. Perfeito para relaxar após um dia cheio de atividades como surf, caminhadas e passeios.' 
const descriptionAptos = 'Nossa opção para grupos e famílias. 2 ambientes: um com cama de casal e outro com 2 beliches. Ar-condicionado, banheiro privativo e varanda com rede.' 
const descriptionChales = 'Nossa opção de entrada, a mais economica. Ventilador e banheiro privativo. Para até 3 pessoas: 1 cama de casal + 1 beliche.' 

const itemsSuite = [
    'Uma cama de casal',
    'Um beliche',
    'Roupa de Cama',
    'Toalhas',
    'Ar-Condicionado',
    'Wi-Fi',
    'Varanda com Rede',
]
const itemsAptos = [
    'Dois ambientes',
    'Um com cama de casal',
    'e outro com dois beliches',
    'Roupa de Cama',
    'Toalhas',
    'Ar-Condicionado',
    'Wi-Fi',
    'Varanda com Rede',
]
const itemsChales = [
    'Um treliche',
    'Roupa de Cama',
    'Toalhas',
    'Ventilador',
    'Wi-Fi',
]

export const rooms = [
    {
        name: 'laranja',    
        title: 'SUÍTE POR DO SOL',
        subtitulo: subtituloSuite,
        description: 'Localizada no 1o andar com saída exclusiva para o jardim.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: LARANJA,
        alt: 'SUÍTE POR DO SOL - POUSADA TOA TOA EM PIPA',
        href: 'quartos/laranja',
        price: '3 DIAS por R$ 4.000',
        price2: '5 DIAS por R$ 5.320',
        book: otas.laranja
    },
    {
        name: 'verde',
        title: 'SUÍTE FLORESTA',
        subtitulo: subtituloSuite,
        description: 'A suíte verde, ou colocada de maneira mais poética, nossa Suíte Floresta fica no 2o andar com vista para a mata.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: VERDE,
        alt: 'SUÍTE FLORESTA - POUSADA TOA TOA EM PIPA',
        href: 'quartos/verde',
        price: '3 DIAS por R$ 4.800',
        price2: '5 DIAS por R$ 6.400',
        book: otas.verde
    },
    {
        name: 'azul',
        title: 'APTO DO CÉU',
        subtitulo: subtituloAptos,
        description: 'Opção no 1o andar com saída exclusiva para jardim.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: AZUL,
        alt: 'APTO DO CÉU - POUSADA TOA TOA EM PIPA',
        href: 'quartos/azul',
        price: '3 DIAS por R$ 6.000',
        price2: '5 DIAS por R$ 8.000',
        book: otas.azul
    },
    {
        name: 'rosa',
        title: 'APTO DA ONDA',
        subtitulo: subtituloAptos,
        description: 'Opção no 2o andar com vista para a mata.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: ROSA,
        alt: 'APTO DA ONDA - POUSADA TOA TOA EM PIPA',
        href: 'quartos/rosa',
        price: '3 DIAS por R$ 7.200',
        price2: '5 DIAS por R$ 9.600',
        book: otas.rosa
    },
    {
        name: 'branco',
        title: 'CHALE DA PAZ',
        subtitulo: subtituloChales,
        description: 'Chalé Triplo, ou colocada de maneira mais poética, nosso Chalé da Paz fica no 1a andar.',
        subDescription: descriptionChales,
        items: itemsChales,
        src: BRANCO,
        alt: 'CHALE DA PAZ - POUSADA TOA TOA EM PIPA',
        href: 'quartos/branco',
        price: '3 DIAS por R$ 2.000',
        price2: '5 DIAS por R$ 2.700',
        book: otas.branco
    }
]