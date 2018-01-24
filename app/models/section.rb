class Section < ApplicationRecord
  has_many :items
  has_many :subsections
end
