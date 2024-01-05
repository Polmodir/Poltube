"use client";
import Navs from "@/app/components/Navigations";
import Sidebar from "@/app/components/Sidebar";
import Tags from "@/app/components/Tags";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const data = [
  {
    title: "Cruel bombs",
    reator: "Vsauce",
    views: "18M",
    date: "9 years ago",
    thumbnail: "bg-[url(/images/aaa.webp)]",
    time: "8:24",
    id: "SHZAaGidUbg",
    tag: "Video Essays",
  },
  {
    title: "Haubitzen!",
    creator: "0tt0 Hering",
    views: "674K",
    date: "3 years ago",
    thumbnail: "bg-[url(/images/howitzers.webp)]",
    time: "1:07",
    id: "jv77Yo_FbBU",
    tag: "Random Clips",
  },
  {
    title: "100 ACCURATE LIFE HACKS",
    creator: "TVFilthyFrank",
    views: "41M",
    date: "7 years ago",
    thumbnail: "bg-[url(/images/filthyfrank.webp)]",
    time: "7:43",
    id: "-h5WrWncDZw",
    tag: "uhh",
  },
  {
    title: "Jerobeam Fenderson - Spirals",
    creator: "Jerobeam Fenderson",
    views: "1.6M",
    date: "6 years ago",
    thumbnail: "bg-[url(/images/spirals.webp)]",
    time: "5:25",
    id: "kPUdhm2VE-o",
    tag: "Songs",
  },
  {
    title: "The Website with No Rules: 4Chan (ft. tuv)",
    creator: "Visual Venture",
    views: "1.1M",
    date: "1 years ago",
    thumbnail: "bg-[url(/images/4chan.webp)]",
    time: "35:09",
    id: "2t48dXd1c3s",
    tag: "Video Essays",
  },
  {
    title: "Primitive 原语-THE CONCEPT ART OF SILICON-BASED LIFE",
    creator: "张泽亿",
    views: "366K",
    date: "4 years ago",
    thumbnail: "bg-[url(/images/alien.webp)]",
    time: "3:50",
    id: "iUdNk5LYj70",
    tag: "Cool Videos",
  },
  {
    title: "All Tomorrows 3D Animation Compilation",
    creator: "koyo",
    views: "1M",
    date: "2 years ago",
    thumbnail: "bg-[url(/images/tomorrows.webp)]",
    time: "3:51",
    id: "Y9Ni2kiq6_g",
    tag: "Cool Videos",
  },
  {
    title: "Being ugly : My Experience",
    creator: "Never Give Up",
    views: "19M",
    date: "5 years ago",
    thumbnail: "bg-[url(/images/ugly.webp)]",
    time: "23:49",
    id: "1n5nOEJtrYA",
    tag: "Video Essays",
  },
  {
    title: "Blitzkrieg tactics explained | How Hitled invaded France WW2",
    creator: "Imperial War Museums",
    views: "1M",
    date: "3 years ago",
    thumbnail: "bg-[url(/images/blitzkrieg.webp)]",
    time: "7:46",
    id: "6yOPih9zRNs",
    tag: "Video Essays",
  },
  {
    title: "cycle",
    creator: "フロクロ(Frog96)",
    views: "968K",
    date: "3 years ago",
    thumbnail: "bg-[url(/images/cycle.webp)]",
    time: "0:41",
    id: "HDqAMC43GWo",
    tag: "Songs",
  },
  {
    title: "Using Video Games to Simulate Evolution",
    creator: "Curious Archive",
    views: "1.3M",
    date: "8 months ago",
    thumbnail: "bg-[url(/images/evolution.webp)]",
    time: "20:26",
    id: "OWfSJfftDvU",
    tag: "Video Essays",
  },
  {
    title: "History and Evolution of the Jump Scare",
    creator: "Swegz",
    views: "940K",
    date: "7 months ago",
    thumbnail: "bg-[url(/images/jumpscare.webp)]",
    time: "15:23",
    id: "hk1qyPGUZOA",
    tag: "Video Essays",
  },
  {
    title: "The Mongol Destruction of the Khwarazmian Empire",
    creator: "History Dose",
    views: "1.5M",
    date: "1 year ago",
    thumbnail: "bg-[url(/images/mongols.webp)]",
    time: "13:11",
    id: "92-440OR2ik",
    tag: "Video Essays",
  },
  {
    title: "An old mans advice.",
    creator: "Bernald Albertson",
    views: "20M",
    date: "9 years ago",
    thumbnail: "bg-[url(/images/old.webp)]",
    time: "5:54",
    id: "9fvETktnaRw",
    tag: "Video Essays",
  },
  {
    title: "Yamaha Music Siren. Arabesque",
    creator: "Eggnog",
    views: "73K",
    date: "8 months ago",
    thumbnail: "bg-[url(/images/siren.webp)]",
    time: "1:31",
    id: "HRtSnjOvMws",
    tag: "Cool Videos",
  },
  {
    title: "Runaway - Linkin Park (Hybrid Theory)",
    creator: "Linkin Park",
    views: "18M",
    date: "8 years ago",
    thumbnail: "bg-[url(/images/linkin.webp)]",
    time: "3:04",
    id: "ig-fyQqf510",
    tag: "Songs",
  },
  {
    title: "02 - Boa - Twilight",
    creator: "Green Grass",
    views: "276K",
    date: "12 years ago",
    thumbnail: "bg-[url(/images/twilight.webp)]",
    time: "3:46",
    id: "QvazZScuexs",
    tag: "Songs",
  },
  {
    title: "Leadbelly - Where Did you Sleep Last Night",
    creator: "todd131981",
    views: "8.9M",
    date: "15 years ago",
    thumbnail: "bg-[url(/images/leadbelly.webp)]",
    time: "3:07",
    id: "PsfcUZBMSSg",
    tag: "Songs",
  },
  {
    title: "DON'T PREACH TO ME - Skallywags (With lyrics)",
    creator: "TheGarageLand",
    views: "1.1M",
    date: "13 years ago",
    thumbnail: "bg-[url(/images/skallywags.webp)]",
    time: "3:10",
    id: "DHD5QuaTzzs",
    tag: "Songs",
  },
  {
    title: "Crystal Castles - Suffocation",
    creator: "LastGangRadio",
    views: "4.6M",
    date: "10 years ago",
    thumbnail: "bg-[url(/images/suffocation.webp)]",
    time: "4:02",
    id: "Z0NGdLr4img",
    tag: "Songs",
  },
  {
    title: "the kinks all day and all of the night",
    creator: "RockaDilly",
    views: "8.8M",
    date: "17 years ago",
    thumbnail: "bg-[url(/images/thekinks.webp)]",
    time: "2:16",
    id: "F4DV-5d6a5g",
    tag: "Songs",
  },
  {
    title: "Quannnic",
    creator: "Virus",
    views: "976K",
    date: "1 years ago",
    thumbnail: "bg-[url(/images/quannnic.webp)]",
    time: "3:23",
    id: "7R53Z9pjvKM",
    tag: "Songs",
  },
  {
    title: "flutter",
    creator: "julie",
    views: "2M",
    date: "3 years ago",
    thumbnail: "bg-[url(/images/flutter.webp)]",
    time: "4:27",
    id: "V9VM1SI1uYw",
    tag: "Songs",
  },
  {
    title: "Have a Nice Life - Bloodhail",
    creator: "raiders545",
    views: "119K",
    date: "10 years ago",
    thumbnail: "bg-[url(/images/bloodhail.webp)]",
    time: "5:40",
    id: "Yh66sJQUVm8",
    tag: "Songs",
  },
  {
    title: "[1997] Panchiko - Untitled Demo",
    creator: "dismiss yourself",
    views: "28K",
    date: "3 years ago",
    thumbnail: "bg-[url(/images/panchiko.webp)]",
    time: "2:41",
    id: "hBWfkU0cb6o",
    tag: "Songs",
  },
  {
    title: "when you sleep",
    creator: "my bloody valentine",
    views: "2.7M",
    date: "2 years ago",
    thumbnail: "bg-[url(/images/whenyousleep.webp)]",
    time: "4:11",
    id: "hcOhXThqh_0",
    tag: "Songs",
  },
  {
    title:
      "The White Stripes - Fell In Love With A Girl (Official Music Video)",
    creator: "The White Stripes",
    views: "25M",
    date: "14 years ago",
    thumbnail: "bg-[url(/images/fellinlovewithagirl.webp)]",
    time: "2:00",
    id: "fTH71AAxXmM",
    tag: "Songs",
  },
  {
    title: "fried by fluoride - the love i lost",
    creator: "Flowcos",
    views: "885",
    date: "5 months ago",
    thumbnail: "bg-[url(/images/loveilost.webp)]",
    time: "1:55",
    id: "wWrKOnbMtrs",
    tag: "Songs",
  },
  {
    title: "Fried By Fluoride, Dead By 30 (feat. UhOhSlater)",
    creator: "soy_boi_goy",
    views: "4.5K",
    date: "2 years ago",
    thumbnail: "bg-[url(/images/deadby30.webp)]",
    time: "2:30",
    id: "jKqOZ80olzs",
    tag: "Songs",
  },
  {
    title:
      "Mac Quayle - Emmy Nominated Score - Mr. Robot 1.0_8-whatsyourask.m4p",
    creator: "Mac Quayle",
    views: "215K",
    date: "7 years ago",
    thumbnail: "bg-[url(/images/whatsyourask.webp)]",
    time: "1:38",
    id: "OQOeePhNj-I",
    tag: "Songs",
  },
  {
    title: "Sun Araw - Deep Cover",
    creator: "GioJas Music",
    views: "1.4M",
    date: "12 years ago",
    thumbnail: "bg-[url(/images/deepcover.webp)]",
    time: "8:03",
    id: "A-s9LdQPXF4",
    tag: "Songs",
  },
  {
    title: "Scott Brown Taking Drugs Slowed",
    creator: "Spearton-",
    views: "11K",
    date: "3 months ago",
    thumbnail: "bg-[url(/images/scottbrown.webp)]",
    time: "3:44",
    id: "mlt5OAHxknY",
    tag: "Songs",
  },
  {
    title: "Rory in early 20s - yaderi",
    creator: "Rory in early 20s",
    views: "241K",
    date: "2 years ago",
    thumbnail: "bg-[url(/images/yaderi.webp)]",
    time: "1:41",
    id: "bXBtiyjBmEQ",
    tag: "Songs",
  },
  {
    title: "Disrupt - Unrest (remastered)",
    creator: "Spearton-",
    views: "7.4K",
    date: "11 years ago",
    thumbnail: "bg-[url(/images/unrest.webp)]",
    time: "1:42",
    id: "J5mzMULj6DY",
    tag: "Songs",
  },
  {
    title: "Dead Kennedys - Nazi Punks Fuck Off (In Studio)",
    creator: "DeadKennedysVEVO",
    views: "423K",
    date: "12 years ago",
    thumbnail: "bg-[url(/images/nazi.webp)]",
    time: "2:10",
    id: "PzHLPnGuVSQ",
    tag: "Songs",
  },
  {
    title: "IAMTHEKIDYOUKNOWWHATIMEAN - Run",
    creator: "HEAVEN WORDS",
    views: "299K",
    date: "8 years ago",
    thumbnail: "bg-[url(/images/run.webp)]",
    time: "7:37",
    id: "Vfl4c40ps5E",
    tag: "Songs",
  },
  {
    title: "glwzbll - Untitled #13 (2023)",
    creator: "Студия СОЮЗ",
    views: "186K",
    date: "6 months ago",
    thumbnail: "bg-[url(/images/untitled.webp)]",
    time: "1:55",
    id: "RDp1wpxZixA",
    tag: "Songs",
  },
  {
    title: "Dying in xxtyle 3",
    creator: "Luci4",
    views: "715K",
    date: "1 year ago",
    thumbnail: "bg-[url(/images/dyinginxxtyle3.webp)]",
    time: "1:20",
    id: "3PQxaEm9JG8",
    tag: "Songs",
  },
  {
    title: "Sex Bob-Omb - Garbage Truck",
    creator: "Scott Pilgrim Music",
    views: "5.1M",
    date: "13 year ago",
    thumbnail: "bg-[url(/images/scottpilgrim.webp)]",
    time: "1:44",
    id: "fhGu2CDqQqo",
    tag: "Songs",
  },
  {
    title: "Mitski - Francis Forever (Official Audio)",
    creator: "Mitski",
    views: "846K",
    date: "3 months ago",
    thumbnail: "bg-[url(/images/mitski.webp)]",
    time: "2:29",
    id: "mHKTdlUyyko",
    tag: "Songs",
  },
  {
    title: "PASTEL GHOST ~ DARK BEACH",
    creator: "PASTEL GHOST",
    views: "19M",
    date: "2 year ago",
    thumbnail: "bg-[url(/images/pastelghost.webp)]",
    time: "3:42",
    id: "guDJvZp5Bqk",
    tag: "Songs",
  },
];
export default function Home() {
  const tags = [
    {
      name: "All",
    },
    {
      name: "Songs",
    },
    {
      name: "Video Essays",
    },
    {
      name: "Random Clips",
    },
    {
      name: "uhh",
    },
    {
      name: "Cool Videos",
    },
  ];
  // TAG CHECKER FUNCTION
  const check = (x) => {
    if (selected == 0) {
      return (
        <div>
          <div
            onClick={() => video(x.id)}
            className={`${x.thumbnail} hover: bg-cover w-[310px] h-[171.5px] flex items-end justify-end p-1`}
          >
            <p className="text-white bg-black text-[10px] px-1 py-[3px] w-[33px] flex items-center justify-center">
              {x.time}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="mt-3">
              <Image
                className="rounded-full"
                src={"/images/le epic face.jpeg"}
                width={36}
                height={36}
              />
            </div>
            <div className="w-[204px]">
              <p className="mt-3 text-white text-xs font-bold">{x.title}</p>
              <div className="mt-1.5 text-xs text-[#AAAAAA]">
                <p>{x.creator}</p>
                <p>
                  {x.views} Views · {x.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (tags[selected].name == x.tag) {
      return (
        <div>
          <div
            onClick={() => video(x.id)}
            className={`${x.thumbnail} bg-cover w-[310px] h-[171.5px] flex items-end justify-end p-1`}
          >
            <p className="text-white bg-black text-[10px] px-1 py-[3px] w-[33px] flex items-center justify-center">
              {x.time}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="mt-3">
              <Image
                className="rounded-full"
                src={"/images/le epic face.jpeg"}
                width={36}
                height={36}
              />
            </div>
            <div className="w-[204px]">
              <p className="mt-3 text-white text-xs font-bold">{x.title}</p>
              <div className="mt-1.5 text-xs text-[#AAAAAA]">
                <p>{x.creator}</p>
                <p>
                  {x.views} Views · {x.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const router = useRouter();
  const video = (x) => {
    router.push(`/video?videoId=${x}`);
  };
  const [sidebar, setSidebar] = useState(true);
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-black h-screen w-screen">
      <div>
        <Navs sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex">
          {sidebar && <Sidebar active={true} />}
          <div>
            <Tags
              sidebar={sidebar}
              setSidebar={setSidebar}
              selected={selected}
              setSelected={setSelected}
            />
            <div
              className={`flex-wrap flex gap-x-4 gap-y-10 pt-[24px] pl-[24px] bg-black ${
                sidebar ? "ml-[240px]" : "ml-[0px]"
              } mt-[112px]`}
            >
              {data.map((x, idx) => check(x))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
