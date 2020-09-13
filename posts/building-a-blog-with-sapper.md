---
title: Building a blog with Sapper
date: 2020-10-13
summary: A brief overview of how this blog was created using Svelte and Sapper.
---

# Building a blog with Sapper

Sapper is a framework for building extremely high-performance web apps. You're looking at one right now! There are two basic concepts:
- Each page of your app is a Svelte component
- You create pages by adding files to the src/routes directory of your project. These will be server-rendered so that a user's first visit to your app is as fast as possible, then a client-side app takes over

Building an app with all the modern best practices — code-splitting, offline support, server-rendered views with client-side hydration — is fiendishly complicated. Sapper does all the boring stuff for you so that you can get on with the creative part.

You don't need to know Svelte to understand the rest of this guide, but it will help. In short, it's a UI framework that compiles your components to highly optimized vanilla JavaScript.

```bash
npx degit "sveltejs/sapper-template#rollup" my-app
cd my-app
npm install
npm run dev
```

## Why the name?

In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as sappers.

For web developers, the stakes are generally lower than for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for Svelte app maker, is your courageous and dutiful ally.