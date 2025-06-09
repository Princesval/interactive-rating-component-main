const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const allBtns = document.querySelectorAll('.rating-btn');
const ratingP = document.getElementById("js-span");
const submitBtn = document.getElementById('submit-btn');
const mainDiv = document.getElementById("main-div");
const tyDiv = document.getElementById("ty-div")

btn1.addEventListener('click', () => {
    allBtns.forEach(btn => {
        btn.style.backgroundColor = 'var(--Grey850)';
        btn.style.color = 'var(--Grey500)'
    });

    btn1.style.backgroundColor = 'var(--White)';
    btn1.style.color = 'var(--Grey950)'
    ratingP.innerHTML = 'You selected 1 out of 5';
});

btn2.addEventListener('click', () => {
    allBtns.forEach(btn => {
        btn.style.backgroundColor = 'var(--Grey850)';
        btn.style.color = 'var(--Grey500)'
    });
    
    btn2.style.backgroundColor = 'var(--White)';
    btn2.style.color = 'var(--Grey950)'
    ratingP.innerHTML = 'You selected 2 out of 5';
});

btn3.addEventListener('click', () => {
    allBtns.forEach(btn => {
        btn.style.backgroundColor = 'var(--Grey850)';
        btn.style.color = 'var(--Grey500)'
    });
    
    btn3.style.backgroundColor = 'var(--White)';
    btn3.style.color = 'var(--Grey950)'
    ratingP.innerHTML = 'You selected 3 out of 5';
});

btn4.addEventListener('click', () => {
    allBtns.forEach(btn => {
        btn.style.backgroundColor = 'var(--Grey850)';
        btn.style.color = 'var(--Grey500)'
    });
    
    btn4.style.backgroundColor = 'var(--White)';
    btn4.style.color = 'var(--Grey950)'
    ratingP.innerHTML = 'You selected 4 out of 5';
});

btn5.addEventListener('click', () => {
    allBtns.forEach(btn => {
        btn.style.backgroundColor = 'var(--Grey850)';
        btn.style.color = 'var(--Grey500)'
    });
    
    btn5.style.backgroundColor = 'var(--White)';
    btn5.style.color = 'var(--Grey950)'
    ratingP.innerHTML = 'You selected 5 out of 5';
});

submitBtn.addEventListener('click', () => {
    mainDiv.style.display = 'none';
    tyDiv.style.display = 'block'
})