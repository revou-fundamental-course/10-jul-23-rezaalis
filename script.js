
 function hitungbmi(){
    //mengambil inputan dari kolom usia
    let usia = document.getElementById("usia").value;
         //mengambil inputan dari kolom berat
    let berat = document.getElementById("berat").value;
         //mengambil inputan dari kolom tinggi
    let tinggidalamcm = document.getElementById("tinggi").value;
    //mengubah tinggi dari cm ke m
    let  tinggi = tinggidalamcm / 100;
    //perhitungan BMI
    let hasil = berat / (tinggi*tinggi);
    //.toFixed(2) = untuk membulatkan hasil hingga 2 digit setelah koma
    hasil = hasil.toFixed(2);
	
 	document.getElementById('heading').innerHTML = 'Hasil';
 	document.getElementById('hasilbmi').innerHTML = hasil;
	 event.preventDefault(); 
	 if(hasil <18.5){
        document.getElementById("pesan").innerHTML = "Berat badan anda kurang";
    }else if(hasil >= 18.5){
        document.getElementById("pesan").innerHTML = "Berat badan anda normal";
    }else if(hasil >= 25){
        document.getElementById("pesan").innerHTML = "Berat badan anda berlebih";
    }else if(hasil >=30){
        document.getElementById("pesan").innerHTML = "Berat badan anda kegemukan (obesitas)";
    }
    event.preventDefault();
 }
 function reload(){
	window.location.reload();
 }