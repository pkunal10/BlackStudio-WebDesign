//var homeSliderImgs=["images/homefcatS3.jpg","images/slider3.jpg","images/cat.jpg"];
var wedCatSliderImgs=["images/wedding/wedding1.jpg","images/wedding/wedding2.jpg","images/wedding/wedding3.jpg"];
var fasCatSliderImgs=["images/fcatS1.jpg","images/fcatS2.jpg","images/fcatS3.jpg"];
var chiCatSliderImgs=["images/ccatS1.jpg","images/ccatS2.jpg","images/ccatS3.jpg"];
var counter=0;
var catCounter=0;
$(document).ready(function(){
   
    HomeSlider();
    CatSlider();
    Testimonials();
    CheckUrl();
    $(".galleryContainer img").click(function(){
       
        var src="";
        $("#myModal").css("display","block");
        if($(this).attr("alt")=="Children")
        {
            src="images/children/"+$(this).attr("id")+".jpg";       
        }
        else if($(this).attr("alt")=="Fashion")
        {
            src="images/fashion/"+$(this).attr("id")+".jpg";       
        }
        else
        {
            src=$(this).attr("src");    
        }
        $("#myModal img").attr("src",src);
        
    });
    $(".close").click(function(){
        
        $("#myModal").css("display","none");
        
    });
    
    $(".buyContainer img").click(function(){
       
        $("#myModal").css("display","block");
        $("#myModal img").attr("src","images/buyphoto/"+$(this).attr("id")+".jpg");
        
    });
    $(".close").click(function(){
        
        $("#myModal").css("display","none");
        
    });
    
    $('img').bind('contextmenu', function(e) 
    {
        return false;
    });
    
    $("#toogle").click(function(){        
        $("nav ul").css("left")=="-250px"?$("nav ul").addClass("navShow"):$("nav ul").removeClass("navShow");
    });    
    
});

function CheckUrl()
{
    $("#bookUsForm").css("display","none");
    if(window.location.href.indexOf("src")!=-1)
    {
        var source=window.location.href.split("?")[1].split("=")[1];
        if(source!=""&&source!=undefined)
        {
            if(source=="wedding")
            {
                $("#bookUsForm").css("display","block");
                $("#feedbackForm").css("display","none");
                $("#bookUsForm > h2").text("Book Us For Wedding Shoot");
            }
            else if(source=="fashion")
            {
                $("#bookUsForm").css("display","block");
                $("#feedbackForm").css("display","none");
                $("#bookUsForm > h2").text("Book Us For Fashion Shoot");
            }
            else if(source=="children")
            {
                $("#bookUsForm").css("display","block");
                $("#feedbackForm").css("display","none");
                $("#bookUsForm > h2").text("Book Us For Children Shoot");
            }
            else
            {
                $("#bookUsForm").css("display","block");
                $("#feedbackForm").css("display","none");
            }
        }
    }
}

function Testimonials()
{
    var divs=$("#testimonials div");
    var visibleDiv=0;
    
    for(div of divs)
    {
        $(div).attr("class","hide");
    }

    $(divs[visibleDiv]).attr("class","show");
    setInterval(function(){
        
        if(visibleDiv==divs.length-1)
        {
            visibleDiv=0;
        }
        else
        {
            visibleDiv++;    
        }
    
    $(divs[visibleDiv]).attr("class","show");
        
        for(var i=0;i<divs.length;i++)
        {
            if(i!=visibleDiv)
            {
                $(divs[i]).attr("class","hide");
            }
        }
    
    },3500);
}
function HomeSlider()
{
    
    var imgs=$("#homeSliderContainer img");
    var visibleImg=0;
    
    for(img of imgs)
    {
        $(img).addClass("hide");
    }
    
    
    $(imgs[visibleImg]).removeClass("hide");
    $(imgs[visibleImg]).addClass("show");
    setInterval(function(){
        
        if(visibleImg==imgs.length-1)
        {
            visibleImg=0;
        }
        else
        {
            visibleImg++;    
        }
    
    $(imgs[visibleImg]).removeClass("hide");
    $(imgs[visibleImg]).addClass("show");
        
        for(var i=0;i<imgs.length;i++)
        {
            if(i!=visibleImg)
            {
                $(imgs[i]).removeClass("show");
                $(imgs[i]).addClass("hide");
            }
        }
    
    },3000);
}
function CatSlider()
{
    $("#weddingSlider").attr("src",wedCatSliderImgs[catCounter]);
    $("#fashionSlider").attr("src",fasCatSliderImgs[catCounter]);
    $("#childrenSlider").attr("src",chiCatSliderImgs[catCounter]);
    
    setInterval(function(){                
        if(catCounter==chiCatSliderImgs.length-1)
        {
            catCounter=0;
        }
        else
        {
            catCounter++;    
        }
        $("#weddingSlider").attr("src",wedCatSliderImgs[catCounter]);
        $("#fashionSlider").attr("src",fasCatSliderImgs[catCounter]);
        $("#childrenSlider").attr("src",chiCatSliderImgs[catCounter]);
    },1500);    
}