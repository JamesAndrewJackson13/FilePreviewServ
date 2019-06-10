const persist = require("node-persist");

// For each user, the app stores the last search parameters or album
// they loaded into the photo frame. The next time they log in
// (or when the cached data expires), this search is resubmitted.
// This keeps the data fresh. Instead of storing the search parameters,
// we could also store a list of the media item ids and refresh them,
// but resubmitting the search query ensures that the photo frame displays
// any new images that match the search criteria (or that have been added
// to an album).
const lastSeenPersist = persist.create({ dir: "persist-storage/" });
lastSeenPersist.init();

const lastSeenCache = ["lastSeen", lastSeenPersist];

module.exports = lastSeenCache;
