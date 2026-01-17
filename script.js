const garrbtn = document.getElementById('newarr');
const barcont = document.getElementById('bar-container');
garrbtn.addEventListener('click',generatbars);

function generatbars(){
    console.log("clicked")
    barcont.innerHTML = "";
    let numbars = 50;
    for (let i = 0;i<numbars;i++){
        let height = Math.floor(Math.random()*(400 - 10 + 1)) + 10;
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${height}px`;
        barcont.appendChild(bar);
    }
}
