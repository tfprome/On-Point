type Product ={
    id:number;
    title:string;
    desc?:string;
    img?:string;
    price:number;
    options?:{title:string, additionalPrice:number}[]
};

type products= Product[];

export const featuredproducts: products=[
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/p1.png",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 2,
        title: "Bacon Deluxe",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/p2.jpg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/p3.png",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 4,
        title: "Spicy Arrabbiata",
        desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
        img: "/p4.jpg",
        price: 26.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 5,
        title: "Jalapeño Fiesta",
        desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
        img: "/p5.png",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 6,
        title: "Margherita Magic",
        desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
        img: "/p6.png",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 7,
        title: "Garlic Parmesan Linguine",
        desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
        img: "/p7.png",
        price: 28.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 8,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
        img: "/p8.png",
        price: 32.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 9,
        title: "Hawaiian Teriyaki",
        desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
        img: "/p9.png",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
    ];

export const pizzas: products=[
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/p1.png",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 2,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
        img: "/p8.png",
        price: 32.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/p3.png",
        price: 26.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 4,
        title: "Pesto Primavera",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/p10.png",
        price: 28.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 5,
        title: "Veggie Supreme",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/p11.jpg",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 6,
        title: "Four Cheese Fantasy",
        desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
        img: "/p12.png",
        price: 22.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
]

export const pastas: products = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    desc: "Classic Roman pasta dish with creamy egg sauce, pancetta, and Parmesan cheese.",
    img: "/pa1.png",
    price: 22.5,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 2,
    title: "Fettuccine Alfredo",
    desc: "Smooth and rich Alfredo sauce over fettuccine noodles topped with herbs.",
    img: "/pa2.png",
    price: 24.0,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 3,
    title: "Penne Arrabbiata",
    desc: "Spicy tomato sauce with garlic, chili, and parsley over penne pasta.",
    img: "/pa3.png",
    price: 21.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 4,
    title: "Lasagna Bolognese",
    desc: "Layered lasagna with rich meat sauce, béchamel, and cheese blend.",
    img: "/pa4.png",
    price: 26.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 5,
    title: "Pesto Penne",
    desc: "Creamy basil pesto over penne with cherry tomatoes and grated Parmesan.",
    img: "/pa5.jpg",
    price: 23.5,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
  {
    id: 6,
    title: "Cheesy Mac",
    desc: "Classic macaroni tossed in a rich cheddar and gouda cheese sauce.",
    img: "/pa6.png",
    price: 20.0,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 3 },
      { title: "Large", additionalPrice: 5 },
    ],
  },
];


export const burgers: products = [
  {
        id: 2,
        title: "Bacon Deluxe",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/p2.jpg",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
  {
    id: 2,
    title: "BBQ Bacon Burger",
    desc: "Grilled beef with smoky BBQ sauce, crispy bacon, cheddar, and onions.",
    img: "/b2.png",
    price: 21.5,
    options: [
      { title: "Single", additionalPrice: 0 },
      { title: "Double", additionalPrice: 3 },
      { title: "Triple", additionalPrice: 5 },
    ],
  },
  {
    id: 3,
    title: "Mushroom Swiss Burger",
    desc: "Beef burger with sautéed mushrooms, Swiss cheese, and garlic aioli.",
    img: "/b3.png",
    price: 20.9,
    options: [
      { title: "Single", additionalPrice: 0 },
      { title: "Double", additionalPrice: 3 },
      { title: "Triple", additionalPrice: 5 },
    ],
  },
  {
    id: 4,
    title: "Spicy Chicken Burger",
    desc: "Crispy chicken patty with spicy mayo, lettuce, and pickles.",
    img: "/b4.png",
    price: 18.9,
    options: [
      { title: "Single", additionalPrice: 0 },
      { title: "Double", additionalPrice: 3 },
      { title: "Triple", additionalPrice: 5 },
    ],
  },
  {
    id: 5,
    title: "Veggie Delight",
    desc: "Grilled veggie patty with avocado, sprouts, tomato, and vegan sauce.",
    img: "/b5.png",
    price: 17.5,
    options: [
      { title: "Single", additionalPrice: 0 },
      { title: "Double", additionalPrice: 3 },
      { title: "Triple", additionalPrice: 5 },
    ],
  },
  {
    id: 6,
    title: "Cheese Bomb Burger",
    desc: "Stuffed beef patty oozing with melted cheese, pickles, and burger sauce.",
    img: "/b6.png",
    price: 22.0,
    options: [
      { title: "Single", additionalPrice: 0 },
      { title: "Double", additionalPrice: 3 },
      { title: "Triple", additionalPrice: 5 },
    ],
  },
];


export const singleProduct: Product = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };

  type Menu ={
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
}[];

export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/m3.png",
      color: "white",
    },
  ];