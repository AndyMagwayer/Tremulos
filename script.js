//Moon Movement
gsap.to(".moon", {y:-350, delay: 0, duration: 10});


//Sun Movement
gsap.to(".sun", {y:200, x:-350, delay:0.5, duration: 2, ease: CustomEase.create("custom", "M0,0 C0.492,0.144 0.552,0.226 0.682,0.368 0.811,0.509 0.87,0.584 1,1 ")});
gsap.to(".sun", {x:-340, duration:0.1, delay: 2.5, repeat:-1, yoyo:true});
gsap.to(".sun", {y:300, delay:8, duration: 1.5});
//Having a lot of trouble with the rough ease
//code from the Greensock site: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })"

//Background Color Change
gsap.to("figure", {background: "rgb(2,0,43)", delay: 0.5, duration: 3})
gsap.to("figure", {background: "black", delay: 9, duration: 3})

//Lake Color Change
gsap.to(".lake", {background: "rgb(1,3,49)", delay: 8, duration: 1});


//TO-DO LIST: Moon grey-to-white and add some stars for the end