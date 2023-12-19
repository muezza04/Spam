import React from "react";

const Coba = () => {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
                  </div>
                </div>
                <hr className="my-4" />
                <ul className="list-group list-group-flush">
                  {/* ... List items for Website, Github, Twitter, Instagram, and Facebook ... */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  {/* ... Form fields for Full Name, Email, Phone, Mobile, Address ... */}
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="button"
                      className="btn btn-primary px-4"
                      value="Save Changes"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="d-flex align-items-center mb-3">
                      Project Status
                    </h5>
                    {/* ... Project status information and progress bars ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coba;
