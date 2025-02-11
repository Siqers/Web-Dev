let arg = prompt("Enter a number: ");

switch (arg){
    case '0':
    case '1':
        alert("One or Zero!");
        break;

    case '2':
        alert('Two');
        break;
    
    case '3':
        alert("Three");
        break;
    default:
        alert('An unknown number');
}

let browse = 'Chrome';

if(browse == 'Edge'){
    alert(`You've got the Edge`);

}
    else if(browse == 'Chrome' || 'Firefox' || 'Safari' || 'Opera'){
    alert('Okay we support these values');
    
}else{
    alert('We hope that this page looks ok!')
}


let a = +prompt('a?', '');

switch(a){
    case '0':
        alert(0);
        break;
    case '1':
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}