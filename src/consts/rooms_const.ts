import por_do_sol from '../../public/images/hospedagem praia do amor - toa toa20220903_110900~2-01.jpeg'
import floresta from '../../public/images/hospedagem praia do amor - toa toa20220903_100658~2-01.jpeg'
import chales_da_paz from '../../public/images/hospedagem praia do amor - toa toa20220903_114450~2-01.jpeg'
import da_onda from '../../public/images/hospedagem praia do amor - toa toa20220903_092924~2-01.jpeg'
import do_ceu from '../../public/images/hospedagem praia do amor - toa toa20220903_102925~2-01.jpeg'

const subtituloSuite = 'PRIVATIVO 2 A 4 PESSOAS'
const subtituloAptos = 'PRIVATIVO 4 A 6 PESSOAS'
const subtituloChales = 'PRIVATIVO 1 A 3 PESSOAS'

const descriptionSuite = 'Aconchegante e minimalista acomoda até 4 pessoas, tendo uma cama de casal, um beliche, banheiro privativo com chuveiro elétrico, ar-condicionado, varanda com rede e saída exclusiva para nosso jardim. Perfeito para relaxar após um dia cheio de atividades como surf, caminhadas e passeios.' 
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
        description: 'A suíte laranja, ou colocada de maneira mais poética, nossa Suíte Por do Sol fica no 1o andar com saída exclusiva para o jardim.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: por_do_sol,
        alt: 'SUÍTE POR DO SOL - POUSADA TOA TOA EM PIPA',
        href: 'quartos/laranja'
    },
    {
        name: 'verde',
        title: 'SUÍTE FLORESTA',
        subtitulo: subtituloSuite,
        description: 'A suíte verde, ou colocada de maneira mais poética, nossa Suíte Floresta fica no 2o andar com vista para a mata.',
        subDescription: descriptionSuite,
        items: itemsSuite,
        src: floresta,
        alt: 'SUÍTE FLORESTA - POUSADA TOA TOA EM PIPA',
        href: 'quartos/verde'
    },
    {
        name: 'azul',
        title: 'APTO DO CÉU',
        subtitulo: subtituloAptos,
        description: 'Opção no 1o andar com saída exclusiva para jardim.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: do_ceu,
        alt: 'APTO DO CÉU - POUSADA TOA TOA EM PIPA',
        href: 'quartos/azul'
    },
    {
        name: 'rosa',
        title: 'APTO DA ONDA',
        subtitulo: subtituloAptos,
        description: 'Opção no 2o andar com vista para a mata.',
        subDescription: descriptionAptos,
        items: itemsAptos,
        src: da_onda,
        alt: 'APTO DA ONDA - POUSADA TOA TOA EM PIPA',
        href: 'quartos/rosa'
    },
    {
        name: 'branco',
        title: 'CHALE DA PAZ',
        subtitulo: subtituloChales,
        description: 'Chalé Triplo, ou colocada de maneira mais poética, nosso Chalé da Paz fica no 1a andar.',
        subDescription: descriptionChales,
        items: itemsChales,
        src: chales_da_paz,
        alt: 'CHALE DA PAZ - POUSADA TOA TOA EM PIPA',
        href: 'quartos/branco'
    }
]