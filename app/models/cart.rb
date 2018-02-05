class Cart < ActiveRecord::Base
  belongs_to :user
  def self.items_by_session_token(token)
    item_ids = Cart.where({session_token: token}).pluck(:item_id)
    Item.where({id: item_ids})
  end

  belongs_to :user
  belongs_to :item
end
