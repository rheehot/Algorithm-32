function solution(offers) {
  return offers
    .map(v =>  v.replace(/\//gi, "").split(" ").map(v => ~~v))
    .reduce((max, v) => {
      if (max[2] === v[2]) {
        return max[1] < v[1] ? v : max;
      }
      if (max[2] < v[2] && max[1] >= v[0]) {
        return v;
      }
      return max;
    })[2];
}

console.log(
  solution([
    "10/05 10/12 2400",
    "10/05 10/10 2500",
    "10/07 10/15 2300",
    "10/08 10/30 3000",
    "10/15 11/03 3000",
    "10/20 11/01 3500",
    "11/02 11/11 4000"])  === 3500,
  solution(["07/01 07/30 2000",
    "07/01 07/15 2000",
    "07/01 07/30 2000",
    "07/01 07/30 1500",
    "07/05 07/30 2100",
    "07/20 08/01 2400",
    "07/20 07/31 2400",
    "07/31 09/01 2900",
    "08/01 08/15 3000",
    "08/14 08/19 2000",
    "08/17 08/30 4000"]) === 3000
)