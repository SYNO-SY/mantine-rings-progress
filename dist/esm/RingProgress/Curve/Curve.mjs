'use client';
import React from 'react';
import { useMantineTheme, Tooltip, Box, getThemeColor } from '@mantine/core';
import { getCurveProps } from './get-curve-props.mjs';

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
  const theme = useMantineTheme();
  if (!root) {
    return /* @__PURE__ */ React.createElement(Tooltip.Floating, { disabled: !tooltip, label: tooltip }, /* @__PURE__ */ React.createElement(
      Box,
      {
        component: "circle",
        ...others,
        ...getStyles("curve"),
        __vars: { "--curve-color": color ? getThemeColor(color, theme) : void 0 },
        fill: "none",
        strokeLinecap: lineRoundCaps ? "round" : "butt",
        ...getCurveProps({ sum, size, thickness, value, offset, root })
      }
    ));
  }
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      component: "circle",
      ...others,
      ...getStyles("curve"),
      __vars: { "--curve-color": color ? getThemeColor(color, theme) : void 0 },
      fill: "none",
      strokeLinecap: lineRoundCaps ? "round" : "butt",
      ...getCurveProps({ sum, size, thickness, value, offset, root })
    }
  );
}
Curve.displayName = "Curve";

export { Curve };
//# sourceMappingURL=Curve.mjs.map
