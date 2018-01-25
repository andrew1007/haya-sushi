class AddSectionIdToOptions < ActiveRecord::Migration[5.0]
  def change
    add_column(:options, :section_id, :integer)
    change_column(:options, :subsection_id, :integer)
  end
end
