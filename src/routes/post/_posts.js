import posts from '../../../posts/*.md'

posts.sort((a, b) => a.date > b.date ? 1 : ((b.date > a.date) ? -1 : 0))
posts.map(post => post.slug = post.filename.replace('.md', ''))

export default posts