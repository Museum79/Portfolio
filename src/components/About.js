import React from "react";
import { Link } from "react-scroll";
import manga from "../assets/img/manga.png";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row items-center justify-center
                    gap-24"
        >
          <img
            className="object-cover h-full w-full sm:w-[300px] xs:w-[200px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] mx-auto rounded-2xl"
            src={manga}
            alt="moi animé"
          />

          <div
            className="flex flex-col items-center
                        text-center lg:items-start lg:text-left"
          >
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:text-4xl
                            font-medium lg:font-extrabold mb-3
                            before:absolute
                            before:opacity-40
                            before:-top-[2rem]
                            before:hidden
                            before:lg:block"
              >
                Sylvain Caparros
              </h2>
            </div>
            <p
              className="mb-4
                         text-accent"
            >
              Développeur Fullstack
            </p>
            <hr className="mb-6 opacity-0" />
            <p className="mb-8">
              "Je suis actuellement en reconversion professionnelle depuis
              plusieurs années pour devenir développeur. J'ai un intérêt
              particulier pour les nouvelles technologies et j'aime apprendre de
              nouvelles compétences. Mon appétit pour les défis me pousse à
              rechercher constamment de nouveaux projets stimulants.
              <br />
              Je suis une personne motivée et passionnée qui cherche toujours à
              améliorer ses compétences et à s'adapter aux nouvelles tendances
              du marché."
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-70}
              style={{ cursor: "pointer" }}
              className="btn btn-md bg-accent
                            hover:bg-accent-hover transition-all rounded-md"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
