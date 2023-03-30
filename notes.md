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

## getServerSideProps (SSR)

- Set things on the server side
- Next will only serve a screen to client when everything is done
- Use this only for information that really needs to be displayed when the page
loads so indexers, crawlers and bots can see it
- Otherwise, we'll have pages that load slowly, which is not a good user experience
- We can also use this function with sensitive information that should not be
displayed to the client/user like authentication, database etc.

## getStaticProps (SSG)

- It will work the same as getServerSideProps in development environments
- It is used to cache pages and avoid repetitive API calls
- The first version of each static page is created when we generate the build
- We can set when to update the cache through the `revalidate` prop (in seconds)
- We don't have access to the context of the request, that means that we don't
have access to user information, cookies, header etc. The page will be the same
for everyone.

## When to use SSR or SSG
- Does the data change frequently?
- Does the data to be loaded depend on the context of the request?
- Can we cache it?

## getStaticPaths / Dynamic SSG
- Required for dynamic SSG pages
Example: the product page needs a static page for each product (depends on the product id)
- This function tells Next which information will be used dynamically to create the static pages
- The problem is when we have too many different pages to be created. For example,
an ecommerce with 10000 products, during the build it would take hours to create
a static page for each product
- The solution is to use it only for the most popular products
- To handle items that are not defined in the paths array, we use the fallback
  - fallback: false -> 404 page

  - fallback: true (recommended) -> will show the page without the params data and
  try to get that data in the background running the getStaticProps function
    - We can use the isFallback from the useRouter() to show a loading component
    while the data is loading.
    - Next.js will serve a “fallback” version of the page on the first request
    to such a path. Web crawlers, such as Google, won't be served a fallback and
    instead the path will behave as in fallback: 'blocking'
    - Next.js adds this path to the list of pre-rendered pages. Subsequent requests to the
    same path will serve the generated page, like other pages pre-rendered at build time

  - fallback: 'blocking' -> will only show the page after the data has been loaded

## Prefetch links

Prefetch the page in the background. Defaults to true. Any <Link /> that is in the
viewport (initially or through scroll) will be preloaded. Prefetch can be disabled
by passing prefetch={false}. When prefetch is set to false, prefetching will still
occur on hover. Pages using Static Generation will preload JSON files with the data
for faster page transitions. Prefetching is only enabled in production.
