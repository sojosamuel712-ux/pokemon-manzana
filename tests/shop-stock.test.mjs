import assert from 'node:assert/strict'
import { itemCatalog } from '../src/data/itemCatalog.js'
import { localDb } from '../src/lib/localDb.js'

const storage = new Map()
globalThis.localStorage = {
  getItem: (key) => storage.get(key) || null,
  setItem: (key, value) => storage.set(key, value),
}

assert.equal(itemCatalog.length, 533)
assert.equal(new Set(itemCatalog.map((item) => item.id)).size, 533)
assert.ok(itemCatalog.every((item) => item.name && item.description))

const catalog = localDb.getShopCatalog()
assert.equal(catalog[0].quantity, 10)

localDb.saveShopCatalog([{ ...catalog[0], quantity: 1, enabled: 0 }])
assert.equal(localDb.reserveShopItem(catalog[0].id), null)

localDb.saveShopCatalog([{ ...catalog[0], quantity: 1, enabled: 1 }])
assert.equal(localDb.reserveShopItem(catalog[0].id).shopCatalog[0].quantity, 0)
assert.equal(localDb.reserveShopItem(catalog[0].id), null)

console.log('shop-stock test: ok')