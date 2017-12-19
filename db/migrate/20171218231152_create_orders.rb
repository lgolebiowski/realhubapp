class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :shipping_address
      t.string :total
      t.string :title
      t.integer :status_id

      t.timestamps
    end
  end
end
