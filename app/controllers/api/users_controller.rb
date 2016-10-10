class Api::UsersController < Api::ApiController

  def show
    render :show
  end


  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/user/show"
    else

      render json: { errors: @user.errors.full_messages, status: 422 }
    end
  end

  private

    def user_params
      params.require(:user).permit(
        :full_name,
        :email,
        :email_confirmation,
        :password,
        :password_confirmation
        )
    end

end
