const color = require('chalk');

export const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const Output = (ACode, AMessage, AData = null, ARequest = null) => {
  const result = {
    code: ACode,
    message: AMessage,
  };
  if (ARequest !== null) result['request'] = ARequest;
  if (AData !== null) result['data'] = AData;
  return result;
};

export const warning = (str) => {
  console.log(color.yellow(str));
};
export const error = (str) => {
  console.log(color.red(str));
};
export const info = (str) => {
  console.log(color.blue.bold(str));
};
export const title = (str) => {
  console.log(color.bold(str));
};
