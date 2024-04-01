const p = document.querySelector("#para");
const b = document.querySelector("#length");

b.addEventListener('click',()=>{
    p.innerHTML = p.innerText.split(' ').map(value=>value.length>8?`<span style="background-color: yellow">${value}</span>`:value).join(' ');
});

