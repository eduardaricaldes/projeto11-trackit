export default function DiaFormatado(diaDaSemana, dia, mes) {
  const dias = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  const diaSemana = dias[diaDaSemana];

  return `${diaSemana}, ${dia}/${mes}`

}