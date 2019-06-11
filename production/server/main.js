require("source-map-support").install();
module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/static/"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 5));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports) {
      module.exports = require("~config");

      /***/
    },
    /* 1 */
    /***/ function(module, exports) {
      module.exports = require("node-persist");

      /***/
    },
    /* 2 */
    /***/ function(module, exports) {
      module.exports = require("express");

      /***/
    },
    /* 3 */
    /***/ function(module, exports) {
      module.exports = require("~express/middleware/auth/passport.js");

      /***/
    },
    /* 4 */
    /***/ function(module, exports) {
      module.exports = require("~marko");

      /***/
    },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {
      __webpack_require__(6);

      // import { createServer, runServer } from "./server-actions.js";
      // import { addMiddleware } from "./middleware";
      // import { addRoutes } from "./route";
      const { createServer, runServer } = __webpack_require__(7);
      const addMiddleware = __webpack_require__(8);
      const addRoutes = __webpack_require__(30);

      const init = async () => {
        let app = await createServer();
        await addMiddleware(app);
        await addRoutes(app);
        await runServer(app);
      };

      init().catch(console.error);

      /***/
    },
    /* 6 */
    /***/ function(module, exports) {
      const fER = (a, [k, v]) => {
        a[k] = v;
        return a;
      };
      Object.fromEntries =
        Object.fromEntries || (entries => entries.reduce(fER, {}));

      /***/
    },
    /* 7 */
    /***/ function(module, exports, __webpack_require__) {
      // import { config } from "/sandbox/src/config.js";
      // import express from "express";
      const config = __webpack_require__(0);
      const express = __webpack_require__(2);

      const createServer = async () =>
        console.log("MAKING SERVER") || new express();
      const runServer = async app =>
        console.log("MAKING SERVER LISTEN") || app.listen(config.port);

      module.exports = { createServer, runServer };

      /***/
    },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {
      // const cacheMiddleware = require("./cache");
      // const authMiddleware = require("./auth");
      // const sessionMiddleware = require("./session");
      const { cacheMiddleware } = __webpack_require__(9);
      const { authMiddleware } = __webpack_require__(15);
      const { sessionMiddleware } = __webpack_require__(20);
      const { loggingMiddleware } = __webpack_require__(25);

      const middlewareList = [
        {
          order: 0,
          name: "logging",
          middleware: loggingMiddleware
        },
        {
          order: 200,
          name: "cached",
          middleware: cacheMiddleware
        },
        {
          order: 400,
          name: "session",
          middleware: sessionMiddleware
        },
        {
          order: 600,
          name: "auth",
          middleware: authMiddleware
        }
      ];

      const middlewareSort = (a, b) => a.order - b.order;
      middlewareList.sort(middlewareSort);

      const addMiddleware = async app => {
        console.log("ADDING MIDDLE");
        for (const { name, order, middleware } of middlewareList) {
          console.log(`       NAME: ${name}\n      ORDER: ${order}\n`);
          await middleware(app);
        }
        return app;
      };

      module.exports = addMiddleware;

      /***/
    },
    /* 9 */
    /***/ function(module, exports, __webpack_require__) {
      const createStorage = __webpack_require__(10);
      const { album, storage, mediaItemCache } = __webpack_require__(11);

      const cacheMiddleware = async app =>
        createStorage(app)
          .add(album)
          .add(storage)
          .add(mediaItemCache)
          .build();

      module.exports.cacheMiddleware = cacheMiddleware;

      /***/
    },
    /* 10 */
    /***/ function(module, exports) {
      class makeAppStorage {
        constructor(app) {
          this.app = app;
          this.storeEntries = [];
        }

        add(entry) {
          this.storeEntries.push(entry);
          return this;
        }

        createExpressFunction() {
          const cache = Object.fromEntries(this.storeEntries);
          return (req, res, next) => {
            res.locals.cache = cache;
            next();
          };
        }

        build() {
          this.app.use(this.createExpressFunction());
          return this.app;
        }
      }

      const createStorage = app => new makeAppStorage(app);

      module.exports = createStorage;

      /***/
    },
    /* 11 */
    /***/ function(module, exports, __webpack_require__) {
      const album = __webpack_require__(12);
      const storage = __webpack_require__(13);
      const mediaItemCache = __webpack_require__(14);

      module.exports = { album, storage, mediaItemCache };

      /***/
    },
    /* 12 */
    /***/ function(module, exports, __webpack_require__) {
      const persist = __webpack_require__(1);

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

      /***/
    },
    /* 13 */
    /***/ function(module, exports, __webpack_require__) {
      const persist = __webpack_require__(1);

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

      /***/
    },
    /* 14 */
    /***/ function(module, exports, __webpack_require__) {
      const persist = __webpack_require__(1);

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

      /***/
    },
    /* 15 */
    /***/ function(module, exports, __webpack_require__) {
      const passport = __webpack_require__(16);

      const authMiddleware = async app => {
        app.use(passport.initialize());
        app.use(passport.session());
        return app;
      };

      module.exports.authMiddleware = authMiddleware;

      /***/
    },
    /* 16 */
    /***/ function(module, exports, __webpack_require__) {
      const passport = __webpack_require__(17);
      const Strategy = __webpack_require__(18).Strategy;
      const config = __webpack_require__(19);

      const handleSerialize = (user, done) => done(null, user);
      const handlePassportUse = (token, rt, profile, done) =>
        done(null, { profile, token });

      const strategyConfig = {
        clientID: config.oAuthClientID,
        clientSecret: config.oAuthClientSecret,
        callbackURL: config.oAuthCallbackUrl,
        userProfileURL: config.userProfileURL
      };

      const effectiveStratagy = new Strategy(strategyConfig, handlePassportUse);

      passport.serializeUser(handleSerialize);
      passport.deserializeUser(handleSerialize);
      passport.use(effectiveStratagy);

      module.exports = passport;

      /***/
    },
    /* 17 */
    /***/ function(module, exports) {
      module.exports = require("passport");

      /***/
    },
    /* 18 */
    /***/ function(module, exports) {
      module.exports = require("passport-google-oauth20");

      /***/
    },
    /* 19 */
    /***/ function(module, exports) {
      const googleSecretInfo = JSON.parse(process.env.GOOGLE_AUTH_JSON).web;

      const config = {
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
        oAuthClientID: googleSecretInfo.client_id,
        oAuthClientSecret: googleSecretInfo.client_secret,
        oAuthCallbackUrl: googleSecretInfo.redirect_uris[0],
        scopes: ["profile"],
        port: 8080,
        photosToLoad: 150,
        searchPageSize: 100,
        albumPageSize: 50
      };

      const firebaseConfig = {
        apiKey: "AIzaSyDZkgQOsci95AU8ED555we6Jvmt97JuwSE",
        authDomain: "file-preview-creator.firebaseapp.com",
        databaseURL: "https://file-preview-creator.firebaseio.com",
        projectId: "file-preview-creator",
        storageBucket: "file-preview-creator.appspot.com",
        messagingSenderId: "512751646365",
        appId: "1:512751646365:web:ea38106612ceec93"
      };

      module.exports = { config, firebaseConfig };

      /***/
    },
    /* 20 */
    /***/ function(module, exports, __webpack_require__) {
      const initSessionMiddleware = __webpack_require__(21);
      const addSessionDataToLocal = __webpack_require__(24);

      const sessionMiddleware = async app => {
        initSessionMiddleware(app);
        addSessionDataToLocal(app);
        return app;
      };

      module.exports.sessionMiddleware = sessionMiddleware;

      /***/
    },
    /* 21 */
    /***/ function(module, exports, __webpack_require__) {
      const session = __webpack_require__(22);
      const sessionFileStore = __webpack_require__(23);

      const fileStore = sessionFileStore(session);
      const sessionInstance = session({
        resave: true,
        saveUninitialized: true,
        store: new fileStore({}),
        secret: "photo frame sample"
      });

      const initSessionMiddleware = app => app.use(sessionInstance);

      module.exports = initSessionMiddleware;

      /***/
    },
    /* 22 */
    /***/ function(module, exports) {
      module.exports = require("express-session");

      /***/
    },
    /* 23 */
    /***/ function(module, exports) {
      module.exports = require("session-file-store");

      /***/
    },
    /* 24 */
    /***/ function(module, exports) {
      // Middleware that adds the user of this session as a local variable,
      // so it can be displayed on all pages when logged in.
      const sessionDataAdder = (req, res, next) => {
        res.locals.name = "-";
        if (req.user && req.user.profile && req.user.profile.name) {
          res.locals.name =
            req.user.profile.name.givenName || req.user.profile.displayName;
        }

        res.locals.avatarUrl = "";
        if (req.user && req.user.profile && req.user.profile.photos) {
          res.locals.avatarUrl = req.user.profile.photos[0].value;
        }
        next();
      };

      const addSessionDataToLocal = app => app.use(sessionDataAdder);

      module.exports = addSessionDataToLocal;

      /***/
    },
    /* 25 */
    /***/ function(module, exports, __webpack_require__) {
      const { logger, transports } = __webpack_require__(26);
      const expressWinston = __webpack_require__(28);

      module.exports.loggingMiddleware = app => {
        // Enable extensive logging if the DEBUG environment variable is set.
        if (process.env.DEBUG) {
          // Enable express.js debugging. This logs all received requests.
          app.use(
            expressWinston.logger({
              transports: [transports],
              winstonInstance: logger
            })
          );
          // Enable request debugging.
          __webpack_require__(29).debug = true;
        }
      };

      /***/
    },
    /* 26 */
    /***/ function(module, exports, __webpack_require__) {
      const winston = __webpack_require__(27);

      // Console transport for winton.
      const consoleTransport = new winston.transports.Console();

      const logger = winston.createLogger({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        ),
        transports: [consoleTransport]
      });

      // Enable extensive logging if the DEBUG environment variable is set.
      if (process.env.DEBUG) {
        // Print all winston log levels.
        logger.level = "silly";
      } else {
        // By default, only print all 'verbose' log level messages or below.
        logger.level = "verbose";
      }

      module.exports.logger = logger;
      module.exports.transports = [consoleTransport];

      /***/
    },
    /* 27 */
    /***/ function(module, exports) {
      module.exports = require("winston");

      /***/
    },
    /* 28 */
    /***/ function(module, exports) {
      module.exports = require("express-winston");

      /***/
    },
    /* 29 */
    /***/ function(module, exports) {
      module.exports = require("request-promise");

      /***/
    },
    /* 30 */
    /***/ function(module, exports, __webpack_require__) {
      // import baseRoute from "./base";
      // const baseRoute = require("./base");
      const request = __webpack_require__(31);
      const serveStatic = __webpack_require__(32);
      const authRoute = __webpack_require__(33);
      const { logger } = __webpack_require__(38);
      const config = __webpack_require__(0);
      const { routeMarkoPages } = __webpack_require__(39);

      const addRoutes = app => {
        console.log("ADDING ROUTES");
        app.use("/static", serveStatic("dist/client"));
        // app.use("/", baseRoute);
        app.use("/", authRoute);
        routeMarkoPages(app);

        // Handles form submissions from the search page.
        // The user has made a selection and wants to load photos into the photo frame
        // from a search query.
        // Construct a filter and submit it to the Library API in
        // libraryApiSearch(authToken, parameters).
        // Returns a list of media items if the search was successful, or an error
        // otherwise.
        app.post("/loadFromSearch", async (req, res) => {
          const authToken = req.user.token;

          logger.info("Loading images from search.");
          logger.silly("Received form data: ", req.body);

          // Construct a filter for photos.
          // Other parameters are added below based on the form submission.
          const filters = {
            contentFilter: {},
            mediaTypeFilter: { mediaTypes: ["PHOTO"] }
          };

          if (req.body.includedCategories) {
            // Included categories are set in the form. Add them to the filter.
            filters.contentFilter.includedContentCategories = [
              req.body.includedCategories
            ];
          }

          if (req.body.excludedCategories) {
            // Excluded categories are set in the form. Add them to the filter.
            filters.contentFilter.excludedContentCategories = [
              req.body.excludedCategories
            ];
          }

          // Add a date filter if set, either as exact or as range.
          if (req.body.dateFilter == "exact") {
            filters.dateFilter = {
              dates: constructDate(
                req.body.exactYear,
                req.body.exactMonth,
                req.body.exactDay
              )
            };
          } else if (req.body.dateFilter == "range") {
            filters.dateFilter = {
              ranges: [
                {
                  startDate: constructDate(
                    req.body.startYear,
                    req.body.startMonth,
                    req.body.startDay
                  ),
                  endDate: constructDate(
                    req.body.endYear,
                    req.body.endMonth,
                    req.body.endDay
                  )
                }
              ]
            };
          }

          // Create the parameters that will be submitted to the Library API.
          const parameters = { filters };

          // Submit the search request to the API and wait for the result.
          const data = await libraryApiSearch(authToken, parameters);

          // Return and cache the result and parameters.
          const userId = req.user.profile.id;
          returnPhotos(res, userId, data, parameters);
        });

        // Handles selections from the album page where an album ID is submitted.
        // The user has selected an album and wants to load photos from an album
        // into the photo frame.
        // Submits a search for all media items in an album to the Library API.
        // Returns a list of photos if this was successful, or an error otherwise.
        app.post("/loadFromAlbum", async (req, res) => {
          const albumId = req.body.albumId;
          const userId = req.user.profile.id;
          const authToken = req.user.token;

          logger.info(`Importing album: ${albumId}`);

          // To list all media in an album, construct a search request
          // where the only parameter is the album ID.
          // Note that no other filters can be set, so this search will
          // also return videos that are otherwise filtered out in libraryApiSearch(..).
          const parameters = { albumId };

          // Submit the search request to the API and wait for the result.
          const data = await libraryApiSearch(authToken, parameters);

          returnPhotos(res, userId, data, parameters);
        });

        // Returns all albums owned by the user.
        app.get("/getAlbums", async (req, res) => {
          logger.info("Loading albums");
          const userId = req.user.profile.id;

          // Attempt to load the albums from cache if available.
          // Temporarily caching the albums makes the app more responsive.
          const cachedAlbums = await res.local.albumCache.getItem(userId);
          if (cachedAlbums) {
            logger.verbose("Loaded albums from cache.");
            res.status(200).send(cachedAlbums);
          } else {
            logger.verbose("Loading albums from API.");
            // Albums not in cache, retrieve the albums from the Library API
            // and return them
            const data = await libraryApiGetAlbums(req.user.token);
            if (data.error) {
              // Error occured during the request. Albums could not be loaded.
              returnError(res, data);
              // Clear the cached albums.
              res.local.albumCache.removeItem(userId);
            } else {
              // Albums were successfully loaded from the API. Cache them
              // temporarily to speed up the next request and return them.
              // The cache implementation automatically clears the data when the TTL is
              // reached.
              res.status(200).send(data);
              res.local.albumCache.setItemSync(userId, data);
            }
          }
        });

        // Returns a list of the media items that the user has selected to
        // be shown on the photo frame.
        // If the media items are still in the temporary cache, they are directly
        // returned, otherwise the search parameters that were used to load the photos
        // are resubmitted to the API and the result returned.
        app.get("/getQueue", async (req, res) => {
          const userId = req.user.profile.id;
          const authToken = req.user.token;

          logger.info("Loading queue.");

          // Attempt to load the queue from cache first. This contains full mediaItems
          // that include URLs. Note that these expire after 1 hour. The TTL on this
          // cache has been set to this limit and it is cleared automatically when this
          // time limit is reached. Caching this data makes the app more responsive,
          // as it can be returned directly from memory whenever the user navigates
          // back to the photo frame.
          const cachedPhotos = await res.local.mediaItemCache.getItem(userId);
          const stored = await res.local.storage.getItem(userId);

          if (cachedPhotos) {
            // Items are still cached. Return them.
            logger.verbose("Returning cached photos.");
            res
              .status(200)
              .send({ photos: cachedPhotos, parameters: stored.parameters });
          } else if (stored && stored.parameters) {
            // Items are no longer cached. Resubmit the stored search query and return
            // the result.
            logger.verbose(
              `Resubmitting filter search ${JSON.stringify(stored.parameters)}`
            );
            const data = await libraryApiSearch(authToken, stored.parameters);
            returnPhotos(res, userId, data, stored.parameters);
          } else {
            // No data is stored yet for the user. Return an empty response.
            // The user is likely new.
            logger.verbose("No cached data.");
            res.status(200).send({});
          }
        });

        // If the supplied result is succesful, the parameters and media items are
        // cached.
        // Helper method that returns and caches the result from a Library API search
        // query returned by libraryApiSearch(...). If the data.error field is set,
        // the data is handled as an error and not cached. See returnError instead.
        // Otherwise, the media items are cached, the search parameters are stored
        // and they are returned in the response.
        function returnPhotos(res, userId, data, searchParameter) {
          if (data.error) {
            returnError(res, data);
          } else {
            // Remove the pageToken and pageSize from the search parameters.
            // They will be set again when the request is submitted but don't need to be
            // stored.
            delete searchParameter.pageToken;
            delete searchParameter.pageSize;

            // Cache the media items that were loaded temporarily.
            res.local.mediaItemCache.setItemSync(userId, data.photos);
            // Store the parameters that were used to load these images. They are used
            // to resubmit the query after the cache expires.
            res.local.storage.setItemSync(userId, {
              parameters: searchParameter
            });

            // Return the photos and parameters back int the response.
            res
              .status(200)
              .send({ photos: data.photos, parameters: searchParameter });
          }
        }

        // Responds with an error status code and the encapsulated data.error.
        function returnError(res, data) {
          // Return the same status code that was returned in the error or use 500
          // otherwise.
          const statusCode = data.error.code || 500;
          // Return the error.
          res.status(statusCode).send(data.error);
        }

        // Constructs a date object required for the Library API.
        // Undefined parameters are not set in the date object, which the API sees as a
        // wildcard.
        function constructDate(year, month, day) {
          const date = {};
          if (year) date.year = year;
          if (month) date.month = month;
          if (day) date.day = day;
          return date;
        }
        // Submits a search request to the Google Photos Library API for the given
        // parameters. The authToken is used to authenticate requests for the API.
        // The minimum number of expected results is configured in config.photosToLoad.
        // This function makes multiple calls to the API to load at least as many photos
        // as requested. This may result in more items being listed in the response than
        // originally requested.
        async function libraryApiSearch(authToken, parameters) {
          let photos = [];
          let nextPageToken = null;
          let error = null;

          parameters.pageSize = config.searchPageSize;

          try {
            // Loop while the number of photos threshold has not been met yet
            // and while there is a nextPageToken to load more items.
            do {
              logger.info(
                `Submitting search with parameters: ${JSON.stringify(
                  parameters
                )}`
              );

              // Make a POST request to search the library or album
              const result = await request.post(
                config.apiEndpoint + "/v1/mediaItems:search",
                {
                  headers: { "Content-Type": "application/json" },
                  json: parameters,
                  auth: { bearer: authToken }
                }
              );

              logger.debug(`Response: ${result}`);

              // The list of media items returned may be sparse and contain missing
              // elements. Remove all invalid elements.
              // Also remove all elements that are not images by checking its mime type.
              // Media type filters can't be applied if an album is loaded, so an extra
              // filter step is required here to ensure that only images are returned.
              const items =
                result && result.mediaItems
                  ? result.mediaItems
                      .filter(x => x) // Filter empty or invalid items.
                      // Only keep media items with an image mime type.
                      .filter(
                        x => x.mimeType && x.mimeType.startsWith("image/")
                      )
                  : [];

              photos = photos.concat(items);

              // Set the pageToken for the next request.
              parameters.pageToken = result.nextPageToken;

              logger.verbose(
                `Found ${items.length} images in this request. Total images: ${
                  photos.length
                }`
              );

              // Loop until the required number of photos has been loaded or until there
              // are no more photos, ie. there is no pageToken.
            } while (
              photos.length < config.photosToLoad &&
              parameters.pageToken != null
            );
          } catch (err) {
            // If the error is a StatusCodeError, it contains an error.error object that
            // should be returned. It has a name, statuscode and message in the correct
            // format. Otherwise extract the properties.
            error = err.error.error || {
              name: err.name,
              code: err.statusCode,
              message: err.message
            };
            logger.error(error);
          }

          logger.info("Search complete.");
          return { photos, parameters, error };
        }

        // Returns a list of all albums owner by the logged in user from the Library
        // API.
        async function libraryApiGetAlbums(authToken) {
          let albums = [];
          let nextPageToken = null;
          let error = null;
          let parameters = { pageSize: config.albumPageSize };

          try {
            // Loop while there is a nextpageToken property in the response until all
            // albums have been listed.
            do {
              logger.verbose(
                `Loading albums. Received so far: ${albums.length}`
              );
              // Make a GET request to load the albums with optional parameters (the
              // pageToken if set).
              const result = await request.get(
                config.apiEndpoint + "/v1/albums",
                {
                  headers: { "Content-Type": "application/json" },
                  qs: parameters,
                  json: true,
                  auth: { bearer: authToken }
                }
              );

              logger.debug(`Response: ${result}`);

              if (result && result.albums) {
                logger.verbose(
                  `Number of albums received: ${result.albums.length}`
                );
                // Parse albums and add them to the list, skipping empty entries.
                const items = result.albums.filter(x => !!x);

                albums = albums.concat(items);
              }
              parameters.pageToken = result.nextPageToken;
              // Loop until all albums have been listed and no new nextPageToken is
              // returned.
            } while (parameters.pageToken != null);
          } catch (err) {
            // If the error is a StatusCodeError, it contains an error.error object that
            // should be returned. It has a name, statuscode and message in the correct
            // format. Otherwise extract the properties.
            error = err.error.error || {
              name: err.name,
              code: err.statusCode,
              message: err.message
            };
            logger.error(error);
          }

          logger.info("Albums loaded.");
          return { albums, error };
        }

        return app;
      };

      module.exports = addRoutes;

      /***/
    },
    /* 31 */
    /***/ function(module, exports) {
      module.exports = require("request");

      /***/
    },
    /* 32 */
    /***/ function(module, exports) {
      module.exports = require("serve-static");

      /***/
    },
    /* 33 */
    /***/ function(module, exports, __webpack_require__) {
      const { Router } = __webpack_require__(2);
      const { paths } = __webpack_require__(34);

      const path = "/auth";
      const base = Router().route(path);
      paths.forEach(({ method, path, resolver }) =>
        base[method](path, resolver)
      );

      module.exports = base;

      /***/
    },
    /* 34 */
    /***/ function(module, exports, __webpack_require__) {
      const { logout } = __webpack_require__(35);
      const { googleLogin } = __webpack_require__(36);
      const { googleLoginCallback } = __webpack_require__(37);

      module.exports.paths = [logout, googleLogin, googleLoginCallback];

      /***/
    },
    /* 35 */
    /***/ function(module, exports) {
      module.exports.logout = {
        method: "get",
        path: "/logout",
        resolver: (req, res) => {
          req.logout();
          req.session.destroy();
          res.redirect("/");
        }
      };

      /***/
    },
    /* 36 */
    /***/ function(module, exports, __webpack_require__) {
      const { config } = __webpack_require__(0);
      const { passport } = __webpack_require__(3);

      module.exports.googleLogin = {
        method: "get",
        path: "/google",
        resolver: passport.authenticate("google", {
          scope: config.scopes,
          failureFlash: true, // Display errors to the user.
          session: true
        })
      };

      /***/
    },
    /* 37 */
    /***/ function(module, exports, __webpack_require__) {
      const { passport } = __webpack_require__(3);

      module.exports.googleLoginCallback = {
        method: "get",
        path: "/google/callback",
        resolver: [
          passport.authenticate("google", {
            failureRedirect: "/",
            failureFlash: true,
            session: true
          }),
          function(req, res) {
            res.send(`<script>window.close()</script>`);
          }
        ]
      };

      /***/
    },
    /* 38 */
    /***/ function(module, exports) {
      module.exports = require("~express/middleware/logging");

      /***/
    },
    /* 39 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "routeMarkoPages",
        function() {
          return routeMarkoPages;
        }
      );
      /* harmony import */ var _marko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4
      );
      /* harmony import */ var _marko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _marko__WEBPACK_IMPORTED_MODULE_0__
      );

      const routeMarkoPages = app => {
        app.get("/", (req, res) => {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          _marko__WEBPACK_IMPORTED_MODULE_0__["Home"].render({}, res);
        });
        return app;
      };

      /***/
    }
    /******/
  ]
);
//# sourceMappingURL=main.js.map
