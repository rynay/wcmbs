import { Heading } from "../../components/Heading";
import { PageContentLayout } from "../../components/PageContentLayout";

export const FAQ = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>General Questions</Heading>
      </section>
      <section>
        <Heading level={2}>Courses Types</Heading>
      </section>
      <section>
        <Heading level={2}>Courses Details</Heading>
      </section>
    </PageContentLayout>
  );
};
