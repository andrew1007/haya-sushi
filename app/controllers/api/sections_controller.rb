class Api::SectionsController < ApplicationController
  def show
    @sections = {}
    section_list = Section.all.includes(:items)
    section_list.each do |section|
      @sections[section.name] = section.items
    end
    render :show
  end

  private
  def section_params
    params.require(:id)
  end
end
