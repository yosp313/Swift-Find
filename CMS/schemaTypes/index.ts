const headset = {
  name: 'headsets',
  title: 'Headsets',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'price_data',
      title: 'Price Data',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
}

export const schemaTypes = [headset]
