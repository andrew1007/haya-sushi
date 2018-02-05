class Api::CartController < ApplicationController
  helper_method :current_user

  def show
    @cart = current_user.cart.pluck(:name, :item_id)
    render :show
  end

  def create
    @cart_item = Cart.new({
      user_id: current_user.id,
      item_id: cart_params[:item_params]
    })
    @cart_item.save!
    render :create
  end

  def destroy
    cart_entry = Cart.find_by({item_id: cart_params[:item_id]})
    cart_entry.destroy
    render :create
  end

  private
  def cart_params
    params.permit(:item_id)
  end
end
