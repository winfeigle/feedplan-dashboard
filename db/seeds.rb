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

Menu_Item.create!(
    name: "",
    description: "",
    meal_price: 0,
    image_url: "",
    preparation_time: 0,
    is_visible: false,
    restaurant_id: Restaurant.find_by(name: "Cosmic Food Hall").id,
)



puts "SEEDING COMPLETE ✅"