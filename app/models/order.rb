class Order < ApplicationRecord
  include HTTParty
  base_uri 'https://www.realhubapp.com/api/v2'
  format :json

  def initialize(api_key)
    @options = { :headers => {
                'x-api-token' => api_key }
               }
  end

  def index
    self.class.get '/orders', @options
  end
end

