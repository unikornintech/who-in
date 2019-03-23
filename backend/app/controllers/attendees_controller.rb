class AttendeesController < ApplicationController
  before_action :authorize_request, except: :index

  def index
    @attendees = Attendees.all
    render json: @attendees, status: :ok
  end

  def show
    render json: @attendee, status: :ok
  end

  def create
    @attendee = @current_user.attendee.build(attendee_params)
    if @attendee.save
      render json: @attendee, status: :created
    else
      render json: { errors: @attendee.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @attendee.update(attendee_params)
      render json: { errors: @attendee.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @attendee.destroy
  end

  private

  def find_attendee
    @attendee = Attendees.find!(params[:_id])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'Attendee not found' }, status: :not_found
  end

  def attendee_params
    params.permit(
      
    )
  end

end
