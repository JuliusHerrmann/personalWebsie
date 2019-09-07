var paper, map, spaceship, thruster, moon, flight_path, flight_path_length, last_point;

        window.onload = function () {
            map                 = Snap('#svg-doc');
            spaceship           = document.getElementById("plane");
            flight_path         = map.path('m 102.81244,304.05022 c -42.819367,60.53071 -51.008136,-7.41067 -41.967712,-2.19118 8.292577,4.78772 3.140906,27.02229 -25.750263,27.02229 -36.4164102,0 -47.179918,-20.03591 -48.890596,-22.99889').attr({ 'fill': 'none', 'stroke': 'none'});
            flight_path.style = "stroke: #ffffff";
            flight_path_length  = Snap.path.getTotalLength(flight_path);
            last_point          = flight_path.getPointAtLength(flight_path_length);
            animate();
            function animate(){
                Snap.animate(0, flight_path_length, function( step ) {
                    moveToPoint = Snap.path.getPointAtLength( flight_path, step );
                    x = moveToPoint.x;
                    y = moveToPoint.y;
                    spaceship.style = "transform: translate(" + (x - 5) + "vw, " + ((y - 300) / 1.5) + "vh) rotate(" + (moveToPoint.alpha) + "deg)";
                },15000, mina.linear ,function(){
                    animate();
                });
            } 
        };