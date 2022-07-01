var n = Math.random(); // Generates random no b/w 0 to less than 1 (inclusive of 0, but not 1)
n = n * 6; // Makes number between 0.00000001 to 5.9999999 (not six)
n = Math.ceil(n); // so we can use ceil and get no b/w 1 to 6
console.log(n);

var p = Math.random();
n = n * 6;
n = Math.floor(n) + 1; // since floor gives nearest lesser no thats why +1 makes it b/w 1 to 6.
console.log(n);

// To get number b/w a range
z = Math.ceil(50 + (100 - 50) * Math.random());
// a10_100 = 10+a*(100 - 10) gives b/w (10 to 100)

// a = (0, 1) gives b/w 0 to 1
// a100 = a*100 = (0, 100) gives b/w 0 to 100
