/*/
$(document).ready(function($) {
            var uls = $('nav ul');
            uls.hide();

            $('nav > li').click(function(e) {
                e.stopPropagation();
                uls.hide();
                $(this).find('ul').show();
            });
            $('nav ul').click(function(e) {
                e.stopPropagation();
            });
            $('body').click(function() {
                uls.hide();
            });*/