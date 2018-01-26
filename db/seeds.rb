sections = [
  ["Appetizers", ""],
  ["Rolls", ""],
  ["Sashimi & Nigiri", ""],
  ["Main Dishes", ""],
  ["Beverages", ""],
  ["Side Orders", ""],
  ["Desserts", ""],
]
sections.each do |section|
  name, description = section
  next if Section.find_by({name: name})
  Section.create!({name: name, description: description})
end

subsections_hash = {}
subsections_hash["Main Dishes"] = [
  ["Entrees", ""],
  ["Lunch Specials", ""],
  ["Kid's Menu", ""],
  ["Donburi", ""],
  ["Noodle Dishes", ""],
  ["Bento Box Combination", "*NO DOUBLE SELECTIONS*"]
]

subsections_hash["Sashimi & Nigiri"] = [
  ["Sushi & Sashimi Combos", "*Chef's choice. No Substitutions*"],
  ["Haya Sushi Boat", ""],
  ["Nigiri", ""],
  ["Sashimi Plates", "*Extra charge for substitutions"],
  ['Sushi and Sashimi Combos', ""]
]

subsections_hash["Rolls"] = [
  ["Temaki - Hand Roll", ""],
  ["Basic Rolls", ""],
  ["Vegetarian Rolls", ""],
  ["Deep Fried Rolls", ""],
  ["House Rolls", ""],
]


subsections_hash.each do |section, subsection_arr|
  section_id = Section.find_by({name: section}).id
  subsection_arr.each do |item|
    name, description = item
    next if Subsection.find_by({name: name})
    Subsection.create!({
      name: name,
      description: description,
      section_id: section_id
      })
  end
end

items_hash = {}

items_hash['Beverages'] = [
  ["Soft Drink", "(Coke, Diet Coke, Orange Fanta, Sprite, Mr. Pibb, Iced Tea)",'2.75'],
  ["Marble Soda", "", '3.49'],
  ["Melon Soda", "", '3.99'],
  ["Hot Tea", "", '1.99']
]

items_hash['Appetizers'] = [
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
    ["Gyoza (6pcs)", "(Deep Fried Pot Stickers)", '6.25', 0],
    ["Jalapeno Bomb (6 pcs)", "(Jalapeno Stuffed w/ Crabmix & Cream Cheese)", '9.25', 1],
    ["Mushroom Bomb (6pcs)", "(Mushroom stuffed w/ Jalapeno, Crabmix & Cream Cheese)", '9.25', 1],
    ["Croquette", "(Deep Fried Potato Patty)", '5.99', 1],
    ["Mixed Tempura", "(Shrimp (2pcs) & Assortment of Deep Fried Vegetables)", '9.25', 0],
    ["Ika Ring", "(Deep Fried Breaded Calamari)", '9.25', 0],
    ["Soft-Shell Crab", "(Breaded Soft-Shell Crab w/ Dipping Sauce)", '10.99', 0],
    ["Agedashi Tofu", "(Deep Fried Tofu w/ Tempura Sauce)", '5.99', 0],
    ["Chicken Karaage", "(Deep Fried Chicken Strips w/ Teriyaki Sauce)", '8.99', 0]
  ]

items_hash['Side Orders'] = [
  ["Miso Soup", "", '1.99', 0],
  ["Rice", "", '1.99', 0],
  ["Salad", "", '1.99, 0']
]

items_hash['Desserts'] = [
  ["Mochi Ice Cream", "(Mango, Strawberry, Chocolate, Green Tea, Vanilla, Coffee)", '3.99', 0],
  ["Ice Cream", "(Green Tea)", 3.49],
  ["Tempura Ice Cream", "(Deep Fried Ice Cream w/ Tempura Batter)", '7.49', 0],
  ["Tempura Chocopie", "(Deep Fried Chocopie w/ Tempura Batter)", '6.49', 0]
]

items_hash.each do |section, items|
  if !Section.find_by({name: section})
    debugger
  end
  section_id = Section.find_by({name: section}).id
  items.each do |item|
    name, description, price, spiciness = item
    next if Item.find_by({name: name})
    Item.create!({
      name: name,
      description: description,
      price: price,
      spiciness: spiciness,
      subsection_id: nil,
      section_id: section_id
      })
  end
end

