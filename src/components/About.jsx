import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
            𝑪𝒐𝒅𝒆𝒓 𝒃𝒚 𝑷𝒂𝒔𝒔𝒊𝒐𝒏 𝒂𝒏𝒅 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒃𝒚 𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏.  <br /><br />

            Highly motivated Computer Science Engineering student with a strong foundation in problem-solving through Data Structures and Algorithms implemented in Java. 

            <br/> <br/>
            I am an aspiring FULL-STACK developer. As a core programmer, I love to take on challenges and love to be part of solutions.
            Interested in leveraging my technical skills and passion for problem solving to contribute to innovative projects within the Software Developer field. Committed to continuous learning and growth to create a meaningful impact. 
        </p>

        <br />

        <p className="text-xl">
            If you're looking for a dynamic and dedicated individual with a passion for technology, I'd love to connect and explore how I can contribute to your team's success. Let's collaborate and create something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default About;