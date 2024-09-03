import React from "react";

const NewOrder = () => {
  return (
    <section className="checkout">
      <div className="container w-full">
        <form action="">
          <div className="input-wrapper">
            <input
              type="text"
              name="full_name"
              placeholder="Numele dumneavoastră"
              className="input-field"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Numărul de telefon"
              className="input-field"
              required
              pattern="[0-9]{10}"
            />
            <input
              type="text"
              name="street_address"
              placeholder="Adresa dumneavoastră"
              className="input-field"
              id="location-input"
              required
            />
            <input
              type="text"
              name="street_details"
              placeholder="Apt, Bloc, etc (optional)"
              className="input-field"
            />
            <input
              type="text"
              name="city_name"
              placeholder="Oras"
              id="locality-input"
              className="input-field"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">
              Trimite
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewOrder;
