var assert         = require('assert'),
    transliterator = require('./');

describe('transliterator', function () {
  it('should return null when passing in null', function () {
    var test;
    try {
      transliterator(null);
    } catch (e) {
      test = e;
    }
    assert.equal(test, null);
  });

  it('should return undefined when passing in undefined', function () {
    var test;
    try {
      transliterator(undefined);
    } catch (e) {
      test = e;
    }
    assert.equal(test, undefined);
  });

  it('should throw an error when passing in non strings', function () {
    var test;
    try {
      transliterator([]);
    } catch (e) {
      test = e;
    }
    assert.notEqual(test, undefined);
  });

  it('should map each character key to the correct character(s) value', function () {
    Object.keys(transliterator.characterMap).forEach(function (val) {
      assert.equal(transliterator(val), transliterator.characterMap[val]);
    });
  });

  it('should return an ascii string', function () {
    assert.equal(transliterator('1234!'), '1234!');
    assert.equal(transliterator('źebŕa'), 'zebra');
    assert.equal(transliterator('ǿ\'doules.'), 'o\'doules.');
    assert.equal(transliterator('i hatè véggiês'), 'i hate veggies');
    assert.equal(transliterator('À Á Â Ã Å Ǻ Ā Ă Ą Ǎ'), 'A A A A A A A A A A');
  });

  it('should remove characters that have not been defined', function () {
    assert.equal(transliterator('a'), 'a');
    assert.equal(transliterator('ޢ!'), '!');
    assert.equal(transliterator('պ պ պ պ'), '   ');
    assert.equal(transliterator('harǤold'), 'harold');
    assert.equal(transliterator('䫸 is ŗŒ'), ' is rOE');
  });

  it('should replace unhandled characters with what is passed in', function () {
    assert.equal(transliterator('', 'h'), 'h');
    assert.equal(transliterator('ޢ', '!'), '!');
    assert.equal(transliterator('14141ྠ', 1), '141411');
    assert.equal(transliterator('Ⓩbad ሏ', '_'), '_bad _');
    assert.equal(transliterator('պ պ պ պ', '_'), '_ _ _ _');
  });
});