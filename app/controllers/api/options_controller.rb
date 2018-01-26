class Api::OptionsController < ApplicationController
  def show
    @options = get_options
    render :show
  end

  private
  def get_options
    hash = {}
    sections, subsections = Option.all.partition {|option| option.section_id }
    section_ids = sections.map {|option| option.section_id}.uniq
    section_ids.each do |id|
      section = Section.find(id)
      details = Option.where({section_id: id})
      hash[section.name] = {}
      hash[section.name][:details] = details.map {|option| [option.name, option.price]}
      # debugger
      hash[section.name][:title] = details[0].title
    end
    subsection_ids = subsections.map {|option| option.subsection_id}.uniq
    subsection_ids.each do |id|
      subsection = Subsection.find(id)
      debugger if !subsection
      details = Option.where({subsection_id: id})
      hash[subsection.name] = {}
      hash[subsection.name][:details] = details.map {|option| [option.name, option.price]}
      hash[subsection.name][:title] = details[0].title
    end
    hash
  end
end
