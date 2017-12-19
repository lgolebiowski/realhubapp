class Order < ApplicationRecord
  include HTTParty
  base_uri 'https://jsonplaceholder.typicode.com'
  format :json



  def index
    self.class.get '/comments'
  end
end

