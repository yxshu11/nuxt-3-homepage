export default defineAppConfig({
  bar: 'base-homepage',
  baz: 'base-homepage',
  array: () => [
    'base-homepage',
    'base-homepage',
    'base-homepage'
  ],
  arrayNested: {
    nested: {
      array: [
        'base-homepage',
        'base-homepage',
        'base-homepage'
      ]
    }
  }
})
