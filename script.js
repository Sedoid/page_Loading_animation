let spinner = document.getElementsByTagName('span');

const colors=['red','green','orange','blue','brown','purple','violet'];
const text = 'LOADING'
var i=0;
setInterval(function(){
    
  
    
    if(i> 6)   
       {
           spinner[i%7].style.color = '#ccc';
           spinner[i%7].style.backgroundColor = '#ccc';
           spinner[i%7].style.boxShadow = '0 0 0 #fff';
           spinner[i%7].style.transform = `translateY(-2px)`;
    
       } 
    else
       {
           spinner[i].style.backgroundColor =  `${colors[i]}`;
           spinner[i].style.boxShadow = `0 4px 8px 0 ${colors[i]}, 0 7px 20px 0 ${colors[i]}`;
           spinner[i].style.transform = `translateY(20px)`;
          spinner[i].style.color = `${colors[i]}`;
       } 
        i++; 
       if(i>13)
       i=0;
   
}, 300)

