import React from "react";
import "../../styles/index.css";
import Footer from "../footer.component/Footer";
import "./information.style.css";

export default function Information() {
  return (
    <main className="main">
      <section className="about">
        <h2 className="about__title">About</h2>
        <p className="about__text">
          I create high-quality software solutions tailored to my clients' needs
          and budgets. With my extensive experience as a developer, designer,
          and project manager, I have worked with a variety of industries and
          stay up-to-date with the latest trends and technologies to provide
          innovative and effective solutions. Contact me to achieve your
          technology goals.
        </p>
        <div className="about__image"></div>
      </section>

      <section className="about">
        <h2 className="about__title">Pricing</h2>
        <p className="about__text">
          I offer flexible and affordable pricing plans to make my software
          accessible to businesses of all sizes and budgets. My basic plan
          includes all essential features, while our premium plan adds advanced
          features for those who need them. We also offer a free trial for all
          plans. Try my software today and see how we can help your business
          grow.
        </p>
        <div className="about__image pricing"></div>
      </section>

      <section className="about">
        <h2 className="about__title">Technologies</h2>

        <div className="about__carousel">
          <div className="about__carousel__item" id="i1">
            <span className="about__carousel__item__title">React</span>
          </div>
          <div className="about__carousel__item" id="i2">
            <span className="about__carousel__item__title">Spring</span>
          </div>
          <div className="about__carousel__item" id="i3">
            <span className="about__carousel__item__title">Firebase</span>
          </div>
          <div className="about__carousel__item" id="i4">
            <span className="about__carousel__item__title">Bootstrap</span>
          </div>
          <div className="about__carousel__item" id="i5">
            <span className="about__carousel__item__title">Material UI</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
