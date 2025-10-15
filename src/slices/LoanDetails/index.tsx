import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type LoanDetailsProps = SliceComponentProps<Content.LoanDetailsSlice>;


const LoanDetails: FC<LoanDetailsProps> = ({ slice }) => {
  return (
    <>
      <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="bg-white py-8 px-5 rounded-[32px]"
      >
        <p className="text-xl sm:text-2xl text-center font-semibold text-gray-700 mb-4">{slice.primary.title}</p>
        <div className="grid gap-3 grid-cols-[auto_130px] sm:grid-cols-2 text-[#666] text-[16px] leading-[1.2] sm:text-lg">
          <div className="font-normal">Pago fijo mensual:</div>
          <div className="text-[#00B100] font-extrabold text-right">{slice.primary.fee}</div>

          <div className="font-normal">Plazo:</div>
          <div className="text-[#272727] font-bold text-right">{slice.primary.term}</div>

          <div className="font-normal">Tasa de interés mensual:</div>
          <div className="text-[#272727] font-bold text-right">{slice.primary.rate}</div>

          <div className="font-normal">Comisión por desembolso:</div>
          <div className="text-[#272727] font-bold text-right">{slice.primary.commission}</div>
        </div>

      </div>
    </>
  );
};

export default LoanDetails;
