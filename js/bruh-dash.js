var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  // [first(array)]
  first: function (array) {
    return array.shift();
  },

  // returns the last element of an array
  // [last(array)]
  last: function (array) {
    return array.pop();
  },

  // returns the index of the first matching element from left to right
  // [indexOf(array, value, [fromIndex=0])]
  indexOf: function (array, value) {
    return array.indexOf(value);
  },

  // returns the index of the first matching element from right to left
  // [lastIndexOf(array, value, [fromIndex=array.length-1])]
  lastIndexOf: function (array, value) {
    return array.lastIndexOf(value);
  },

  // returns an array with all elements except for the last element
  // [initial(array)]
  initial: function (array) {
    return array.slice(0, -1);
  },
  
  // returns an array with all falsey values removed
  // [compact(array)]
  compact: function(array) {
    for(let i = array.length - 1; i >= 0; i--){
      if(Boolean(array[i]) == false){
        array.splice(i, 1);
      }
    }
    return array
  },

  // creates a slice of an array from the start index up to but not including the end index
  // [slice(array, [start=0], [end=array.length]
  slice: function (array, startIndex, endIndex) {
    return array.splice(startIndex, (endIndex - startIndex));
  },

  // returns a slice of array with n elements dropped from the beignning
  // [drop(array, [n=1])]
  drop: function(array, n){
    if (n == undefined){
      n = 1;
    }
    array.splice(0, n);
    return array;
  },

  // returns a slice of array with n elements dropped from the end
  // [dropRight(array, [n=1])]
  dropRight: function(array, n) {
    if (n == undefined){
      n = 1;
    }
    for (let i = 0; i < n; i++){
      array.pop();
    }
    return array;
  },

  // creates a slice of an array with n elements taken from the beginning
  // [take(array, [n=1])]
  take: function (array, n) {
    if (n == undefined){
      n = 1;
    }
    return array.splice(0, n);
  },

  // creates a slice of an array with n elements taken from the end
  // [takeRight(array, [n=1])]
  takeRight: function (array, n) {
    if (n == undefined){
      n = 1;
    }
    return array.splice((array.length - n), n);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  // [fill(array, value, [start=0], [end=array.length])]
  fill: function(array, value, startIndex, endIndex) {
    if (startIndex == undefined){
      startIndex = 0;
    }
    if (endIndex == undefined){
      endIndex = array.length;
    }
    for (i = startIndex; i < endIndex; i++){
      array[i] = value;
    }
    return array;
  },

  // removes all given values from an array
  // [pull(array, [values])]
  pull: function (array, valueA, valueB) {
    for (i = 0; i < array.length; i++){
      if (array[i] === valueA){
        array.splice(array[i], 1);
      }
      if (array[i] === valueB){
        array.splice(array[i], 1);
      }
    }
    return array;
  },

  // removes elements of an array corresponding to the given indices
  // [pullAt(array, [indexes])]
  pullAt: function (array, indices) {
    let output = [];
    for (i = 0; i < indices.length; i++){
      output.push(array[indices[i]]);
    }
    return output;
  },

  // creates an array excluding all the specified values
  // without(array, [values])]
  without: function(array, valueA, valueB) {
    let output = [];
    for (i = 0; i < array.length; i++){
      if (array[i] !== valueA && array[i] !== valueB){
        output.push(array[i]);
      }
    }
    return output;
  },

  // returns an array with specified values excluded
  // [difference(array, [values])]
  difference: function(array, values) {
    for (i = 0; i < array.length; i++){
      for (j = 0; j < values.length; j++){
        if (array[i] === values[j]){
          array.splice(i, 1);
        }
      }
    }
    return array;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  // [zip([arrays])]
  zip: function (arrayA, arrayB) {
    let output = [];
    for (i = 0; i < arrayA.length; i++){
      output.push([arrayA[i], arrayB[i]])
    }
    return output;
  },

  // creates an array of grouped elements in their pre-zip configuration
  // [unzip(array)]
  unzip: function (array) {
    let partA = [];
    let partB = [];
    let output = [];
    for (i = 0; i < array.length; i++){
      partA.push(array[i][0]);
      partB.push(array[i][1]);
    }
    output.push(partA);
    output.push(partB);
    return output;
  },

  // creates an array of elements into groups of length of specified size
  // [chunk(array, [size=1])]
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  // [forEach(collection, [iteratee])]
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  // [map(collection, [iteratee])]
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  // [filter(collection, [predicate])]
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  // [reduce(collection, [iteratee], [accumulator])]
  reduce: function() {
    
  }
};
