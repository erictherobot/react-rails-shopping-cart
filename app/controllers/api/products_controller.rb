class Api::ProductsController < Api::ApiController

  def index
    if params[:home]
      @feature_products = Department.featured_products.load
      @products
    else
      @feature_products
      @products = Product.all
    end
    render :index
  end


  def show
    @product = Product.includes(:images).find(params[:id]).in_stock?
    render :show
  end

end
