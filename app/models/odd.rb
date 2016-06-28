class Odd < ActiveRecord::Base
	belongs_to :bet
	belongs_to :bookie

	# use this to handle bad data?
	#rails g migration add_bet_id_to_odds bet_id:integer
	def safe_create

	end
end
