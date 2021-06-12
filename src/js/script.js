
//軽い入力チェック
testInput = function(num){
	var res  = /[0-9+]/.test(num);
	return res;
}

getDanAmari = function(num){
	var i = (num-0);
	var sqrt = Math.sqrt(i * 2);
	var f = Math.floor(sqrt);
	var fCount = (f*(f+1)) / 2;
	var a = i-fCount;
	//数値によっては調整が必要
	if(a < 0){
		f = f-1;
		fCount = (f*(f+1)) / 2;
		a = i-fCount;
	}
	return {f:f,a:a};
}

//各elmをもっとく
ansWarp = document.getElementById('ans_warp');
ans = document.getElementById('ans');
btn = document.getElementById('btn');
de = document.getElementById('de');
amari = document.getElementById('amari');
input = document.getElementById('input');

btn.addEventListener('click',function(){	
	//初期化
	ansWarp.style.display ="none";
	ans.textContent = '';
	amari.textContent = '';

	var num =  input.value;
	//軽い入力チェック
	if(testInput(num) === false){
		alert('数字入力せいや！');
		return false;
	}
	//計算
	var ret = getDanAmari(num);
	
	//答えを配置
	ansWarp.style.display ="block";
	ans.textContent = ret.f;
	de.style.display= 'inline';
	amari.textContent = ret.a;
	if(ret.a <= 0){
		//あまりが０の時はあまり部分を非表示にする。
		de.style.display= 'none';
		amari.textContent = '';
	}
	
})
