import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const linkList = [
  {
    label: "波浪",
  },
  {
    label: "波浪-进阶",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-2/6 m-auto h-screen p-6 pt-32">
      <h3 className="text-3xl font-medium p-[20px]">Demo</h3>
      <div className="demo">
        <ul>
          {linkList.map((e, index) => (
            <li
              key={index}
              className="unset
                            transition-[background-size] duration-300 
                            bg-gradient-to-r bg-left-bottom bg-no-repeat
                            bg-[length:0%_55%] hover:bg-[length:100%_55%] dark:bg-[length:0%_2px] hover:dark:bg-[length:100%_2px]
                            from-[#8ae6fb] to-[#8ae6fb] dark:from-[#8ae6fb] dark:to-[#8ae6fb]
                            dark:text-dark-nav-text
                            hover:cursor-pointer
                            "
              onClick={() => {
                navigate(`/ep/${index + 1}`);
              }}
            >
              {e.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
