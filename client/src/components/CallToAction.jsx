import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Want to learn HTML, CSS and JavaScript by building fun and engaging
          projects?
        </h2>
        <p className="text-gray-500 my-2">
          Check our 100 js projects website and start building your own projects
        </p>
        <a
          href="https://github.com/Mohamadi12/blog_m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 rounded-tl-xl rounded-bl-none rounded-br-xl w-full">
            100 JS Projects Website
          </Button>
        </a>
      </div>
      <div className="flex-1 p-7">
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221114110410/Top-10-JavaScript-Project-Ideas-For-Beginners-2023.png" />
      </div>
    </div>
  );
};

export default CallToAction;
