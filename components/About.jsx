import {
  Briefcase,
  Calendar,
  GraduationCap,
  Home,
  MailIcon,
  PhoneCall,
  User,
} from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <User size={20} />,
    text: "Dodi Nugroho",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+6482 3456 789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "info@dodinugroho.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born 28 August 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master of Computer Science",
  },
  {
    icon: <Home size={20} />,
    text: "Jl. Raya Pekanbaru - Kota Pekanbaru, Riau",
  },
];

const majorData = [
  {
    title: "education",
    data: [
      {
        university: "Institut Teknologi Bandung",
        major: "Computer Science",
        year: "2015 - 2019",
      },
      {
        university: "SMK Negeri 1 Pekanbaru",
        major: "Electrical Engineering",
        year: "2006 - 2011",
      },
      {
        university: "SDN 1 Pekanbaru",
        major: "English",
        year: "2000 - 2005",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "PT. Cakra Teknologi Bandung",
        title: "Software Engineer",
        year: "2015 - 2019",
      },
      {
        company: "PT. BRI Digital Indonesia",
        title: "Software Engineer",
        year: "2021 - 2025",
      },
      {
        company: "PT. Bangun Muda Nusantara",
        title: "Software Engineer",
        year: "2030 - 2080",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
        level: "Advanced",
      },
      {
        name: "Javascript",
        level: "Advanced",
      },
      {
        name: "ReactJS",
        level: "Advanced",
      },
      {
        name: "NextJS",
        level: "Advanced",
      },
      {
        name: "TailwindCSS",
        level: "Advanced",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const getData = (data, title) => {
  return data.find((item) => item.title === title);
};

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about-shape-light dark:bg-about-shape-dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="info">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="info">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="major">Major</TabsTrigger>
                <TabsTrigger value="skill">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="info">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Your Business
                    </h3>
                    <p className="subtitle max-w-xl xl:mx-0">
                      I am Dodi Nugroho. I am a Web Developer. Delivering high
                      quality products from start to finish. Come to me and see
                      how I can help.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-x-4 items-center mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bahasa Indonesia</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="major">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Education
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(majorData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(majorData, "education").data.map(
                            (item, index) => (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {item.major}
                                  </div>
                                  <div className="text-base font-medium">
                                    {item.year}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(majorData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(majorData, "experience").data.map(
                            (item, index) => (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {item.title}
                                  </div>
                                  <div className="text-base font-medium">
                                    {item.year}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skill">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => (
                            <div
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{item.name}</div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => (
                          <div
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <Image
                              src={item.imgPath}
                              alt={item.imgPath}
                              width={48}
                              height={48}
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
