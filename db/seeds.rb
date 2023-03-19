require 'faker'

puts "Seeding in progress..."

# Admin.create!(
#     username: "win", 
#     email: "win@feedplan.io", 
#     password: "password"
#     )

# Admin.create!(
#     username: "feigle", 
#     email: "feigle@feedplan.io", 
#     password: "password"
#     )


# Restaurant.create!(
#     name: "Cosmic Food Hall",
#     description: "Explore your culinary options after picking up one of our twenty draft beers, classic cocktails, or affordably priced wines. Find us for a beverage at one of two large bars (main level and rooftop) or grab a seat in our lounge, dining area, or rooftop deck and one of our many cocktail servers will find you.",
#     image_url: "https://www.blueorbiting.com/wp-content/uploads/photo-1581414211938-e772a180c7ab.jpg",
#     icon_url: "https://static.vecteezy.com/system/resources/thumbnails/008/362/666/small/the-letter-c-logo-that-makes-up-the-cosmic-planet-vector.jpg",
#     address: "891 14th St, Denver, CO 80202",
#     admin_id: Admin.find_by(username: "win").id,
#     live: true
#     )

# Restaurant.create!(
#     name: "Sweetgreen",
#     description: "Explore your culinary options after picking up one of our twenty draft beers, classic cocktails, or affordably priced wines. Find us for a beverage at one of two large bars (main level and rooftop) or grab a seat in our lounge, dining area, or rooftop deck and one of our many cocktail servers will find you.",
#     image_url: "https://www.denverpost.com/wp-content/uploads/2020/12/Fast-casual_Sweetgreen_is_opening_its_first_drive-thru_in_Colorado_1.jpg?w=618",
#     icon_url: "https://yt3.googleusercontent.com/kX32AV9ChK-NyKDRd8f5Xzz6WkPejWVoOvndMyZywo_stWTjKfV6ye03VF487MLtFWPJKan62GU=s900-c-k-c0x00ffffff-no-rj",
#     address: "1600 16th St, Denver, CO 80204",
#     admin_id: Admin.find_by(username: "feigle").id,
#     live: false
#     )


# MealPlan.create!(
#     name: "Small",
#     quantity: "5",
#     total_price: "55",
#     visible: false,
#     admin_id: Admin.find_by(username: "win").id
# )

# MealPlan.create!(
#     name: "Medium",
#     quantity: "10",
#     total_price: "95",
#     visible: false,
#     admin_id: Admin.find_by(username: "win").id
# )

# Restaurant.create!(
#     name: "The Local",
#     description: "Your snack time can never be complete without a cup of coffee at our shop..",
#     image_url: "https://gmrencen.com/wp-content/uploads/2020/05/20190217CurtClayton0159b-1.jpg",
#     icon_url: "https://cdn.dribbble.com/users/95644/screenshots/16000715/media/d5f78df332eed55b32e0df934acfc10c.jpg?compress=1&resize=400x300",
#     address: "1600 16th St, Denver, CO 80204",
#     admin_id: Admin.find_by(username: "win").id,
#     live: false
#     )

# MenuItem.create!(
#         name: "Miso Bowl",
#         description: "Blackened chicken, miso root vegetables (x2), shredded cabbage, basil, roasted almonds, shredded kale, warm wild rice, miso sesame ginger dressing",
#         image_url: "https://images.ctfassets.net/eum7w7yri3zr/5KYwmj7r8RXXwDmue8oqJa/71316ce89838c2cebab5c4ecc51a0f4e/S1-Menu-MISO_BOWL__sunchoke_mix_.jpg?w=600&q=75",
#         preparation_time: 15,
#         visible: true,
#         restaurant_id: Restaurant.find_by(name: "Cosmic Food Hall").id
#     )

# MenuItem.create!(
#         name: "Winter Power Bowl",
#         description: "BBQ squash + caramelized onions, avocado, shredded cabbage, black lentils, cilantro, sunflower seeds, warm quinoa, baby spinach, extra virgin olive oil, balsamic vinegar",
#         image_url: "https://images.ctfassets.net/eum7w7yri3zr/1tbkq4IZywTzL8rnub7CM2/d141accbdc822f8f17b9ce25755d6ed5/S1-Menu-WINTER_POWER_BOWL.jpg?w=600&q=75",
#         preparation_time: 12,
#         visible: true,
#         restaurant_id: Restaurant.find_by(name: "Cosmic Food Hall").id
#     )




puts "SEEDING COMPLETE ✅"