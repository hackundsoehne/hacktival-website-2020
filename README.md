# Hacktival Website

## Run locally

- Install `bundler` and `jekyll`: `gem install bundler jekyll`
- Serve the website: `bundle exec jekyll serve`

## Deployment

This website is deployed via [Github Pages](https://pages.github.com/) directly from the `master` branch.

## Manage

### Search Engine Optimization

You may tweak the following SEO tags for each page. Not set tags will default to the ones defined in `_config.yml`.

- title: The title of the page
- description: A short description of the page's content
- image: URL to an image associated with the page
- author: Page-specific author information
- lang - Page-specific language information

Our SEO tags are managed by the `jekyll-seo-tag` plugin. Check out their [Github Repo](https://github.com/jekyll/jekyll-seo-tag) to lear more about config options and advanced usage.

### Categories

- Categories are located in `_cats/`
- Categories marked with `draft: false` are rendered by `categories.html`
- Prefix catergories with a number to order them. (thats for simplicity).
