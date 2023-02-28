export function formatCurrency(amount) {
  const formatter = window.Intl.NumberFormat('es-ES', {
    currency: 'EUR',
    style: 'currency'
  });
  return formatter.format(amount);
}
