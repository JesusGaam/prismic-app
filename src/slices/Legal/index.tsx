import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Legal`.
 */
export type LegalProps = SliceComponentProps<Content.LegalSlice>;

/**
 * Component for "Legal" Slices.
 */
const Legal: FC<LegalProps> = ({ slice }) => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-[#6F6F6F] text-[14px] leading-[1.3]"
    >
      <p>La tasa de interés y comisión no incluyen IVA.</p>
      <p className="font-bold">CAT promedio del <span className="font-bold text-[1.2] text-[18px]">{slice.primary.cat}%</span> sin IVA.</p>
      <p>Fecha de cálculo: {slice.primary.calculation_date}.</p>
      <p>Calculado para fines informativos y de comparación exclusivamente.</p>
    </div>
  );
};

export default Legal;
