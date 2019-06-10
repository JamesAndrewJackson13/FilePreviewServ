const createStorage = require("./add-storage.js");
const { album, storage, mediaItemCache } = require("./cache-type");

const cacheMiddleware = async app =>
  createStorage(app)
    .add(album)
    .add(storage)
    .add(mediaItemCache)
    .build();

module.exports.cacheMiddleware = cacheMiddleware;
