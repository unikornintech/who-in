class Review < ApplicationRecord
  belongs_to :user
  validates :review
  validates :type
end
