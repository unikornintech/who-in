class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, index: true
      t.float :review
      t.integer :type

      t.timestamps
    end
  end
end
