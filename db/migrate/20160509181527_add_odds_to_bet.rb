class AddOddsToBet < ActiveRecord::Migration
  def change
  	add_index :odds, [:bet_id]
  end
end
