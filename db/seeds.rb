puts "Seeding in progress..."

Admin.create!(
    username: "win", 
    email: "win@feedplan.io", 
    password: "password"
    )


Restaurant.create!(
    name: "Cosmic Food Hall",
    description: "Explore your culinary options after picking up one of our twenty draft beers, classic cocktails, or affordably priced wines. Find us for a beverage at one of two large bars (main level and rooftop) or grab a seat in our lounge, dining area, or rooftop deck and one of our many cocktail servers will find you.",
    image_url: "https://www.blueorbiting.com/wp-content/uploads/photo-1581414211938-e772a180c7ab.jpg",
    icon_url: "https://static.vecteezy.com/system/resources/thumbnails/008/362/666/small/the-letter-c-logo-that-makes-up-the-cosmic-planet-vector.jpg",
    address: "891 14th St, Denver, CO 80202",
    admin_id: Admin.find_by(username: "win").id
    )





puts "SEEDING COMPLETE ✅"