export function getPrimeMedian(num) {
  let primes = getPrimeList(num);
  let median = [];
  // integer division by 2 to get mid
  let mid = Math.floor(primes.length / 2);
  if (primes.length % 2 == 0) {
    median = primes.slice(mid - 1, mid + 1); // get the 2 mid elements
  } else {
    median = primes.slice(mid, mid + 1);
  }
  return median;
}

function getPrimeList(num) {
  let isPrime = new Array(num).fill(0);
  let primes = [1];
  for (i = 2; i < num; i++) {
    let multiple = i + i;
    while (multiple < num) {
      isPrime[multiple] = 1; // not prime
      multiple += i;
    }
    if (isPrime[i] == 0) {
      primes.push(i);
    }
  }
  return primes;
}
