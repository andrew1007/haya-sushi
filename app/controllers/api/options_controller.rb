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
      hash[section.name] = Option.where({section_id: id}).map {|option| [option.name, option.price]}
    end
    subsection_ids = subsections.map {|option| option.subsection_id}.uniq
    subsection_ids.each do |id|
      subsection = Subsection.find(id)
      hash[subsection.name] = Option.where({subsection_id: id}). map {|option| [option.name, option.price]}
    end
    hash
  end
end
