import React from 'react';

const Hero = () => {
  return (
    <div className="product-container">
      <div className="left-side">
        <img
          src="https://veirdo.in/cdn/shop/files/Artboard_19_05464953-1090-4b21-8082-3ac90477c5df.png?v=1736422719"
          className="main-image"
          alt="Main Hoodie"
        />
        <div className="thumbnail-row">
          <img src="https://m.media-amazon.com/images/I/61wGCA+aVmL._AC_UY1000_.jpg" alt="Thumbnail 1" />
          <img src="https://rukminid2.flixcart.com/image/550/650/xif0q/sweatshirt/p/d/g/m-hodi-greenflair-original-imah4hn4tqqtfjxg.jpeg?q=90&crop=false" alt="Thumbnail 2" />
          <img src="https://down-my.img.susercontent.com/file/7ae613d4941e07dd26304469b979c199" alt="Thumbnail 3" />
          <img src="https://m.media-amazon.com/images/I/31t3GDEiqaL.jpg" alt="Thumbnail 4" />
          <img src="https://rukminim2.flixcart.com/image/850/1000/k01b8280/sweatshirt/b/d/f/l-10218293-here-now-original-imafjrqmfgvdgsfj.jpeg?q=20&crop=false" alt="Thumbnail 5" />
        </div>
      </div>
      <div className="right-side">
        <div className="breadcrumb">
          Home &gt; Men &gt; Men’s Hoodie & Tops &gt; Long Sleeve Overshirt Hoodie
        </div>
        <div className="product-title">Long Sleeve Overshirt Hoodie</div>
        <div className="price">
          £489.00 <span className="old-price">£636.00</span>
        </div>
        <div className="rating">★★★★★ 289 reviews</div>
        <div className="desc">
          Effortlessly stylish and versatile, this Long Sleeve Overshirt in khaki is perfect for layering or wearing solo. Crafted for comfort and durability, it offers a timeless look that complements any wardrobe.
        </div>

        <div className="colors">
          <div className="label">Color: Black</div>
          <span className="black"></span>
          <span className="white"></span>
          <span className="purple"></span>
          <span className="blue"></span>
          <span className="red"></span>
        </div>

        <div className="sizes">
          <div className="label">Size:</div>
          <button>L</button>
          <button className="active">M</button>
          <button>XL</button>
          <button>XXL</button>
          <button>3XL</button>
          <button>4XL</button>
        </div>

        <div className="buttons">
          <button className="add-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>

        <div className="secure">
          Secure your payment guarantee:
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
          />
        </div>

        <div className="return-box">
          <strong>Return:</strong>
          <br />
          You have 60 days to return the item(s).
          <br />• Free store return
          <br />• Free returns via USPS Dropoff Service
        </div>

        <div className="social">
          <span>Social Share:</span>
          <span>...</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;