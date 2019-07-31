# APIDocs starter

APIdocs is an opinionated Gatsby template for writing technical documentation. Clone, customize and start documenting.

[Complete documentation](https://carrotsearch.github.io/apidocs/)

---

## Features

Out-of-the-box APIdocs comes with:

* HTML-based content authoring,
* responsive, mobile-friendly layout,
* Prism.js code highlighting,
* Sublime-style client-side search,
* near-100 Lighthouse score of the final static site.

----

## Quick start

To get your first APIdocs-based site:

1. **Clone APIdocs starter project.**

   ```bash
   git clone https://github.com/carrotsearch/gatsby-starter-apidocs.git
   ```

1. **Install dependencies.**

   Make sure you have Node.JS version 1. **or later and yarn installed. Then fetch APIdocs dependencies:**
   
   ```bash
   cd gatsby-starter-apidocs
   yarn install
   ```

1. **Edit site title and description.**

   Open `gatsby-config.js` and edit metadata of your side located in the `siteMetadata` node. The title property is the `title` to display in browser's tab, `description` is the text to use in the description meta tag. You can also customize the HTML `lang` attribute.

1. **Start Gatsby in development mode.**

   ```bash
   yarn run gatsby develop
   ```

   Once Gatsby development server starts, open [http://localhost:8000](http://localhost:8000) in your browser to see the website you're building. Gatsby will automatically update the page as you edit the content.

1. **Customize logo and footer.**

   Use your favorite IDE to edit `src/logo.html` and `src/footer.html`. Contents of both files must contain valid HTML, but feel free to use in-line SVG to include logos in both files.

   Once you save the changes, you should see them applied in real time in the browser.

1. **Start documenting!**

   For each article in your documentation, add an HTML file to the `src/content/` folder. The root tag of each HTML file must be an `article` and it must contain an `h1. **child tag containing the article's title.**

   Edit `src/navigation.json` to add newly-created articles to the navigation menu. Currently, only two-level navigation is supported.

1. **Build and deploy.**

   Once you've completed editing your documentation, you can build the final optimized static site by running:

   ```bash
   yarn run gatsby build
   ```

   The public/ folder will contain the static site to deploy.
   
---

For more detailed information, see [APIdocs documentation](https://carrotsearch.github.io/apidocs/). 