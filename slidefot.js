$(document).ready(function() {
	var secondary = $(".secondary").html();
	var primary = $(".primary").html();
	$("#menu").html('<h3>Menu</h3><ul>'+secondary+primary+'</ul>');
	var deskripsi = $(".deskrip").html();
	$(".deskripsi").html(deskripsi);
	var harga = $(".harga").html();
	$(".price").html(harga);
	$(".hGfzU").html("Support By : <a href='http://asckey.xyz'>Asckey</a>");
	$('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
