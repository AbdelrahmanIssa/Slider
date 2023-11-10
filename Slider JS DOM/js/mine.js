var imgList = Array.from( document.querySelectorAll('.item img') );
var parentLayer = document.querySelector('.parentLayer')
var childLayer = document.querySelector('.childLayer');
var currentSlideIndex;
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var close = document.querySelector("#close");


//showing the parent layer div


for (var i = 0; i < imgList.length; i++)
{
    imgList[i].addEventListener('click', function(e)
    {
        parentLayer.classList.replace( "d-none" , "d-flex" );
        var imgClickedSrc = e.target.src;
        currentSlideIndex = imgList.indexOf(e.target);



        childLayer.style.backgroundImage = `url(${imgClickedSrc})`;
    })
}

//changeSlide


function changeSlide(changeIndex) {

    currentSlideIndex=currentSlideIndex+changeIndex;

    if (currentSlideIndex >= imgList.length) {
        currentSlideIndex = 0;
    }
    else if(currentSlideIndex < 0){
        currentSlideIndex = imgList.length-1;
        
    }
    var imgClickedSrc= imgList[currentSlideIndex].src;
    childLayer.style.backgroundImage = `url(${imgClickedSrc})`;
};
next.addEventListener("click",function () {changeSlide(1)});
prev.addEventListener("click",function () {changeSlide(-1)});


// close the slider

function closeParentLayer()
{
    parentLayer.classList.replace( "d-flex" , "d-none" )
};

close.addEventListener("click" , function(){
        closeParentLayer()
    });

document.addEventListener("click" , function(e){

    if( e.target == parentLayer )
    {
      closeParentLayer()
    }

});




// keys actions



document.addEventListener("keydown" , function(e){

    if( e.code == "ArrowRight" )
    {
        changeSlide(1);
    }
    else if( e.code == "ArrowLeft" )
    {
        changeSlide(-1);
    }
    else if( e.code == "Escape" )
    {
        closeParentLayer()
    }
    
    })
    
;



