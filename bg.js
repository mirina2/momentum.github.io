    var body = document.querySelector("body");
    var btns = document.querySelector(".Dbutton");
    var qli = document.querySelector("li");
    var lig = qli.length+ 1;
    var a = 0;
    var btnst = JSON.parse(document.querySelector("button").getAttribute("id"));

    console.log(btnst);
    console.log("hi");
    console.log(1);
        function paintImg(){
            dat2 = new Date();
            var tmonth = dat2.getMonth();
            var chgH = dat2.getHours();
            const image = document.createElement('img');
            image.classList.add('bgImage');
            if(chgH>= 6 && chgH<12){
                body.appendChild(image);
                image.src = `morning.png`;
                body.style.color="black";
                while(a < lig){
                    btnId.style.color ="black";
                    console.log(a);
                    a = a+1;
                }
            }else
                if(chgH>=12 && chgH<20){
                    body.appendChild(image);  
                    image.src = `afternoon.png`;
                    body.style.color="black";
                    while(btnst < lig){
                        console.log(a);
                        a = a+1;

                    }
                }else
                    if(chgH>= 20 || chgH<6){
                        body.appendChild(image);
                        image.src = `night.png`;
                        body.style.color="white";
                        while(btnst < lig){
                            var btnsy = btns.getElementsById(btnst);
                            console.log(btnsy);
                            a = a+1;
                            console.log(a);
                            btnst.style.color = "white";
                        }
                    };
                }
                    

    /*  image.src =
6 <= currentHour && currentHour < 12
? `bg/morning.png`;
: 12 <= currentHour && currentHour < 20
? `bg/afternoon.png`
: `bg/night.png`; */



                
