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
