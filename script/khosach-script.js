$(function(){
 	
    hieuungload = new TimelineMax({onComplete:noidungvaodi}); 
    hieuungload
    .from($('.loading'),0.4,{opacity:0})
    .from($('.khoiload'),0.7,{scale:2,opacity:0})

    //lap lai
    .to($('.khoiload'),0.6,{scale:0.3,ease:Power4.easeOut})
    .to($('.khoiload'),0.6,{scale:1,ease: Elastic.easeOut.config(1, 0.3)})
   .to($('.khoiload'),0.6,{scale:0.3,ease:Power4.easeOut})
    .to($('.khoiload'),0.6,{scale:1,ease: Elastic.easeOut.config(1, 0.3)})

    //ket thuc 
    .to($('.khoiload'),0.6,{scale:7,opacity:0,ease:Power4.easeOut})
    .to($('.loading'),0.6,{x:-2200,ease:Power1.easeOut})
     hieuungnoidung = new TimelineMax({paused:true}); 

    function noidungvaodi()
    {
        hieuungnoidung.play();
    }

})  
