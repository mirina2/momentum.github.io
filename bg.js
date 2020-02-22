    var body = document.querySelector("body");
    var nameplace = document.querySelector(".js_input");
    var todoplace = document.querySelector(".t_input");
    var todoColor = document.querySelector(".js_toDoList")
    
    function paintImg(){
        dat2 = new Date();
        /*
        var tmonth = dat2.getMonth();
        달(계절)마다 바뀌는 배경기능 곧 추가
        */
        var chgH = dat2.getHours();
        const image = document.createElement('img');
        image.classList.add('bgImage');
        if(chgH>= 6 && chgH<12){
            body.appendChild(image);
                image.src = `morning.png`;
                body.style.color="black";
                nameplace.classList.add('morning_ph');
                todoplace.classList.add('morning_todo_ph');
                
            
            }else
            if(chgH>=12 && chgH<20){
                body.appendChild(image);  
                image.src = `afternoon.png`;
                body.style.color="black";
                nameplace.classList.add('afternoon_ph');
                todoplace.classList.add('afternoon_todo_ph');
                todoColor.classList.add('afternoon_todoList');
                
                }else
                    if(chgH>= 20 || chgH<6){
                        function changeColorOf(btnColor){
                            btnColor.style.color="white";
                        }
                        body.appendChild(image);
                        image.src = `night.png`;
                        body.style.color="white";
                nameplace.classList.add('night_ph');
                todoplace.classList.add('night_todo_ph');
                todoColor.color="white";
                
                        }
    };
                    

    /*  image.src =
6 <= currentHour && currentHour < 12
? `bg/morning.png`;
: 12 <= currentHour && currentHour < 20
? `bg/afternoon.png`
: `bg/night.png`; */



                
