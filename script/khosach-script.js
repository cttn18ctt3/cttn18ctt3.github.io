$(function(){
     
    

    hieuungload = new TimelineMax({}); 
    hieuungload
    .from($('.loading'),0.7,{opacity:0})
    .from($('.khoiload'),0.7,{scale:2,opacity:0})

    //lap lai
    .to($('.khoiload'),1,{scale:0.3,ease:Power4.easeOut})
    .to($('.khoiload'),1,{scale:1,ease: Elastic.easeOut.config(1, 0.3)})
  

    //ket thuc 
    .to($('.khoiload'),0.8,{scale:7,opacity:0,ease:Power4.easeOut})
    .to($('.loading'),0.8,{x:-2200,ease:Power1.easeOut})
     
})  
