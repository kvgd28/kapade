import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-sm-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Grow your business with{' '}
                    <strong className="brand-name">Kapade</strong>
                  </h1>
                  <h2 className="my-3">We are the team of logistics</h2>
                  <div className="mt-3">
                    <NavLink
                      to="/book"
                      className="btn btn-outline-primary btn-lg"
                    >
                      Book Now
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={} className="img-fluid animated" alt="Catalog type image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
