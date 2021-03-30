export const getAmountTotal = (values) =>
  values.reduce(
    (total, currentValue) => +(total + currentValue).toFixed(12),
    0
  );
