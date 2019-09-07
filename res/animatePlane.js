var paper, map, spaceship, thruster, moon, flight_path, flight_path_length, last_point;

        window.onload = function () {
            map                 = Snap('#svg-doc');
            spaceship           = document.getElementById("plane");
            flight_path         = map.path('M 102.81244,304.05022 C 59.993073,364.58093 40.934293,277.19227 -16.236623,309.56167').attr({ 'fill': 'none', 'stroke': 'black'});
            flight_path.style = "stroke: #ffffff";
            flight_path_length  = Snap.path.getTotalLength(flight_path);
            last_point          = flight_path.getPointAtLength(flight_path_length);
            animate();
            function animate(){
                Snap.animate(0, flight_path_length, function( step ) {
                    moveToPoint = Snap.path.getPointAtLength( flight_path, step );
                    x = moveToPoint.x;
                    y = moveToPoint.y;
                    spaceship.style = "transform: translate(" + x + "vw, " + ((y - 300) / 1.5) + "vh) rotate(" + (moveToPoint.alpha) + "deg)";
                },15000, mina.easeout ,function(){
                    animate();
                });
            } 
        };