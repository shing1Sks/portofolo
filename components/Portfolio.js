"use client";
import React from "react";
import Image from "next/image";
import { Carousel, Flex } from "antd";

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  width: "100%",
  background: "rgb(217, 218, 221)",
  margin: "0 auto",
  padding: "0px",
};

export default function Portfolio() {
  return (
    <div className="md:w-1/2 h-[60vh] md:h-full bg-gray-100 p-8 text-gray-400 overflow-y-auto">
      <div className="flex flex-row p-1 gap-x-[5%]">
        <Image
          src="/profile.jpg"
          alt="Shreyash Kumar Singh"
          className="mb-4 rounded-md"
          width={150}
          height={300}
        />
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-blue-500 pt-[10%]">
            Shreyash Kumar Singh
          </h1>
          <p className="text-sm md:text-lg md:mt-2">
            Web Developer | AI | ML | DL | GenAI Developer
          </p>
          <h2 className="text-md md:text-xl font-bold md:mt-6">About Me</h2>
          <p className="md:mt-2 text-xs md:text-lg">
            I&#39;m a highly motivated individual with experience in web
            development, AI,ML,DL and GenAI. Check out my projects and feel free
            to chat with me or Hana!
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-xl md:text-2xl font-bold text-blue-500 pt-[10%]">
          Tech Stacks / Skills Offered
        </h1>
        <p className="text-sm md:text-xl md:mt-2">
          Websites | AI Applications | ML Projects | DL Projects | GenAI
          Applications
        </p>

        <h2 className="text-md md:text-xl font-bold md:mt-6">Languages</h2>
        <p className="md:mt-2 text-xs md:text-lg">
          JavaScript, Java, C, Python, HTML, CSS
        </p>

        <h2 className="text-md md:text-xl font-bold md:mt-6">Technologies</h2>
        <p className="md:mt-2 text-xs md:text-lg">
          React.js, Next.js, Express, Node.js, Tailwind CSS, Pandas, NumPy,
          LangChain, TensorFlow, Scikit-learn, Git, VS Code, Jupyter Notebook,
          Kaggle, Keras
        </p>

        <h2 className="text-md md:text-xl font-bold md:mt-6">Concepts</h2>
        <p className="md:mt-2 text-xs md:text-lg">
          Machine Learning, Deep Learning, Artificial Intelligence, Generative
          AI, Natural Language Processing (NLP), Recurrent Neural Network (RNN),
          Convolutional Neural Network (CNN), Transformers
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-blue-500 pt-[10%]">
        Projects
      </h2>
      <ul className="list-disc pl-5 mt-2 text-xs space-y-4 sm:text-base">
        <li>
          <a
            href="https://github.com/your-github/aifybox"
            target="_blank"
            className="text-blue-600"
          >
            Aifybox
          </a>
          <p>
            A pretty cool project ! Basically frustrated by the lack of basic
            auto completion / text suggestion in gforms and places i thought it
            would be pretty cool to make a chrome extension that does just that.
            And why not home brew the model too!
          </p>
          <Carousel
            autoplay={{
              dotDuration: true,
            }}
            arrows
            dotPosition="bottom"
            autoplaySpeed={5000}
          >
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/aifybox_1.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/aifybox_2.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/aifybox_3.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
          </Carousel>
        </li>
        <li>
          <a
            href="https://monkeyscore.vercel.app"
            target="_blank"
            className="text-blue-600"
          >
            Monkey Score
          </a>
          <p>
            Not just your average score predictor, Monkey Score attempts to try
            and capture the relationship begtween scores , academic performance
            and individuals personal traits and behaviours and
            surroundings.Using this try to predict scores.
          </p>
          <Carousel
            autoplay={{
              dotDuration: true,
            }}
            arrows
            dotPosition="bottom"
            autoplaySpeed={5000}
          >
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/monkey_1.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/monkey_2.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/monkey_3.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/monkey_4.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
          </Carousel>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/op-db"
            target="_blank"
            className="text-blue-600"
          >
            op-db
          </a>
          <p>
            The op-db package streamlines database setup into a few simple
            steps, creating a versatile server that can be fully customized and,
            once hosted, serves most of your project needs for all your
            projects.With its innovative project segregation system, op-db
            allows you to reuse the same API endpoints across multiple projects,
            making it an ideal choice for hackathons and small-scale projects.
          </p>
          <Carousel
            autoplay={{
              dotDuration: true,
            }}
            arrows
            dotPosition="bottom"
            autoplaySpeed={5000}
          >
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/opdb_1.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/opdb_2.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/opdb_3.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/opdb_4.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/opdb_5.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
          </Carousel>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/op-db"
            target="_blank"
            className="text-blue-600"
          >
            quizup-skillup
          </a>
          <p>
            To make learning enjoyable and engaging, QuizUp SkillUp aims to
            transform the learning and testing process into a fun, game-like
            environment using AI. This application has the potential to instill
            positive learning habits in millions by making the learning
            experience enjoyable for all ages. By incorporating game-like scores
            and leaderboard components, QuizUp SkillUp strives to make learning
            as fun and rewarding as possible.
          </p>
          <Carousel
            autoplay={{
              dotDuration: true,
            }}
            arrows
            dotPosition="bottom"
            autoplaySpeed={5000}
          >
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/qs_1.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/qs_2.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/qs_3.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/qs_4.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
          </Carousel>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/op-db"
            target="_blank"
            className="text-blue-600"
          >
            know your roads
          </a>
          <p>
            Know Your Roads (KYR), a community-driven platform dedicated to
            spreading awareness about the true conditions of our roads. Our
            mission is to provide accurate, real-time information about road
            conditions, ensuring that everyone can travel safely and avoid the
            hazards that polished news reports often overlook.
          </p>
          <Carousel
            autoplay={{
              dotDuration: true,
            }}
            arrows
            dotPosition="bottom"
            autoplaySpeed={5000}
          >
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/ky4r_1.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/ky4r_2.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src="/project/ky4r_3.png"
                  alt="Aifybox"
                  width={600}
                  height={300}
                />
              </h3>
            </div>
          </Carousel>
        </li>
      </ul>

      <div className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-blue-500">
          Contact Me
        </h2>
        <p className="text-sm md:text-lg md:mt-2">
          Feel free to reach out! Type your message below and click &quot;Send
          Email&quot; to contact me.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            const name = e.target.name.value;
            const message = e.target.message.value;
            const email = "shreyashks02@example.com"; // Your email

            // Build the mailto link
            const subject = `Message from ${encodeURIComponent(name)}`;
            const body = encodeURIComponent(
              `Hi,\n\n${message}\n\nRegards,\n${name}`
            );
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
          }}
          className="mt-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="message"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white text-sm md:text-lg font-bold rounded-lg hover:bg-blue-600 transition-all"
          >
            Send Email
          </button>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-blue-500">
          Download Resume
        </h2>
        <p className="text-sm md:text-lg md:mt-2">
          You can download my resume by clicking the button below:
        </p>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm md:text-lg font-bold rounded-lg hover:bg-blue-600 transition-all"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
