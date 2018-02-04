class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    if session[:session_token]
      @current_user = User.find_by_session_token(session[:session_token])
    else
      user = User.new
      user.session_token = SecureRandom.urlsafe_base64(16)
      user.save!
      @current_user = user
    end
    @current_user
  end
end
