var assert         = require('assert'),
    transliterator = require('./');

describe('transliterator', function () {
  it('should map each character key to the correct character(s) value', function () {
    Object.keys(transliterator.characterMap).forEach(function (val) {
      assert.equal(transliterator(val), transliterator.characterMap[val]);
    });
  });

  it('should return an ascii string', function () {
    assert.equal(transliterator('i hatè véggiês'), 'i hate veggies');
    assert.equal(transliterator('À Á Â Ã Å Ǻ Ā Ă Ą Ǎ'), 'A A A A A A A A A A');
  });

  it('should remove characters that have not been defined', function () {
    assert.equal(transliterator('a'), 'a');
    assert.equal(transliterator('䫸 is ŗŒ'), ' is rOE');
  });

  it('should replace unhandled characters with what is passed in', function () {
    assert.equal(transliterator('', 'h'), 'h');
    assert.equal(transliterator('Ⓩሏ', '_'), '__');
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
});