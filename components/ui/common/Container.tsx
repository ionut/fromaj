import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      {children}
    </section>
  );
};

export default Container;
