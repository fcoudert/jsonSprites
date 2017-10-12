app = (function () {

    return {
        init: function () {
            console.log('init app...');
            $('#valid-size').on('click', function () {
                app.model.changeSize($('#x-val').val(), $('#y-val').val());
                app.view.draw(app.model.getData());
            });




        }
    };



})();


app.model = (function () {

    var data = {};
    data.size = {};
    data.size.width = 12;
    data.size.height = 12;
    data.colors = [];
    data.pixels = [];


    return {
        changeSize(x, y) {
            data.size.width = parseInt(x, 10);
            data.size.height = parseInt(y, 10);
        },
        getData: function () {
            return (data);
        }

    }





})();