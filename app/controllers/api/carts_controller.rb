class Api::CartsController < ApplicationController
  helper_method :current_user
  skip_before_action :verify_authenticity_token

  def show
    @cart = current_user.cart
    # render json: {cart: @cart}
    render :show
  end

  def create
    cart_item = Cart.new({
      user_id: current_user.id,
      item_id: cart_params.to_i
    })
    cart_item.save!
    @cart = current_user.cart.pluck(:name, :item_id).to_h
    render :create
  end

  def destroy
    Cart.destroy_all({item_id: cart_params.to_i})
    @cart = current_user.cart.pluck(:name, :item_id).to_h
    render :create
  end

  private
  def cart_params
    params.require(:item_id)
  end
end
