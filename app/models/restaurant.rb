class Restaurant < ApplicationRecord
    belongs_to :admin
    has_many :menu_items
end
