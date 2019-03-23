class EventsController < ApplicationController
  before_action :authorize_request, except: :index

  def index
    @events = Event.all
    render json: @events, status: :ok
  end

  def show
    render json: @event, status: :ok
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @user, status: :created
    else
      render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @event.update(event_params)
      render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @event.destroy
  end

  private

  def find_event
    @event = Event.find!(params[:_id])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'Event not found' }, status: :not_found
  end

  def event_params
    params.permit(
      :title, :description, :start_time, :expiration, :public, :max_attendees, :min_attendees, :price
    )
  end

end