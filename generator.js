module.exports = function(n) {
  let scrambledArr = [];
  let randomInt;
  for (let i = 0; i < n; i++) {
    // probably not "truly" random, but certainly scrambled
    randomInt = Math.floor(Math.random() * i);
    scrambledArr.splice(randomInt, 0, i);
  }
  return scrambledArr;
};
