"use client";
import { BsInfoCircleFill } from "react-icons/bs";
import { useSearchParams, usePathname } from "next/navigation";
import infoWaterMark from "../../../public/Portfolio/info-watermark.svg";
import Image from "next/image";

export default function PortfolioInfo() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isMakeBillionaire =
    searchParams.get("name") === "make me a billionaire";
  return (
    <div className="lg:w-[28vw] bg-white relative pb-[100px]">
      <div className="bg-black text-white p-[10px] flex items-center gap-x-[10px] rounded-t-[10px]">
        {" "}
        <BsInfoCircleFill
          fill="white"
          size={24}
          className="w-[24px]"
        ></BsInfoCircleFill>
        <p>Portfolio Info</p>
      </div>
      <div className="pt-[31px] px-[16px] font-robotoCon">
        <div className="bg-darkerHomeGray p-[10px] mb-[6px] rounded-[10px]">
          Portfolio Valuation - N{isMakeBillionaire ? "1,300,000" : "3,800,000"}
        </div>
        <div className="bg-darkerHomeGray p-[10px] rounded-[10px]">
          Total Invested - N{isMakeBillionaire ? "1,200,000" : "3,000, 000"}
        </div>
      </div>
      <Image
        src={infoWaterMark.src}
        width={100}
        height={200}
        alt="info watermark"
        className="absolute bottom-0 right-0"
      ></Image>
    </div>
  );
}
