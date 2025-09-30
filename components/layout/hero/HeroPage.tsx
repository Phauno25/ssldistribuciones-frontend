import React from "react";

export type HeroPageProps = {
  title?: string;
  description?: string;
};

const HeroPage = ({ title, description }: HeroPageProps) => {
  return (
    <section className="pt-24 pb-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-main mb-6 text-balance">
            {title}
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
