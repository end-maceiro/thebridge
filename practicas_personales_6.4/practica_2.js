var num = prompt("Num");
var fibo = [0,1];

	for(i=2; i <= num; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
        alert(fibo);
	}

        if (num == (fibo[i-1] + fibo[i-2])) {
        alert("SI ESTA"); }
        else {
            alert("NO ESTA");
        }
