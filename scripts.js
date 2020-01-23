$(document).ready(function () {
    $("#addBtn").click(function () {
        var ti = new Date();
        var time = ti.getHours() + ":" + ti.getMinutes() + ":" + ti.getSeconds();
        var vietra = ('<td>' + time + '</td>');
        $("table").append('<tr>' + vietra + '</tr>');
        var strDate = ti.getDay() + "/" + (ti.getMonth() + 1) + "/" + ti.getFullYear();
        $("table tr:last-child").append('<td>' + strDate + '</td>');
        $("table td").append('<td>' + $("#myInput").val() + '</td>');
        $("tabble td").append('<td>' + $(".check").text() + '</td>');
    });
});


