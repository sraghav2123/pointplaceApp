class UsersController < ApplicationController
  respond_to :html, :json

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    # logger.debug "Params: #{params[:user]}"
    #  logger.debug "New user: #{@user.attributes.inspect}"
    # logger.debug "User should be valid: #{@user.valid?}"

    # if @user.save
    #   flash[:notice] = 'Account created.'
    # end
    # respond_with @user, :location => '/'

    if @user.save
        respond_to do |format|
           format.json { render json: @user }
        end
    else
      render :nothing => true
    end
  end

end
