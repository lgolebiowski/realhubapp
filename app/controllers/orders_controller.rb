class OrdersController < ApplicationController
	def index
    order = Order.new('UtZse3zqWSE2TDCz4dox')
    @orders = order.index
  end
end
