class Subsection < ApplicationRecord
  has_many :items
  has_one :option
end
