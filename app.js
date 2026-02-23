// let btn = document.querySelector('button');
// let p = document.querySelector('p');

// function getrandomcolor (){
//     const red = Math.floor(Math.random() * 256)
//     const green = Math.floor(Math.random() * 256)
//     const blue = Math.floor(Math.random() * 256)

//     return `rgb(${red}, ${green}, ${blue})`;
// }

// function changeColor (){

//     const body_color = getrandomcolor();
//     const btn_color = getrandomcolor();

//     document.body.style.backgroundColor = body_color;
//     btn.style.backgroundColor = btn_color;
//     p.innerText = body_color;

// }



// btn.addEventListener('click', changeColor);

let btn = document.querySelector('button');
let p = document.querySelector('p');

function getrandomcolor (){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor (){
    const body_color = getrandomcolor();
    const btn_color = getrandomcolor();

    document.body.style.backgroundColor = body_color;
    btn.style.backgroundColor = btn_color;

    p.innerText = body_color;

    // --- Clipboard functionality ---
    navigator.clipboard.writeText(body_color)
        .then(() => {
            console.log("Copied to clipboard:", body_color);
            // Optional: short visual feedback
            p.innerText = body_color + " (Copied!)";
            setTimeout(() => { p.innerText = body_color }, 1000);
        })
        .catch(err => {
            console.log("Failed to copy!", err);
        });
}

btn.addEventListener('click', changeColor);
