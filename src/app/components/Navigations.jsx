// IMPORTING STUFF
import Image from "next/image";
import { useRouter } from "next/navigation";

// EXPORT
export default function ({ sidebar, setSidebar }) {
  // HOME PAGE DIRECTOR
  const router = useRouter();
  const home = () => {
    router.push("/");
  };

  // THE ACTUAL NAVIGATIONS BAR
  return (
    <div className="bg-[#212121] w-screen py-2 px-4 flex justify-between fixed">
      <div className="flex">
        <div
          onClick={() => setSidebar(!sidebar)}
          className="p-2 active:bg-[#5d5d5d] active: rounded-full hover:bg-[#303030] hover: rounded-full"
        >
          <Image src={"/hamburger.svg"} width={24} height={24} />
        </div>
        <div className="py-2.5 pr-3.5 pl-4 " onClick={home}>
          <Image src={"/Youtube-Logo.svg"} width={90} height={20} />
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center pl-[1px] bg-[#303030] rounded-sm">
          <input
            placeholder="Search"
            className="bg-[#121212] text-white no-underline w-[362px] h-[38px] flex items-center pl-[7px] outline-none"
          ></input>
          <div className="py-2 px-5 active:bg-[#5d5d5d]">
            <Image src={"/search.svg"} width={24} height={24} />
          </div>
        </div>
        <div className="bg-black px-[8px] py-[8px] rounded-full hover:bg-[#151515] active:bg-[#5d5d5d]">
          <Image src={"/mic.svg"} width={24} height={24} />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="p-2 active:bg-[#5d5d5d] active: rounded-full hover:bg-[#303030] hover: rounded-full">
          <Image src={"/create.svg"} width={24} height={24} />
        </div>
        <div className="p-2 active:bg-[#5d5d5d] active: rounded-full hover:bg-[#303030] hover: rounded-full">
          <Image src={"/apps.svg"} width={24} height={24} />
        </div>
        <div className="p-2 active:bg-[#5d5d5d] active: rounded-full hover:bg-[#303030] hover: rounded-full">
          <Image src={"/notifications.svg"} width={24} height={24} />
        </div>
        <div className="py-1 px-3.5">
          <Image
            width={32}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
