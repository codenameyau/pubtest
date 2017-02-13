pubtest
=======

###Description
Write and run JavaScript unit tests in your browser console. It's a quick
way to test ES5 code without a module loader.

![pubtest-screenshot](https://cloud.githubusercontent.com/assets/3826772/22871237/07dd858e-f17d-11e6-8531-b2dbc530a9bd.png)

Read [src/pubtest.js](https://github.com/codenameyau/pubtest/blob/master/src/pubtest.js#L45-L170) for all available assertions. Docs coming soon...

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
    <script src="math.js"></script>

    <!-- Test suite -->
    <script src="pubtest.min.js"></script>
    <script src="test-math.js"></script>
  </body>

</html>
```


#####`math.js`
```javascript
var sexyFactorial = function(n) {
  return (n < 2) ? 1 : n * sexyFactorial(n-1);
};
```


#####`test-math.js`
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
