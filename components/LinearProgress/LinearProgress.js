import { jsxs, jsx } from "react/jsx-runtime";
import { cva } from "../../node_modules/class-variance-authority/dist/index.js";
import { useMemo } from "react";
const progressVariants = cva(["hf-linear-progressbar"], {
  variants: {
    variant: {
      indeterminate: ["hf-linear-progressbar-indeterminate"],
      determinate: ["hf-linear-progressbar-determinate"]
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
const LinearProgress = (props) => {
  const { value, showLabel, height = 4, variant = "indeterminate", color, className, ...rest } = props;
  const offset = useMemo(() => {
    if (variant === "indeterminate") return 0;
    let _value = Math.max(0, value);
    _value = Math.min(_value, 100);
    return _value;
  }, [value, variant]);
  return /* @__PURE__ */ jsxs("span", { role: "progressbar", ...rest, className: progressVariants({ variant, color, className }), children: [
    /* @__PURE__ */ jsxs("svg", { width: "100%", height, style: { borderRadius: height / 2 }, children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          fill: "currentColor",
          fillOpacity: 0.2,
          width: "100%",
          height: "100%",
          rx: height / 2,
          ry: height / 2
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          className: "hf-linear-progressbar-line",
          fill: "currentColor",
          width: `${offset}%`,
          height: "100%",
          rx: height / 2,
          ry: height / 2
        }
      )
    ] }),
    showLabel && variant === "determinate" && /* @__PURE__ */ jsxs("span", { className: "hf-linear-progressbar-label", children: [
      offset,
      "%"
    ] })
  ] });
};
export {
  LinearProgress as default
};
//# sourceMappingURL=LinearProgress.js.map
