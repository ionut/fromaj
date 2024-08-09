import React from "react";
import { nutritionalValues } from "@/utils/dataPlaceholder";

const NutritionalSection = () => {
  const nutritionValues = nutritionalValues;

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
            {nutritionValues.map((item) => {
              const { id, productName, values } = item;
              const {
                calorii,
                grasimi,
                carbo,
                proteine,
                calciu,
                sodium: sodiu,
                colesterol,
              } = values;
              return (
                <div key={id} className="cheese">
                  <h3 className="title-2 cheese-name">{productName}</h3>
                  <ul className="cheese-nutritional">
                    <li>{calorii}</li>
                    <li>{grasimi}</li>
                    <li>{carbo}</li>
                    <li>{proteine}</li>
                    <li>{calciu}</li>
                    <li>{sodiu}</li>
                    <li>{colesterol}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className="label-2 cheese-reference">
          * Valori din nutritionix.com{" "}
        </p>
      </div>
    </section>
  );
};

export default NutritionalSection;
