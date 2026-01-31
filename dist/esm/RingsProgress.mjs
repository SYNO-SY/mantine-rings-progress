'use client';
import React from 'react';
import { factory, useMantineTheme, useProps, useStyles, Box, parseThemeColor, alpha } from '@mantine/core';
import { RingProgress } from './RingProgress/RingProgress.mjs';
import classes from './RingsProgress.module.css.mjs';

const defaultProps = {
  size: 120,
  thickness: 12,
  gap: 8,
  animate: false,
  roundCaps: true,
  animationDuration: 1e3,
  animationSteps: 60,
  animationTimingFunction: "ease",
  rootColorAlpha: 0.15
};
const RingsProgress = factory((_props, ref) => {
  const theme = useMantineTheme();
  const props = useProps("Rings", defaultProps, _props);
  const {
    rings,
    size,
    thickness,
    gap,
    rootColorAlpha,
    label,
    animate,
    animationSteps,
    animationDuration,
    animationTimingFunction,
    roundCaps,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "RingsProgress",
    props,
    classes
  });
  return /* @__PURE__ */ React.createElement(Box, { ref, ...getStyles("root"), ...others }, rings.map((ring, index) => {
    const parsedColor = parseThemeColor({ color: ring.color, theme });
    return /* @__PURE__ */ React.createElement(
      RingProgress,
      {
        label: index === rings.length - 1 ? label : null,
        key: ring.value + ring.color + index,
        rootColor: alpha(parsedColor.value, rootColorAlpha),
        size: size - index * ((thickness + gap) * 2),
        thickness,
        roundCaps,
        animate,
        animationDuration,
        animationSteps,
        animationTimingFunction,
        left: index * (thickness + gap),
        top: index * (thickness + gap),
        ...getStyles("ring"),
        styles: {
          label: {
            position: "absolute",
            top: "50%",
            left: "50% ",
            transform: "translate(-50%,-50%)",
            right: "auto",
            color: "red"
          }
        },
        sections: [ring]
      }
    );
  }));
});
RingsProgress.classes = classes;
RingsProgress.displayName = "RingsProgress";

export { RingsProgress };
//# sourceMappingURL=RingsProgress.mjs.map
