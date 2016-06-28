class CreateOdds < ActiveRecord::Migration
  def change
    create_table :odds do |t|
      t.float :price
      t.integer :each_way_places
      t.float :each_way_fraction

      t.timestamps null: false
    end
  end
end
