/**
 * Created by Administrator on 2015/11/30.
 */
define(['jquery'], function () {
    return function (cur_page, all_item, limit, showing_page_count) {
        var look_page_count = showing_page_count;
        var look_page_arr = new Array;
        if (!cur_page)cur_page = 1;
        var all_page = parseInt(all_item / limit);
        if (all_item % limit != 0) {
            all_page++;
        }

        if (cur_page > all_page) {
            throw "page error";
        }

        look_page_arr.push(cur_page);
        for (var i = 1; look_page_arr.length < look_page_count; i++) {
            if (cur_page + i <= all_page) {
                look_page_arr.push(cur_page + i);
            }
            if (cur_page - i > 0) {
                look_page_arr.unshift(cur_page - i);
            }
            if (cur_page - i <= 0 && cur_page + i >= all_page) {
                break;
            }
        }


        var pre_page = null;
        var next_page = null;
        var item_count = limit;
        if (cur_page == all_page) {
            item_count = all_item - ((cur_page - 1) * limit);
        }

        if (cur_page > 1) {
            pre_page = cur_page - 1;
        }
        if (cur_page < all_page) {
            next_page = cur_page + 1;
        }
        return {
            getPrepPage: function () {
                return pre_page;
            },
            getNextPage: function () {
                return next_page;
            },
            getShowingPageToArray: function () {
                return look_page_arr;
            },
            getPageCount: function () {
                return all_page;
            },
            getItemCount: function () {
                return item_count;
            }
        };
    }
});