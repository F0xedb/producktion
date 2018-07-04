function travel(i){
    switch (i){
        case 0:
            console.log("facebook");
            window.location.href='https://www.facebook.com';
            break;
        case 1:
            console.log("twitter");
            window.location.href='https://www.twitter.com';
            break;
        case 2:
            console.log("linkidin");
            window.location.href='https://www.linkidin.com';
            break;
        case 3:
            console.log("futurnet");
            window.location.href='https://www.futurenet.club';
            break;
    }
}

function MainbtnClick(){
    if(Math.random()>0.5){
       travelbart();
    }else{
        travelivan()
    }
}

function travelbart(){
    window.location.href='people.html?ref=proost.futurenet.xyz';
}

function travelivan() {
    window.location.href='people.html?ref=ivanow.fn.xyz';
}