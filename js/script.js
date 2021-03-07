let makeclock= () => {//creating a function named makeclock to do our task
  let date= new Date();//creating a variable date and assigning date function to it
  let hour= date.getHours();//current hour is given in 0-23 format
  let minute=date.getMinutes();//current minute is given in 0-59 format
  let second=date.getSeconds();//current second is given in 0-59 format
  let session ="AM";//considering the current session as AM
  
  if(hour>12){
    session="PM"; //by default time is in 24 hour format i.e 0 to 23. Here using PM we are making it 12 hour format. i.e AM till 12:00:00) and PM from 12:00:01
  }
  if(hour===12&&(minute===0)&&(second>0)){//i.e when it becomes 12:00:01, the session becomes PM
  session="PM";
  }
  if(hour>12){
    hour=hour-12;//i.e when hour > 12 i.e 13, 14..upto...23., it should be hour -12..i.e @13 hour become >>13-12 =1PM, @ 14 hour becomes>>hour-12=2PM etc...upto when hour=23>>hour becomes 23-12=11PM
  } 
  if(hour<10){
    hour="0"+hour;// to make hour in 01, 02, 03 format upto 09 
  }
  if(minute<10){
    minute="0"+minute;//to make minutes in 01, 02 format upto 09
  }    
  if(second<10){
    seconds="0"+seconds//to make seconds in the 01, 02 format upto 09
  }

  let time=hour+":"+minute+":"+second+" "+ session;//writing the digital clock browser display format eg:08:30:25 format
  document.getElementById("digital_clock").innerHTML=time;//printing the result. But here it will display the time we execute the print and it won't change the timer.
  setInterval(makeclock, 1000);//To resolve above problem and to move the clock timer moving we create an interval using setInterval() method.
}                              //the setInterval() will make our function makeclock repeat every 1 seconds (1 seconds=1000ms)

makeclock();//calling the function to see the result