'use client';
'use strict';

var React = require('react');
var core = require('@mantine/core');
var Curve = require('./Curve/Curve.cjs');
var getCurves = require('./get-curves/get-curves.cjs');
var RingProgress_module = require('./RingProgress.module.css.cjs');

function getClampedThickness(thickness, size) {
  return Math.min(thickness || 12, (size || 120) / 4);
}
const defaultProps = {
  size: 120,
  thickness: 12,
  animate: false,
  animationDuration: 1e3,
  animationTimingFunction: "ease",
  animationSteps: 60
};
const varsResolver = core.createVarsResolver((_, { size, thickness }) => ({
  root: {
    "--rp-size": core.rem(size),
    "--rp-label-offset": core.rem(thickness * 2)
  }
}));
const RingProgress = core.factory((_props, ref) => {
  const props = core.useProps("RingProgress", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    sections: initialSections,
    size,
    thickness,
    roundCaps,
    rootColor,
    animate,
    animationSteps,
    animationDuration,
    animationTimingFunction,
    ...others
  } = props;
  const timingFunctions = {
    linear: (t) => t,
    ease: (t) => t < 0.5 ? 0.5 * (2 * t) * (2 * t) : -0.5 * ((2 * t - 1) * (2 * t - 3) - 1),
    "ease-in": (t) => t * t,
    "ease-out": (t) => t * (2 - t),
    "ease-in-out": (t) => t < 0.5 ? 0.5 * t * t : -0.5 * ((2 * t - 1) * (2 * t - 3) - 1),
    "ease-in-cubic": (t) => t * t * t,
    "ease-out-cubic": (t) => {
      const t1 = t - 1;
      return t1 * t1 * t1 + 1;
    },
    "ease-in-out-cubic": (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  };
  const [sections, setSections] = React.useState(
    initialSections.map((section) => ({
      ...section,
      ...animate && { value: 0 }
    }))
  );
  React.useEffect(() => {
    if (animate) {
      animateSection();
    }
  }, [animate, animationDuration, animationSteps, animationTimingFunction, initialSections]);
  function animateSection() {
    const section = initialSections[0];
    const stepValue = section.value / animationSteps;
    let currentStep = 0;
    const timeFunction = timingFunctions[animationTimingFunction];
    const animationInterval = setInterval(() => {
      currentStep++;
      const t = currentStep / animationSteps;
      const easingValue = timeFunction(t);
      const animatedValue = stepValue * easingValue * animationSteps;
      setSections((prevSections) => [
        {
          ...prevSections[0],
          value: animatedValue
        }
      ]);
      if (currentStep === animationSteps) {
        clearInterval(animationInterval);
      }
    }, animationDuration / animationSteps);
  }
  const getStyles = core.useStyles({
    name: "RingProgress",
    classes: RingProgress_module,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const clampedThickness = getClampedThickness(thickness, size);
  const curves = getCurves.getCurves({
    size,
    thickness: clampedThickness,
    sections,
    renderRoundedLineCaps: roundCaps,
    rootColor
  }).map(({ data, sum, root, lineRoundCaps, offset }, index) => /* @__PURE__ */ React.createElement(
    Curve.Curve,
    {
      ...data,
      key: index,
      size,
      thickness: clampedThickness,
      sum,
      offset,
      color: data?.color,
      root,
      lineRoundCaps,
      getStyles
    }
  ));
  return /* @__PURE__ */ React.createElement(core.Box, { ...getStyles("root"), size, ref, ...others }, /* @__PURE__ */ React.createElement("svg", { ...getStyles("svg") }, curves), label && /* @__PURE__ */ React.createElement("div", { ...getStyles("label") }, label));
});
RingProgress.classes = RingProgress_module;
RingProgress.displayName = "RingProgress";

exports.RingProgress = RingProgress;
//# sourceMappingURL=RingProgress.cjs.map
