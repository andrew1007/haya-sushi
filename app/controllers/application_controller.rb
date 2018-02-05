class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def current_user
    if session[:session_token]
      @current_user = User.find_by_session_token(session[:session_token])
    else
      user = User.new
      session_token = SecureRandom.urlsafe_base64(16)
      user.session_token = session_token
      user.save!
      session[:session_token] = session_token
      @current_user = user
    end
    @current_user
  end
end
