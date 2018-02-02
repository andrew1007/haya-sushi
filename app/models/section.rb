class Section < ApplicationRecord
  has_many :items
  has_many :subsections
  has_many :options

  def self.sections
    sections = {}
    section_list = Section.all.includes(:items).includes(:options)
    keys = ['id', 'description', 'name', 'price', 'spiciness', 'discount']
    section_list.each do |section|
      item_object = section.items.map do |item|
        item_hash = item.as_json.select {|key, val| keys.include?(key)}
        if item.subsection_id
          item_hash['subsection'] = Subsection.find(item.subsection_id).name
        end
        item_hash
      end
      sections[section.name] = item_object
    end
    sections
  end
end
