'use client';
'use strict';

var React = require('react');
var core = require('@mantine/core');
var getCurveProps = require('./get-curve-props.cjs');

function Curve({
  size,
  value,
  offset,
  sum,
  thickness,
  root,
  color,
  lineRoundCaps,
  tooltip,
  getStyles,
  display,
  ...others
}) {
  const theme = core.useMantineTheme();
  if (!root) {
    return /* @__PURE__ */ React.createElement(core.Tooltip.Floating, { disabled: !tooltip, label: tooltip }, /* @__PURE__ */ React.createElement(
      core.Box,
      {
        component: "circle",
        ...others,
        ...getStyles("curve"),
        __vars: { "--curve-color": color ? core.getThemeColor(color, theme) : void 0 },
        fill: "none",
        strokeLinecap: lineRoundCaps ? "round" : "butt",
        ...getCurveProps.getCurveProps({ sum, size, thickness, value, offset, root })
      }
    ));
  }
  return /* @__PURE__ */ React.createElement(
    core.Box,
    {
      component: "circle",
      ...others,
      ...getStyles("curve"),
      __vars: { "--curve-color": color ? core.getThemeColor(color, theme) : void 0 },
      fill: "none",
      strokeLinecap: lineRoundCaps ? "round" : "butt",
      ...getCurveProps.getCurveProps({ sum, size, thickness, value, offset, root })
    }
  );
}
Curve.displayName = "Curve";

exports.Curve = Curve;
//# sourceMappingURL=Curve.cjs.map
