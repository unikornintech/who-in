class ReviewsController < ApplicationController
  before_action :authorize_request, except: :index

  def index
    @reviews = Reviews.all
    render json: @reviews, status: :ok
  end

  def show
    render json: @review, status: :ok
  end

  def create
    @review = @current_user.review.build(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    unless @review.update(review_params)
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @review.destroy
  end

  private

  def find_review
    @review = Reviews.find!(params[:_id])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'Review not found' }, status: :not_found
  end

  def review_params
    params.permit(
      :review
    )
  end

end
