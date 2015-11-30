(function(){
    var _page_ready_callback = null;
    window.MiniPage = {
        ready:function(callback){
            _page_ready_callback = callback;
        }
    }
    require(['MiniPage'],function(MiniPage){
        window.MiniPage = MiniPage;
        window.MiniPage.ready = function(callback){
            callback();
        }
        if(_page_ready_callback)_page_ready_callback();
    });
})();