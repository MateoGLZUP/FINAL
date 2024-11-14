import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust this import based on your folder structure
import Navbar from '../components/Navbar'; // Assuming you’ll create a Navbar component
import Footer2 from '../components/Footer2'; // Assuming you’ll create a Footer2 component

function Catalog({ houses }) {
  return (
    <>
      <Navbar />

      <header className="header text-center">
        <h1>House Catalog</h1>
        <p>Here are the available houses</p>
      </header>

      <section className="catalog container mt-4">
        <div className="row">
          {houses.map((house) => (
            <div key={house.zipCode} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
              <div className="card shadow-sm h-100" style={{ width: '100%' }}>
                <div className="house-image">
                  <img
                    src={house.imageurl}
                    className="card-img-top"
                    alt={`Image of ${house.description}`}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{house.name}</h5>
                  <p className="card-text">
                    <strong>City:</strong> {house.city}
                  </p>
                  <p className="card-text">
                    <strong>ZIP Code:</strong> {house.zipCode}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ${house.price.toLocaleString()}
                  </p>
                  <a href={`/house/${house.zipCode}`} className="btn btn-outline-secondary mt-auto">
                    Ver Detalles
                  </a>

                  {/* Save and Share buttons */}
                  <div className="d-flex justify-content-between mt-2">
                    <button className="btn btn-outline-success btn-sm save-btn">
                      <i className="fas fa-heart"></i> Save
                    </button>
                    <button className="btn btn-outline-secondary btn-sm share-btn">
                      <i className="fas fa-share-alt"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer2 />
    </>
  );
}

export default Catalog;
