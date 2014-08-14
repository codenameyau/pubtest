pubtest
=======

###Description
PubTest lets you run JavaScript unit tests on the client-side
while displaying results on your browser console.

Documentation coming soon.

Read `src/pubtest.js` for now. It's very short.

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

###External Examples

PubTest is used for my weekend side projects,
[Coding Cafe](https://github.com/codenameyau/coding-cafe/tree/master/public/test).

Feel free to look around the `public/test` directory to see how it's used.
