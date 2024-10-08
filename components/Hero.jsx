import {
  Briefcase,
  ChevronDown,
  Download,
  NotepadText,
  Send,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xp:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Dora Explorer</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into my self, my vocational
              journey, and what I engagnge in professionallity.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<Briefcase />}
              endCountNum={7}
              badgeText="Years of experience"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<NotepadText />}
              endCountNum={50}
              badgeText="Finished projects"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-10"
              icon={<UsersIcon />}
              endCountNum={6}
              badgeText="Happy clients"
            />
            <div className="bg-hero-shape-light dark:bg-hero-shape-dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
            <DevImg
              containerStyles="bg-hero-shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <ChevronDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
