$(function(){
    $(".add_ico").click(function(){
        let nums=parseInt($(this).parent().find(".nums").html());
        nums++;
        $(this).parent().find(".nums").html(nums)
    });
    $(".reduce_ico").click(function(){
        let nums=parseInt($(this).parent().find(".nums").html());
        nums--;
        if(nums<1){
            return;
        }
        $(this).parent().find(".nums").html(nums)
        
    });
    $(".selectbtn").toggle(
        function(){
            $(this).attr("src","img/yes_ico.png")
        },
        function(){
            $(this).attr("src","img/no_ico.png")
        }
    );
    $(".selectbtn_all").toggle(
        function(){
            $(".selectbtn").attr("src","img/yes_ico.png")
            let nums=0;
            let totalnums=0;
            for(let i =0;i<$(".nums").length;i++){
                nums+=parseInt($(".nums").eq(i).html());
                totalnums+=parseInt($(".nums")[i].innerHTML)*parseInt($(".nums").eq(i).parent().parent().find(".price").html())
            }
            $(".foot_right").find("span").html("去结算("+nums+")")
            $(".summ").html(totalnums+".00")
        },
        function(){

            $(".selectbtn").attr("src","img/no_ico.png")
            $(".foot_right").find("span").html("去结算")
            $(".summ").html("0.00")
        }
    )

})