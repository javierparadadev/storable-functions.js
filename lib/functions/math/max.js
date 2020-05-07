module.exports = ({ fparams, resolve }, args) => {
  if (Array.isArray(fparams[0])) {
    resolve(fparams[0], args);
  } else {
    return Math.max(...fparams);
  }
}
