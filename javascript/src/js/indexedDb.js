"use strict";

import { EVENT } from "./index.js";

export const INDEXED_DB = {
  STATUS: {
    ABORT: "abort",
    CLOSE: "close",
    COMPLETE: "complete",
    ERROR: "error",
    SUCCESS: "success",
    UPGRADE_NEEDED: "upgrade-needed",
  },
  MODE: {
    READ_ONLY: "readonly",
    READ_WRITE: "readwrite",
  },
};

export class IndexedDbTools {
  indexedDb = {
    database: undefined,
    name: undefined,
    objectStore: {},
    request: undefined,
    status: undefined,
    version: undefined,
  };

  constructor(name, version) {
    this.indexedDb.name = name;
    this.indexedDb.version = version;
    this.indexedDb.request = this.openIndexedDb(name, version);

    this.indexedDb.request.addEventListener(EVENT.UPGRADE_NEEDED, (event) => {
      this.onIndexedDbOpen(event, { name, status: INDEXED_DB.STATUS.UPGRADE_NEEDED });
    });
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (event) =>
      this.onIndexedDbOpen(event, { name, status: INDEXED_DB.STATUS.SUCCESS })
    );
    this.indexedDb.request.addEventListener(EVENT.ERROR, (event) =>
      this.onIndexedDbOpen(event, { name, status: INDEXED_DB.STATUS.ERROR })
    );
  }

  get database() {
    return this.indexedDb.database;
  }

  get status() {
    return this.indexedDb.status;
  }

  openIndexedDb(name, version) {
    return window.indexedDB.open(name, version);
  }

  onIndexedDbOpen(_event, { name, status }) {
    this.indexedDb.status = status;
    if (this.indexedDb.status === INDEXED_DB.STATUS.ERROR) {
      throw new Error(`Invalid database name : '${name}' could not be opened`);
    }
    this.indexedDb.database = this.indexedDb.request.result;
  }

  onIndexedDbAddTransaction(_event, { status, transaction }) {
    this.indexedDb.status = status;
    if (this.indexedDb.status === INDEXED_DB.STATUS.ERROR) {
      throw new Error(`Invalid transaction : '${transaction}' object store could not be updated`);
    }
    this.indexedDb.database = this.indexedDb.request.result;
  }

  onIndexedDbObjectStoreRequest(_event, { request, status, transaction }) {
    this.indexedDb.status = status;
    if (this.indexedDb.status === INDEXED_DB.STATUS.ERROR) {
      throw new Error(
        `Invalid object store request : '${JSON.stringify(
          request
        )}' object could not be created at '${transaction}' object store`
      );
    }
    this.indexedDb.database = this.indexedDb.request.result;
  }

  createObjectStore(name, settings = { autoIncrement: true }) {
    this.indexedDb.request.addEventListener(EVENT.UPGRADE_NEEDED, (_event) => {
      if (this.indexedDb.objectStore[name]) {
        throw new Error(`Invalid object store name : '${name}' already exists`);
      }
      this.indexedDb.objectStore[name] = this.indexedDb.database.createObjectStore(name, settings);
    });
  }

  createObjectStoreObject({ objectStoreName, objectStoreObject: { key, value } }) {
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (_event) => {
      const transaction = this.indexedDb.database.transaction(
        [objectStoreName],
        INDEXED_DB.MODE.READ_WRITE
      );
      transaction.addEventListener(EVENT.COMPLETE, (event) =>
        this.onIndexedDbAddTransaction(event, {
          status: INDEXED_DB.STATUS.COMPLETE,
          transaction: objectStoreName,
        })
      );
      transaction.addEventListener(EVENT.ERROR, (event) =>
        this.onIndexedDbAddTransaction(event, {
          status: INDEXED_DB.STATUS.ERROR,
          transaction: objectStoreName,
        })
      );

      const objectStore = transaction.objectStore(objectStoreName);
      const objectStoreRequest = objectStore.add(value, key);
      objectStoreRequest.addEventListener(EVENT.SUCCESS, (event) =>
        this.onIndexedDbObjectStoreRequest(event, {
          request: { key, value },
          status: INDEXED_DB.STATUS.SUCCESS,
          transaction: objectStoreName,
        })
      );
      objectStoreRequest.addEventListener(EVENT.ERROR, (event) =>
        this.onIndexedDbObjectStoreRequest(event, {
          request: { key, value },
          status: INDEXED_DB.STATUS.ERROR,
          transaction: objectStoreName,
        })
      );
    });
  }

  readObjectStoreObject() {}

  updateObjectStoreObject() {}

  deleteObjectStoreObject() {}

  static deleteDatabase(name) {
    window.indexedDB.deleteDatabase(name);
  }

  static async deleteDatabases() {
    const databases = await window.indexedDB.databases();
    databases.forEach((db) => window.indexedDB.deleteDatabase(db.name));
  }
}

// const idb = new IndexedDbTools("idb", 1);
// idb.createObjectStore("store");
// idb.createObjectStoreObject({
//   objectStoreName: "store",
//   objectStoreObject: { key: "key", value: "value" },
// });
