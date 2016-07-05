import test = require('blue-tape');

import soundcloud = require('soundcloud');

test('soundcloud shape', t => {
  for (let key in soundcloud) {
    console.log(`soundcloud exposes ${key}`);
  }
  t.end();
});
