pubtest
=======

###Description
PubTest lets you run JavaScript unit tests on the client-side
while displaying results on your browser console.

Read `src/pubtest.js` for all available assertions. Docs coming soon..

## Installation

##### Method 1: Manual
Add `build/pubtest.min.js` to your project.

##### Method 2: Bower
```
bower install pubtest --save-dev
```

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


#####`maths.js`
```javascript
var sexyFactorial = function(n) {
  return (n < 2) ? 1 : n * sexyFactorial(n-1);
};
```


#####`test-maths.js`
```javascript

// Call the test whatever you want
var test = new PubTest('Maths');

// Callback used for local scope
test.testCase(function() {

  test.assertEqual(sexyFactorial(0), 1,
    'factorial of 0 should equal 1');

  test.assertEqual(sexyFactorial(1), 1,
    'factorial of 1 should equal 1');

  test.assertEqual(sexyFactorial(5), 120,
    'factorial of 5 should equal 120');

});

// Show results in browser console (ctr+shift+j)
test.results();
```

### External Examples

- https://github.com/codenameyau/forest-ecosystem/tree/master/public/test
