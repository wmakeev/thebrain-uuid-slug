import test from 'tape'

import { slugToUuid, uuidToSlug } from '.'

const SLUG = '9-t7_aAOyUC4x5aeVMhhNg'
const UUID = 'fd7bebf7-0ea0-40c9-b8c7-969e54c86136'

test('slugToUuid', t => {
  const uuid = slugToUuid(SLUG)

  t.equal(uuid, UUID, 'should convert uuid to slug')

  t.end()
})

test('uuidToSlug', t => {
  const slug = uuidToSlug(UUID)

  t.equal(slug, SLUG, 'should convert slug to uuid')

  t.end()
})

test('slugToUuid (errors)', t => {
  t.throws(() => {
    // @ts-ignore
    slugToUuid()
  }, /Slug is empty or not string/)

  t.throws(() => {
    slugToUuid('')
  }, /Slug is empty or not string/)

  t.throws(() => {
    // @ts-ignore
    slugToUuid(34)
  }, /Slug is empty or not string/)

  t.throws(() => {
    slugToUuid('foo')
  }, /Expected 22 chars slug/)

  t.throws(() => {
    slugToUuid('                      ')
  }, /Not correct slug/)

  t.end()
})

test('uuidToSlug (errors)', t => {
  t.throws(() => {
    // @ts-ignore
    uuidToSlug()
  }, /Uuid is empty or not string/)

  t.throws(() => {
    uuidToSlug('')
  }, /Uuid is empty or not string/)

  t.throws(() => {
    // @ts-ignore
    uuidToSlug(34)
  }, /Uuid is empty or not string/)

  t.throws(() => {
    uuidToSlug('foo')
  }, /Expected 36 chars uuid/)

  t.throws(() => {
    uuidToSlug('                                    ')
  }, /Not correct uuid/)

  t.end()
})

test('example #1', t => {
  const brainId = 'fd7bebf7-0ea3-40c9-b8c7-969e54c86136'
  const thoughtId = 'd527957d-d57b-4af5-b768-d527fd7d7b3b'

  const localUrl = `brain://api.thebrain.com/${uuidToSlug(
    brainId
  )}/${uuidToSlug(thoughtId)}`

  t.equal(
    localUrl,
    'brain://api.thebrain.com/9-t7_aMOyUC4x5aeVMhhNg/fZUn1XvV9Uq3aNUn_X17Ow'
  )

  t.end()
})

test('example #2', t => {
  const slug = '9-t7_aMOyUC4x5aeVMhhNg'

  t.equal(slugToUuid(slug), 'fd7bebf7-0ea3-40c9-b8c7-969e54c86136')

  t.end()
})
