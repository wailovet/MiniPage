##MiniPage
封装了平时一点分页操作
###使用 
```javascript
MiniPage.ready(function(){
    //当前页数
    var cur_page = 10;
    //总数据条数
    var all_item = 100;
    //每页显示条数
    var limit = 8;
    //展示可见列表
    var showing_page_count = 5;
    mp = new MiniPage(10,180,12,8);
    console.log("当前条数");
    console.log(cur_page);
    console.log("上一页");
    console.log(mp.getPrepPage());
    console.log("可见页");
    console.log(mp.getShowingPageToArray());
    console.log("下一页");
    console.log(mp.getNextPage());
    console.log("总页数");
    console.log(mp.getPageCount());
    console.log("当前项数");
    console.log(mp.getItemCount());
});
```
