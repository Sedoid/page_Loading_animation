let spinner = document.getElementsByTagName('span');

const colors=['red','green','orange','blue','pink','purple'];
var i=0;
setInterval(function(){
    
  
    
    if(i> 5)   
       {
        //    spinner[i%6].style.display = 'inline-block';
           spinner[i%6].style.backgroundColor = '#aaa';
           spinner[i%6].style.boxShadow = '0 0 0 #fff';
           spinner[i%6].style.transform = `translateY(-20px)`;
    
       } 
    else
       {
           spinner[i].style.backgroundColor =  `${colors[i]}`;
           spinner[i].style.boxShadow = `0 4px 8px 0 ${colors[i]}, 0 6px 20px 0 ${colors[i]}`;
           spinner[i].style.transform = `translateY(20px)`;
        //    spinner[i].style.boxShadow = `0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`;
       } 
        i++; 
       if(i>12)
       i=0;
   
}, 500)

async function wait(i){
    await setTimeout(function(){
         
    }, 200)
}