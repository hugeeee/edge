class AddBetIdToOdds < ActiveRecord::Migration
  def change
    add_column :odds, :bet_id, :integer
  end
end
