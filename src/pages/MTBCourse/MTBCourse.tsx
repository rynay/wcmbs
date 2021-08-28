import { Heading } from "../../components/Heading";
import { ImagesSection } from "../../components/ImagesSection";
import { PageContentLayout } from "../../components/PageContentLayout";

export const MTBCourse = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>What Will You Learn</Heading>
        <p>
          You will learn the core, fundamental skills of downhill mountain bike
          riding and racing. These core skills are not intuitive, unless someone
          taught you them it is unlikely that would know, understand and most
          importantly consistently do them.
        </p>
        <p>
          Few US racers know the core skills and even fewer can do them well
          (which is the main reason the U.S does poorly at the international
          level) BetterRide Head Coach Gene Hamilton did not learn many of these
          skills until his sixth through tenth seasons as a pro racer. Our
          BetterRide coaches really get the rider to understand these techniques
          with our explanations, demonstrations, drills and then on trail
          application of the skills. You will also learn the drills that you
          will take home with you for further practice to master these skills.
        </p>
      </section>
      <ImagesSection>
        <img src="/images/mtb-course-content-1.jpg" alt="" />
      </ImagesSection>
      <section>
        <Heading level={2}>Core Mountain Biking Skills Learned</Heading>
        <div className="flex">
          <ul className="padding_medium">
            <li>
              Correct Body Position, so you can ride smoother, faster and with
              more control
            </li>
            <li>Vision – How to Look Ahead Correctly!</li>
            <li>Bike Set up for Optimal Riding and Control</li>
            <li>
              How to Corner like a Pro! with Take Home Drills to Master your
              cornering
            </li>
            <li>Advanced Cornering Technique</li>
            <li>How to Brake to Go Faster!</li>
          </ul>
          <ul className="padding_medium">
            <li>How to Use Your Brakes for Speed</li>
            <li>Correct Technique for Downhill Switchbacks</li>
            <li>How to Clear Large Obstacles</li>
            <li>How to Interpret the Trail to Ride Fast and Smooth</li>
            <li>How to Pump the Trail for Free Speed</li>
            <li>How to Clear Obstacles and Smooth out the Trail</li>
          </ul>
        </div>
      </section>
      <section>
        <Heading level={2}>Racers Review</Heading>
      </section>
    </PageContentLayout>
  );
};