main_courses_hash = {}
main_courses_hash['Entrees'] = [
    ["Chicken Teriyaki", "(Charbroiled Skinless Chicken)", '10.49', 0],
    ["Spicy Honey Chicken", "(Chicken Teriyaki Pan-fried w/ Spicy Honey Sauce)", '10.99', 1],
    ["Beef Teriyaki", "(Charbroiled Sliced Beef)", '13.49', 0],
    ["Salmon Teriyaki", "(Charbroiled Salmon Steak)", '12.49', 0],
    ["Hamachi Kama", "(Grilled Hamachi Collar w/ Spicy Sauce)", '9.99', 0],
    ["Spicy Popcorn Chicken", "(Popcorn Chicken w/ Spicy Honey, Sauce)", '10.49', 1],
    ["Shrimp Tempura", ("Deep Fried Battered Shrimp"), '12.49', 0],
    ["Tempura Combo", "(Deep Fried Shrimp & Vegetables)", '12.49', 0],
    ["Veggie Tempura", "(Deep Fried Assorted Vegetables)", '10.99', 0],
    ["Tonkatsu", "(Deep Fried Lean Pork Loin)", '10.99', 0],
    ["Sesame Chicken", "(Deep Fried Skinless Chicken Breast)", '12.49', 0]
  ]

main_courses_hash['Lunch Specials'] = [
    ["Lunch Bowl", "(Served with Rice)", "8.49"],
    ["Select Any 1 Item Below", "", ""]
  ]

main_courses_hash['Noodle Dishes'] = [
  ["Vegetable Udon", "(Thick Noodle Soup w/ Assorted vegetables)", '10.49'],
  ["Seafood Udon", "(Thick Noodle Soup w/ Assorted Seafood & Vegetables)", '12.49'],
  ["Tempura Udon", "(Udon w/w Shrimp & Vegetable Tempura on the Side)", '12.49'],
  ["Vegetable Yaki Noodle", "(Stir-fried Noodle & Mixed Vegetables w/ Rice)", '11.49'],
  ["Vegetable Yaki Noodle & Chicken", "(Stir-fried Noodle, Mixed Vegetables & Chicken w/ Rice)", '11.99']
]

main_courses_hash["Kid's Menu"] = [
  ["Chicken Teriyaki", "(Charbroiled Skinless Chicken)", '7.99'],
  ["Spicy Honey Chicken", "(Chicken Teriyaki, Pan-fried w/ Spicy Honey Sauce)", '8.49'],
  ["Spicy Popcorn Chicken", "(Popcorn Chicken w/ Spicy Honey Sauce)", '8.49' ]
]

main_courses_hash['Donburi'] = [
  ["Katsu-don", "(Tonkatsu, Onions, Carrots, Egg served over rice w/ Sauce)", '11.99'],
  ["Oyako-don", "(Chicken Teriyaki, Onions, Carrots, Egg served over rice w/ Sauce)", '9.99'],
  ["Gyu-don", "(Beef Teriyaki, Onions, Green Onions served over rice w/ Sauce)", '12.99']
]

main_courses_hash['Bento Box Combination'] = [
  ["Haya 2 Item", "", '14.99'],
  ["Haya 3 Item", "", '17.99']
]

main_courses_hash.each do |subsection, items|
  section_id = Section.find_by({name: 'Main Dishes'}).id
  if !Subsection.find_by({name: subsection})
    debugger
  end
  subsection_id = Subsection.find_by({name: subsection}).id
  items.each do |item|
    name, description, price, spiciness = item
    next if Item.find_by({name: name})
    Item.create!({
      name: name,
      description: description,
      subsection_id: subsection_id,
      section_id: section_id,
      spiciness: spiciness || 0,
      price: price
      })
  end
end

sashimi_hash = {}
sashimi_hash['Nigiri'] = [
  ["Ama Ebi", "(Sweet Shrimp)", 'Market Price', 0],
  ["Ebi", "(Cooked Shrimp)", '5.50', 0],
  ["Hamachi", "(Yellow Tail)", '5.50', 0],
  ["Hotate", "(Scallop)", "4.95", 0],
  ["Ika", "(Squid)", '4.95', 0],
  ["Ikura", "(Salmon Roe)", '4.95', 0],
  ["Inari", "(Fried Bean Curd)", "3.95", 0],
  ["Maguro", "(Red Tuna)", "5.50", 0],
  ["Uni*", "(Sea Urchin)", "Market Price", 0],
  ["O Toro*", "(Fatty Bluefin Tuna Belly)", "9.95", 0],
  ["Saba", "(Mackerel)", "4.95", 0],
  ["Sake", "(Salmon)", "4.95", 0],
  ["Shiro Maguro", "(Albacore)", "4.95", 0],
  ["Tako", "(Octopus)", "3.95", 0],
  ["Tamago", "(Cooked Egg)", "3.95", 0],
  ["Tobiko", "(Flying Fish Roe)", "4.95", 0],
  ["Unagi", "(Fresh Water Eel)", "5.50", 0],
  ["Chu Toro*", "(Medium Fatty Red Tuna Belly)", "7.95, 0"]
]

