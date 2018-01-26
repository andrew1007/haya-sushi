class AddOptionTable < ActiveRecord::Migration[5.0]
  def change
    create_table :options do |t|
      t.string :title, default: ''
      t.string :name, default: ''
      t.string :details, default: ''
      t.string :price, default: ''
      t.integer :subsection_id
      t.integer :section_id
    end
    add_index :options, :subsection_id
    add_index :options, :section_id
  end
end
