class OrdersController < ApplicationController
	def index
    order = Order.new
    @orders = order.index
  end
end
