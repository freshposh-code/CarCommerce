import React from "react";
import "./Styles/FooterSection.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <>
      <section className="footer">
        <div className="f-point1">
          <div className="fpoint1-content">
            <h1>
              <i class="car-logo fa-solid fa-car"></i> Posh Carhouse
            </h1>
            <p className="p-tag">
              Posh Carhouse Premium Car Sells & Services Dealing Secondhand Car
              At Affordable Price.
            </p>

            <p>
              <i class=" space fa-solid fa-location-pin"></i> Raver Credit Drive
            </p>
            <p>
              <i class=" space fa-solid fa-phone"></i>
              +91 98330 29900
            </p>
            <p>
              <i class=" space fa-solid fa-square-envelope"></i>{" "}
              carhousemumbai@gmail.com
            </p>
            <div className="media">
              <i class=" fb- fa-brands fa-facebook"></i>
              <i class=" tw- fa-brands fa-twitter"></i>
              <i class=" ld- fa-brands fa-linkedin"></i>
              <i class=" G- fa-solid fa-g"></i>
              <i class=" in- fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="f-point2">
          <div className="fpoint2-content">
            <h2>What We offer?</h2>
            <div>
              <Link className="nav-link" to="/about-us">
                Rent a car
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/car-listing">
                Search for sale
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/about-us">
                daily dealers
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/blog">
                Weekly diversion
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/car-listing">
                Change color
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/blog">
                Cars exhibition
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/blog">
                car auction
              </Link>
            </div>
          </div>
        </div>

        <div className="f-point3">
          <div className="fpoint3-content">
            <h2>Tags</h2>
            <div className="display-p">
              <div>Apps</div>
              <div>gallery</div>
            </div>
            <div className="display-p">
              <div>photography</div>
              <div>web</div>
            </div>
            <div className="display-p">
              <div>Blog Sidebar</div>
            </div>
            <div className="display-p">
              <div>books</div>
              <div>businesses</div>
            </div>
            <div className="display-p">
              <div>design</div>
              <div>education</div>
            </div>
            <div className="display-p">
              <div>fitness</div>
              <div>pen</div>
            </div>
            <div className="display-p">
              <div>real</div>
            </div>
          </div>
        </div>
        <div className="f-point5">
          <div className="fpoint5-content">
            <h2>Gallery</h2>
            <div className="gallery-images">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg8LRlHH3oPIMRJjsuVno6XEWBX57WjxDZjJdfPOTNTgG21kh157kCWgSjGok16VVJJA&usqp=CAU"
                alt=""
              />
              <img
                src="https://eskipaper.com/images/free-audi-r8-wallpaper-1.jpg"
                alt=""
              />
              <img
                src="https://di-uploads-pod12.dealerinspire.com/universitydodgeram/uploads/2018/07/2018-Dodge-Challenger-SRT-Demon-University-Dodge.jpg"
                alt=""
              />
            </div>
            <div className="gallery-images">
              <img
                src="https://carsalesbase.com/wp-content/uploads/2020/07/US-sports-car-sales-Chevrolet_Corvette.jpg"
                alt=""
              />
              <img
                src="https://storage.googleapis.com/pod_public/1300/116593.jpg"
                alt=""
              />
              <img src="https://wallpaperaccess.com/full/413898.jpg" alt="" />
            </div>
            <div className="gallery-images">
              <img
                src="https://i.pinimg.com/736x/4b/bf/d4/4bbfd476ec3f8259d81b00196ea35550--ferrari--dream-cars.jpg"
                alt=""
              />
              <img
                src="https://car-images.bauersecure.com/wp-images/3550/best_sportscar_514.jpg"
                alt=""
              />
              <img
                src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/2022-Audi-RS3-Sedan-green-1001x565-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default footer;
