export const bodyClickFix = cb => {
  if ("ontouchstart" in document.documentElement) {
    const highlight = "-webkit-tap-highlight-color";
    document.body.style.cursor = "pointer";
    document.body.style[highlight] = "transparent";
  }
  return cb();
};
