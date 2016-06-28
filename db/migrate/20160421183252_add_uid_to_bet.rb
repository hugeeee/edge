class AddUidToBet < ActiveRecord::Migration
  def change
    add_column :bets, :uid, :string
  end
end
