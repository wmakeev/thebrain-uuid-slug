/**
 * Decode TheBrain slug to uuid
 */
export function slugToUuid(slug: string) {
  if (!slug || typeof slug !== 'string') {
    throw new Error('Slug is empty or not string')
  }

  if (slug.length !== 22) {
    throw new Error('Expected 22 chars slug')
  }

  const slugBase64 = slug.replace('-', '+').replace('_', '/') + '=='

  const hex = Buffer.from(slugBase64, 'base64').toString('hex')

  if (hex.length !== 32) {
    throw new Error('Not correct slug')
  }

  const uuid = [
    hex.substr(6, 2),
    hex.substr(4, 2),
    hex.substr(2, 2),
    hex.substr(0, 2),
    '-',
    hex.substr(10, 2),
    hex.substr(8, 2),
    '-',
    hex.substr(14, 2),
    hex.substr(12, 2),
    '-',
    hex.substr(16, 4),
    '-',
    hex.substr(20, 12)
  ].join('')

  return uuid
}

/**
 * Encode TheBrain uuid to slug
 */
export function uuidToSlug(uuid: string) {
  if (!uuid || typeof uuid !== 'string') {
    throw new Error('Uuid is empty or not string')
  }

  if (uuid.length !== 36) {
    throw new Error('Expected 36 chars uuid')
  }

  const hexStr = uuid.replace(/-/g, '')

  const reorderedHexStr = [
    hexStr.substr(6, 2),
    hexStr.substr(4, 2),
    hexStr.substr(2, 2),
    hexStr.substr(0, 2),
    hexStr.substr(10, 2),
    hexStr.substr(8, 2),
    hexStr.substr(14, 2),
    hexStr.substr(12, 2),
    hexStr.substr(16, 4),
    hexStr.substr(20, 12)
  ].join('')

  const slug = Buffer.from(reorderedHexStr, 'hex')
    .toString('base64')
    .replace('+', '-')
    .replace('/', '_')
    .substr(0, 22)

  if (slug.length !== 22) {
    throw new Error('Not correct uuid')
  }

  return slug
}
