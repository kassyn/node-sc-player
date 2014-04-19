(function($) {
    $.fn.littleTooltip = function(options) {
 
        var settings = $.extend(
            {}, 
            $.fn.littleTooltip.defaults, 
            options
        );

        $(this).hover(function(e){



            $("body").append('<span class="'+settings.selector+'"><span>');
            
            $("."+settings.selector)
                .css({
                    "top"  :"20px",
                    "left" : (e.pageX) + "px"
                })
                .fadeIn("fast");                      
        },
        function(){
            $("."+settings.selector).remove();
        });

        $(this).mousemove(function(e){
            $("."+settings.selector)
                .css({
                    "top"  : "20px",
                    "left" : (e.pageX) + "px",
                    'position' : 'relative'
                });
        });

    };

    $.fn.littleTooltip.defaults = {
        xOffset : 10,
        yOffset : 30,
        selector : 'tooltip'
    };

})(jQuery);

        
