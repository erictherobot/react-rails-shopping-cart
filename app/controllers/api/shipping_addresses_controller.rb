class Api::ShippingAddressesController < Api::ApiController

  def index
    render "api/shipping_addresses/index"
  end

  def create
    new_address = current_user.shipping_addresses.new(address_params)

    if new_address.save
      render "api/shipping_addresses/index"
    else
      render json: { errors: new_address.errors.full_messages, status: 422 }
    end
  end

  def update
    address = ShippingAddresses.find(params[:shippingId])
    address.update(address_params) if current_user.shipping_addresses.include?(address)
  end

  def destroy
    address = ShippingAddresses.find(params[:shippingId])
    address.destroy if current_user.shipping_addresses.include?(address)

    render "api/shipping_addresses/index"
  end

  private

    def address_params
      params
        .require(:address)
        .permit(
          :full_name, :address_one, :address_two,
          :city, :region, :zip, :phone_number
          )
    end

end
