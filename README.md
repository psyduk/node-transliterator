# Transliterator

Turn strings that contain cyrillic characters into ascii compliant text

## Installation

```javascript
npm install transliterator --save
```

## API

```javascript
var transliterator = require('transliterator');
```

* `transliterator(string, [replacement])`

```javascript
transliterator('źebŕa') // 'zebra'
transliterator('ǿ\'doules.') // 'o\'doules.'
transliterator('i hatè véggiês') // 'i hate veggies'

transliterator('a') // 'a'
transliterator('harǤold') // 'harold'
transliterator('䫸 is ŗŒ') // ' is rOE'

transliterator('', 'h') // 'h'
transliterator('Ⓩbad ሏ', '_') // '_bad _'
transliterator('պ պ պ պ', '_') // '_ _ _ _'
```