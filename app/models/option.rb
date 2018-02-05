class Option < ApplicationRecord
  belongs_to :section
  belongs_to :subsection

  def self.all_options
    hash = {}
    options = Option.all.includes(:section).includes(:subsection)
    options.each do |entry|
      if entry.subsection_id
        if hash[entry.subsection.name]
          hash[entry.subsection.name][:details] << [entry.name, entry.price]
        else
          hash[entry.subsection.name] = {
            details: [[entry.name, entry.price]],
            title: entry.title
          }
        end
      else
        if hash[entry.section.name]
          hash[entry.section.name][:details] << [entry.name, entry.price]
        else
          hash[entry.section.name] = {
            details: [[entry.name, entry.price]],
            title: entry.title
          }
        end
      end
    end
    hash
  end
end
