// import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <section>
      <nav className="flex h-24 mx-auto items-center max-w-[90vw]">
        <img src={logo} alt="jobsite" className="logo" />
      </nav>
      <div className="cont page">
        <div className="info">
          <h1 className="font-bold mb-6">
            job <span className="text-primary-500">tracking</span> app
          </h1>
          <p className="leading-loose mb-6 max-w-[35em]">
            I'm baby man bun +1 fit palo santo austin lumbersexual sus. Fingerstache helvetica
            polaroid cold-pressed hashtag, 3 wolf moon vape waistcoat man bun four loko direct trade
            tousled taxidermy leggings. Fit edison bulb tumeric blackbird spyplane, trust fund
            ethical thundercats banjo praxis same twee.
          </p>
          <Link to="/register" className="btn mr-4">
            Register
          </Link>
          <Link to="/register" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img hidden lg:block" />
      </div>
    </section>
  );
};

export default Landing;
