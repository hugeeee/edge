class RemoveBookieFromBet < ActiveRecord::Migration
  def change
    remove_column :bets, :bookie, :string
  end
end
