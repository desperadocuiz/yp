$(function(){
    $(".menu_list li").click(function(){
        $(".menu_list li").css({
            "border-left":"3px solid #fff",
            "color":"#666"
        })
        $(this).css({
            "border-left":"3px solid #845f3f",
            "color":"#845f3f"
        })
    });
    // 后台数据图片
    $(".menu_list li").click(function(){
        $.get(
            "php/getGoodsList.php",
            function(data){
                let msg = JSON.parse(data)
                console.log(msg)
                for(let i in msg){
                    $(".menu_nav").find("img").attr("src",msg[0].goodsImg)
                    $(".menu_txt img").eq(i).attr("src",msg[i].goodsImg)
                    $(".menu_txt sapn").html(msg[i].goodsName)
                }
            }
        )
    })
})