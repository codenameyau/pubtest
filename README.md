pubtest
=======

###Description
Run JavaScript unit tests with a modern browser console.

PubTest contains the simple essentials for unit testing on the client side 
without requiring node dependencies or conforming to a TDD/BDD style syntax.


##Installation

#####Method 1: Manual
Add `build/pubtest.min.js` to your project.

#####Method 2: Bower
Run: `bower install pubtest --save-dev`


##Quick Guide

#####`index.html`
```html
<!doctype html>
<html>

  <body>
    <!-- JavaScript source -->
    <script src="maths.js"></script>

    <!-- Test suite -->
    <script src="pubtest.min.js"></script>
    <script src="test-maths.js"></script>
    
  </body>
</html>
```


#####`main.js`
```javascript
var factorial = function(n) {
  return (n < 2) ? 1 : n * factorial(n-1);
};
```


#####`test.js`
```javascript

// Call the test whatever you want
var test = new PubTest('Maths');

// Callback used for local scope
test.testCase(function() {

  test.assertEqual(factorial(0), 1, 
    'factorial of 0 should equal 1');

  test.assertEqual(factorial(1), 1,
    'factorial of 1 should equal 1');
    
  test.assertEqual(factorial(5), 120,
    'factorial of 5 should equal 120');
    
});

// Show results in browser console (ctr+shift+j)
test.results();
```

###External Examples

PubTest is used for my weekend side projects,
[Coding Cafe](https://github.com/codenameyau/coding-cafe/tree/master/public/test).

Feel free to look around the `public/test` directory to see how it's used.
