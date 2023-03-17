const loadText = document.querySelector('.loading-text')
//the loading percentage that is shown on the screen as it loads and get closer and closer to 100% starts at 0%
const bg = document.querySelector('.bg')
//image also includes the text... the image will become clearer and clearer as the load % reaches 100%

let load = 0
//declare load variable

let int = setInterval(blurring, 60)
//set an interval... just by declaring this it will start to run... so this will call the blurring function every 60 miliseconds

function blurring() {
  load++
  //increase load by one every time function is called and this will be called every 60 miliseconds

  if (load > 99) {
    clearInterval(int)
    //once load reaches 99... you want to TURN off the setInterval function... using clearInterval works with it and just turns it off.  so you start an interval of counting with the set interval function and once the count of load reaches over 99 then turn OFF the interval
  }

  loadText.innerText = `${load}%`
  //change the text of the loading screen percentage... using `` whatever that is called and then using a variable inside which we studied before you have to use ${} the $ on the end is used as concatanation.... thats a string on the end of the variable to show its a percent
  let loaddPercentage = (loadText.style.opacity = scale(load, 0, 100, 1, 0))
  //THIS IS THE LOADING TEXT PERCENTAGE I.E 5% NOT THE PICTURE... will start at the MOST CLEAR which is 1 and go to the MOST BLURRY WHICH IS 0 THE DOCUMENTATION IS RIGHT
  //   console.log(loaddPercentage)
  let pictureBlur = (bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`)
  //THIS IS THE PICTURE... starts at 30px which is blurry and will become teh least blurry which is zero pixels... console log to make sure
  console.log(pictureBlur)
  //so console log confirms it... starts at most blurry picture of 30px and ends at LEAST BLURRY of 0 px
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
