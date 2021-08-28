import { Accordion } from "../../components/Accordion";
import { Heading } from "../../components/Heading";
import { PageContentLayout } from "../../components/PageContentLayout";
import { faq } from "../../data/faq";

export const FAQ = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>General Questions</Heading>
        <Accordion topics={faq.generalQuestions} />
      </section>
      <section>
        <Heading level={2}>Courses Types</Heading>
        <Accordion topics={faq.coursesTypes} />
      </section>
      <section>
        <Heading level={2}>Courses Details</Heading>
        <Accordion topics={faq.coursesDetails} />
      </section>
    </PageContentLayout>
  );
};
