import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import { ContactUs } from "../../components/ContactUs";
import { Heading } from "../../components/Heading";
import { Facebook } from "../../components/icons/Facebook";
import { Instagram } from "../../components/icons/Instagram";
import { Youtube } from "../../components/icons/Youtube";
import { ImagesSection } from "../../components/ImagesSection";
import { PageContentLayout } from "../../components/PageContentLayout";
import s from "./Coaches.module.scss";

export const Coaches = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>Our Team</Heading>
        <p>
          We’ve got a great line-up of professional MTB Skills coaches with
          extensive knowledge and wonderful personalities. They are ready and
          willing to share their knowledge and help you achieve your goals.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </section>
      <ImagesSection maxInRow={3}>
        {new Array(6).fill(null).map((_, index) => (
          <SLink className={s.coach} to="top">
            <Link to="/coaches/sam-nill" key={index}>
              <img
                className={s.coach__image}
                src={`/images/coach-${index}.jpg`}
                alt=""
              />
              <div className={s.coach__overlay}></div>
              <section className={s.coach__content}>
                <h3 className={s.coach__name}>Sam Nill</h3>
                <p className={s.coach__about}>
                  {"Head Coach / Pro Downhill Racer"
                    .split("")
                    .map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                </p>
                <div className={s.coach__socials}>
                  <Facebook />
                  <Instagram />
                  <Youtube />
                </div>
                <p className={s.coach__more}>More info</p>
              </section>
            </Link>
          </SLink>
        ))}
      </ImagesSection>
      <section>
        <Heading level={2}>Pro Rider? We Need You!</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </section>
      <ContactUs />
    </PageContentLayout>
  );
};
