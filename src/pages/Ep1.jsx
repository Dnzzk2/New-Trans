import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContent";

const Ep1 = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  // Theme切换
  const toggleColorMode = (event) => {
    // 兼容处理
    if (!document.startViewTransition) {
      setColorMode(colorMode === "light" ? "dark" : "light");
      return;
    }

    // 获取点击位置
    const x = event?.clientX;
    const y = event?.clientY;

    // 获取到最远角的距离
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // 开始一次视图过渡：
    const transition = document.startViewTransition(async () => {
      setColorMode(colorMode === "light" ? "dark" : "light");
    });

    // 设置视图过渡的结束半径
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div>
      <div className="bg-white dark:bg-black w-full h-dvh p-6">
        <div className="flex items-center justify-end">
          {colorMode === "light" && (
            <img
              src="../../public/sun.svg"
              alt="Sun"
              onClick={toggleColorMode}
            />
          )}
          {colorMode === "dark" && (
            <img
              src="../../public/moonLight.svg"
              alt="MoonLight"
              onClick={toggleColorMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Ep1;
