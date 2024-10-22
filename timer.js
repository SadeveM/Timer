let start = document.querySelector(".start")
let pause = document.querySelector(".pause");
let reload = document.querySelector(".reload")

let html_secs = document.getElementById("secs");
let html_mins = document.getElementById("mins");
let html_hrs = document.getElementById("hours");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer_interval;

function add_zero(timer_value){
    if (timer_value < 10) {
        let new_timer_value = "0" + timer_value.toString()
        return new_timer_value;
    }
    return timer_value;
}

function update_time(){
    html_secs.innerText = add_zero(seconds);
    html_mins.innerText = add_zero(minutes);
    html_hrs.innerText = add_zero(hours);
}

start.addEventListener("click", () => {
    start.classList.toggle("hide");
    pause.classList.toggle("hide");
    timer_interval = setInterval(() => {
        seconds += 1;
    
        if (seconds == 60) {
            seconds = 0;
            minutes += 1;
        }
        
        if (minutes == 60){
            minutes = 0;
            hours += 1;
        }

        update_time();
    }, 1000)
})

pause.addEventListener("click", () => {
    start.classList.toggle("hide");
    pause.classList.toggle("hide");
    clearInterval(timer_interval);
})

reload.addEventListener("click", () => {
    hours = 0;
    seconds = 0;
    minutes = 0;

    update_time();

    clearInterval(timer_interval);
    if (start.classList.contains("hide"))
        start.classList.remove("hide")

    if (!pause.classList.contains("hide"))
        pause.classList.add("hide")
})
