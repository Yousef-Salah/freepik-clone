function matchMediaQuery(breakPoints, setBreakPoint) {
  for (let key of Object.keys(breakPoints)) {
    if (window.matchMedia(`${breakPoints[key]}`).matches) {
      setBreakPoint(key);
    }
  }
}
export default function breakPointObserver(breakPoints, setBreakPoint) {
  matchMediaQuery(breakPoints, setBreakPoint);
  window.addEventListener("resize", () => {
    matchMediaQuery(breakPoints, setBreakPoint);
  });
}
