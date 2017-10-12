app = (function () {

    return {
        init:function () {
            console.log('init app...');
            $('#valid-size').on('click',function() {
                app.model.changeSize($('#x-val').val(),$('#y-val').val());
                app.view.draw(app.model.getData());
            });




        }
    }



})();