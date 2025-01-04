import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="sm:mx-12 mx-8 text-center sm:py-40 py-24" id="about-me">
      <p className="tracking-normal text-neutral-500 text-2xl font-medium line sm:leading-[48px] leading-8">
        Hey there! <span className="highlight">I&apos;m Tejas! </span>I am a{" "}
        <span className="text-purple-600 underline decoration-purple-600 decoration-2 font-extrabold">
          freelance web developer
        </span>{" "}
        with a passion for{" "}
        <span className="text-neutral-700 font-extrabold">
          machine learning
        </span>{" "}
        and{" "}
        <span className="text-neutral-700 font-extrabold">
          blockchain tech.{" "}
        </span>
        I create seamless{" "}
        <span
          className={`text-neutral-700 underline decoration-2 decoration-neutral-700 text-2xl font-playwrite font-extrabold`}>
          digital experiences
        </span>{" "}
        that captivate users.
        <br />
        I&apos;m in the
        <span className="text-white bg-green-500 font-bold px-2 mx-1">
          evergreen process of learning
        </span>
        <span className="sm:inline-flex items-center">
          and I&apos;m
          <span className="text-4xl text-red-500 font-extrabold mx-1">
            loving
          </span>
          each moment of it <FaHeart className="text-red-500 sm:mx-2 mx-auto" />
        </span>
      </p>
    </div>
  );
};

export default About;