sashimi_hash['Sashimi Plates'] = [
  ["Sashimi P1", "(9 pcs Assorted Sashimi)", "15.49"],
  ["Sashimi P2", "(12 pcs Assorted Sashimi)", "20.49"],
  ["Sashimi P3", "(16 pcs Assorted Sashimi)", "25.99"]
]

sashimi_hash['Sushi and Sashimi Combos'] = [
  ["Sushi No. 5", "(Nigiri (5 pcs) & Cali Roll)", "15.99"],
  ["Sushi No. 10", "(Nigiri (10 pcs) & Cali Roll)", "22.99"],
  ["Haya Sushi Combo", "(Nigiri (5 pcs), Sashimi (4 pcs) & Cali Roll)", "21.99"],
  ["Chirashi", "(Assortment of Sushi Served w/ Sushi Rice)", "19.99"],
  ["Unagi Don", "(BBQ Eel Served w/ Sushi Rice)", "16.99"]
]

sashimi_hash['Haya Sushi Boat'] = [
  ["Boat A: Nigiri (6pcs), Sashimi (12 pcs), Rolls (3)", "", "49.99"],
  ["Boat B: Nigiri (12pcs), Sashimi (18 pcs), Rolls (6)", "", "99.99"]
]

sashimi_hash.each do |subsection, items|
  section_id = Section.find_by({name: "Sashimi & Nigiri"}).id
  if (!Subsection.find_by({name: subsection}))
    debugger
  end
  subsection_id = Subsection.find_by({name: subsection}).id
  items.each do |item|
    name, description, price, spiciness = item
    next if Item.find_by({name: name})
    Item.create!({
      name: name,
      description: description,
      price: price,
      spiciness: spiciness || 0,
      section_id: section_id,
      subsection_id: subsection_id
      })
  end
end

roll_hash = {}
roll_hash['Temaki - Hand Roll'] = [
  ["California Temaki", "(Avocado, Crabmix)", "8.49"],
  ["Hamachi Temaki", "(Hamachi, Avocado, Cucumber)", "9.49"],
  ["Hotate Temaki", "(Scallop, Spciy Mayo, Masago, Cucumber)", "9.49"],
  ["Spicy Tuna Temaki", "(Spicy Tuna, Cucumber)", "9.49"],
  ["Salmon Skin Temaki", "(Salmon Skin, Carrot, Cucumber)", "9.49"],
  ["Unagi Temaki", "(Unagi, Avocado, Cucumber)", "10.49"],
  ["Spider Temaki", "(D.F. Soft-shell Crab, Crabmix, Avocado, Cucumber)", "10.49"],
  ["Temperua Temaki", "(D.F. Shrimp, Crabmix, Avocado, Cucumber)", "9.49"],
  ["Zig-Zag Temaki", "(D.F. Soft-shell Crab, Crabmix, Avocado, Masago, Soywrap)", "12.49"]
]

roll_hash['Basic Rolls'] = [
  ["Nigihama", "Hamachi, Green Onion", "8.49", 0],
  ["Teka Maki", "(Red Tuna)", "8.49", 0],
  ["Sake Maki", "(Salmon)", "8.49", 0],
  ["Alaskan", "(Salmon, Avocado)", "10.49"],
  ["Philly", "(Smoked Salmon, Avocado, Cream Cheese)", "10.99", 0],
  ["New York", "(Ebi, Avocado)", "8.99", 0],
  ["Hawaii", "(Red Tuna, Avocado)", "10.99", 0],
  ["Rock N Roll", "(Unagi, Avocado)", "10.99", 0],
  ["Ocean", "(Hamachi, Avocado)", "10.99", 0],
  ["California", "(Crabmix, Avocado)", "7.99", 0],
  ["Chicken Teri Roll", "(Chicken Teriyaki, Avocado, Cucumber)", "9.99", 0],
  ["Spicy Tuna", "(Spicy Tuna, Cucumber)", "9.99", 1]
]

