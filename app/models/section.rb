class Section < ApplicationRecord
  has_many :items
  has_many :subsections
  has_many :options
end
