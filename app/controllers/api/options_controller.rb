class Api::OptionsController < ApplicationController
  def show
    @options = {}
    @options['section'] = get_options('section_id')
    @options['subsection'] = get_options('subsection_id')
    render :show
  end

  private
  def get_options(col_name)
    hash = {}
    Option.where.not({col_name => nil})
          .as_json.each do |key, val|
            hash[key[col_name]] = key['details']
          end
    hash
  end
end
