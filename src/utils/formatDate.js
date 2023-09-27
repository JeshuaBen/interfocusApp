export function formatDate(dataString) {
  const data = new Date(dataString);

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = String(data.getFullYear()).slice(-2);

  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}
