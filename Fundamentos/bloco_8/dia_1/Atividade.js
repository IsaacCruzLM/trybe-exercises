const WakeUp = () => console.log('Acordando!!');

const BreakFast = () => console.log('Bora tomar café!!');

const ToSleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

doingThings(WakeUp);

doingThings(BreakFast);

doingThings(ToSleep);