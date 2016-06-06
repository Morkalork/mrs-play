var app = {
    init: function () {
        ajax.loadPage('front', function () {
            var betLink = document.getElementById("betLink");
            betLink.addEventListener("click", function () {
                ajax.loadPage('bets');
                return false;
            });
        });


    }
};

app.init();
