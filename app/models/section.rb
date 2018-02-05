class Section < ApplicationRecord
  has_many :items
  has_many :subsections
  has_many :options

  def self.sections
    sections = {}
    section_list = Section.all.includes(:items).includes(:options)
    subsection_hash = {}
    Subsection.all.each do |entry|
      subsection_hash[entry.id] = entry.name
    end
    keys = [:id, :description, :name, :price, :spiciness, :discount, :section_id, :subsection_id]
    section_list.each do |section|
      item_object = section.items.pluck(*keys).map do |item|
        item_hash = Hash[keys.zip(item)]
        if item_hash[:subsection_id]
          item_hash[:subsection] = subsection_hash[item_hash[:subsection_id]]
        end
        item_hash
      end
      sections[section.name] = item_object
    end
    sections
  end
end
