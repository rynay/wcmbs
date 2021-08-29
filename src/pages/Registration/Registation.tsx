import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { PageContentLayout } from "../../components/PageContentLayout";

export const Registration = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>Please, fill this form</Heading>
        <Form type="registration" />
      </section>
    </PageContentLayout>
  );
};
