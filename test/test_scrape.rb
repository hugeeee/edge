#test scrapingrequire 'rubygems'
require 'nokogiri'
require 'open-uri'
   
page = Nokogiri::HTML(open("http://www.oddschecker.com/horse-racing/2016-05-12-york/14:10/winner"))

BOOKIES_SELECTOR = '//td[@data-bk]/aside/a'

page.xpath(BOOKIES_SELECTOR).each do |bookie|
	puts bookie.attribute('data-bk')
end