import { easeOut, motion } from "framer-motion";
export default function Banner() {
  const cvUrl = "/Afroza_Akter_CV.pdf";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Afroza_Akter_CV.pdf";
    link.click();
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

        {/* Left Side - Text */}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Hi, I'm <span className="text-orange-500 uppercase">Afroza Akter</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            A passionate Web Developer specializing in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>.
            I love building interactive, user-friendly, and modern web applications.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={handleDownloadCV}
              className="bg-orange-500 text-gray-200 cursor-pointer px-8 py-3 text-lg font-semibold rounded"
            >
              Download CV
            </button>
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-semibold border text-orange-500 rounded border-orange-500"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
          <motion.img
            src="https://i.postimg.cc/m2v7cXvN/hijabi.png"
             alt="Afroza Akter"
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-164 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-orange-400 shadow-2xl" />
          {/* <img
            src="https://i.postimg.cc/m2v7cXvN/hijabi.png"
            alt="Afroza Akter"
            className="object-contain rounded-lg shadow-lg h-72 sm:h-80 lg:h-96 xl:h-[28rem]"
          /> */}
        </div>

      </div>
    </section>
  );
}
