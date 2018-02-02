class Api::SectionsController < ApplicationController
  def show
    @sections = Section.sections
    render :show
  end

def section_params
    params.require(:id)
  end
end
