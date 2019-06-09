import { createStorage } from "./add-storage.js";
import { album, storage, mediaItemCache } from "./cache-type";

const cacheMiddleware = async app =>
  createStorage(app)
    .add(album)
    .add(storage)
    .add(mediaItemCache)
    .build();

export { cacheMiddleware };
