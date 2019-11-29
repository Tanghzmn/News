/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 18:16:06
 * @LastEditTime: 2019-08-12 09:56:11
 * @LastEditors: Please set LastEditors
 */
// 主js
// 点击左侧导航，右侧出现对应内容
$(function(){
	$('.info-content').load('./pages/首页.html');
	$('.info-left li').click(function(){
		// this-->li DOM
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.info-content').load('./pages/首页.html');
				break;
			case '栏目管理':
				$('.info-content').load('./pages/栏目管理.html');
				break;
			case '资讯管理':
				$('.info-content').load('./pages/资讯管理.html');
				break;
			case '用户管理':
				$('.info-content').load('./pages/用户管理.html');
				break;
			default:
				break;
		}
	});
});