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

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <img src={process.env.PUBLIC_URL+"images/book1.jpeg"} alt='A'className="item-img"/>
                     
                      <div className="overlay">
                        <div className="portfolio-item-meta">app</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* photo 2 */}

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <img src={process.env.PUBLIC_URL+"images/dog1.jpeg"} alt='A'className="item-img"/>
                     
                      <div className="overlay">
                        <div className="portfolio-item-meta">app</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* photo 3 */}

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <img src={process.env.PUBLIC_URL+"images/columbus1.jpeg"} alt='A'className="item-img"/>
                     
                      <div className="overlay">
                        <div className="portfolio-item-meta">app</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Photo 4 */}

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <img src={process.env.PUBLIC_URL+"images/book1.jpeg"} alt='A'className="item-img"/>
                     
                      <div className="overlay">
                        <div className="portfolio-item-meta">app</div>
                      </div>
                    </a>
                  </div>
                </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}