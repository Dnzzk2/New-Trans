import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContent";

const ThemeChange = () => {
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
          // clipPath: colorMode === "light" ? [...clipPath].reverse() : clipPath,
          clipPath: clipPath,
        },
        {
          duration: 1000,
          // 指定要附加动画的伪元素
          // pseudoElement:
          //   colorMode === "light"
          //     ? "::view-transition-old(root)"
          //     : "::view-transition-new(root)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div className="">
      {colorMode === "light" && (
        <img src="./sun.svg" alt="Sun" onClick={toggleColorMode} />
      )}
      {colorMode === "dark" && (
        <img src="./moonLight.svg" alt="MoonLight" onClick={toggleColorMode} />
      )}
    </div>
  );
};

export default ThemeChange;
