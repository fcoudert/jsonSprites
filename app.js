app = (function () {
    return {
        init: function () {
            app.view.draw(app.model.getData());
            $('#valid-size').on('click', function () {
                app.model.changeSize($('#x-val').val(), $('#y-val').val());
                app.view.draw(app.model.getData());
            });

            $('#new-color').on('change',function() {
                console.log($(this).val());
                $(this).css("border-color", "+$(this).val()+");
                app.model.setColor($(this).val());
            });

            $('#tableau').on('click','.set-color',function() {
                app.model.setPixelColor($(this).data('x'),$(this).data('y'));
                app.view.draw(app.model.getData());
            })

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
    data.pencil={};
    data.pencil.color='#FFF';
    var n = 0;
    for (i = 0; i < data.size.height; i++) {
        for (j = 0; j < data.size.width; j++) {
            data.pixels[n] = {};
            data.pixels[n].x = i;
            data.pixels[n].y = j;
            data.pixels[n].id="i-"+i+"_j-"+j;
            data.pixels[n].color = "#CCC";
            n++;
        }
    }
    return {
        changeSize: function (x, y) {
            data.size.width = parseInt(x, 10);
            data.size.height = parseInt(y, 10);
        },
        getData: function () {
            return (data);
        },
        setColor:function(c) {
            data.pencil.color=c;
        },
        setPixelColor:function(x,y) {
           data.pixels.forEach(function(pixel) {
               if (pixel.x===x && pixel.y===y) pixel.color=data.pencil.color;
           });

        }

    };


})();

app.view = (function () {

    function convertCanvasToImage(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;
    }


    function drawSquare(s) {
        var w=30;
        var h=30;
        var html = '';
        html += '<a class="set-color" href=# data-y='+s.y+' data-x='+s.x+'><div style="float:left;margin:1px;width:'+w+'px;height:'+h+'px;background-color:' + s.color + '"></div></a>';
        return (html);
    }





    return {
        draw: function (D) {
           
            var html = '';
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            for (i = 0; i < D.size.height; i++) {
                for (j = 0; j < D.size.width; j++) {
                    D.pixels.forEach(function (pixel) {
                        if (pixel.x === j && pixel.y === i) {
                            html += drawSquare(pixel);
                            ctx.fillStyle = pixel.color;
                            ctx.fillRect(j, i, j+1, i+1);
                        }
                    });
                }
                html += '<br>';
            }

            //fill canvas
            

            console.log(html);
            $('#tableau').html(html);
        }
    };

})();