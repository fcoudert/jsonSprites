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
    for (i = 0; i < D.size.width; i++) {
        for (j = 0; j < D.size.height; j++) {
            data.pixels[n].x=i;
            data.pixels[n].y=j;
            data.pixels[n].color="#CCC";
        }
    }




    return {
        changeSize: function (x, y) {
            data.size.width = parseInt(x, 10);
            data.size.height = parseInt(y, 10);
        },
        getData: function () {
            return (data);
        }

    };


})();

app.view = (function () {

            function drawSquare(s) {
                var html = '';
                html += '<span style="margin:1px;width:20px;height:20px;background-color:' + s.color + '"></span>';
                return (html);

            }


            return {
                draw: function (D) {
                    var html='';
                    for (i = 0; i < D.size.height; i++) {
                        for (j = 0; j < D.size.width; j++) {
                            D.pixels.forEach(function (pixel) {
                                if (pixel.x === j && pixel.y === i) html += drawSquare(pixel);
                            });
                        }

                    }
                $('#tableau').html(html);    
                }
            };

            })();