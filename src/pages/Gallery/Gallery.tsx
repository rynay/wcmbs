import { Heading } from "../../components/Heading";
import { PageContentLayout } from "../../components/PageContentLayout";

export const Gallery = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>Photos</Heading>
      </section>
      <section>
        <Heading level={2}>Videos</Heading>
      </section>
    </PageContentLayout>
  );
};
