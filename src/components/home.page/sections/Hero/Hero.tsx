import Image from "next/image";
import Container from "@/components/Container";
import DownloadButton from "@/components/DownloadButton";
import HeadingMotion from "./HeadingMotion";
import { heroDetails } from "@/data/hero";

const Hero = () => {
  return (
    <section id="hero" className="pt-14 flex flex-col items-center relative">
      {/* Background */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 -z-10 backdrop-blur-[2px] h-40 bg-linear-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      {/* Hero content */}
      <Container>
        <div className="text-center flex flex-col items-center">
          <HeadingMotion text={heroDetails.heading} />
          <p className="max-w-lg mt-4">{heroDetails.subheading}</p>
          <div className="flex gap-4 flex-wrap mt-8 items-center justify-center">
            <DownloadButton platform="appStore" dark />
            <DownloadButton platform="googlePlay" dark />
          </div>
          <Image
            src={heroDetails.centerImageSrc}
            alt="app mockup"
            width={384}
            height={340}
            quality={100}
            priority={true}
            unoptimized={true}
            sizes="(max-width: 768px) 100vw, 384px"
            className="mt-12 md:mt-16"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
