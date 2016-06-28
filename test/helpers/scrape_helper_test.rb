require 'test_helper'

class ScrapeHelperTest < ActionView::TestCase

  def setup
  	@url = "http://www.oddschecker.com/horse-racing/chester/13:45/winner"
  end

  # bundle exec rake test
  test "scrape_page_test" do
  	scrape(@url)
  end
end