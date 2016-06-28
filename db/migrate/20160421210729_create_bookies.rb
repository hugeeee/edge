class CreateBookies < ActiveRecord::Migration
  def change
    create_table :bookies do |t|
      t.string :name
      t.string :short_name

      t.timestamps null: false
    end
  end
end
