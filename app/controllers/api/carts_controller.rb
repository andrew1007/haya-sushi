class Api::CartsController < ApplicationController
  helper_method :current_user
  skip_before_action :verify_authenticity_token

  def show
    @cart = current_user.cart.pluck(:item_id, :name).to_h
    render :show
  end

  def create
    @cart_item = Cart.new({
      user_id: current_user.id,
      item_id: cart_params.to_i
    })
    @cart_item.save!
    @cart = current_user.cart.pluck(:name, :item_id)
    render :show
  end

  def destroy
    cart_entry = Cart.find_by({item_id: cart_params[:item_id]})
    cart_entry.destroy
    @cart = current_user.cart.pluck(:name, :item_id)
    render :show
  end

  private
  def cart_params
    params.require(:item_id)
  end
end
