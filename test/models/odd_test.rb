require 'test_helper'

class OddTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
  	@first_odd = odds(:one)
  	@bad = odds(:bad_odd)
  end

end
