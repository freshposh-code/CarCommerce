import React from "react";
import "../Styles/AboutUs.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { teamstat } from "../../data";
import { posh } from "../../Assets";

export default function AboutUs() {
  return (
    <>
      <div className="main">
        <h1 className="text">ABOUT US.</h1>
        <div className="flex">
          <div>
            <h2 className="collectives">About Us</h2>
            <h2 className="collectives">Our Team</h2>
            <h2 className="collectives">Press</h2>
          </div>

          <p className="text-2">
            <span className="span">Posh Cars</span> is a leading digital
            marketplace and solutions provider for the automotive industry that
            connects car shoppers with sellers. Launched in 1998 and
            headquartered in Chicago, the Company empowers shoppers with the
            data, resources and digital tools needed to make informed buying
            decisions and seamlessly connect with automotive retailers. In a
            rapidly changing market, Cars.com enables dealerships and OEMs with
            innovative technical solutions and data-driven intelligence to
            better reach and influence ready-to-buy shoppers, increase inventory
            turn and gain market share. In 2018, Cars.com acquired Dealer
            Inspire®, an innovative technology company building solutions that
            future-proof dealerships with more efficient operations, a faster
            and easier car buying process, and connected digital experiences
            that sell and service more vehicles.
            <br />
            <br />
            <br />
            is a leading digital marketplace and solutions provider for the
            automotive industry that connects car shoppers with sellers.
            Launched in 1998 and headquartered in Chicago, the Company empowers
            shoppers with the data, resources and digital tools needed to make
            informed buying decisions and seamlessly connect with automotive
            retailers. In a rapidly changing market, Cars.com enables
            dealerships and OEMs with innovative technical solutions and
            data-driven intelligence to better reach and influence ready-to-buy
            shoppers, increase inventory turn and gain market share. In 2018,
            Cars.com acquired Dealer Inspire®, an innovative technology company
            building solutions that future-proof dealerships with more efficient
            operations, a faster and easier car buying process, and connected
            digital experiences that sell and service more vehicles.
          </p>
        </div>
      </div>
      <div className="item">
        <img
          src="https://content.fortune.com/wp-content/uploads/2021/07/TOY.0921.Toyota-Factory-20200106TMMKRav4016.jpg"
          alt=""
          className="image"
        />
      </div>

      <div className="quote">
        <div>
          <FormatQuoteIcon style={{ fontSize: "3rem" }} />
          <h3 className="text-3">
            Our marketing does make sense only if it is a faithful witness of
            his time, work, efficiency
          </h3>
          <h5 className="weigh">farouk olawuyi ayo, Director</h5>
          <FormatQuoteIcon
            style={{
              fontSize: "3rem",
              float: "right",
            }}
          />
        </div>
        <div>
          <img
            src="https://marketingtochina.com/wp-content/uploads/2018/11/Automotive-China-Digital-Age.jpg"
            alt="/cars"
            className="marketing-cars"
          />
        </div>
      </div>
      <div className="section">
        <div className="contain-img">
          <div className="person-img">
            <img
              src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              alt="person"
              className="person"
            />
            <img
              src="https://static01.nyt.com/images/2017/04/07/fashion/07COVER/07COVER-superJumbo.jpg"
              alt="person"
              className="person"
            />
          </div>
          <div className="person-img2">
            <img
              src="https://images.unsplash.com/photo-1606593470233-16950c7d8c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMHNwZWFraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="person"
              className="person"
            />
          </div>
        </div>
        <div className="box">
          <h1 className="text-4">THE TEAM.</h1>
          <h3 className="speech">
            Koenigsegg Agera R, McLaren F1, Bugatti Veyron SS and Lamborghini
            Veneno. These are some of the best, most flashiest super cars out
            there, and cars that are the subject of envy among many. And who can
            blame these guys? These supercars that have defined a generation are
            known for their shocking sticker prices, thus making them status
            symbols, they move from 0 to 60 mph in a zip, and they get attention
            and any time, anywhere especially for local Casanovas. Because these
            trimmings and promises, many people dream about owning and driving a
            McLaren, a Koegnisegg or Lamborghini and enjoy the magical ride. But
            is it worth the hype, the attention and your time? <br />
            <br />
            Cars are a stimulus to the American world today it's everything we
            breath on we depend on them so, if we don't have the cars we need
            then where would we be in the world? In the 1920's it was all about
            auto racing. The 1920's were the The Golden age of racing. From the
            1920's cars, the different types of automotive vehicles started
            getting better and faster. Each year from the 1920's Chevy, for an
            example, has gotten more qualifications and upgrades to the better
            improved the quality of the car.
          </h3>
          <div className="stat">
            {teamstat.map((stat) => (
              <div className="stats" key={stat}>
                <div className="box">
                  <h2>{stat.no}</h2>
                  <h4>{stat.records}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
