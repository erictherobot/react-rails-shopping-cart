class ChangeDetailRefundedOnOrder < ActiveRecord::Migration
  def change
    change_column_null :orders, :refunded, true
  end
end
