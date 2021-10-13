
$(document).ready(function() { 

  var controller = new ScrollMagic.Controller();

  // topmenu

  var menu1 = TweenMax.to('.btn a', 0.5, { 
    color: "#fff",});

  var scene = new ScrollMagic.Scene({
    triggerElement: "#section_3"
  })
  .setTween(menu1)
  .addTo(controller);

  var menu2 = TweenMax.to('.btn a', 0.5, { 
    color: "#000"});

  var scene = new ScrollMagic.Scene({
    triggerElement: "#section_4"
  })
  .setTween(menu2)
  .addTo(controller);

  // indicator

  var indi = TweenMax.to('#indicator', 0.5, { 
    color: "#fff"});

  var scene = new ScrollMagic.Scene({
    triggerElement: "#section_3"
  })
  .setTween(indi)
  .addTo(controller);

  var indi2 = TweenMax.to('#indicator', 0.5, { 
    color: "#000"});

  var scene = new ScrollMagic.Scene({
    triggerElement: "#section_4"
  })
  .setTween(indi2)
  .addTo(controller);

  var $box = $(".num_animation");

  var num1 = new TweenMax
  .to(".num_animation",0.1 ,{ ease:Back.easeOut,
    onStart: function () {$box.text("01");}
  });

  var scene = new ScrollMagic.Scene({triggerElement: "#section_1"})
  .setTween(num1)
  .addTo(controller);

  var num2 = new TweenMax
  .to(".num_animation",0.1 ,{
    onStart: function () {$box.text("02");},
    onReverseComplete: function () {$box.html("01");}
  });

  var scene = new ScrollMagic.Scene({triggerElement: "#section_2"})
  .setTween(num2)
  .addTo(controller);

  var num3 = new TweenMax
  .to(".num_animation",0.1 ,{
    onStart: function () {$box.text("03");},
    onReverseComplete: function () {$box.html("02");}
  });

  var scene = new ScrollMagic.Scene({triggerElement: "#section_3"})
  .setTween(num3)
  .addTo(controller);

  var num4 = new TweenMax
  .to(".num_animation",0.1 ,{
    onStart: function () {$box.text("04");},
    onReverseComplete: function () {$box.html("03");}
  });

  var scene = new ScrollMagic.Scene({triggerElement: "#section_4"})
  .setTween(num4)
  .addTo(controller);

  // section_1

  var opc = TweenMax.to('.content1_1',1, {
    opacity: "1"
  });

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    triggerHook: 0,
    offset: 100
  })
  .setTween(opc)
  .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    duration: "50%",
    offset: 0,
    triggerHook: 0,
  })
    .setPin('.content1_1')
    .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    duration: "50%",
    offset: 0,
    triggerHook: 0,
  })
    .setPin('.content1_2')
    .addTo(controller);

  var opc1 = TweenMax.to('.content1_3',2, {
    opacity: 1
  });

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    triggerHook: 0,
    offset: 150
  })
  .setTween(opc1)
  .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    duration: "50%",
    offset: 0,
    triggerHook: 0,
  })
    .setPin('.content1_3')
    .addTo(controller);

  var opc3 = TweenMax.to('.content1_4',2, {
    opacity: 1
  });

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    triggerHook: 0,
    offset: 150
  })
  .setTween(opc3)
  .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section_1",
    duration: "50%",
    offset: 0,
    triggerHook: 0,
  })
    .setPin('.content1_4')
    .addTo(controller);

  // section2

  var scene = new ScrollMagic.Scene({
    triggerElement: ".pin_box",
    duration: "150%",
    triggerHook: 0.4
  })
    .setPin('.move_box')
    .addTo(controller);

  var textmove = TweenMax.to('.move_text',1, {
    left: "-200%",
  });
  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".move_box",
    duration: "100%",
    triggerHook: 0
  })
  .setTween(textmove)
  .addTo(controller);

  var show = TweenMax.to('.maintext', 1, {
    opacity: 1
  });

  var scene = new ScrollMagic.Scene( {
    triggerElement: ".pin_box",
    duration: "150%"
  })
  .setTween(show)
  .setPin('.maintext')
  .addTo(controller);

  var show2 = TweenMax.to('.suptext', 1, {
    opacity: 1
  });

  var scene = new ScrollMagic.Scene( {
    triggerElement: ".pin_box",
    duration:"150%",
    offset: 0
  })
  .setTween(show2)
  .setPin('.suptext')
  .addTo(controller);

  var size1 = TweenMax.fromTo(".content2_1", 1,
  {scale: 2,},
  {scale: 2.5, repeat:-1, yoyo:true,}
);

var scene = new ScrollMagic.Scene( {
  triggerElement: ".circle_box",
  offset: 0,
  duration: "100%",
})
.setTween(size1)
.addTo(controller);

