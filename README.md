# Nashville Music Hackathon Static Site

Based on [Event Jekyll Theme](https://event-jekyll-theme.github.io)

## Installation
1. Make sure you have Ruby 2.4.1
2. Install Jekyll by using the command `gem install jekyll`.
3. Then, install Jekyll Sitemap and Jekyll SEO gems by using the commnad `gem install jekyll-sitemap` and `gem install jekyll-seo-tag`.
4. Start your localhost server by using the command `jekyll serve`. Make sure that you are at the root directory of your folder before using this command.
5. Your site should be accessible at `localhost:4000`.
6. For additional information about Jekyll, refer to the [official website](http://jekyllrb.com/).


## Deploy
### Staging
Staging is deployed to coreyar.github.io/nashville-music-hackathon
Github pages deployment is managed with the `github-pages` gem.

```
bundle update github-pages
```