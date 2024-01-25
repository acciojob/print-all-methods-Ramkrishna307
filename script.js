//your JS code here. If required.
function allMethods() {
  //write your code here
	  const methodNames = Object.getOwnPropertyNames(Math)
    .filter(item => typeof Math[item] === 'function')
    .join(', ');

  return methodNames;
}

alert(allMethods());
