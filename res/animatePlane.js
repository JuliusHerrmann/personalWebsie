const flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
        {x:0, y:-40},
        {x:100, y:-30},
        {x:600, y:100},
        {x:750, y:-75},
        {x:600, y:50},
        {x:1200, y:-10},
        {x:1600, y:20},
        {x: window.innerWidth + 400, y:120},
    ]
}

const tween = new TimelineMax({onComplete: function(){
    tween.restart();
}});

tween.repeatDelay(3000);

tween.add(
    TweenLite.to("#plane", 8, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);