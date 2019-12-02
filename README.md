thebrain-uuid-slug
==================

[![npm](https://img.shields.io/npm/v/thebrain-uuid-slug.svg?cacheSeconds=1800&style=flat-square)](https://www.npmjs.com/package/thebrain-uuid-slug)

> Encode [TheBrain](https://www.thebrain.com/) uuids to 22 characters slugs and decode slugs to uuids

This is useful to decode slugs from [local thought url](https://youtu.be/0zsJ9bUuApk?t=65) and create same url from BrainId and ThoughtId.

## Install

```
npm install thebrain-uuid-slug
```

## Usage

### Create TheBrain local url

```js
const { uuidToSlug } = require('thebrain-uuid-slug')

const brainId = 'fd7bebf7-0ea0-40c9-b8c7-969e54c86136'
const thoughtId = 'd527957d-d57b-4af5-bb68-d527fd7d7b3b'

const localUrl = `brain://api.thebrain.com/${uuidToSlug(brainId)}/${uuidToSlug(thoughtId)}`

assert.equal(
  localUrl,
  'brain://api.thebrain.com/9-t7_aMOyUC4x5aeVMhhNg/fZUn1XvV9Uq3aNUn_X17Ow'
)
```

### Decode TheBrain local url slug to uuid

```js
const { slugToUuid } = require('thebrain-uuid-slug')

const slug = '9-t7_aMOyUC4x5aeVMhhNg'

assert.equal(slugToUuid(slug), 'fd7bebf7-0ea3-40c9-b8c7-969e54c86136')
```
