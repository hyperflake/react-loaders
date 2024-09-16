import { jsxs, jsx } from "react/jsx-runtime";
import { cva } from "../../node_modules/class-variance-authority/dist/index.js";
import { useMemo } from "react";
const progressVariants = cva(["hf-circular-progressbar"], {
  variants: {
    variant: {
      indeterminate: ["hf-circular-progressbar-indeterminate"],
      determinate: ["hf-circular-progressbar-determinate"]
    },
    color: {
      inherit: ["hf-progressbar-inherit"],
      primary: ["hf-progressbar-primary"],
      secondary: ["hf-progressbar-secondary"],
      success: ["hf-progressbar-success"],
      danger: ["hf-progressbar-danger"],
      warning: ["hf-progressbar-warning"]
    }
  },
  defaultVariants: {
    variant: "indeterminate",
    color: "primary"
  }
});
const CIRCUMFERENCE = 2 * Math.PI * 20.2;
const CircularProgress = (props) => {
  const { size = 40, value = 0, showLabel = false, variant = "indeterminate", color, className, ...rest } = props;
  const offset = useMemo(() => {
    let _value = Math.max(0, value);
    _value = Math.min(_value, 100);
    return CIRCUMFERENCE - CIRCUMFERENCE * _value / 100;
  }, [value]);
  const fontSize = useMemo(() => Math.min(size / 4), [size]);
  return /* @__PURE__ */ jsxs("span", { role: "progressbar", ...rest, className: progressVariants({ variant, color, className }), children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "22 22 44 44", width: size, height: size, children: [
      /* @__PURE__ */ jsx(
        "circle",
        {
          strokeOpacity: 0.2,
          cx: 44,
          cy: 44,
          r: 20,
          fill: "none",
          strokeWidth: 4,
          stroke: "currentColor",
          strokeDasharray: CIRCUMFERENCE
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: "hf-circular-progressbar-circle",
          cx: 44,
          cy: 44,
          r: 20,
          fill: "none",
          strokeWidth: 4,
          stroke: "currentColor",
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: offset,
          strokeLinecap: "round"
        }
      )
    ] }),
    showLabel && variant === "determinate" && /* @__PURE__ */ jsxs("span", { className: "hf-circular-progressbar-label", style: { fontSize }, children: [
      value,
      "%"
    ] })
  ] });
};
export {
  CircularProgress as default
};
//# sourceMappingURL=CircularProgress.js.map
