# Nashville Music Hackathon Static Site

Based on [Event Jekyll Theme](https://event-jekyll-theme.github.io)
For additional information about Jekyll, refer to the [official website](http://jekyllrb.com/).

## Installation
1. Make sure you have Ruby 2.5.1
2. Install Jekyll by using the command `gem install jekyll`.
3. Clone the project and change into the created directory.
4. Install dependencies with `bundle install`
5. Start your localhost server by using the command `jekyll serve`.
6. Your site should be accessible at `localhost:4000`.

## Build
### staging
Staging uses the default `_config.yml`.

`$ bundle exec jekyll build`

### production
To deploy to the production use the `--config` flag to specify the config files. `_config.prod.yml` should be last because its settings should override the default config

`$ bundle exec jekyll build --config _config.yml,_config.prod.yml`

