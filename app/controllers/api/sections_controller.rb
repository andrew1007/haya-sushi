class Api::SectionsController < ApplicationController
  helper_method :current_user
  def show
    @sections = Section.sections
    render :show
  end

def section_params
    params.require(:id)
  end
end
