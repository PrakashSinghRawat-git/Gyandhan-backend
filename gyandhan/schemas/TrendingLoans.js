import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'TrendingLoan',
    title: 'Loan',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
          }),
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'genre',
          title: 'Genre',
          type: 'string',
        }),
        
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
      
        defineField({
          name: 'thumbnail',
          title: 'thumbnail',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'iconImg',
          title: 'Icon image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        
        defineField({
          name: 'body',
          title: 'Body',
          type: 'blockContent',
        }),
      ],
    
      preview: {
        select: {
          title: 'heading',
          author: 'iconImg',
          media: 'thumbnail',
        },
        prepare(selection) {
          const {author} = selection
          return {...selection, subtitle: author && `by ${author}`}
        },
      },
})