var cir2 = TweenMax.to('.content2_2',1, {
  left: "20%",
  top: "25%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".circle_box",
  duration: "50%",
})
.setTween(cir2)
.addTo(controller);

var  cir3 = TweenMax.to('.content2_3',1, {
  left: "46.5%",
  top: "15%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".circle_box",
  duration: "50%",
})
.setTween(cir3)
.addTo(controller);

var  cir4 = TweenMax.to('.content2_4',1, {
  left: "20%",
  top: "65%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".circle_box",
  duration: "50%",
})
.setTween(cir4)
.addTo(controller);

var  cir5 = TweenMax.to('.content2_5',1, {
  left: "70%",
  top: "65%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".circle_box",
  duration: "50%",
})
.setTween(cir5)
.addTo(controller);

var  cir6 = TweenMax.to('.content2_6',1, {
  left: "45%",
  top: "80%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".circle_box",
  duration: "50%",
})
.setTween(cir6)
.addTo(controller);

var  cir7 = TweenMax.to('.content2_7',1, {
  left: "70%",
  top: "25%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".circle_box",
  duration: "50%",
})

.setTween(cir7)
.addTo(controller);

var liiust1 = TweenMax.to('.liiust1',1, {
  scale: 3,
  top: "0%",
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#section_2",
  duration: "200%",
})
.setTween(liiust1)
.addTo(controller);

var liiust2 = TweenMax.to('.liiust2',1, {
  scale: 2,
  top: "0%",
  offset: 500
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#section_2",
  duration: "200%",
})
.setTween(liiust2)
.addTo(controller);

  // section3
  

  var anm3 = TweenMax.to('.content3_1', 1, {
    scale: "1",
  });

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#section_3",
    duration: "100%",
  })
  .setTween(anm3)
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#section_3",
    duration: "150%",
  })
  
  .setPin('.content3_1')
  .addTo(controller);

  var animateElem1 = document.getElementById("circle1");
	var scene = new ScrollMagic.Scene({triggerElement: ".content3_2",triggerHook: 0, duration: "150%"})
					.on("enter", function () {
						animateElem1.style.strokeDashoffset = "0";
					})
					.on("leave", function () {
						animateElem1.style.strokeDashoffset = "";
					})
					.addTo(controller);

          var animateElem2 = document.getElementById("circle2");
	var scene = new ScrollMagic.Scene({triggerElement: ".content3_2",triggerHook: 0, duration: "150%"})
					.on("enter", function () {
						animateElem2.style.strokeDashoffset = "0";
					})
					.on("leave", function () {
						animateElem2.style.strokeDashoffset = "";
					})
					.addTo(controller);

          var animateElem3 = document.getElementById("circle3");
	var scene = new ScrollMagic.Scene({triggerElement: ".content3_2",triggerHook: 0, duration: "150%"})
					.on("enter", function () {
						animateElem3.style.strokeDashoffset = "0";
					})
					.on("leave", function () {
						animateElem3.style.strokeDashoffset = "";
					})
					.addTo(controller);

          var cirOpc1 = TweenMax.to('.content3_2',2, {
            opacity: 1
          });
        
          var scene1 = new ScrollMagic.Scene({
            triggerElement: "#section_3",
            duration: "120%",
            triggerHook: 0,
          })
          .setTween(cirOpc1)
          .addTo(controller);

          var textOpc1 = TweenMax.to('.content3_3',2, {
            opacity: 1
          });
        
          var scene1 = new ScrollMagic.Scene({
            triggerElement: "#section_3",
            duration: "120%",
            triggerHook: 0,
          })
          .setTween(textOpc1)
          .addTo(controller);

          var scene = new ScrollMagic.Scene({
            triggerElement: "#section_3",
            duration: "150%",
          })
          
          .setPin('.content3_2')
          .addTo(controller);

          var scene = new ScrollMagic.Scene({
            triggerElement: "#section_3",
            duration: "150%",
          })
          
          .setPin('.content3_3')
          .addTo(controller);

// section_4

var opc4_1 = TweenMax.to('.content4_1',1, {
  opacity: 1
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#section_4",
  triggerHook: 0.7,
  offset:0
})
.setTween(opc4_1)
.addTo(controller);

var opc4_1 = TweenMax.to('.content4_2',1, {
  opacity: 1
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#section_4",
  triggerHook: 0.7,
  offset:200
})
.setTween(opc4_1)
.addTo(controller);

var opc4_1 = TweenMax.to('.content4_3',1, {
  opacity: 1
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#section_4",
  triggerHook: 0.7,
  offset:400
})
.setTween(opc4_1)
.addTo(controller);

var opc4_1 = TweenMax.to('.content4_4',1, {
  opacity: 1
});

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#section_4",
  triggerHook: 0.7,
  offset:600
})
.setTween(opc4_1)
.addTo(controller);

});
