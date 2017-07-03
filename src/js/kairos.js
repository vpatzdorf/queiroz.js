
/*!
 * Queiroz.js: kairos.js
 * JavaScript Extension for Dimep Kairos
 * https://github.com/viniciusknob/queiroz.js
 */

(function(window, Queiroz) {

    /* Class Definition */

    var Kairos = function() {
        return {
            backWeek: function() {
              window.mudarSemana(-1, true);
            },
            nextWeek: function() {
              window.mudarSemana(1, true);
            }
        };
    }();

    /* Plugin Definition */

    Queiroz.pl.kairos = Kairos;

})(window, Queiroz);