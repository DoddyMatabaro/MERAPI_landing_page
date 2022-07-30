let Slice = function(){
    let sliceDiv = document.querySelector(".hero__image");
    let gridX = 4;
    let w = sliceDiv.offsetWidth;
    let h = sliceDiv.offsetHeight;
    let image = document.querySelector(".hero__image img").src;
    let delay = 0.15;
    console.log("longeur " + h);
    this.create = function(){
        for(let x = 0; x < gridX; x++){
            let width =  x * w / gridX + "px";
            let div = document.createElement("div");
            sliceDiv.appendChild(div);
            div.style.width = w / gridX + "px"
            div.style.top = 0;
            div.style.left = width;
            div.style.height =  h+'px';
            div.style.backgroundImage = "url("+image+")";
            div.style.backgroundPosition = "-"+width;
            div.style.backgroundSize = w+"px";
            div.style.transitionDelay = x * delay + "s"; 
        }
       
    }
    this.create(); 
    console.log(h,w,image, sliceDiv);
        sliceDiv.onmouseover = function(){
            mouseOver()
        }
        sliceDiv.onmouseout = function(){
            mouseOut()
        }
    function mouseOver(){
        sliceDiv.classList.add('active');
    }
 
    function mouseOut(){
        sliceDiv.classList.remove('active');
    }

}

window.onload = function(){
    let slice = Slice(); 
}