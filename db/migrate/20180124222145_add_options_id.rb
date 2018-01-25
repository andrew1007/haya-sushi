class AddOptionsId < ActiveRecord::Migration[5.0]
  def change
    add_column(:sections, :option_id, :integer)
  end
end
