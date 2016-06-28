class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.time :time
      t.string :venue
      t.string :uid

      t.timestamps null: false
    end
  end
end
