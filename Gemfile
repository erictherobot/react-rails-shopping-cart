source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
gem 'pg'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'bcrypt', '~> 3.1.7'
gem 'kaminari'
gem 'react-rails', '~> 1.3.0'
gem 'flux-rails-assets', '~> 2.1.0'

gem 'paperclip'
gem 'paperclip-meta'
gem 'aws-sdk', '~> 1.6'
gem 'figaro'
gem 'faker'
gem 'activerecord-session_store'
gem 'sprockets', '3.6.3'

gem 'stripe', :git => 'https://github.com/stripe/stripe-ruby'

group :development, :test do
  # Byebug
  gem 'byebug'
  gem "rspec", "~> 3.1.0"
  gem "rspec-rails"
  gem "shoulda-matchers"
end

group :test do
  gem 'capybara'
  gem 'factory_girl_rails'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  gem 'quiet_assets'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'

  # Spring
  gem 'spring'
end

group :production do
  gem 'rails_12factor'
end
