/** 상품서비스>보안/안전 솔루션>정보보안>Secure WiFi **/
var controller = $.extend(new $.CommonObj(),{
    wrapCls:'.kt_pc',
    eventInit:function() {

	}, 
	onCreate:function() {
	}
	
});

var mController = $.extend(new $.CommonObj(),{
    wrapCls:'.kt_mb',
    eventInit:function() {

	}, 
	onCreate:function() {

	}
	
});


$(document).ready(function(){
	controller.init();
	mController.init();
});
