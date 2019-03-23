# == Schema Information
#
# Table name: events
#
#  id            :bigint(8)        not null, primary key
#  user_id       :bigint(8)
#  title         :string
#  description   :text
#  start_time    :datetime
#  expiration    :datetime
#  latitude      :decimal(, )
#  longitude     :decimal(, )
#  public        :boolean
#  max_attendees :integer
#  min_attendees :integer
#  price         :decimal(, )
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
