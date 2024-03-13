import React, { useEffect, useState } from "react";
import { contact } from "../data";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [messageTimeout, setMessageTimeout] = useState(false);
  const [errors, setErrors] = useState({
    nom: false,
    email: false,
    sujet: false,
    message: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let formErrors = {
      nom: false,
      email: false,
      sujet: false,
      message: false,
    };

    if (!nom) formErrors.nom = true;
    if (!email) formErrors.email = true;
    if (!sujet) formErrors.sujet = true;
    if (!message) formErrors.message = true;

    if (
      !formErrors.nom &&
      !formErrors.email &&
      !formErrors.sujet &&
      !formErrors.message
    ) {
      emailjs
        .sendForm(
          "service_4xoya0a",
          "template_zp7issd",
          e.target,
          "yso0bb18CY_g2OHo_"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsFormSubmitted(true);
            setIsMessageSent(true);
            setNom("");
            setEmail("");
            setSujet("");
            setMessage("");
            setErrors({
              nom: false,
              email: false,
              sujet: false,
              message: false,
            });

            const timeoutId = setTimeout(() => {
              setIsMessageSent(false);
            }, 5000);

            setMessageTimeout(timeoutId);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(() => {
    return () => {
      if (messageTimeout) {
        clearTimeout(messageTimeout);
      }
    };
  }, [messageTimeout]);

  return (

    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title
                    before:content-contact relative
                    before:absolute
                    before:opacity-40
                    before:-top-[2rem]
                    before:-left-40
                    before:hidden
                    before:lg:block"
          >Contact</h2>
          <p className="subtitle sm:text-center">
            N'hésitez pas à me contacter pour discuter de vos projets, idées ou simplement pour dire bonjour ! Je serais ravi de vous lire et de répondre à toutes vos questions.
          </p>

        </div>
        <div
          className="flex flex-col lg:gap-x-8 lg:flex-row"
        >
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;

              return (
                <div className="flex flex-row gap-x-4 w-full lg:w-1/2" key={index}>
                  <div
                    className="text-accent text-2xl rounded-sm w-14 h-14 flex justify-center mt-2 mb-4 lg:mb-0"
                  >
                    {icon}
                  </div>
                  <div className="flex-grow">  <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={handleFormSubmit}
          >
            <div className="flex gap-8">
              <input
                className={`input ${errors.nom ? "input-error" : ""}`}
                type="text"
                name="nom"
                placeholder="Votre nom"
                onChange={(e) => setNom(e.target.value)}
                required
                value={nom}
              />
              {errors.nom && (
                <p className="error-message">Veuillez saisir votre nom.</p>
              )}
              <input
                className={`input ${errors.email ? "input-error" : ""}`}
                type="email"
                name="email"
                placeholder="Votre email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              {errors.email && (
                <p className="error-message">
                  Veuillez saisir votre adresse e-mail.
                </p>
              )}
            </div>
            <input
              type="text"
              name="sujet"
              className={`input ${errors.sujet ? "input-error" : ""}`}
              placeholder="Sujet"
              onChange={(e) => setSujet(e.target.value)}
              required
              value={sujet}
            />
            {errors.sujet && (
              <p className="error-message">Veuillez saisir un sujet.</p>
            )}
            <textarea
              className={`textarea ${errors.message ? "input-error" : ""}`}
              name="message"
              type="textarea"
              placeholder="Votre message"
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
            />
            {errors.message && (
              <p className="error-message">Veuillez saisir votre message.</p>
            )}
            {isMessageSent ? (
              <p className="confirmation-message text-red-500">
                Votre message a été envoyé avec succès !
              </p>
            ) : (
              <div className="flex justify-center lg:justify-start">
                <button
                  className="
                    btn btn-lg 
                    bg-accent
                    hover:bg-accent-hover
                    rounded-md"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
