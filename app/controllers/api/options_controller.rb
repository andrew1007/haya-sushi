class Api::OptionsController < ApplicationController
  def show
    @options = Option.all_options
    render :show
  end
end
