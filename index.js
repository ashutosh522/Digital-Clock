function myClock(){
  let clock =new Date();
  let hours=clock.getHours();
  let minutes=clock.getMinutes();
  let seconds=clock.getSeconds();
  let date=clock.getDate();
  let month=clock.getMonth();
  let year=clock.getFullYear();
  let day=clock.getDay();
  //let ampm = hours >= 12 ? 'PM' : 'AM';
  //console.log(clock);
  
  if(hours>12){
    hours= hours-12;
  }
  if(hours==0){
    hours=12;
  }
  
  
  if(hours<10){
    hours= "0" + hours;
  }
  if(seconds<10){
    seconds= "0" + seconds;
  }
  
  if(minutes<10){
  
    minutes= "0" + minutes;
  }
  
  
  let containerElement=document.querySelector('#container');
  containerElement.innerHTML= hours + ":" + minutes + ":" + seconds;
  let dateElement=document.querySelector('#date-box');
  //dateElement.innerHTML= date + "/" + month + "/" + year + " " + day;
  }
  setInterval(myClock, 1000);