class AddOptionIdToSections < ActiveRecord::Migration[5.0]
  def change
    add_column(:sections, :option_id, :integer)
    add_index :sections, :option_id
  end
end