roll_hash['Vegetarian Rolls'] = [
  ["Avo", "(Avocado)", "6.49"],
  ["Avocu", "(Avocado, Cucumber)", "7.99"],
  ["Kappa Maki", "(Cucumber)", "6.49"],
  ["Futo Maki", "(Pickled Squash, Carrot, Pickled Radish, Cucumber & Stewed Mushrooms)", "9.99"],
  ["Vegan", "(Cucumber, Avocado, Mushroom)", "8.99"],
  ["Veggie Lover", "(Avocado, Cucumber, Pickled Radish, Kaiwari) Soywrap", "12.99"]
]

roll_hash['Deep Fried Rolls'] = [
  ["Hanako", "(Tuna, Salmon, Albacore, Avocado, Masago)", "17.49", 0],
  ["Ninja", "(Avocado, Cream Cheese, Salmon, Unagi)", "15.49", 0],
  ["Red Hot", "(Salmon, Cream Cheese, Spicy Crabmix)", "13.49", 1],
  ["Mazinger Z", "(Smoked Salmon, Cream Cheese, Jalapeno)", "13.49", 1],
  ["Golden Gate", "(Avocado, Crabmix)", "11.49", 0],
  ["T-N-T", "(Avocado, Spicy Crabmix, Cream Cheese, White Fish, Spicy Tuna, Pepperfin Sauce, Masago, Green Onions)", "18.99", 1]
]

roll_hash['House Rolls'] = [
  ["Ace", "(D.F. Shrimp, Crabmix, Avocado, Tuna, Salmon, Masago)", "17.49", 0],
  ["Crazy", "(Albacore, Salmon, Tuna, Avocado, Cucumber)", "16.49", 0],
  ["Happy", "(D.F. Shrimp, Cucumber, Cream Cheese, Salmon, Lemon)", "16.49", 0],
  ["Haya", "(D.F. Shrimp, Avocado, 4 Different Fish & Ama Ebi, Masago)", "21.49", 0],
  ["49ers", "(Crabmix, Avocado, Salmon, Tuna, Masago)", "15.49", 0],
  ["Luna", "(D.F. Shrimp, Crabmix, Avocado, Scallop, Masago)", "17.49", 0],
  ["Love", "(D.F. Shrimp, Crabmix, Avocado, Albacore)", "17.49", 0],
  ["Las Vegas", "(D.F. Asparagus, Cream Cheese, Crabmix, Avocado, Hamachi, Salmon, Tuna, Masago)", "19.49", 0],
  ["Rainbow", "(Crabmix, Avocado, 5 Different Fish)", "18.49", 0],
  ["Sex In The City", "(D.F. Shrimp, Cucumber, Avocado, Tuna, Albacore, Masago)", "16.99", 0],
  ["Sunrise", "(D.F. Shrimp, Crabmix, Avocado, Tuna, Masago)", "17.49", 0],
  ["Aloha", "(Spicy Crabmix, Spicy Tuna, Cucumber, Seared Tuna, Jalapeno, Siriacha)", "18.49", 2],
  ["Big Bang", "(Spicy Crabmix Cucumber, Seared Albacore, D.F. Onions)", "17.49", 0],
  ["Bay Scallop", "(Crabmix, Avocado, Scallop, Baked Roll)", "15.49", 0],
  ["Black Jack", "(Spicy Tuna, D.F. Shrimp, Avocado, Unagi)", "19.49", 1],
  ["Dragon", "(D.F. Shrimp, Crabmix, Avocado, Unagi, Masago)", "18.49", 0],
  ["Evergreen", "(D.F. Shrimp, Crabmix, Avocado, Unagi, Masago)", "12.49", 0],
  ["Elise", "(Spicy Crabmix, D.F. Asparagus, D.F. Shrimp, Avocado, Soywrap)", "16.49", 0],
  ["Funky", "(D.F. Shrimp Cucumber, Avocado, Seared Tuna, Ebi)", "18.49", 0],
  ["Hole In One", "(D.F. Soft-shell Crab, Crabmix, Avocado, Seared Tuna, Salmon, Masago)", "20.49", 0],
  ["Lion King", "(Crabmix, Avocado, Salmon, Baked Roll)", "15.49", 0],
  ["Lucky 7", "(D.F. Shrimp, Crabmix, Spicy Tuna, Avocado, Seared Salmon, Masago)", "20.49", 0],
  ["Milky Way", "(D.F. Shrimp Avcado, Crabmix)", "14.49", 0],
  ["Magic Mountain", "(Spicy Tuna, D.F. Shrimp, Crabmix, D.F. Mushroom)", "18.49", 1],
  ["OEC", "(D.F. SHrimp, Crabmix, Avocado, Cucumber, Cream Cheese)", "15.49", 0],
  ["Red Bull", "(D.F. Shrimp, Cream Cheese, Avocado, Spicy Crabmix, Soywrap)", "16.49", 1],
  ["Sistar", "(Spicy Crabmix, Jalapeno, Avocadi, Ebi)", "16.49", 2],
  ["Spider", "(D.F. Soft-shell Crab, Crabmix, Avocado, Cucumber)", "16.49", 0],
  ["Star Wars", "(D.F. Shrimp, D.F. Popcorn Shrimp)", "17.49", 0],
  ["Hanabi", "(Spicy Tuna, D.F. Shrimp, Avocado, Salmon, Albacore, Fiery Sauce)", "20.49", 1],
  ["Flamango", "(Spicy Tuna, Mango, D.F. Shrimp, Spicy Crabmix, Kizami Seaweed, Ruta Sauce, Soywrap)", "20.99", 1],
  ["Citrus Heights", "(D.F. Asparagus, Hamachi, Salmon, Kaiware, Avocado, Tuna Tempura Flakes, Masago, Green Onion)", "20.99", 1],
  ["Fire Poppy", "(Avocado, Spicy Crabmix, D.F. Shrimp, Spicy Salmon, Spring Mix, Ruta Sauce, Pepperfin Sauce, Honey Wasabi, Soywrap)", "23.99", 1],
]

