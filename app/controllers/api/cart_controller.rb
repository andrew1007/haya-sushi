class Api::CartController < ApplicationController
  helper_method :current_user
  
  def show
    @cart = Cart.where({user_id: current_user.id})
    render :show
  end

  def create
    if session[:session_token]
      @cart = User.items_by_session_token(session)
    else
    end
  end
end
