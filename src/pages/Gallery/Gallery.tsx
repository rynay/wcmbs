import { useState } from "react";
import { Heading } from "../../components/Heading";
import { ImageModal } from "../../components/ImageModal";
import { ImagesSection } from "../../components/ImagesSection";
import { PageContentLayout } from "../../components/PageContentLayout";
import { Portal } from "../../components/Portal";

export const Gallery = () => {
  const [targetImage, setTargetImage] = useState<string>();

  const close = () => {
    setTargetImage(undefined);
  };

  return (
    <>
      <Portal>
        {!!targetImage && <ImageModal close={close} src={targetImage} />}
      </Portal>

      <PageContentLayout>
        <section>
          <Heading level={2}>Photos</Heading>
          <ImagesSection maxInRow={4}>
            {new Array(12).fill(null).map((_, i) => (
              <img
                className="pointer"
                onClick={() => setTargetImage(`/images/gallery-${i}-big.jpg`)}
                key={i}
                src={`/images/gallery-${i}-small.jpg`}
                alt=""
              />
            ))}
          </ImagesSection>
        </section>
        <section>
          <Heading level={2}>Videos</Heading>
          <div className="flex flex-wrap">
            <iframe
              className="padding_small flex-1 height-290"
              src="https://www.youtube.com/embed/9ONCjYEj2fQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="padding_small flex-1 height-290"
              src="https://www.youtube.com/embed/Yb1mwPnApa8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </PageContentLayout>
    </>
  );
};
