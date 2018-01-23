# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sections = [
  "Rolls",
  "Sashimi & Nigiri",
  "Main Courses",
  "Beverages",
  "Appetizers",
  "Side Orders",
  "Deserts"
]

sections.each do |section|
  if !Section.find_by({name: section})
    Section.create!({name: section})
  end
end

app_id = Section.find_by({name: "Appetizers"}).id

appetizer = [
  ["Edamame", "(Green Soy Bean)", 4.49, 0],
  ["Spicy Edamame", "(Green Soy Bean w/ Flavored Chili Pepper)", '6.49', 0],
  ["Sunomono Salad", "(Cucumber w/ Vinegar Sauce)", '4.49', 0],
  ["Sunomono & Crabmix", "(Cucumber w/ Vinegar Sauce and Crabmix)", '5.49', 0],
  ["Seafood Sunomono","(Octopus, Ebi, Cucumber w/ Vinegar Sauce)", '6.99', 0],
  ["Hiyashi Wakame", "(Seasame Flavor Seasoned Seaweed)", '5.49', 0],
  ["Hiawaiian Poki Salad", "(Tuna, Cucumber, Onion, Masago w/ Spicy Sauce)", '13.49', 1],
  ["Pepper Fin", "(Albacore, Jalapeno, Spicy Sauce)", '15.99', 1],
  ["BBQ Albacore (Rare)", "(Lightly Charbroiled Albacore w/ Special Sauce)", '12.99', 0],
  ["Sea Steak (Rare)", "(Lightly Seared Tuna w/ Ponza Sauce & Seasame Oil)", '13.49', 0],
  ["Salmon Lover", "(Lightly Seared Salmon w/ Avocado Sauce & Masago)", '12.99', 0],
  ["Baked Mussel (6 pcs)", "(Baked Green Mussel w/ Special Sauce)", '10.99', 0],
]

appetizer.each do |item|
  next if Item.find_by({name: item[0]})
  Item.create!({
    name: item[0],
    price: item[2],
    spiciness: item[3],
    section_id: app_id
  })
end
