function forLoop() {
     for (let i = 0; i < 25; i++) {
        if (i == 1) {
            console.log("I am 1 strange loop.")
        } else console.log("I am "+ i +" strange loops.")
     }
}

function whileLoop() {
    let countdown = 10;
while (countdown > 0) {
  console.log(--countdown)
} return console.log("done")
}

function doWhileLoop(array) {
function maybeTrue() {
  array =  Math.random() >= 0.5
  // generates a true/false
}

do {
  array = array.slice(1)
  // not sure how to remove elements from array. slice(1)?
} while (array.length > 0 && maybeTrue());
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
