import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

              {/* photo 1 */}

              <a href="https://github.com/Korbynd23/reShift">
                <div className="columns portfolio-item">
                  <div className="item-wrap">

                    <img src={process.env.PUBLIC_URL + "images/book1.jpeg"} alt='A' className="item-img" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">Employee Survey System</div>
                    </div>

                  </div>
                </div>
              </a>
              {/* photo 2 */}

              <a href="https://find-my-pets.herokuapp.com/">
                <div className="columns portfolio-item">
                  <div className="item-wrap">

                    <img src={process.env.PUBLIC_URL + "images/dog1.jpeg"} alt='A' className="item-img" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">Pet Finder</div>
                    </div>

                  </div>
                </div>
              </a>
              {/* photo 3 */}

              <a href="https://github.com/Galdronis/Travel-Guide">
                <div className="columns portfolio-item">
                  <div className="item-wrap">

                    <img src={process.env.PUBLIC_URL + "images/columbus1.jpeg"} alt='A' className="item-img" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">Travel Guide (Columbus) </div>
                    </div>

                  </div>
                </div>
              </a>
              {/* Photo 4 */}

              <a href="https://github.com/meyerbw10/Book-Search-Engine">
                <div className="columns portfolio-item">
                  <div className="item-wrap">

                    <img src={process.env.PUBLIC_URL + "images/book1.jpeg"} alt='A' className="item-img" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">Book Search Engine</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}