class User < ActiveRecord::Base
  has_many :carts
  has_many :cart, source: :item, through: :carts
end
