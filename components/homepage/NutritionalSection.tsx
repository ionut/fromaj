import React from "react";
import Image from "next/image";

const NutritionalSection = () => {
  return (
    <section className="section nutritional">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Alegere sănătoasă
        </p>

        <h2 className="headline-1 section-title text-center">
          <span>Valori nutritionale</span>
        </h2>
        <div className="nutritional-block">
          <div className="nutritional-grid">
            <div className="cheese">
              <h3 className="title-2 cheese-name">Brie (100g)</h3>
              <ul className="cheese-nutritional">
                <li>334 calorii</li>
                <li>28g grăsimi</li>
                <li>0.5g carbohidrați</li>
                <li>21g proteine</li>
                <li>184mg calciu</li>
                <li>629mg sodium</li>
                <li>100mg cholesterol</li>
              </ul>
            </div>
            <div className="cheese">
              <h3 className="title-2 cheese-name">Cheddar (100g)</h3>
              <ul className="cheese-nutritional">
                <li>404 calorii</li>
                <li>33g grăsimi</li>
                <li>3.1g carbohidrați</li>
                <li>23g proteine</li>
                <li>719mg calciu</li>
                <li>653mg sodium</li>
                <li>99mg cholesterol</li>
              </ul>
            </div>
            <div className="cheese">
              <h3 className="title-2 cheese-name">Gouda (100g)</h3>
              <ul className="cheese-nutritional">
                <li>356 calorii</li>
                <li>27g grăsimi</li>
                <li>2.2g carbohidrați</li>
                <li>25g proteine</li>
                <li>700mg calciu</li>
                <li>819mg sodium</li>
                <li>114mg cholesterol</li>
              </ul>
            </div>
            <div className="cheese">
              <h3 className="title-2 cheese-name">Roquefort (100g)</h3>
              <ul className="cheese-nutritional">
                <li>369 calorii</li>
                <li>31g grăsimi</li>
                <li>2g carbohidrați</li>
                <li>22g proteine</li>
                <li>662mg calciu</li>
                <li>1809mg sodium</li>
                <li>90mg cholesterol</li>
              </ul>
              <p className="label-2 cheese-reference">
                Valori din nutritionix.com *
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionalSection;
