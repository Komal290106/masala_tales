import { Dish, MenuCategory, Event, Review } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Appetizers',
    description: 'Exquisite Indian appetizers to awaken your palate',
    image: 'https://media.istockphoto.com/id/1363048607/photo/paneer-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=FI6yTY8nNeJr0cl9FXV4riPRPX6L1BNlxYAswPLlwOs=',
    itemsCount: undefined
  },
  {
    id: 'veg-mains',
    name: 'Vegetarian Main Course',
    description: 'Signature vegetarian dishes crafted with passion and tradition',
    image: 'https://media.istockphoto.com/id/1292628200/photo/paneer-masala-is-a-famous-indian-dish-served-over-a-rustic-wooden-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=clCvp3yC9MX2q3K0wQnjtSxZ_MJ5TLYmdiaqnpUh74Q=',
    itemsCount: undefined
  },
  {
    id: 'nonveg-mains',
    name: 'Non-Vegetarian Main Course',
    description: 'Premium meat and poultry dishes with authentic Indian flavors',
    image: 'https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=_UHYNHAOBxEoOrzqLgi3iRN9S03FrsKhDWPgubpSdg4=',
    itemsCount: undefined
  },
  {
    id: 'breads',
    name: 'Indian Breads',
    description: 'Freshly baked naans and rotis from our tandoor',
    image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbiUyMGJyZWFkfGVufDB8fDB8fHww',
    itemsCount: undefined
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Traditional Indian sweets with contemporary elegance',
    image: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    itemsCount: undefined
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Curated selection of Indian teas, lassi, and cocktails',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    itemsCount: undefined
  }
];

