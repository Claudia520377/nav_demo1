$(function(){
    
    function hide(){
        $(".dropdown>li").hide();
     }

     $(".nav_list>li").mouseout(function(){
     hide();
     })
     $(".nav_list>li").mouseover(function(index){
         var $index=$(this).index();
         console.log($index);
         $(".dropdown>li").eq($index).show();
         $(".dropdown>li>.item_span>.nav_item>li").css("display","block");
     })
     $(".dropdown>li").mouseover(function(){
        var $index=$(this).index();
         $(".dropdown>li").eq($index).css("display","block");
  
     })
}
);
