(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR =  MINUTE *60;
  const DAY = HOUR * 24;

  function setElementInnetText(id, text){
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown(){
    const now = new Date().getTime();
    const collegeOpen = new Date('July 13, 2020 06:00:00').getTime();
    const unixTimeleft = collegeOpen - now;

    setElementInnetText('days', Math.floor(unixTimeleft / DAY))
    setElementInnetText('hours', Math.floor(unixTimeleft % DAY / HOUR))
    setElementInnetText('minutes', Math.floor(unixTimeleft % HOUR / MINUTE))
    setElementInnetText('seconds', Math.floor(unixTimeleft % MINUTE / SECOND))
  }

  function run(){
    countDown();
    setInterval(countDown, SECOND);
  }
  run()

})();
