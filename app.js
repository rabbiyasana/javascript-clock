
window.onload=function(){
    const viewTime=function(){
        let date=new Date();
        // console.log(date)
        let hour= date.getHours();
        let min= date.getMinutes();
        let sec=date.getSeconds();
        let postTime="AM";
        
        // setting time According to 12 hrs clock
        if (hour==0) {
            hour=12
        }
        if (hour>12) {
            hour=hour-12;
            postTime="PM" ;
        }
        
        // adding 0 before minute secs and hours in case these are < 
        
        hour=(hour<10)?"0"+ hour: hour;
        min=(min<10)?"0"+ min: min;
        sec=(sec<10)?"0"+ sec: sec;
        
        
        let time= hour+":"+min+":"+sec +" " + postTime;;
        let append_time=document.getElementById("time-contain");
        append_time.innerHTML=time;
          
        setTimeout(viewTime, 1000);
        
        }
        
        viewTime();
}