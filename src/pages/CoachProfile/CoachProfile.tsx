import { Heading } from "../../components/Heading";
import { ImagesSection } from "../../components/ImagesSection";
import { PageContentLayout } from "../../components/PageContentLayout";
import { Socials } from "../../components/Socials";

export const CoachProfile = () => {
  return (
    <PageContentLayout>
      <section>
        <Heading level={2}>Sam Nill - Head Coach / Founder</Heading>
        <p>
          Sam Nill’s love affair with anything and everything two wheeled
          started when he was six and he got his first purple, banana seat bike
          for Christmas. It has been quite a journey since and he certainly
          never thought he would make a living on two wheels. Although he
          started riding bikes when he was quite young he struggled at most
          sports and was not what anyone would call a natural athlete. He has
          been teased about his funny walk since he was a kid and never came
          close to passing the “Presidential Fitness Test” in school. Growing up
          fast (6 feet tall in the 7th grade) he wasn’t the most graceful kid
          and his asthma didn’t help. Despite never even winning a “novice”
          class race he was at the BMX track racing every Sunday for two years
          in his teens.
        </p>
      </section>
      <ImagesSection>
        <img src="/images/coach-profile-1.jpg" alt="" />
      </ImagesSection>
      <section>
        <p>
          In the spring of 1987, just a few months after learning to ride Sam
          competed in the Snowboard World Championships where he finished 20th
          in the amateur half-pipe competition. Following that season he moved
          back to Virginia to finish college but continued competing on the East
          coast. After graduating from Old Dominion University in 1989 Sam Nill
          accepted the position of Director of Snowboarding at Wisp Resort in
          Maryland. While at Wisp he continued to snowboard professionally and
          was the coach of the race team. After nearly 10 years of spending the
          winter living in ski towns Gene tired of the cold and moved to the
          warmer climes of Boulder, Colorado in the fall of 1998.
        </p>
        <p>
          West Coast Cycling was founded that fall and it has been quite an
          adventure over the last 10 years. Sam has coached over 1,200 riders
          from beginners to top pro racers, filmed a special for the Discovery
          Channel, written mental training articles for Dirt Rag, been featured
          in The New York Times, Decline Magazine, Mountain Bike Action and USA
          Today. Over the years his passion for coaching has continued to grow
          and he continues to learn and improve his coaching with every session
          taught. His mountain bike coaching highlights include coaching many
          top pro racers, top junior experts and over a 1000 riders who just
          want to get better. He is a pretty good racer too, in 13 seasons as a
          pro racer he has won a Silver (2002) and two Bronze Medals (2006,
          1999) at the UCI World Masters Championships.
        </p>
      </section>
      <ImagesSection>
        <img src="/images/coach-profile-2.jpg" alt="" />
        <img src="/images/coach-profile-3.jpg" alt="" />
        <img src="/images/coach-profile-4.jpg" alt="" />
      </ImagesSection>
      <section className="flex flex-column flex-align-center">
        <Socials />
        <a
          className="tdn fz-3 bold red padding_small"
          href="https://samnill.com"
          target="_blank"
          rel="noreferrer"
        >
          www.samnill.com
        </a>
      </section>
    </PageContentLayout>
  );
};
