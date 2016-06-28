require 'nokogiri'
require 'open-uri'
require 'debugger' 

module ScrapeHelper

	# selectors
	EVENT_UID = '//div//@data-mid'
	EVENT_NAME = '//div//@data-sname'

	BET_NAMES_SELECTOR = '//td//span//@data-name'
	BET_IDS_SELECTOR = '//tr/@data-bid'

	BOOKIES_SELECTOR = '//td[@data-bk]/aside/a'
	EACH_WAY_FRACTIONS_SELECTOR = '//td/@data-ew-div'
	EACH_WAY_PLACES_SELECTOR = '//td/@data-ew-places'

	# scrape an oddschecker website to store data of bets and odds available
	def scrape(url)
		@page = Nokogiri::HTML(open(url))

		@bet_names = @page.xpath(BET_NAMES_SELECTOR)
		@bet_ids = @page.xpath(BET_IDS_SELECTOR)

		# find and create the bookies
		@bookies = @page.xpath(BOOKIES_SELECTOR).map { |bookie| Bookie.find_or_create_by(name: bookie['title'], short_name: bookie['data-bk'])}

		# each way info
		@each_fractions = @page.xpath(EACH_WAY_FRACTIONS_SELECTOR)
		@each_way_places = @page.xpath(EACH_WAY_PLACES_SELECTOR)

		@uid = @page.xpath(EVENT_UID)

		# time to map objects!
		@event = Event.find_or_create_by(uid: @uid.text)
		@event.name = @page.xpath(EVENT_NAME)

		# loop through the bets and get their odds per bookie
		@bet_ids.each_with_index do |bet_id, index|

			path = '//tr[@data-bid="'+ bet_id.value + '"]/td[@data-odig]/@data-odig'

			@bet = Bet.find_or_create_by(uid: bet_id.value)
			@bet.name = @bet_names[index]
			@bet.odds.clear

			@odds = @page.xpath(path)

			# create the odds with their price and associate the bookie
			@odds.each_with_index do |odd_value, index|
				odd = Odd.create(price: odd_value, bookie: @bookies[index], each_way_places: @each_way_places[index], each_fractions: (@each_fractions[index].to_r).to_f)

				@bet.odds << odd
			end

			@event.bets << @bet
		end
	end
end