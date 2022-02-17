var data = 0;

function increment(){
    data = data + 1;
    display();
}

function decrement(){

    if(data == 0){
        return false;
    }else{
        data = data - 1;
    }
    
    display();
}


function display(){
    document.getElementById("count").innerHTML = data
}