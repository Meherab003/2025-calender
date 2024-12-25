import calender from "../../public/calender.json";
import Month from "../components/Month";

const Home = () => {
  return (
    <div>
      <p className="font-title text-4xl md:text-5xl lg:text-7xl text-white font-black text-center py-5 md:py-8 lg:py-10">
        2025
      </p>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-10 lg:px-20 px-5 pb-20">
        {calender.map((month) => (
          <Month key={month.Number} month={month}></Month>
        ))}
      </div>
      <div className="pb-5 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <a
          href="https://github.com/Meherab003"
          className="flex items-center justify-center gap-2 cursor-pointer group md:w-52"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png"
            alt="github_"
            className="w-8 h-8"
          />
          <a className="lg:text-2xl font-title text-gray-950 group-hover:text-blue-900 transform duration-200">@Meherab003</a>
        </a>
        <a
          href="https://www.instagram.com/meherab03/"
          className="flex items-center justify-center gap-2 cursor-pointer group md:w-52"
        >
          <img
            src="https://img.icons8.com/windows/32/instagram-new.png"
            alt="github_"
            className="w-10 h-10"
          />
          <a className="lg:text-2xl font-title text-gray-950 group-hover:text-blue-900 transform duration-200">@meherab03</a>
        </a>
      </div>
    </div>
  );
};

export default Home;
