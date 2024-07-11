// task 1

$(".content").hover(function(){
    $(this).toggleClass("changeWidth");
    $(".items").toggle();
})

$(".item").click(function(){
    let catch_ = $(this).attr("id");
    $(`.${catch_}`).slideToggle();
})

// task 2

$("button").click(function(){
    $.get("https://jsonplaceholder.typicode.com/posts",function(data){
        data.forEach(function(el){
           var _div= $("<div></div>");
           $(_div).addClass("elementPost")
           $(_div).html(`<h2>${el.title}</h2><div class="bodyPost">${el.body}</div>`);
           $(".post").append(_div);
        });
    })
})