import Container from "@/components/Container";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 md:scroll-m-0 pt-10 pb-6 lg:pt-20 lg:pb-16"
    >
      <Container>
        <h2 className="text-center mb-4 text-3xl lg:text-5xl lg:leading-tight font-bold">
          What Our Clients Say
        </h2>
        <p className="mb-8 text-center">
          Hear from those who have partnered with us.
        </p>
      </Container>

      <Marquee speed={25} pauseOnHover={true} pauseOnClick={true}>
        <div className="grid grid-flow-col auto-cols-max w-full overflow-hidden">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="p-6 md:p-8 m-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-gray-200 bg-background-muted rounded-xl flex flex-col justify-between"
            >
              <p className="text-foreground-muted text-lg text-left">
                {item.message}
              </p>
              <div className="flex flex-row flex-nowrap items-center justify-start mt-6 md:mt-8 gap-4">
                <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    fill={true}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="manrope text-secondary text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm text-foreground-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={40} pauseOnHover={true} pauseOnClick={true}>
        <div className="grid grid-flow-col auto-cols-max w-full overflow-hidden">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="p-6 md:p-8 m-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-gray-200 bg-background-muted rounded-xl flex flex-col justify-between"
            >
              <p className="text-foreground-muted text-lg text-left">
                {item.message}
              </p>
              <div className="flex flex-row flex-nowrap items-center justify-start mt-6 md:mt-8 gap-4">
                <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    fill={true}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="manrope text-secondary text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm text-foreground-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
