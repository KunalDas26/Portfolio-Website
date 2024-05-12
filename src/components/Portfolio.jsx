import React from "react";
import netMovie from "../assests/portfolio/netMovie.jpg";
import mCommerce from "../assests/portfolio/mcommerce.jpg";
import dailyDose from "../assests/portfolio/dailyDose.jpg";
import menuOrder from "../assests/portfolio/menuOrder.jpg";
import imagePort from "../assests/portfolio/imagePortfolio.jpg";
import todoList from "../assests/portfolio/todoList.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netMovie,
      demoLink: "https://netflycloneweb.netlify.app",
      codeLink: "https://github.com/KunalDas26/Netflix.git",
    },
    {
      id: 2,
      src: mCommerce,
      demoLink: "https://example.com/mCommerce-demo",
      codeLink: "https://github.com/KunalDas26",
    },
    {
      id: 3,
      src: dailyDose,
      demoLink: "https://dailydoseblogs.netlify.app/",
      codeLink: "https://github.com/KunalDas26/Daily-Dose-Blogs.git",
    },
    {
      id: 4,
      src: menuOrder,
      demoLink: "https://kunal-das-food-order-menu-application.netlify.app",
      codeLink: "https://github.com/KunalDas26",
    },
    {
      id: 5,
      src: imagePort,
      demoLink: "https://kunal-das-css-grid.netlify.app",
      codeLink: "https://github.com/KunalDas26",
    },
    {
      id: 6,
      src: todoList,
      demoLink: "https://kunal-das-to-do-list-web-application.netlify.app",
      codeLink: "https://github.com/KunalDas26",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Explore a selection of my projects showcased below ~</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
