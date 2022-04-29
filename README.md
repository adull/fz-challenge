For the Firezone Challenge instructions: See [INSTRUCTIONS.md](INSTRUCTIONS.md).

# Adlai's Thoughts

Really interesting challenge! Was pretty lost at first wasn't sure how I would tackle it, initially started looking into if I could handle the ReferenceError issue with [SWR](https://swr.vercel.app/) by just passing `useSWR` a promise that tried to resolve any variable, but decided this was overkill and instead went with a solution where I created a custom [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html) that works with SSR simply by using `ReactDOM.renderToStaticMarkup(props.children)`. This component can be found underneath `/src/components/error-boundary.js`.

Even this solution doesn't feel *perfect* though, because this requires you to have to wrap individual components with the custom error boundary. This kind of defeats the purpose - if you know *where* the error is, then at that point you can go in and fix the bug. However, similarly, NextJS's stack trace tells you where the typo is anyways. Also in this case because there were two instances of `<PostTitle>` (in `[slug].js` and `post-header.js`), I had to add the `<CustomErrorBoundary>` in two places which would likely cause bugs/headaches down the road. Obviously I could have created another component that specifically wraps `<PostTitle>` in `<CustomErrorBoundary>` but that felt like overkill for this challenge, especially since `<PostTitle>` is already so thin. 

I went with Cypress as a testing library because it's at the top of NextJS's [testing page](https://nextjs.org/docs/testing) in their docs. Maybe Cypress paid them to get that first place placement, but I tried it out and it was pretty easy to use. I had initially tried to use Jest but there was some [difficulty with Jest compiling js from md](https://github.com/remarkjs/remark/discussions/814). Trying to fix compatibility issues between Jest/MD felt like a losing battle so I changed the tools I used and Cypress worked pretty well and had a pretty cool UI for testing. My only issue with Cypress is that it uses Chai assertions and the tests just stopping after one failure. Some people on [stackoverflow recommended](https://stackoverflow.com/questions/66132293/how-can-i-use-soft-assertion-in-cypress) using some npm package with 8k weekly downloads, and I have a rule that I don't install NPM packages with less than 100k wkly downloads after 5PM lol. 

You can run the Test by running `npm run cypress` and then clicking on `h_one.js`. More info on running cypress tests [here](https://nextjs.org/docs/testing#running-your-cypress-tests).

Thanks for considering me!


# A statically generated blog example using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Builder.io](/examples/cms-builder-io)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```
npx create-next-app --example blog-starter blog-starter-app

```

or

```
yarn create next-app --example blog-starter blog-starter-app
# or
pnpm create next-app -- --example blog-starter blog-starter-app

```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
