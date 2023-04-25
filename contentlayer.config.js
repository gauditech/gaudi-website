import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    authorImg: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },        
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },    
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})