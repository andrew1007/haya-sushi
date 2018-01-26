class Subsection < ApplicationRecord
  has_many :items
  has_many :options
end
