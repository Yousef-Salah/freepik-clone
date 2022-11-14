function matchMediaQuery (breakPoints, setBreakPoint){
    console.log(Object.keys(breakPoints));
    for (let key of Object.keys(breakPoints)){
        console.log(key, '=>',breakPoints[key]);
        if (window.matchMedia(`${breakPoints[key]}`).matches){
            setBreakPoint(key);
        }
    }
}
export default function breakPointObserver (breakPoints, setBreakPoint) {
    matchMediaQuery (breakPoints, setBreakPoint);
    window.addEventListener('resize',()=>
    {
        matchMediaQuery (breakPoints, setBreakPoint);
    }
    );
}