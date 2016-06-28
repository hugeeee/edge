require 'test_helper'

class BookieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "the find or create" do
  	bookie = Bookie.find_or_create_by(name: "Paddy", short_name: "PP")

  	assert bookie.save
  end
end
