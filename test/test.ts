import test = require('blue-tape');

import soundcloud = require('soundcloud');

test('soundcloud shape', t => {
  t.assert(soundcloud.initialize, 'soundcloud.initialize exists.');
  t.assert(soundcloud.get, 'soundcloud.get exists.');
  t.assert(soundcloud.post, 'soundcloud.post exists.');
  t.assert(soundcloud.put, 'soundcloud.put exists.');
  t.assert(soundcloud.delete, 'soundcloud.delete exists.');
  t.assert(soundcloud.upload, 'soundcloud.upload exists.');
  t.assert(soundcloud.connect, 'soundcloud.connect exists.');
  t.assert(soundcloud.isConnected, 'soundcloud.isConnected exists.');
  t.assert(soundcloud.oEmbed, 'soundcloud.oEmbed exists.');
  t.assert(soundcloud.resolve, 'soundcloud.resolve exists.');
  t.assert(soundcloud.Recorder, 'soundcloud.Recorder exists.');
  t.assert(soundcloud.Promise, 'soundcloud.Promise exists.');
  t.assert(soundcloud.stream, 'soundcloud.stream exists.');
  t.assert(soundcloud.connectCallback, 'soundcloud.connectCallback exists.');
  t.end();
});
