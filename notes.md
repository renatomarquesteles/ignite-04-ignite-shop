## NextJS concepts

Next.js is a framework that brings many features to React projects,
such as SSR (server side rendering), in a simple way without much configuration.

It solves the main problem of SPA's, which is SEO.

Most bots and crawlers don't have javascript enabled when they crawl websites,
so that's why SPA's don't work. They just see an empty page.

Next is a Node.js server that mediates between the frontend and the backend.
It makes the API calls, mounts the page and serves it to the frontend. The catch is
that it caches the page and when the frontend needs the page again,
it just serves it without making any API calls (SSG - static site generation).

## NextJS Routes

Next uses a system called file-system routing, and the way it works is that every
file in the pages folder is converted to a new route. If you want to pass a parameter,
all you have to do is create a new folder and a file with the parameter name in it.
And also sub-routes = sub-folders

pages/product.tsx -> /product
pages/product/[id].tsx -> /product/:id
pages/product/new.tsx -> /product/new

## Document

This file is similar to the index.html file of the vitejs projects. It represents
the basic html elements for the project and allows us to import external resources
such as custom fonts that will be available to all pages in the project. So we need to
be careful about what we put in this file.