export const menuItems: Dish[] = [
  // Starters/Appetizers
  {
    id: '1',
    name: 'Paneer Tikka',
    description: 'Cottage cheese cubes marinated in spiced yogurt with bell peppers and onions',
    price: 220,
    image: 'https://media.istockphoto.com/id/1363048607/photo/paneer-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=FI6yTY8nNeJr0cl9FXV4riPRPX6L1BNlxYAswPLlwOs=',
    category: menuCategories[0],
    isSpecial: false
  },
  {
    id: '2',
    name: 'Seekh Kebab',
    description: 'Hand-minced lamb seasoned with fresh herbs and spices, chargrilled on skewers',
    price: 240,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Vla2glMjBrZWJhYnxlbnwwfHwwfHx8MA%3D%3D',
    category: menuCategories[0],
    isSpecial: false
  },
  {
    id: '3',
    name: 'Tandoori Prawns',
    description: 'Jumbo prawns marinated in yogurt, ginger-garlic paste, and aromatic spices, grilled in clay tandoor',
    price: 280,
    image: 'https://media.istockphoto.com/id/981734470/photo/grilled-shrimp-with-tamarind-sauce-or-tamarind-udang-gorend-assam-prawn-malaysian-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=xqayie96MZdZI27ayi3us3G32Yb1K4k-KFyIrRrH_xY=',
    category: menuCategories[0],
    isSpecial: false
  },

  // Vegetarian Main Course
  {
    id: '4',
    name: 'Kadhai Paneer',
    description: 'Cottage cheese cooked with pepper and tomatoes in an iron vessel, spiced with coriander and chillies',
    price: 260,
    image: 'https://images.unsplash.com/photo-1701579231378-3726490a407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FkaGFpJTIwcGFuZWVyfGVufDB8fDB8fHww',
    category: menuCategories[1],
    isSpecial: false
  },
  {
    id: '5',
    name: 'Smoked Paneer Makhani',
    description: 'Smoked cottage cheese tossed in a spicy creamy tomato onion gravy with smoke flavour',
    price: 280,
    image: 'https://media.istockphoto.com/id/1292628200/photo/paneer-masala-is-a-famous-indian-dish-served-over-a-rustic-wooden-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=clCvp3yC9MX2q3K0wQnjtSxZ_MJ5TLYmdiaqnpUh74Q=',
    category: menuCategories[1],
    isSpecial: true
  },
  {
    id: '6',
    name: 'Amli Waale Paneer',
    description: 'Panch phoron tempered green mango stuffed paneer roulade, steeped in a tangy spicy sauce',
    price: 290,
    image: 'https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.webp?a=1&b=1&s=612x612&w=0&k=20&c=5OznhGaZ_I5VIQeZiaymTl5f68ldXM8kUAtHAadf7BQ=',
    category: menuCategories[1],
    isSpecial: true
  },
  {
    id: '7',
    name: 'Martaban Ke Chole',
    description: 'Chick pea curry, cooked in our special chatpatta masala',
    price: 220,
    image: 'https://plus.unsplash.com/premium_photo-1695456064603-aa7568121827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpY2slMjBwZWElMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    category: menuCategories[1],
    isSpecial: false
  },
  {
    id: '8',
    name: 'Do Din Ki Dal',
    description: 'We say it so because it literally takes 48 hours, from soaking to its rubbing to overnight slow cooking till the chef gives it the final tadka',
    price: 240,
    image: 'https://media.istockphoto.com/id/1326815151/photo/indian-popular-food-dal-fry-or-traditional-dal-tadka-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=4sqh6vtzeeHbORT_xELhA05xIiImCLUGkS5-IP18vkg=',
    category: menuCategories[1],
    isSpecial: true
  },
  {
    id: '9',
    name: 'Dal Tadka',
    description: 'Classic yellow dal tempered with cumin, garlic, and ghee',
    price: 200,
    image: 'https://media.istockphoto.com/id/2167042052/photo/dal-tadka.webp?a=1&b=1&s=612x612&w=0&k=20&c=HrpjZmwX0vMgC7IKowaFoObYHaORNs5MjvwaFm3MfOc=',
    category: menuCategories[1],
    isSpecial: false
  },
  {
    id: '10',
    name: 'Velayati Tarkari',
    description: 'Our take on mix vegetable with an addition of english vegetables on a bed of yummy onion tomato makhani',
    price: 240,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Vla2glMjBrZWJhYnxlbnwwfHwwfHx8MA%3D%3D',
    category: menuCategories[1],
    isSpecial: false
  },
  {
    id: '11',
    name: 'Bhuna Aachari Palak Paneer',
    description: 'A perfect twist to the palak paneer with pickling spices',
    price: 260,
    image: 'https://media.istockphoto.com/id/1250399530/photo/vegetarian-palak-paneer.webp?a=1&b=1&s=612x612&w=0&k=20&c=2euIGtU3mYxSOh3_23NS0K0b0lh3BooXrHU1y4Q2ZIA=',
    category: menuCategories[1],
    isSpecial: false
  },
  {
    id: '12',
    name: 'Lahori Tawa Masala Mushroom',
    description: 'Marinated button mushrooms slow cooked on a proper iron tawa in a chef special masala-the lahori style',
    price: 250,
    image: 'https://media.istockphoto.com/id/1195403232/photo/mushroom-paneer-curry-or-sabzi-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=VEt7LtTUj6M5wI6c2hRAznAVlF8PX3k1GkXPSXqnWSM=',
    category: menuCategories[1],
    isSpecial: true
  },
  {
    id: '13',
    name: 'Mutter Chenna Aur Peeli Mirch Ka Kofta',
    description: 'Hand rolled dumplings of green peas, ricotta cheese and peeli mirch dunked in a chef special gravy',
    price: 270,
    image: 'https://media.istockphoto.com/id/1204371299/photo/chicken-kofta-karahi-recipe-hotpot-by-arzoo.webp?a=1&b=1&s=612x612&w=0&k=20&c=g0BAbsE6wkBQ01zhMH3oEeghhhlBLsmMcn0FBE99IYI=',
    category: menuCategories[1],
    isSpecial: true
  },

  // Non-Vegetarian Main Course
  {
    id: '14',
    name: 'Cooker Wala Gosht',
    description: 'An ode to the homestyle comfort preparation of mutton cooked in pressure cooker in households with added tomatoes and potatoes, a perfect flavorsome essential',
    price: 360,
    image: 'https://media.istockphoto.com/id/1457374972/photo/beef-biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=MwsrQFVjLQaB7vboLHEnT2aFI7X_cDXTPNrsIZ1RuCU=',
    category: menuCategories[2],
    isSpecial: false
  },
  {
    id: '15',
    name: 'Safed Kali Mirch Kukkad',
    description: 'A signature takes on the rich creamy kalimirch chicken',
    price: 320,
    image: 'https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=_UHYNHAOBxEoOrzqLgi3iRN9S03FrsKhDWPgubpSdg4=',
    category: menuCategories[2],
    isSpecial: true
  },
  {
    id: '16',
    name: 'Rampuri Handi Murgh',
    description: 'A delicious chicken curry cooked in the traditional handi with hand selected spices and caramelized onions',
    price: 340,
    image: 'https://media.istockphoto.com/id/1252278911/photo/chicken-mughlai-masala.webp?a=1&b=1&s=612x612&w=0&k=20&c=v6kFb9Xc3qqrdlkUJx3Pm6fapklFDJqLiTXpy80hsAo=',
    category: menuCategories[2],
    isSpecial: true
  },
  {
    id: '17',
    name: 'Original Tawa Sajji (Chicken)',
    description: 'A special recipe close to my heart. slow cooked with spices and ghee on an iron tawa like how it is cooked on the streets of lahore',
    price: 380,
    image: 'https://plus.unsplash.com/premium_photo-1667807522245-ae3de2a7813a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JpZ2luYWwlMjBUYXdhJTIwU2FqamklMjAoQ2hpY2tlbil8ZW58MHx8MHx8fDA%3D',
    category: menuCategories[2],
    isSpecial: true
  },
  {
    id: '18',
    name: 'Kadhai Chicken',
    description: 'A recipe from the lehnda panjab, cooked the original way in an iron kadhai to obtain the best taste, color and texture',
    price: 320,
    image: 'https://media.istockphoto.com/id/666553456/photo/chicken-tikka-jalfrezi-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=anlRY5RH9nm2aYFYQo9bAbcC4jnxV6hkNez0ZeEHpsI=',
    category: menuCategories[2],
    isSpecial: false
  },
  {
    id: '19',
    name: 'Classica Butter Chicken',
    description: 'Arguably india\'s most famous export. The real deal! Made in tmt style',
    price: 670,
    image: 'https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=_UHYNHAOBxEoOrzqLgi3iRN9S03FrsKhDWPgubpSdg4=',
    category: menuCategories[2],
    isSpecial: false
  },
  {
    id: '20',
    name: 'Methi Murgh Dalcha',
    description: 'A preparation of chicken slow cooked in a rich curry of 3 types of lentils and kasuri fenugreek leaves till it achieve the right consistency',
    price: 700,
    image: 'https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY2hpY2tlbiUyMGRpc2h8ZW58MHx8MHx8fDA%3D',
    category: menuCategories[2],
    isSpecial: true
  },
  {
    id: '21',
    name: 'Lahori Chicken Chatkara',
    description: 'Authentic lahori street style masala chicken slow cooked on tawa',
    price: 500,
    image: 'https://images.unsplash.com/photo-1697155406147-7d640cbba0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGNoaWNrZW4lMjBkaXNofGVufDB8fDB8fHww',
    category: menuCategories[2],
    isSpecial: true
  },

  // Indian Breads
  {
    id: '22',
    name: 'Tandoori Roti',
    description: 'Whole wheat bread baked in traditional clay oven',
    price: 10,
    image: 'https://media.istockphoto.com/id/898273142/photo/assorted-indian-bread-basket-includes-chapati-tandoori-roti-or-naan-paratha-kulcha-fulka-missi.webp?a=1&b=1&s=612x612&w=0&k=20&c=XekcdT3j5YiRs4RfYRPnOEjPYurZKqWpyblPKJSJaLM=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '23',
    name: 'Plain Naan',
    description: 'Classic leavened white flour bread baked in tandoor',
    price: 8,
    image: 'https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=TxiK2Guj_EGbmbUiThYV50-uGd0z8Wr-xx_JlmtLZq4=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '24',
    name: 'Butter Naan',
    description: 'Soft leavened bread brushed with ghee, baked fresh in our tandoor',
    price: 10,
    image: 'https://media.istockphoto.com/id/1140752821/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lTtokg-1e2OxzzPDHhtwWLR_43TCRBTcmpJU08OL6nQ=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '25',
    name: 'Missi Roti',
    description: 'Traditional North Indian bread made with gram flour and wheat flour',
    price: 9,
    image: 'https://media.istockphoto.com/id/1073544762/photo/corn-flour-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=TBa1l_GTBTaJBUp9TBXH36CdrKThErxshDxiWv8MJOk=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '26',
    name: 'Garlic Naan',
    description: 'Tandoor-baked bread topped with fresh garlic, cilantro, and butter',
    price: 12,
    image: 'https://media.istockphoto.com/id/1140752821/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=lOeYboRNvwONnykKUu7lN-UQg5c0cl0CKfDFiVFfhBk=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '27',
    name: 'Laccha Paratha',
    description: 'Multi-layered whole wheat flatbread with ghee, flaky and buttery',
    price: 14,
    image: 'https://media.istockphoto.com/id/1292639151/photo/lachha-paratha-a-layered-flat-bread-using-wheat-flour-popular-dish-in-north-india-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=7zcd21fyM0qd5gBCHl0qLiJ9nadWDC8yUk4PTJoBuaw=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '28',
    name: 'Rogani Naan',
    description: 'Naan brushed with ghee and sprinkled with sesame seeds',
    price: 13,
    image: 'https://media.istockphoto.com/id/1281208877/photo/butter-naan-having-shallow-depth-of-field-garnished-with-seasame-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=JbuCWAevhA3enxIsHVc7YX6lwRbAr4nmtaynoq0vW8Q=',
    category: menuCategories[3],
    isSpecial: false
  },
  {
    id: '29',
    name: '4 Cheese Naan',
    description: 'An oddly satisfying mix of english cheese stuffed in naan',
    price: 16,
    image: 'https://media.istockphoto.com/id/1335722221/photo/garlic-naan-bread-grilled-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=wlW4GR93jbCDiwXITgajyYxnL8NI5eHUznqO83bxpds=',
    category: menuCategories[3],
    isSpecial: true
  },
  {
    id: '30',
    name: 'Rampuri Naan',
    description: 'Tandoori naan with special Rampuri spices and herbs',
    price: 12,
    image: 'https://media.istockphoto.com/id/1482444234/photo/kashmiri-naan-served-in-dish-isolated-on-dark-background-top-view-of-indian-spices-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=EJ2YqTedQye0X8sRcGuXcuTicjwLre1XT09E-G1PNy8=',
    category: menuCategories[3],
    isSpecial: true
  },

  // Desserts
  {
    id: '31',
    name: 'Gulab Jamun',
    description: 'Golden milk dumplings soaked in cardamom and rose-scented sugar syrup',
    price: 80,
    image: 'https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=',
    category: menuCategories[4],
    isSpecial: false
  },
  {
    id: '32',
    name: 'Rasmalai',
    description: 'Soft cottage cheese dumplings in saffron-infused reduced milk with pistachios',
    price: 80,
    image: 'https://media.istockphoto.com/id/514481051/photo/rasmalai-a-bengali-dessert-with-paneer-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=hGtQe8_7lbbB-6OLGfr6TH6se-X5d8vSq_7Od7I23CM=',
    category: menuCategories[4],
    isSpecial: false
  },
  {
    id: '33',
    name: 'Kulfi Falooda',
    description: 'Traditional Indian ice cream with vermicelli, rose syrup, and chopped pistachios',
    price: 90,
    image: 'https://media.istockphoto.com/id/657090194/photo/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.webp?a=1&b=1&s=612x612&w=0&k=20&c=a4ag4EOcQWAD-8UHXBKkvfQ1CWac1XS1O_kils4aJUk=',
    category: menuCategories[4],
    isSpecial: false
  },

  // Beverages
  {
    id: '34',
    name: 'Masala Chai',
    description: 'Traditional spiced tea blend with cardamom, ginger, cinnamon, and fresh milk',
    price: 40,
    image: 'https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=MbKwu6EcL6HdYiE-yVYC6th6VW1p48fXxnun13yQw6E=',
    category: menuCategories[5],
    isSpecial: false
  },
  {
    id: '35',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink blended with fresh mango pulp and cardamom',
    price: 100,
    image: 'https://media.istockphoto.com/id/980036596/photo/mango-lassi-indian-popular-summer-drink-in-a-terracotta-glass-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=fXHHJnj4kXIivOTJXI5477IPKeYNegtXeNBqXpGv3Hk=',
    category: menuCategories[5],
    isSpecial: false
  },
  {
    id: '36',
    name: 'Nimbu Paani',
    description: 'Fresh lime water with mint, black salt, and cumin powder',
    price: 80,
    image: 'https://media.istockphoto.com/id/2225729974/photo/nimbu-masala-drink-with-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ek0OJ5ZSolDAiealflfEAth0U8uUgoMvmysB2sXagE=',
    category: menuCategories[5],
    isSpecial: false
  }
];

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Diwali Festival Dinner',
    description: 'Celebrate the festival of lights with our special 5-course Diwali menu featuring traditional delicacies and live music performances.',
    date: '2023-10-24',
    image: 'https://images.unsplash.com/photo-1603481546238-487240415921?w=400&h=300&fit=crop',
    type: 'festival'
  },
  {
    id: '2',
    title: 'Tandoori Night Special',
    description: 'Experience the authentic flavors of our clay oven with an unlimited tandoori menu including kebabs, naans, and traditional breads.',
    date: '2023-11-05',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    type: 'food-event'
  },
  {
    id: '3',
    title: 'Bollywood Dinner Show',
    description: 'Enjoy an evening of Bollywood hits performed by professional dancers while savoring our special chef\'s tasting menu.',
    date: '2023-11-12',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop',
    type: 'entertainment'
  }
];

export const customerReviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Authentic flavors that transported me back to my grandmother\'s kitchen. The Kadhai Paneer was exceptional!',
    date: '2025-01-15'
  },
  {
    id: '2',
    name: 'James Mitchell',
    rating: 5,
    comment: 'The best Indian dining experience in the city. Every dish was perfectly spiced and beautifully presented.',
    date: '2025-01-12'
  },
  {
    id: '3',
    name: 'Ravi Patel',
    rating: 5,
    comment: 'Outstanding service and incredible food. The Tandoori dishes were a masterpiece!',
    date: '2025-01-08'
  }
];

export const availableTimeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
  '20:00', '20:30', '21:00', '21:30', '22:00'
];

export const instagramPosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop',
    caption: 'Fresh from our tandoor: Perfectly cooked naan and kebabs'
  },
  {
    id: '2', 
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop',
    caption: 'Our chef\'s special: Gulab Jamun with rose petals'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop',
    caption: 'Behind the scenes: Grinding fresh spices for authentic flavors'
  }
];