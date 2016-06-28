class Bet < ActiveRecord::Base
	has_many :odds, dependent: :delete_all
end
