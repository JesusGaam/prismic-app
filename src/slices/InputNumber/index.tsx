import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type InputNumberProps = SliceComponentProps<Content.InputNumberSlice>;
const InputNumber: FC<InputNumberProps> = ({ slice }) => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="font-semibold text-[20px] text-[#272727] leading-[1.2] mb-2">{slice.primary.label}</div>
      <div className="py-[10px] px-[16px] border-1 rounded-[40px] border-[#E1E1E1]">
        <input
          type="text"
          id=""
          name=""
          defaultValue={slice.primary.default_value || ""}
          placeholder={slice.primary.placeholder || ""}
          className="text-[26px] text-[#272727] text-center font-bold placeholder-[#9199A5] w-full bg-transparent border-none outline-none focus:ring-0 focus:outline-none "
        />
      </div>
      <div
        className="text-[#666666] text-[16px] leading-[1.2] mt-2"
        dangerouslySetInnerHTML={{ __html: slice.primary.helper_text || "" }}
      />
    </div>
  );
};

export default InputNumber;
