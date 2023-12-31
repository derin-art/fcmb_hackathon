"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../home/logo.png";
import userImage from "../../public/CreditPage/user-image.jpg";
export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <div className="flex relative items-center h-full">
      <div className="p-[10px]  rounded-[16px] flex items-center justify-center w-fit ">
        {" "}
        <div className="flex items-center absolute left-[10px] xl:left-[20px]">
          {" "}
          <div className=" h-[40px] h-[40px] rounded-full overflow-hidden">
            <Image
              src={userImage.src}
              width={40}
              height={40}
              alt="user image"
            ></Image>
          </div>
          <div className="ml-[10px] hidden lg:block text-sm">Welcome Tunde</div>
        </div>
      </div>
      <div
        className={`${
          pathname === "/portfolio" ? "" : "hidden"
        } absolute left-[80px] lg:left-[220px] bg-darkerHomeGray lg:p-[20px] p-[10px] rounded-[16px] text-[12px]`}
      >
        {searchParams.get("name")}
      </div>
      <div className="right-[10px] absolute font-robotoCon text-[12px]">
        London, 16: 59am
      </div>
    </div>
  );
}
