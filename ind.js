var s="to our website";
    document.getElementById('hi').addEventListener("mouseover",function(){
        
        setTimeout(() => {
            document.getElementById('hi').innerHTML=s;
        }, 20);

    });
    

    document.getElementById('hi').addEventListener("mouseout",function(){
       
        setTimeout(() => {
            document.getElementById('hi').innerHTML="Welcome";
        }, 20);

    });
    