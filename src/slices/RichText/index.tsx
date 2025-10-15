import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type RichTextProps = SliceComponentProps<any>;

const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="prose prose-sm sm:prose-base"
    >
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
};

export default RichText;
