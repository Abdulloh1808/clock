const second = document.querySelector('.s'),
    minutes = document.querySelector('.m'),
    hours = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minuteNum = document.querySelector('.minutes')
let time = new Date()
let sec = time.getSeconds() * 6

function clock() {
    sec += 0.2
    let time = new Date()
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30
    let numHour = time.getHours()
    let numMin = time.getMinutes()

    second.style.transform = `rotate(${sec}deg)`
    minutes.style.transform = `rotate(${min}deg)`
    hours.style.transform = `rotate(${hour}deg)`
    setTimeout(() => {
        clock()
    }, 1000 / 30);
    minuteNum.innerHTML = numMin
    hourNum.innerHTML = numHour
    if (minuteNum.innerHTML < 10) {
        minuteNum.innerHTML = '0' + minuteNum.innerHTML
    }
    if (hourNum.innerHTML < 10) {
        hourNum.innerHTML = '0' + hourNum.innerHTML
    }
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            content[j].classList.remove('active')

        }
        tabsItem[i].classList.add('active')
        content[i].classList.add('active')
    })
}


const btn = document.querySelector('.stopwatch__btn'),
    cont = document.querySelector('.continue'),
    sseconds = document.querySelector('.stopwatch__seconds'),
    sminutes = document.querySelector('.stopwatch__minutes'),
    shours = document.querySelector('.stopwatch__hours'),
    span = document.querySelector('.tabsLink__span')

btn.addEventListener('click', function () {
    rename(this)
    recur(this)
})
cont.addEventListener('click', function () {
    rename(this)
    recur(this)
})
function rename(btn) {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
    } 
    else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.add('active_clear')
    }
    else if (btn.innerHTML == 'clear') {
        btn.innerHTML = 'start'
        span.classList.remove('active')
        span.classList.remove('active_clear')
    }
}
function recur() {
    if (btn.innerHTML == 'stop') {
        sseconds.innerHTML++
        if (sseconds.innerHTML < 10) {
            sseconds.innerHTML = '0' + sseconds.innerHTML
        } else if (sseconds.innerHTML == 60) {
            sseconds.innerHTML = 0 + '0'
            sminutes.innerHTML++
            if (sminutes.innerHTML < 10) {
                sminutes.innerHTML = '0' + sminutes.innerHTML
            }else if (sminutes.innerHTML == 60) {
                sminutes.innerHTML = 0 + '0'
                shours.innerHTML++
                if (shours.innerHTML < 10) {
                    shours.innerHTML = '0' + shours.innerHTML
                }else if (shours.innerHTML == 60) {
                    shours.innerHTML = 0 + '0'
                }
            }
        }
        setTimeout(() => {
            recur()
        }, 1000);
    } 
  
    else if (btn.innerHTML == 'start') {
        sseconds.innerHTML = 0 +'0'
    }
    else if (btn.innerHTML == 'clear') {
       
    }
}

        // cont.style.transform = 'scale(1)' 

        // cont.style.transform = 'scale(0)'

    // else if (cont.innerHTML == 'continue'){
    //     cont.style.transform = 'scale(0)'
    //     btn.innerHTML = 'stop'
    // }

    // else if (cont.innerHTML == 'continue'){
    //     sseconds.innerHTML++
    //     if (sseconds.innerHTML < 10) {
    //         sseconds.innerHTML = '0' + sseconds.innerHTML
    //     } else if (sseconds.innerHTML == 60) {
    //         sseconds.innerHTML = 0 + '0'
    //         sminutes.innerHTML++
    //         if (sminutes.innerHTML < 10) {
    //             sminutes.innerHTML = '0' + sminutes.innerHTML
    //         }else if (sminutes.innerHTML == 60) {
    //             sminutes.innerHTML = 0 + '0'
    //             shours.innerHTML++
    //             if (shours.innerHTML < 10) {
    //                 shours.innerHTML = '0' + shours.innerHTML
    //             }else if (shours.innerHTML == 60) {
    //                 shours.innerHTML = 0 + '0'
    //             }
    //         }
    //     }
        
    // }