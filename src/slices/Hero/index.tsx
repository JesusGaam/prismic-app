import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-4xl text-center font-bold">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="text-[18px] text-lg text-center text-gray-700">
      {children}
    </p>
  ),
  list: ({ children }) => (
    <ul className="text-[18px] text-leftlist-disc list-inside text-gray-700">
      {children}
    </ul>
  )
};

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={components}
      />
      <PrismicRichText
        field={slice.primary.body}
        components={components}
      />
      <PrismicNextLink
        field={slice.primary.button_link}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 mx-auto inline-block"
      />
      <PrismicNextImage field={slice.primary.image} className="w-full h-auto max-w-[600px] mx-auto" />
    </Bounded>
  );
};

export default Hero;
