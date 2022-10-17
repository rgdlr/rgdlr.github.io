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

    this.indexedDb.request.addEventListener(EVENT.UPGRADE_NEEDED, (_event) => {
      this.#onIndexedDbOpen(_event, { name, status: INDEXED_DB.STATUS.UPGRADE_NEEDED });
    });
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (_event) =>
      this.#onIndexedDbOpen(_event, { name, status: INDEXED_DB.STATUS.SUCCESS })
    );
    this.indexedDb.request.addEventListener(EVENT.ERROR, (_event) =>
      this.#onIndexedDbOpen(_event, { name, status: INDEXED_DB.STATUS.ERROR })
    );
  }

  openIndexedDb(name, version) {
    return window.indexedDB.open(name, version);
  }

  #onIndexedDbAction(_event, { message, status }) {
    this.indexedDb.status = status;
    if (this.indexedDb.status === INDEXED_DB.STATUS.ERROR) {
      throw new Error(message);
    }
    this.indexedDb.database = this.indexedDb.request.result;
  }

  #onIndexedDbOpen(_event, { name, status }) {
    this.#onIndexedDbAction(_event, {
      status,
      message: `Invalid database name : '${name}' could not be opened`,
    });
  }

  #onIndexedDbAddTransaction(_event, { name, status }) {
    this.#onIndexedDbAction(_event, {
      status,
      message: `Invalid database transaction : '${name}' object store could not be updated`,
    });
  }

  #onIndexedDbObjectStoreRequest(_event, { name, request, status }) {
    this.#onIndexedDbAction(_event, {
      status,
      message: `Invalid object store request : '${JSON.stringify(
        request
      )}' object could not be created at '${name}' object store`,
    });
  }

  #onIndexedDbObjectStoreOpenCursor(_event, { callback, cursor, name, object: { key }, status }) {
    this.#onIndexedDbAction(_event, {
      status,
      message: `Invalid object store request : '${name}' object store could not be read`,
    });
    if (this.#shouldGetObjectFromStore({ key, cursor })) {
      callback({ key: cursor.result.key, value: cursor.result.value });
    }
    if (this.#hasMoreEntries(cursor)) {
      cursor.result.continue();
    }
  }

  #shouldGetObjectFromStore({ cursor, key }) {
    const isKeySearched = typeof key !== "undefined";
    const isKeyFound = key === cursor.result?.key;
    return this.#hasMoreEntries(cursor) && (!isKeySearched || isKeyFound);
  }

  #hasMoreEntries(cursor) {
    return cursor.result;
  }

  #getObjectStore({ mode, name }) {
    const transaction = this.indexedDb.database.transaction(name, mode);
    transaction.addEventListener(EVENT.COMPLETE, (event) =>
      this.#onIndexedDbAddTransaction(event, { status: INDEXED_DB.STATUS.COMPLETE, name })
    );
    transaction.addEventListener(EVENT.ERROR, (event) =>
      this.#onIndexedDbAddTransaction(event, { status: INDEXED_DB.STATUS.ERROR, name })
    );

    return transaction.objectStore(name);
  }

  #addObjectStoreEventListeners({ request, successCallback, errorCallback }) {
    request.addEventListener(EVENT.SUCCESS, successCallback);
    request.addEventListener(EVENT.ERROR, errorCallback);
  }

  createObjectStore({ name, settings = { autoIncrement: true } }) {
    this.indexedDb.request.addEventListener(EVENT.UPGRADE_NEEDED, (_event) => {
      if (this.indexedDb.objectStore[name]) {
        throw new Error(`Invalid object store name : '${name}' already exists`);
      }
      this.indexedDb.objectStore[name] = this.indexedDb.database.createObjectStore(name, settings);
    });
  }

  createObjectStoreObject({ name, object: { key, value } }) {
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (_event) => {
      const objectStore = this.#getObjectStore({ name, mode: INDEXED_DB.MODE.READ_WRITE });

      const request = objectStore.add(value, key);

      const successCallback = (event) =>
        this.#onIndexedDbObjectStoreRequest(event, {
          name,
          request: { key, value },
          status: INDEXED_DB.STATUS.SUCCESS,
        });

      const errorCallback = (event) =>
        this.#onIndexedDbObjectStoreRequest(event, {
          name,
          request: { key, value },
          status: INDEXED_DB.STATUS.ERROR,
        });

      this.#addObjectStoreEventListeners({ request, successCallback, errorCallback });
    });
  }

  readObjectStoreObject({ name, object: { key, value } = {}, callback }) {
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (_event) => {
      const objectStore = this.#getObjectStore({ name, mode: INDEXED_DB.MODE.READ_ONLY });
      const cursor = objectStore.openCursor();

      const successCallback = (event) =>
        this.#onIndexedDbObjectStoreOpenCursor(event, {
          callback,
          cursor,
          name,
          object: { key },
          status: INDEXED_DB.STATUS.SUCCESS,
        });

      const errorCallback = (event) =>
        this.#onIndexedDbObjectStoreOpenCursor(event, {
          callback,
          cursor,
          name,
          object: { key },
          status: INDEXED_DB.STATUS.ERROR,
        });

      this.#addObjectStoreEventListeners({ request: cursor, successCallback, errorCallback });
    });
  }

  updateObjectStoreObject({ name, object: { key, value } }) {
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (_event) => {
      const objectStore = this.#getObjectStore({ name, mode: INDEXED_DB.MODE.READ_WRITE });
      const request = objectStore.put(value, key);

      const successCallback = (event) =>
        this.#onIndexedDbObjectStoreRequest(event, {
          name,
          request: { key, value },
          status: INDEXED_DB.STATUS.SUCCESS,
        });

      const errorCallback = (event) =>
        this.#onIndexedDbObjectStoreRequest(event, {
          name,
          request: { key, value },
          status: INDEXED_DB.STATUS.ERROR,
        });

      this.#addObjectStoreEventListeners({ request, successCallback, errorCallback });
    });
  }

  deleteObjectStoreObject({ name, object: { key, value } }) {
    this.indexedDb.request.addEventListener(EVENT.SUCCESS, (_event) => {
      const objectStore = this.#getObjectStore({ name, mode: INDEXED_DB.MODE.READ_WRITE });
      const request = objectStore.delete(key);

      const successCallback = (event) =>
        this.#onIndexedDbObjectStoreRequest(event, {
          key,
          name,
          status: INDEXED_DB.STATUS.SUCCESS,
        });

      const errorCallback = (event) =>
        this.#onIndexedDbObjectStoreRequest(event, {
          key,
          name,
          status: INDEXED_DB.STATUS.ERROR,
        });

      this.#addObjectStoreEventListeners({ request, successCallback, errorCallback });
    });
  }

  static deleteDatabase(name) {
    window.indexedDB.deleteDatabase(name);
  }

  static async deleteDatabases() {
    const databases = await window.indexedDB.databases();
    databases.forEach((db) => window.indexedDB.deleteDatabase(db.name));
  }
}
