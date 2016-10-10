class Api::CheckoutsController < Api::ApiController

  def create
    @order = params[:token]
    unless current_user.stripe_customer_id
      current_user.create_stripe_customer(@order[:id])
    end
    current_user.log_checkout(params[:amount].to_i)
    @user = current_user
    render "api/session/show"
  end

end
