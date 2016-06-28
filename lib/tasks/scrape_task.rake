require "#{Rails.root}/app/helpers/scrape_helper"
include ScrapeHelper


namespace :scraping do
  desc "scrape page"
  task scrape_page: :environment do
  	scrape("http://www.oddschecker.com/horse-racing/chester/13:45/winner")
  end
end