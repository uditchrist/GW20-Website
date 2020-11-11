jQuery(document).ready(function() {
        $(function () {
            $('#defaultCountdown').countdown({until: new Date(2020, 10, 28, 1)}); // year, month, date, hour
        });
});
