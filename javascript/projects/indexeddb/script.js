"use strict";

import { IndexedDbTools } from "../../src/js/index.js";

function testIndexedDb() {
  const name = "store";

  const idb = new IndexedDbTools("idb", 1);

  idb.createObjectStore({ name });

  idb.createObjectStoreObject({
    name,
    object: { key: "key", value: "value" },
  });

  idb.readObjectStoreObject({
    name,
    object: { key: "key" },
    callback: (object) => console.log(object),
  });

  idb.updateObjectStoreObject({
    name,
    object: { key: "key", value: "changed-value" },
  });

  idb.deleteObjectStoreObject({
    name,
    object: { key: "key" },
  });
}

testIndexedDb();
