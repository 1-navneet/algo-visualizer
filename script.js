const stepdelayslider = document.getElementById('stepdelay');
let stepdelay = 100;
stepdelayslider.addEventListener('input', () => {
    stepdelay = parseInt(stepdelayslider.value);
});

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

const garrbtn = document.getElementById('newarr');
const barcont = document.getElementById('bar-container');
garrbtn.addEventListener('click',generatbars);

function generatbars(){
    console.log("clicked")
    barcont.innerHTML = "";
    let numbars = 30;
    for (let i = 0;i<numbars;i++){
        let height = Math.floor(Math.random()*(400 - 10 + 1)) + 10;
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${height}px`;
        barcont.appendChild(bar);
    }
}

// Bubble Sort 
const bubblebtn = document.getElementById('bubble');
bubblebtn.addEventListener('click', () => {
    toggleControls(false);     
    bubbleSort();              
});


async function demobs(){
    console.log("start");
    await sleep(1000);
    console.log("end");
}

async function bubbleSort(){
    
    let bars = document.querySelectorAll('.bar');
    for (let i = 0; i<bars.length - 1; i++){
        for (let j = 0; j<bars.length - i - 1; j++){
            bars[j].style.backgroundColor = "yellow";
            bars[j + 1].style.backgroundColor = "yellow";
            await sleep(stepdelay);

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);
            if (height1 > height2){
                let temp = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;
            }
            bars[j].style.backgroundColor = "#47b2d0";
            bars[j+1].style.backgroundColor = "#47b2d0";
        }
        bars[bars.length - i - 1].style.backgroundColor = "#2ecc71";
    }
    bars[0].style.backgroundColor = "#2ecc71";
    toggleControls(true);
}

function toggleControls(state) {
    const allbtn = document.querySelectorAll('button');
    allbtn.forEach(btn => {
        btn.disabled = !state; 
    });
}

// Selection sort
const selectionbtn = document.getElementById('selection');
selectionbtn.addEventListener('click', () => {
    toggleControls(false);
    selectionsort();
});

async function selectionsort(){
    let bars = document.querySelectorAll('.bar');
    let n = bars.length;

    for (let i = 0; i<n - 1; i++){
        let mini = i;

        bars[mini].style.backgroundColor = "red";

        for (let j = i + 1; j < n; j++){
            bars[j].style.backgroundColor = "yellow";
            await sleep(stepdelay);

            let heights = parseInt(bars[j].style.height);
            let heightmin = parseInt(bars[mini].style.height);

            if (heights < heightmin){
                bars[mini].style.backgroundColor = "#47b2d0";
                mini = j;

                bars[mini].style.backgroundColor = "red";

            } else {
                bars[j].style.backgroundColor = "#47b2d0";

            }
        }
        if (mini !== i){
            let temp = bars[i].style.height;
            bars[i].style.height = bars[mini].style.height;
            bars[mini].style.height = temp;
        }
        bars[i].style.backgroundColor = "#2ecc71";
    }
    bars[n - 1].style.backgroundColor = "#2ecc71";
    toggleControls(true);
}