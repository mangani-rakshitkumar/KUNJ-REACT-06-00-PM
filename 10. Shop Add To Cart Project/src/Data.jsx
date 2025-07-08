import React from 'react';
import Card from './Card';

const products = [
  {
    name: "Spaghetti",
    category: "Dinner",
    price: 12.05,
    description: "Delicious spaghetti with rich tomato sauce.",
    rating: 4,
    image: "https://t3.ftcdn.net/jpg/01/09/75/90/360_F_109759077_SVp62TBuHkSn3UsGW4dBOm9R0ALVetYw.jpg",
  },
  {
    name: "Gnocchi",
    category: "Lunch",
    price: 12.05,
    description: "Soft potato dumplings in creamy sauce.",
    rating: 5,
    image: "https://www.kingarthurbaking.com/sites/default/files/2025-02/Potato-Gnocchi_2025_Lifestyle_ALT_H_045.jpg",
  },
  {
    name: "Ravioli",
    category: "Dinner",
    price: 12.05,
    description: "Stuffed pasta with herbs and cheese.",
    rating: 5,
    image: "https://media.istockphoto.com/id/184637819/photo/ravioli-with-tomato-sauce.jpg?s=612x612&w=0&k=20&c=0wfNqYXteoSlahPKrKQ-KQuAeuHiEKJPWwpIOlCdGXg=",
  },
  {
    name: "Penne Alla Vodka",
    category: "Lunch",
    price: 12.05,
    description: "Penne in a creamy tomato vodka sauce.",
    rating: 4,
    image: "https://www.allrecipes.com/thmb/nO3iistRRBHuMCz1Gr_0XuMGaWg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-8513545-penne-alla-vodka-VAT-hero-4x3-2-4a53c968c3d94a32816f01f5793702ce.jpg",
  },
  {
    name: "Risotto",
    category: "Dinner",
    price: 12.05,
    description: "Creamy Italian rice with mushrooms.",
    rating: 4,
    image: "https://t3.ftcdn.net/jpg/04/59/56/42/360_F_459564273_u5zfEeUfCC03A30Puzw4aog8saXCHLXv.jpg",
  },
  {
    name: "Splitza Signature",
    category: "Lunch",
    price: 12.05,
    description: "House special pizza with loaded toppings.",
    rating: 5,
    image: "https://restaurants.pizzahut.co.in/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2FrOOzrsdmcjmsCtV5WWxmdWfmIH_UtoRdBK3nE8Hi44akxrKXTfG0zwrG-uoKeZkf0_dQ2zAb5Q2ojf7GXw%3Ds0&w=384&q=75",
  },
  {
    name: "Chocolate Donut",
    category: "Dessert",
    price: 10.05,
    description: "Chocolate glazed donut.",
    rating: 4,
    image: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg",
  },
  {
    name: "Classic Tiramisu",
    category: "Dessert",
    price: 10.05,
    description: "Coffee-flavored Italian dessert.",
    rating: 5,
    image: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dwa8fa7eec/images/recipe-Images/classic-tiramisu-recipe.jpg?sw=1200&sh=1200&sm=fit",
  },
  {
    name: "Frosted Donut",
    category: "Dessert",
    price: 10.05,
    description: "Donut with colorful frosting.",
    rating: 4,
    image: "https://d1w7312wesee68.cloudfront.net/Jk7H3ucseafIsThdTPwtrwaNkzVm8cLd7CMFa_iJz_0/ext:webp/quality:85/plain/s3://toast-sites-resources-prod/restaurantImages/5865a659-95fb-4946-ba0f-350ca16dee23/MAwebsitecoverphoto.jpeg",
  },
  {
    name: "Sweet Cupcake",
    category: "Dessert",
    price: 10.05,
    description: "Mini cake with icing.",
    rating: 5,
    image: "https://www.allrecipes.com/thmb/sOnt_KFab8PUiu_a29Hxa1Pt6rc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229952_Sweet-Potato-Cupcakes-with-Toasted-Marshmallow-Frosting_Kim_SERP_7064259_original-4x3-1-6a341e636c834b4d84f2a7e49311d49c.jpg",
  },
  {
    name: "Sprite",
    category: "Drink",
    price: 7.05,
    description: "Refreshing lemon-lime soda.",
    rating: 4,
    image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2FSprite+New+VIS.jpg&c=0",
  },
  {
    name: "Fanta",
    category: "Drink",
    price: 7.05,
    description: "Orange-flavored fizzy drink.",
    rating: 5,
    image: "https://t3.ftcdn.net/jpg/13/83/32/94/360_F_1383329426_OlVNE89M6ffbNPtqY4uXZ59OlJl0H40S.jpg",
  },
  {
    name: "Pepsi",
    category: "Drink",
    price: 7.05,
    description: "Popular cola beverage.",
    rating: 4,
    image: "https://st4.depositphotos.com/1063437/38056/i/450/depositphotos_380560238-stock-photo-poznan-pol-may-2020-can.jpg",
  },
  {
    name: "Coca Cola",
    category: "Drink",
    price: 7.05,
    description: "Classic coke.",
    rating: 5,
    image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/iStock-487787108-3f77e523663f73c106cbcb81834a4248.jpg",
  },
  {
    name: "Thums Up",
    category: "Drink",
    price: 7.05,
    description: "Strong fizzy cola.",
    rating: 4,
    image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/11/30/Photos/Processed/thumsup-kfEG--621x414@LiveMint.JPG",
  },
];

const Data = ({ onAddToCart }) => (
  <div className="product-grid">
    {products.map((item, i) => (
      <Card key={i} {...item} onAddToCart={() => onAddToCart(item)} />
    ))}
  </div>
);

export default Data;