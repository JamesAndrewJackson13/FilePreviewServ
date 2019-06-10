const persist = require("node-persist");

// Set up a cache for media items that expires after 55 minutes.
// This caches the baseUrls for media items that have been selected
// by the user for the photo frame. They are used to display photos in
// thumbnails and in the frame. The baseUrls are send to the frontend and
// displayed from there. The baseUrls are cached temporarily to ensure that the
// app is responsive and quick. Note that this data should only be stored for a
// short amount of time and that access to the URLs expires after 60 minutes.
// See the 'best practices' and 'acceptable use policy' in the developer
// documentation.
const mediaItemsPersist = persist.create({
  dir: "persist-mediaitemcache/",
  ttl: 3300000 // 55 minutes
});
mediaItemsPersist.init();

const mediaItemCache = ["mediaItems", mediaItemsPersist];

module.exports = mediaItemCache;
