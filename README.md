# React + Rails Shopping Cart
This code was originally written for a technical challenge for a position at a startup in NYC. After completing the code and turning in the work, I received positive feedback from them about moving forward with next steps. Days went by and then I spoke with the founder on the phone and in our discussion everything sounded positive and I was told "we're looking to hire immediately", even mentioning an onsite team meeting once the other stakeholders return from vacation. Unfortunately, after several follow up emails, the startup went silent. My emails never received a reply.

Being that I wrote the code, I figured after a few months went by, it was my right to make the code public for other developers in the Software Community to benefit from this work. 

# Technical Challenge (From email)

I'd like you to make a basic 'store'.  It will contain 2 models,
Product and Cart.

There should be 2 Product views, 'index' which lists, in table form,
the 10 newest products, and 'show' which shows the details of the
product.

The product should have at least a title, price and an image.

In addition to showing the details, the show view should have an 'add
to cart' button, which adds the product to the cart.

In your layout, there should a 'home' and a  'cart' button at the top.
The cart button should have a badge indicating the amount of items
that are in it.  Clicking it will take you to the cart 'index' view,
which will show all of the items in the cart in similar format to the
product index view.  The row will have a 'remove' button that will let
you remove the product from the cart.  Below all the cart items should
be a subtotal and a total which calculates and adds 8.65% tax.

Use Rails for the backend and React + preferably Redux for the front.

Feel free to have 2 separate apps, but bonus points for figuring out
how to use react_on_rails (it also might make your life easier).

# Prerequisites
- Ruby
- Rails
- RVM
- PostgreSQL
- NPM
- Git

# Installation
`$ git clone https://github.com/erictherobot/react-rails-shopping-cart.git`

`$ cd react-rails-shopping-cart`

`$ rvm install ruby --latest`

`$ bundle`

# Load products into DB
`$ rake db:drop db:create db:seed db:reset`

# Start server
`$ bin/rails server`

Visit [http://localhost:3000](http://localhost:3000)

# @TODO:
- Delete items from cart
- Add responsive media queries
