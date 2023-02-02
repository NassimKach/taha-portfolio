import { IconChevronLeft, IconChevronRight } from "@tabler/icons";

function Projects() {
  return (
    <div className="bg-[#121212] ">
      <div className="max-w-7xl mx-auto h-screen w-screen px-[10rem] py-[5rem]">
        <div className="w-full">
          <h1 className="font-bold text-5xl text-white">
            <span className="text-inherit select-none">Lastet</span>
            <br />
            Projects
          </h1>
          <div className="flex items-center justify-start">
            <IconChevronLeft color="#DC493A" />
            <div className="counter text-white text-xl font-medium px-1">
              <span>0</span>
              <span className="sep opacity-30">/</span>
              <span className="total opacity-30">03</span>
            </div>
            <IconChevronRight color="#DC493A" />
          </div>
          <p className="text-white text-xl font-medium">
            At the end of last year, Bumblebee emerged as one of the big
            surprise blockbusters of the year. While Transformers movies of
            th...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
