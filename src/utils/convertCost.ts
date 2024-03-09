type TConvertCost = (cost: number) => string

export const convertCost: TConvertCost = (cost) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency', 
    currency: 'RUB', 
    maximumFractionDigits: 0 
  }).format(cost)
}