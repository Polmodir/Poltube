import { useRouter } from "next/navigation";
import Image from "next/image";
export default function (x) {
  const router = useRouter();
  const home = () => {
    router.push("/");
  };
  const active = x.active;
  return (
    <div className="bg-[#212121] w-[240px] min-w-[240px] h-[calc(100vh-56px)] overflow-y-scroll fixed top-[56px]">
      <div className="py-3 w-[224px]">
        {active ? (
          <div className="flex text-white py-2 pr-2 pl-6 gap-6 text-sm items-center homeIcon bg-[#303030]">
            <Image src={"/home-fill.svg"} width={24} height={24} />
            Home
          </div>
        ) : (
          <div
            onClick={home}
            className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center"
          >
            <Image src={"/home.svg"} width={24} height={24} />
            Home
          </div>
        )}
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/explore.svg"} width={24} height={24} />
          Explore
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/subscriptions.svg"} width={24} height={24} />
          Subscriptions
        </div>
      </div>
      <div className="py-3 border-y border-[#303030] w-[224px]">
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/library.svg"} width={24} height={24} />
          Library
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/history.svg"} width={24} height={24} />
          History
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/yourVideos.svg"} width={24} height={24} />
          Your Videos
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/watchLater.svg"} width={24} height={24} />
          Watch Later
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/liked.svg"} width={24} height={24} />
          Liked Videos
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/arrowBottom.svg"} width={24} height={24} />
          Show More
        </div>
      </div>
      <div className="py-3 w-[224px] border-b border-[#303030]">
        <p className="py-2 px-6 text-[#AAAAAA] font-bold">SUBSCRIPTIONS</p>
        <div className=" active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image
            width={24}
            height={24}
            className="rounded-full"
            src="/images/le epic face.jpeg"
          />
          Polmodir
        </div>
        <div className="active:bg-[#5d5d5d] flex hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/arrowBottom.svg"} width={24} height={24} />
          Show ∞ More
        </div>
      </div>
      <div className="py-3 w-[224px] border-b border-[#303030]">
        <p className="py-2 px-6 text-[#AAAAAA] font-bold">MORE FROM POL</p>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/premium.svg"} width={24} height={24} />
          Poltube Premium
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/gaming.svg"} width={24} height={24} />
          Gaming
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/live.svg"} width={24} height={24} />
          Live
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/sports.svg"} width={24} height={24} />
          Sports
        </div>
      </div>
      <div className="py-3 w-[224px] border-b border-[#303030]">
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/settings.svg"} width={24} height={24} />
          Settings
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/report.svg"} width={24} height={24} />
          Report history
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/help.svg"} width={24} height={24} />
          Help
        </div>
        <div className="flex active:bg-[#5d5d5d] hover:bg-[#303030] text-white py-2 pr-2 pl-6 gap-6 text-sm items-center">
          <Image src={"/feedback.svg"} width={24} height={24} />
          Send feedback
        </div>
      </div>
      <div className="w-[224px] mb-[42px] text-[13px] text-[#AAAAAA] font-bold">
        <p className="mt-4 mx-6">
          About Press Copyright Contact me Creators Advertise Developers
        </p>
        <p className="mt-3 mx-6">
          Terms Privacy Policy & Safety How Poltube works Test new features
        </p>
        <p className="mx-6 my-4">© 2023 Polmodir LLC</p>
      </div>
    </div>
  );
}
