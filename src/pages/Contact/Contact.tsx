import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { PageContentLayout } from "../../components/PageContentLayout";
import { Socials } from "../../components/Socials";

export const Contact = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>Get in Touch</Heading>
        <p className="text-align-center">
          "Wow, after years of racing professionally in the US and on the World
          Cup you (Gene Hamilton) really improved my understanding of cornering.
          I am cornering faster and with more confidence"
        </p>
      </section>
      <iframe
        className="map"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211362.5526505379!2d-118.46339954789157!3d34.1325272616834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bf00b68c62d932!2sMt%20Wilson%20MTB%20Adventure!5e0!3m2!1sen!2sru!4v1630232636177!5m2!1sen!2sru"
        width="600"
        height="450"
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
      <address className="text-align-center mt_large">
        <div>Welcome to our camp:</div>
        <div className="mb_small">
          2799 N Windsor Ave, Altadena, CA 91001, United States
        </div>
        <div>Tel: +1 (737) 999-1504</div>
        <div className="mb_small">Fax +1 (737) 999-1504</div>
        <div>E-mail: contact@berider.com</div>
      </address>
      <section>
        <Heading level={2}>Send a Message</Heading>
        <Form type="contact" />
      </section>
      <section className="flex flex-column flex-align-center">
        <Heading level={2}>Follow Us</Heading>
        <Socials />
        <p className="ff-montserrat tdn fz-3 fw-800 red padding_small">
          #westcoastcycling
        </p>
      </section>
    </PageContentLayout>
  );
};
