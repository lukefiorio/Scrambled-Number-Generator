module.exports = function(n) {
  let scrambledArr = [];
  for (let i = 0; i < n; i++) {
    // probably not "truly" random, but certainly scrambled
    scrambledArr.splice(Math.floor(Math.random() * i), 0, i);
  }
  return scrambledArr;
};
