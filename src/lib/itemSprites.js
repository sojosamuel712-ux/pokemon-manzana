import { itemCatalog } from '../data/itemCatalog'

const itemSpriteModules = import.meta.glob('../../items/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
})

const normalizeItemId = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

const itemSprites = new Map(
  Object.entries(itemSpriteModules).map(([path, url]) => {
    const fileName = path.split('/').pop()
    return [normalizeItemId(fileName.slice(1, -4)), url]
  }),
)

const getCatalogItem = (shopItem) => {
  const shopItemId = String(shopItem.id || '')
  const shopItemName = String(shopItem.name || '').toLowerCase()

  return itemCatalog.find((item) =>
    item.id === shopItemId ||
    shopItemId.endsWith(`-${item.id}`) ||
    item.name.toLowerCase() === shopItemName,
  )
}

export const getShopItemSprite = (shopItem) => {
  const catalogItem = getCatalogItem(shopItem)
  return catalogItem ? itemSprites.get(normalizeItemId(catalogItem.id)) : null
}

export const getShopItemDescription = (shopItem) =>
  shopItem.description || getCatalogItem(shopItem)?.description || ''