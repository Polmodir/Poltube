"use client";
import Navs from "@/app/components/Navigations";
import Sidebar from "@/app/components/Sidebar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { data } from "../page";

export default function Home() {
  // COMMENT
  const [comment, setComment] = useState([]);
  const [checking, setChecking] = useState("");
  // LIKE SUBSCRIBE DISLIKE
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  // MONTH FUNCTION
  const month = (x) => {
    switch (x) {
      case "10":
        return "Oct";
        break;
      case "11":
        return "Nov";
        break;
      case "12":
        return "Dec";
        break;
      case "01":
        return "Jan";
        break;
      case "02":
        return "Feb";
        break;
      case "03":
        return "Mar";
        break;
      case "04":
        return "Apr";
        break;
      case "05":
        return "May";
        break;
      case "06":
        return "Jun";
        break;
      case "07":
        return "Jul";
        break;
      case "08":
        return "Aug";
        break;
      case "09":
        return "Sep";
        break;
    }
  };
  // MILLION THOUSAND FUNCTION
  const calculate = (x) => {
    if (x > 999) {
      if (x > 999999) {
        return Math.floor(x / 100000) / 10 + "M";
      } else return Math.floor(x / 1000) + "K";
    } else return x;
  };

  // GETTING VIDEO ID
  const params = useSearchParams();
  const id = params.get("videoId");

  // FETCHING DATA
  const [stuff, setStuff] = useState([]);
  const getStuff = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyBlGIEb7LEjUX6CjbAXbwFDcvg0dk3BUls`;
    const res = await fetch(url);
    const a = await res.json();
    setStuff(a);
  };
  useEffect(() => {
    getStuff();
  }, [id]);

  // CHANGIN THE PAGE
  const router = useRouter();
  const video = (x) => {
    router.push(`/video?videoId=${x}`);
  };

  // DESCRIPTION
  const [desc, setDesc] = useState(false);
  // TAG
  const [selected, setSelected] = useState(0);

  // SIDEBAR
  const [sidebar, setSidebar] = useState(true);

  // LOADING
  if (stuff.length == 0) {
    return <h1>Loading ... </h1>;
  }
  // DESCRIPTION2
  const description = (x) => {
    if (x.length > 360) {
      if (desc == true) {
        return (
          <>
            <p className="text-sm text-white">
              {stuff.items[0].snippet.description}
            </p>
            <p
              className="text-xs font-bold text-[#AAAAAA] mt-2 hover:text-white"
              onClick={() => setDesc(false)}
            >
              SHOW LESS
            </p>
          </>
        );
      } else {
        return (
          <>
            <p className="text-sm text-white">
              {stuff.items[0].snippet.description.substr(0, 390) + "..."}
            </p>
            <p
              className="text-xs font-bold text-[#AAAAAA] mt-2 hover:text-white"
              onClick={() => setDesc(true)}
            >
              SHOW MORE
            </p>
          </>
        );
      }
    } else
      return (
        <>
          <p className="text-sm text-white">
            {stuff.items[0].snippet.description}
          </p>
        </>
      );
  };
  // TAG2
  const test = [
    {
      name: "All",
    },
    {
      name: `from ${stuff.items[0].snippet.channelTitle}`,
    },
  ];
  // THE PAGE
  return (
    <div className="bg-[#181818]">
      <Navs sidebar={sidebar} setSidebar={setSidebar} />
      <div className="flex">
        {sidebar && <Sidebar active={false} />}
        <div className="bg-[#181818] flex pl-6 pt-6 gap-6 ml-[240px] mt-[56px]">
          <div>
            <ReactPlayer
              width={996}
              height={560}
              controls
              playing={true}
              loop
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <div className="pt-[31px] pb-[2px]">
              <p className="text-lg pt-[5px] pm-[3px] text-white">
                {stuff.items[0].snippet.title}
              </p>
              <div className="flex gap-[330px] border-b border-[#303030] pb-2">
                <p className="font-bold text-[#AAAAAA] text-sm py-3 w-[272px]">
                  {calculate(stuff.items[0].statistics.viewCount)} views .{" "}
                  {month(stuff.items[0].snippet.publishedAt.substr(5, 2))}{" "}
                  {stuff.items[0].snippet.publishedAt.substr(8, 2)},{" "}
                  {stuff.items[0].snippet.publishedAt.substr(0, 4)}
                </p>
                <div className="flex gap-[12.5px] font-bold text-sm text-white w-[390px]">
                  <div className="flex gap-1.5 px-1.5 py-2 items-center">
                    {liked ? (
                      <Image
                        onClick={() => setLiked(!liked)}
                        src={"/liked-fill.svg"}
                        width={24}
                        height={24}
                        className="hover:bg-[#303030] rounded-full"
                      />
                    ) : (
                      <Image
                        onClick={() => {
                          setLiked(!liked);
                          setDisliked(false);
                        }}
                        src={"/liked.svg"}
                        width={24}
                        height={24}
                        className="hover:bg-[#303030] rounded-full"
                      />
                    )}
                    <p className="py-0.5">
                      {calculate(stuff.items[0].statistics.likeCount)}
                    </p>
                  </div>
                  <div className="flex gap-1.5 px-1.5 py-2 items-center">
                    {disliked ? (
                      <Image
                        onClick={() => setDisliked(!disliked)}
                        src={"/liked-fill.svg"}
                        width={24}
                        height={24}
                        className="origin-center rotate-180 hover:bg-[#303030] rounded-full"
                      />
                    ) : (
                      <Image
                        onClick={() => {
                          setDisliked(!disliked);
                          setLiked(false);
                        }}
                        src={"/DisLiked.svg"}
                        width={24}
                        height={24}
                        className="hover:bg-[#303030] rounded-full"
                      />
                    )}
                    <p className="py-0.5">{disliked ? "1" : "0"}</p>
                  </div>
                  <div className="flex gap-1.5 px-1.5 py-2 items-center hover:bg-[#303030] rounded-full active:bg-[#5d5d5d]">
                    <Image src={"/Share.svg"} width={24} height={24} />
                    <p className="py-0.5">SHARE</p>
                  </div>
                  <div className="flex gap-1.5 px-1.5 py-2 items-center hover:bg-[#303030] rounded-full active:bg-[#5d5d5d]">
                    <Image src={"/Save.svg"} width={24} height={24} />
                    <p className="py-0.5">SAVE</p>
                  </div>
                  <div className="px-1.5 py-2">
                    <Image
                      className="hover:bg-[#303030] rounded-full active:bg-[#5d5d5d]"
                      src={"/More.svg"}
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-4 gap-4 pb-4 border-b border-[#303030]">
              <div>
                <Image
                  className="rounded-full"
                  src={"/images/le epic face.jpeg"}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <div className="flex gap-[360px]">
                  <div className="pt-[7px] w-[456px]">
                    <p className="text-white text-sm">
                      {stuff.items[0].snippet.channelTitle}
                    </p>
                    <p className="text-[#AAAAAA] text-xs">
                      TESTAMOUNT subscribers
                    </p>
                  </div>
                  {subscribed ? (
                    <div
                      onClick={() => setSubscribed(!subscribed)}
                      className="bg-white py-2.5 pl-4 text-black font-bold text-sm mt-[7px] rounded-sm w-[116px] hover:bg-[#cfcfcf]"
                    >
                      SUBSCRIBED
                    </div>
                  ) : (
                    <div
                      onClick={() => setSubscribed(!subscribed)}
                      className="bg-[#CC0000] pl-5 py-2.5 text-white font-bold text-sm mt-[7px] rounded-sm w-[116px] hover:bg-[#ad0000]"
                    >
                      SUBSCRIBE
                    </div>
                  )}
                </div>
                <div className="w-[930px] pt-3">
                  {description(stuff.items[0].snippet.description)}
                </div>
              </div>
            </div>
            <div className="text-white mt-[24px]">
              <div className="flex gap-[32px]">
                <p>{comment.length} Comments</p>
                <div className="flex gap-[8px]">
                  <Image src={"/Dropdown.svg"} width={24} height={24} />
                  <p className="font-bold">SORT BY</p>
                </div>
              </div>
              <div className="flex gap-[16px] mt-[24px]">
                <Image
                  src={"/images/le epic face.jpeg"}
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <input
                  placeholder="Add a comment..."
                  className="bg-[#181818] no-underline outline-none w-full border-b border-[#303030]"
                  onChange={(x) => {
                    setChecking(x.currentTarget.value);
                  }}
                ></input>
              </div>
              <div
                onClick={() => {
                  checking == "" ? null : setComment([checking, ...comment]);
                }}
                className="mt-[24px] w-[150px] h-[40px] bg-[#252525] rounded-[5px] active:bg-[#5d5d5d] hover:bg-[#303030] flex items-center justify-center"
              >
                Comment
              </div>
              <div className="flex flex-col gap-[16px] mt-[32px]">
                {comment.map((x) => {
                  return (
                    <div className="flex gap-[16px]">
                      <div>
                        <Image
                          src={"/images/le epic face.jpeg"}
                          className="rounded-full"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[13px]">Polmodir</p>
                        <p className="text-sm">{x}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#181818] mt-[56px]">
          <div className="pl-6 pt-6">
            <div className="flex text-white text-sm gap-2 mb-[18px] ">
              {test.map((x, idx) =>
                idx === selected ? (
                  <div className="px-3 py-2 h-8 bg-white text-black flex items-center justify-center rounded-[32px]">
                    {x.name}
                  </div>
                ) : (
                  <div
                    onClick={() => setSelected(idx)}
                    className="hover:bg-[#404040] border-[0.3px] border-[#AAAAAA] px-3 py-2 h-8 bg-[#303030] flex items-center justify-center rounded-[32px]"
                  >
                    {x.name}
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              {data.map((x) => {
                if (x.id !== id) {
                  return (
                    <div
                      onClick={() => video(x.id)}
                      className="flex gap-[8px] "
                    >
                      <div
                        className={`flex h-[94px] w-[168px] ${x.thumbnail} bg-cover flex items-end justify-end p-1`}
                      >
                        <p className="bg-black w-[33px] h-[18px] text-[10px] text-white flex items-center justify-center">
                          {x.time}
                        </p>
                      </div>
                      <div className="mt-[7px]">
                        <p className="text-sm text-white h-[40px]">{x.title}</p>
                        <p className="text-xs text-[#AAAAAA]">{x.creator}</p>
                        <p className="text-xs text-[#AAAAAA]">
                          {x.views} views . {x.date}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
