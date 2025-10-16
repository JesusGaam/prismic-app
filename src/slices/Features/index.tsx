import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaChartPie, FaRegCalendarAlt, FaRegMoneyBillAlt, FaRegComment } from "react-icons/fa";
import { IconType } from "react-icons";
import Bounded from "@/components/Bounded";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;
const icons: Record<string, IconType> = {
  calendar: FaRegCalendarAlt,
  chart: FaChartPie,
  money: FaRegMoneyBillAlt,
  comment: FaRegComment,
};

const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded as="section" className=""
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicRichText field={slice.primary.titile} />
        <div>
          {slice.primary.feature_list.map((item, index) => {
            const Icon = icons[item.icon as string];
            return (
              <div key={index}>
                {item.icon && Icon && <Icon />}
                <PrismicRichText field={item.title} />
                <PrismicRichText field={item.description} />
              </div>
            );
          })}
        </div>

      </div>
    </Bounded>
  );
};

export default Features;
