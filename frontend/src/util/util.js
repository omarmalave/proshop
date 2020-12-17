// eslint-disable-next-line import/prefer-default-export
export const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);
