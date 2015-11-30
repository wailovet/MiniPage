/**
 * Created by Administrator on 2015/11/30.
 */
define(['jquery'],function(){
    return function(cur_page,all_item,limit,showing_page_count){
        var look_page_count = showing_page_count;
        var look_page_arr = new Array;
        if(!cur_page)cur_page = 1;
        var all_page = parseInt(all_item/limit);
        if(all_item%limit != 0){
            all_page++;
        }

        if(cur_page>all_page){
            throw "page error";
        }
        if(cur_page < look_page_count/2){
            for(var i =0;i<look_page_count && i < all_page;i++){
                look_page_arr[i] = i+1;
            }
        }else {
            if(cur_page > all_page - look_page_count/2){
                for(var i =0;i<look_page_count && i < all_page;i++){
                    look_page_arr[i] = all_page - look_page_count + i +1;
                }
            }else{
                for(var i =0;i<look_page_count && i < all_page;i++){
                    look_page_arr[i] = cur_page - 1 + i ;
                }
            }
        }

        var pre_page = null;
        var next_page = null;
        if(cur_page > 1){
            pre_page = cur_page - 1;
        }
        if(cur_page < all_page){
            next_page = cur_page + 1;
        }
        return {
            getPrepPage:function(){
                return pre_page;
            },
            getNextPage:function(){
                return next_page;
            },
            getShowingPageToArray:function(){
                return look_page_arr;
            },
            getPageCount:function(){
                return all_page;
            }
        };
    }
});