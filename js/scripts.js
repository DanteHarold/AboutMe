const d= document
$center = d.querySelector('.center')
$body = d.querySelector('body')
console.log($center);
console.log(window);
window.addEventListener('load', e=>{
    $center.style.opacity = "0"
    $center.style.visibility = "hidden"
    $body.classList.remove('hidden')
    console.log("hola");
})