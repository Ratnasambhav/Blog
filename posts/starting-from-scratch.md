---
title: Starting from scratch
date: 2020-10-20
summary: A brief overview of how this blog was re-created using Svelte and Sapper.
---
# Starting from scratch

## Rebuilding the blog

You probably did not see the previous version of this blog. I had published only a couple of posts and only shared them with a handful of people. The odds of anyone reading those posts is quite small. That version was built with [Gatsby.js](https://www.gatsbyjs.com/) and was very basic. The posts were written in a Gatsby page/component which was very annoying.

I wanted to write in markdown files and then convert them to HTML automatically. It is easy to do this in Gatsby and we can also use [MDX](https://mdxjs.com/) to add React components inside the markdown file.
However, I wasn't completely satisfied with the design of the website (and I don't think I ever will be). Also, I wanted to try a frontend framework other than React. Hence, I decided to completely rebuild the website.

## Svelte + Sapper

I heard about Svelte on [Syntax](https://syntax.fm/show/250/scott-teaches-wes-svelte-and-sapper) episode. It sounded very different from other frontend frameworks, primarily React.

Here are the differences which matter the most to me:
- Svelte does not use Virtual DOM. It generates code which updates the required DOM elements when the state changes. This approach much faster and less taxing on the CPU.
- Svelte does this during build time. That means that there is no need to bundle the Svelte code in the final bundle, which results in a smaller bundle size.
- In general, Svelte has less boilerplate code compared to React.
- All CSS is locally scoped to the component. That means we do not need CSS-in-JS libraries or CSS modules. We can use plain old CSS. Unused CSS is automatically purged.

One thing I like about React is that it is just JavaScript (or TypeScript). Svelte deviates from this as in it has a template syntax like Angular. The components are written in a `<compoent-name>.svelte` file which resembles Vue components. The official Svelte [website](https://svelte.dev/) has a great [tutorial](https://svelte.dev/tutorial/basics). I highly recommend you to try it.
The final piece of the puzzle is [Sapper](https://sapper.svelte.dev/), which is Next.js for Svelte. It gives us filesystem-based routing, SSR and SEO along with the benefit of Svelte. The filesystem-based routing is, in fact, more flexible in than Next.js. I am using `@jackfranklin/rollup-plugin-markdown` to automatically read and convert markdown files to HTML and then Sapper handles the rendering part.

## Hosting

I have been hosting my blog on [GitHub Pages](https://pages.github.com/) because it is free and very easy to manage. The URL to the website used to be [ratnasambhav.github.io](https://ratnasambhav.github.io/).

As you can see now, I have finally bought a domain - [ratnasambhav.dev](https://ratnasambhav.dev). The website itself is hosted on Netlify which is connected to the GitHub [repository](https://github.com/Ratnasambhav/Sapper-Blog) for this website. It's a static website and I don't need anything other than the features provided in the free tier of Netlify.

## Conclusion
I really like Svelte and I am looking forward to using it in other projects. React will still be my framework of choice, primarily because the React ecosystem is better when compared to most other frameworks.

I want to add a few more pages to the website. For example, I like the idea of a page which lists the things (games, books, music, etc) I am currently enjoying. That and many more blog posts which is something I have failed to do in the past.

Here's hoping that I do not get burned out so quickly this time!