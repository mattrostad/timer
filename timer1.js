const timer2 = function (arr) {
for(let i = 0; i < arr.length; i++) {
  if(!arr[i]) {
    console.log("No numbers are provided")
  } else 
  if (arr[i] < 0) {
    console.log("Input positive Number")
  } else
  if (!Number(arr[i])) {
    console.log("Input is not a Number")
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arr[i] * 1000)
}
}

const inputArr = process.argv.slice(2)

timer2(inputArr);