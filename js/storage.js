;(function(window){
	//IE低版本不支持console，如需要注销所有console，杜绝此类引起的问题
	"use strict";

	var storage = {};

	/*
		函数：存储指定名字的数据
		k:存储的数据key值（存储数据的名字）
		v:存储的数据
	*/
	storage.setStorage = function(k,v){
		try{
			if(window.localStorage){
				localStorage.removeItem(k);
				localStorage.setItem(k,JSON.stringify(v));
			}else{
	            console.log('您的浏览器不支持localStorage！');
			}
		}catch(oException){
			if(oException.name == 'QuotaExceededError'){
				console.log('超出本地存储限额！');
			}
		}
	}
	/*
		函数：获取指定名字的本地存储数据
		k:存储的数据key值（存储数据的名字）
	*/
	storage.getStorage = function(k){
		if(window.localStorage){
			var _tmp = localStorage.getItem(k);

			if(_tmp != null){
				return JSON.parse(_tmp);
			}else{
				return null;
			}
		}else{
            console.log('您的浏览器不支持localStorage！');
        }
	}
	/*
		函数：删除指定名字的本地存储
		k:存储的数据key值（存储数据的名字）
	*/
	storage.removeStorage = function(k){
		if(window.localStorage){
			localStorage.removeItem(k);
		}else{
            console.log('您的浏览器不支持localStorage！');
        }
	}
	/*
		函数：清空本地存储的所有数据
	*/
	storage.clearStorage = function(){
		if(window.localStorage){
			localStorage.clear();
		}else{
            console.log('您的浏览器不支持localStorage！');
        }
	}

	window.storage = window.storage || storage;

})(window);