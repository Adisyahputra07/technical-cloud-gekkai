const input = [1, 2, 3, 4, 10, 11];

function sumNumber(input) {
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    result = result + input[i];
  }

  console.log(result);
}

sumNumber(input);
