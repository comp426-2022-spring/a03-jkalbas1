/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  let flip_value = 2;
  flip_value = Math.floor(Math.random(2) * 2)
  if(flip_value == 0) 
  {
    return 'heads'
  } else {
    return 'tails'
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  const flip_arr = []
  let flip_value = 2;
  for(let i=0; i < flips; i++) {
    flip_value = Math.floor(Math.random(2) * 2)
    if(flip_value == 0) 
    {
      flip_arr[i] = 'heads'
    } else {
      flip_arr[i] = 'tails'
    }
  }
  return flip_arr
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let tails = 0
  let heads = 0
  for(let i=0; i<array.length; i ++) {
    if (array[i] == 'heads') {
      heads += 1
    } else {
      tails += 1
    }
  }
  if ( tails == 0) {
    return {'heads': heads}
  } else if (heads == 0) {
    return {'tails': tails}
  }
  return {'tails': tails, 'heads': heads}
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  let flip_value = Math.floor(Math.random(2) * 2)
  let flip = ''
  if(flip_value == 0) 
  {
    flip = 'heads'
  } else {
    flip = 'tails'
  }
  let result = ''
  if(flip == call) {
    result = 'win'
  } else {
    result = 'lose'
  }
  return {'call': call, 'flip': flip, 'result': result}
}

export function guessFlip(call) {
  
  if (call != 'heads' && call != 'tails') {
      return 'Error: incorrect input. \nUsage: node guess-flip --call=[heads|tails]'
  }

  return flipACoin(call)
}

export function flips(number) {

  if (number == null) {
      number = 1
  }
  let flips = coinFlips(number)
  let flip_data = countFlips(flips)
  return [flips, '\n', flip_data]
}

export function flip() {
  return coinFlip()
}