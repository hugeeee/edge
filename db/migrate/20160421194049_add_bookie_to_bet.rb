class AddBookieToBet < ActiveRecord::Migration
  def change
    add_column :bets, :bookie, :string
  end
end
