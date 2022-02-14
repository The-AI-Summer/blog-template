# Scientific blog template based on AI Summer

The current template can be used for scientific blogs as it supports a wide variety of necessary components such as:

- Latex rendering
- Code blocks with highlighting
- References and citations
- Embed gifs and videos
- Interactive components$

Other important features:

- Ability to filter and display posts by topic
- Customizable author pages 
- Customizable topic pages
- 100% responsive
- Pages can be created with standard React code or using Markdown
- Search with a local index using [flexsearch](https://github.com/nextapps-de/flexsearch)
- SEO ready
- Responsive images and image preprocessing pipeline
- Google analytics and tag manager 
- robots.txt generation
- XML feed generation
- Sitemap generation


The template is based on our [website](theaisummer.com), which we strip from all the unecessary stuff in order to provide a minimal, ready-to-use but feature-rich framework for scientific blogs.

### Important information

- The template is built with [Gatsby v2](https://www.gatsbyjs.com/) so some familiarity with React is required. For those who want to customize it, we highly recommend to check out the official [Gatsby docs](https://www.gatsbyjs.com/docs/)
- Typescript and TSX is used instead of Javascript
- The Sass preprocessor is used for styling
- MDX is used instead of Markdown so we can add custom React components inside markdown. That enables us high customizeability, interactive widgets and more.
- Latex is rendered with [Katex](https://katex.org/) and [remark-math](https://github.com/Rokt33r/remark-math)
- Code blocks are rendered with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
- Following Gatsby paradigm, GraphQL is used to query the website content
- Content can also be sourced using YAML files
- Forms can be created using [react-hook-form](https://react-hook-form.com/)
- Annimations on scroll support



### How to run the template

1) Instal the necessary dependencies

```
$ yarn install
```

2) Run Gatsby

```
$ yarn start
```

### What you need to do before deploying?

- Update gatsby-config without your site information
- Upload your logos and icons in `assets/images/`
- Update the `Seo.tsx` component
- Update your themes in `styles/`
- Update the yaml files in `site-content`

### How to deploy

1) Build the final static files

```
$ yarn build
```

2) Transfer the `public` folder to your hosting option of choice. For exammple, AI Summer is deployed on Firebase hosting, but any object storage will do just fine.

```
firebase deploy
```


