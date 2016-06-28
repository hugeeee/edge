class Event < ActiveRecord::Base
	# TODO - Do i need to add a unique id to this? It is available in the dom
	# uid selector = //div//@data-mid
	# attribute for amount of runners/non runners?
	# find out a short price fav
	has_many :bets
end
