import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContent";
import "./ep2.css";

const Ep2 = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  // Theme切换
  const toggleColorMode = async (event) => {
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
    const transition = document.startViewTransition(() => {
      console.log("立即执行");
      setColorMode(colorMode === "light" ? "dark" : "light");
    });

    // 设置视图过渡的结束半径
    transition.ready.then(() => {
      const isLightToDark = colorMode === "light";
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      const reversedClipPath = [...clipPath].reverse();

      document.documentElement.animate(
        {
          clipPath: isLightToDark ? reversedClipPath : clipPath,
        },
        {
          //只是给伪元素加动画，加完动画，就会执行回调函数，只是动画时间比较长
          duration: 40000,
          // 指定要附加动画的伪元素,
          pseudoElement: isLightToDark
            ? "::view-transition-old(ep2)"
            : "::view-transition-new(ep2)",
        }
      );
    });
  };

  return (
    <div className="all">
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

export default Ep2;
