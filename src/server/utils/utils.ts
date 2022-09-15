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

/**
 * dateFormat (new Date (), '%Y-%m-%d %H:%M:%S', true)
 *   returns '2012-05-18 05:37:21'
 *
 * @param date
 * @param fstr
 * @param utc
 * @returns
 */
export const dateFormat = (date, fstr, utc = false) => {
  const utcFunction = utc ? 'getUTC' : 'get';
  return fstr.replace(/%[YmdHMS]/g, function (m) {
    switch (m) {
      case '%Y':
        return date[utcFunction + 'FullYear'](); // no leading zeros required
      case '%m':
        m = 1 + date[utcFunction + 'Month']();
        break;
      case '%d':
        m = date[utcFunction + 'Date']();
        break;
      case '%H':
        m = date[utcFunction + 'Hours']();
        break;
      case '%M':
        m = date[utcFunction + 'Minutes']();
        break;
      case '%S':
        m = date[utcFunction + 'Seconds']();
        break;
      default:
        return m.slice(1); // unknown code, remove %
    }
    // add leading zero if required
    return ('0' + m).slice(-2);
  });
};
