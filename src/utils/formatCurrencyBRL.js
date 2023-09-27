export function formatCurrencyBRL(number) {
  if (isNaN(number)) {
    return "";
  }

  const formattedNumber = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);

  return formattedNumber;
}
