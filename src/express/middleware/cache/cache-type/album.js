const persist = require("node-persist");

// Temporarily cache a list of the albums owned by the user. This caches
// the name and base Url of the cover image. This ensures that the app
// is responsive when the user picks an album.
// Loading a full list of the albums owned by the user may take multiple
// requests. Caching this temporarily allows the user to go back to the
// album selection screen without having to wait for the requests to
// complete every time.
// Note that this data is only cached temporarily as per the 'best practices' in
// the developer documentation. Here it expires after 10 minutes.
const albumPersist = persist.create({
  dir: "persist-albumcache/",
  ttl: 600000 // 10 minutes
});
albumPersist.init();

const albumCache = ["albums", albumPersist];

module.exports = albumCache;
