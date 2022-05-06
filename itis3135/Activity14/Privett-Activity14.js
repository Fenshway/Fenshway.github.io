$(document).ready(function() {
    $("#nav_list li").click(function() {
        $.ajax( {
            url: file,
            dataType: "Text",
            success: function(file) {
                let data = $.parseJSON(file);
                $("main > h1").html(data.speakers[0].title);
                $("main > h2").html(data.speakers[0].month);
                $("main > h3").html(data.speakers[0].speaker);
                $("main > img").attr("src", data.speakers[0].image);
                $("main > p").html(data.speakers[0].text);
            }
        })
    });
});