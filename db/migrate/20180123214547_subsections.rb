class Subsections < ActiveRecord::Migration[5.0]
  def change
    create_table :subsections do |t|
      t.string :name, null: false
      t.string :description, default: ''
      t.integer :section_id, null: false
    end
    add_index :subsections, :name
    add_index :subsections, :section_id
    add_column(:sections, :description, :string, default: '')
  end
end
