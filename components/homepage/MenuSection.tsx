import Image from "next/image";
import React from "react";
import MenuItem from "../features/MenuItem";
import { products } from "@/utils/dataPlaceholder";

const MenuSection = () => {
  return (
    <section className="section menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Selecție Specială
        </p>

        <h2 className="headline-1 section-title text-center">Cutii</h2>

        <ul className="grid-list products">
          {products.map((item, index) => {
            return <MenuItem key={index} item={item} />;
          })}
        </ul>

        {/* <div className="sticky-bottom">
          <a
            className="btn btn_cart"
            data-bs-toggle="collapse"
            href="#collapse"
            role="button"
            aria-expanded="false"
            aria-controls="collapse"
          >
            <IoCartOutline />
            <span className="glyphicon glyphicon-shopping-cart"></span>
            <span className="badge"></span>
            <span className="total_price">0 RON</span>
          </a>
          <div className="collapse mb-2" id="collapse">
            <div className="card card-body">
              <span id="cart_details"></span>
              <div className="text-end my-3">
                <a
                  href="checkout"
                  className="btn btn_cart-checkout"
                  id="check_out_cart"
                >
                  <IoCartOutline />
                  Comandă acum
                </a>
                <a href="#menu" className="btn btn_cart-clear" id="clear_cart">
                  <IoTrashOutline />
                  Șterge tot
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <Image
          src="/images/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default MenuSection;
