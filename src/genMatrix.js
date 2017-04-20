import QR from './libs/qr-image';

export default (value, options) => {
  return QR.matrix(value, options.ecLevel, options.version);
};
