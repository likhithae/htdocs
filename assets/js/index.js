(function () {
    $(function () {
        $(".vegas-slider").vegas({
            slides: [
                { src: 'assets/images/index/Milk splash1.jpg' },
               
                
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });

        $(".vegas-slider-2").vegas({
            slides: [
                { src: 'assets/images/index/Farmer preparing feed.jpeg' },
            
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });

        $(".vegas-slider-3").vegas({
            slides: [
                { src: 'assets/images/index/IoT Cows1.jpg' },
         
        
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });
    })
}());