roll_hash.each do |subsection, items|
  if (!Section.find_by({name: "Rolls"}))
    debugger
  end
  section_id = Section.find_by({name: "Rolls"}).id
  if (!Subsection.find_by({name: subsection}))
    debugger
  end
  subsection_id = Subsection.find_by({name: subsection}).id
  items.each do |item|
    name, description, price, spiciness = item
    next if Item.find_by({name: name})
    Item.create!({
      name: name,
      description: description,
      price: price,
      spiciness: spiciness || 0,
      section_id: section_id,
      subsection_id: subsection_id,
      discount: true
      })
  end
end

#Lunch Specials
options = {}
options['Lunch Specials'] = [["Chicken Teriyaki"], ["Spicy Honey Chicken"], ["Spicy Popcorn Chicken"]]

#Bento Box Combination
options['Bento Box Combination'] = [["Chicken Teriyaki"], ["Beef Teriyaki"], ["Salmon Teriyaki"], ["Tonkatsu"],["Sesame Chicken"], ["Saba Shioyaki"], ["Spicy Popcorn Chicken"], ["Spicy Honey Chicken"], ["Tuna Sashimi (4 pcs)"], ["Salmon Nigiri (2 pcs)"], ["California Roll (8 pcs)"], ["Gyoza (4 pcs)"], ["Croquette (2 pcs)"], ["Ika Rings"], ["Mixed Tempura"], ["Agedashi Tofu"]]

#Nigiri
options['Nigiri'] = [["*Ask for availability"]]

#Rolls
options['Rolls'] = [["Deep Fry", "1.50"], ["D.F. Shrimp", "2.00"], ["Cream Cheese", "1.00"], ["Soywrap", "1.00"], ["Lemon", "0.50"], ["Cucumber Wrap", "2.50"], ["Avocado", "1.00"],
["Masago", "1.00"], ["Cucumber", "0.50"], ["Jalapeno", "0.50"], ["Extra Sauce", "0.50"]]

options.each do |key, value|
  value.each do |entry|
    name, price = entry
    if Subsection.find_by({name: key})
      subsection = Subsection.find_by({name: key})
      Option.create!({name: name, price: price, subsection_id: subsection.id})
    else
      section = Section.find_by({name: key})
      debugger if !section
      Option.create!({name: name, price: price, section_id: section.id})
    end
  end
end

Subsection.all.each do |subsection|
  next if subsection.option_id
  option = Option.find_by({subsection_id: subsection.id})
  if option
    subsection.option_id = option.id
    subsection.save!
  end
end

Section.all.each do |section|
  next if section.option_id
  option = Option.find_by({section_id: section.id})
  if option
    section.option_id = option.id
    section.save!
  end
end
