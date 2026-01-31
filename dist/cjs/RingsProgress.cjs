'use client';
'use strict';

var React = require('react');
var core = require('@mantine/core');
var RingProgress = require('./RingProgress/RingProgress.cjs');
var RingsProgress_module = require('./RingsProgress.module.css.cjs');

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
const RingsProgress = core.factory((_props, ref) => {
  const theme = core.useMantineTheme();
  const props = core.useProps("Rings", defaultProps, _props);
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
  const getStyles = core.useStyles({
    name: "RingsProgress",
    props,
    classes: RingsProgress_module
  });
  return /* @__PURE__ */ React.createElement(core.Box, { ref, ...getStyles("root"), ...others }, rings.map((ring, index) => {
    const parsedColor = core.parseThemeColor({ color: ring.color, theme });
    return /* @__PURE__ */ React.createElement(
      RingProgress.RingProgress,
      {
        label: index === rings.length - 1 ? label : null,
        key: ring.value + ring.color + index,
        rootColor: core.alpha(parsedColor.value, rootColorAlpha),
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
RingsProgress.classes = RingsProgress_module;
RingsProgress.displayName = "RingsProgress";

exports.RingsProgress = RingsProgress;
//# sourceMappingURL=RingsProgress.cjs.map
