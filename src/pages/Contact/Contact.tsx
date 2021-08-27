import { Heading } from "../../components/Heading";
import { PageContentLayout } from "../../components/PageContentLayout";

export const Contact = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>Get in Touch</Heading>
        <q>
          Wow, after years of racing professionally in the US and on the World
          Cup you (Gene Hamilton) really improved my understanding of cornering.
          I am cornering faster and with more confidence
        </q>
      </section>
      <section>
        <Heading level={2}>Send a Message</Heading>
      </section>
      <section>
        <Heading level={2}>Follow Us</Heading>
      </section>
    </PageContentLayout>
  );
};
