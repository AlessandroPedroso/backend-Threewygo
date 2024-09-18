import moment from 'moment';

export function verificarData(date) {
  moment.locale('pt-BR');
  const dataTermino = moment(date, 'DD/MM/YYYY').format('L');
  const dataAtual = moment().format('L');

  const newDataAtual = new Date(formatDataBanco(dataAtual));
  const newDataTermino = new Date(formatDataBanco(dataTermino));

  return newDataTermino >= newDataAtual;
}

export function formatDataBanco(date) {
  // YYY-MM-DD - converte no formato para enviar no banco de dados
  return moment(date, ['DD/MM/YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD');
}
