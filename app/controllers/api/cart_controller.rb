class Api::CartController < ApplicationController
  def show
    if session[:session_token]
      User.items_by_session_token(session)
    else
      session[:session_token]
    end
  end
end
