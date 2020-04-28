module.exports = ({ fparams, resolve }, args) => {
  if (!Array.isArray(fparams[0]) && fparams[0] === 0 && fparams[1] === 0) {
    return 1;
  } else if (!Array.isArray(fparams[0]) && fparams[0] === 0) {
    return 0;
  } else {
    return Math.pow(
      Array.isArray(fparams[0]) ? resolve(fparams[0], args) : fparams[0], fparams[1]
    )
  }
}
