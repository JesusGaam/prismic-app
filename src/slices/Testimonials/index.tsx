import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials: FC<TestimonialsProps> = async ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <ul>
        {slice.primary.testimonials_list.map(
          (item) =>
            isFilled.contentRelationship(item.testimonial) && (
              <li key={item.testimonial.id}>
                {item.testimonial.data?.name}
                {item.testimonial.data?.job_title}
                {item.testimonial.data?.quote}

                <PrismicImage 
                field={item.testimonial.data?.avatar} className="w-52 h-52 object-center object-cover rounded-full" />


              </li>
            )
        )}
      </ul>

    </section>
  );
};

export default Testimonials;
