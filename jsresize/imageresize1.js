$(document).ready(function(){

    $("#height-px").on("input",function(){
        var a = $(this).val() +"px"
        $("#img1").attr("height",a);
        })
    
        
        $("#height-per").on("input",function(){
        var b =$(this).val()+"%"
        $("#img1").attr("height",b)
    
        })

    $("#width-px").on("input",function(){
     
     var c =$(this).val()+"px"
      $("#img1").attr("width",c)

        
    });

    $("#width-per").on('input', function(){
        var d= $(this).val() + "%";
        $("#img1").attr("width",d);

    });

    $("#link").on("input",function(){
    var link =$(this).val()
    $("a#linkhere").attr("href",link)

    })
    
    });
