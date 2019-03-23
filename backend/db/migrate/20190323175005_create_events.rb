class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.belongs_to :user, index: true
      t.string :title
      t.text :description
      t.timestamp :start_time
      t.timestamp :expiration
      t.decimal :latitude
      t.decimal :longitude
      t.boolean :public
      t.integer :max_attendees
      t.integer :min_attendees
      t.decimal :price

      t.timestamps
    end
  end
end
