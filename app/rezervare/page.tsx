import React from "react";
import { IoChevronDown, IoPersonOutline } from "react-icons/io5";

const page = () => {
  return (
    <section className="reservation" id="cere_oferta">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form method="post" className="form-left">
            <h2 className="headline-1 text-center">Consultanță Online</h2>

            <p className="form-text text-center">
              Cere o oferta pentru eventimentul tău la{" "}
              <a href="tel:+40754404000" className="link">
                +40 754 404 000
              </a>{" "}
              <br />
              sau completează formularul de mai jos și te contactăm noi!
            </p>

            <div className="input-wrapper">
              <input
                type="text"
                name="full_name"
                placeholder="Numele dumneavoastră"
                className="input-field"
                required
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Numărul de telefon"
                className="input-field"
                required
                pattern="[0-9]{10}"
              />
            </div>

            <div className="input-wrapper">
              <div className="icon-wrapper">
                <IoPersonOutline />

                <select name="persons" className="input-field" required>
                  <option value="">Număr de persoane</option>
                  <option value="10 Persoane">10 Persoane</option>
                  <option value="20 Persoane">20 Persoane</option>
                  <option value="30 Persoane">30 Persone</option>
                  <option value="40 Persoane">40 Persone</option>
                  <option value="50 Persoane">50 Persone</option>
                  <option value="Mai mult de 50 persoane">
                    Mai mult de 50 persoane
                  </option>
                </select>
                <IoChevronDown />
              </div>

              <div className="icon-wrapper">
                <input
                  type="datetime-local"
                  name="reservation_date"
                  className="input-field date"
                  value="<?php echo $newDateTime ?>"
                  aria-label="Date"
                />
              </div>

              <div className="icon-wrapper">
                <select name="event_type" className="input-field" required>
                  <option value="">Tipul de eveniment</option>
                  <option value="Eveniment privat">Eveniment privat</option>
                  <option value="Corporate catering">Corporate catering</option>
                  <option value="Zi de nastere">
                    Zi de naștere/aniversare
                  </option>
                  <option value="Nunta">Nuntă</option>
                  <option value="Stare Civila">
                    Oficierea căsătoriei la Starea Civilă
                  </option>
                </select>
                <IoChevronDown />
              </div>
            </div>

            <textarea
              name="text_message"
              placeholder="Mesaj"
              className="input-field"
            ></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Trimite</span>

              <span className="text text-2" aria-hidden="true">
                Trimite
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
