
 function hitungbmi(){
    //mengambil inputan dari kolom usia
    let usia = document.getElementById("usia").value;
         //mengambil inputan dari kolom berat
    let berat = document.getElementById("berat").value;
         //mengambil inputan dari kolom tinggi
    let tinggidalammeter = document.getElementById("tinggi").value;
    //mengubah tinggi dari cm ke m
    let  tinggi = tinggidalammeter / 100;
    //perhitungan BMI
    let hasil = berat / (tinggi*tinggi);
    //.toFixed(2) = untuk membulatkan hasil hingga 2 digit setelah koma
    hasil = hasil.toFixed(1);
	nameValidation(usia, berat, tinggidalammeter)
 	document.getElementById('heading').innerHTML = 'Hasil';
 	document.getElementById('hasilbmi').innerHTML = hasil;
	 event.preventDefault(); 

     
	 if(hasil <=18.5){
        document.getElementById("pesan").innerHTML = "Berat Badan Kurang";
        document.getElementById("pesan1").innerHTML = "Anda memiliki kekurangan berat badan";
        document.getElementById("dl").innerHTML = "Download Hasil BMI";
        document.getElementById("penjelasan").innerHTML = "Anda berada dalam kategori underweight atau berat badan kurang (kurus). Cara terbaik untuk menaikan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolah raga. Jika BMI Anda berada dalam ketegori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal";
        var div = document.createElement("div");
        var x = document.createElement("Button");
        x.appendChild(document.createTextNode("Konsultasi Ahli Gizi"));
        div.appendChild(x);
        div.style.textAlign = "center";
        document.body.appendChild(div)
         var div = document.createElement("div");
         var x = document.createElement("Button");
         x.appendChild(document.createTextNode("Regristasi Online Ahli Gizi"));
         div.appendChild(x);
         div.style.textAlign = "center";
         document.body.appendChild(div)
         document.getElementById("penegasan").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    }else if(hasil <= 24.9){
        document.getElementById("pesan").innerHTML = "Berat Badan Normal";
        document.getElementById("pesan1").innerHTML = "Anda memiliki berat badan ideal";
        document.getElementById("dl").innerHTML = "Download Hasil BMI";
        document.getElementById("penjelasan").innerHTML = "Anda berada dalam kategori ideal atau berat badan normal. Pertahankan pola makanan dan berolah raga serta konsumsi makanan yang sehat bagi tubuh.";
        var div = document.createElement("div");
        var x = document.createElement("Button");
        x.appendChild(document.createTextNode("Konsultasi Ahli Gizi"));
        div.appendChild(x);
        div.style.textAlign = "center";
        document.body.appendChild(div)
         var div = document.createElement("div");
         var x = document.createElement("Button");
         x.appendChild(document.createTextNode("Regristasi Online Ahli Gizi"));
         div.appendChild(x);
         div.style.textAlign = "center";
         document.body.appendChild(div)
         document.getElementById("penegasan").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    }else if(hasil <= 29.9){
        document.getElementById("pesan").innerHTML = "Berat Badan Lebih";
        document.getElementById("pesan1").innerHTML = "Anda memiliki berat badan berlebih";
        document.getElementById("dl").innerHTML = "Download Hasil BMI";
        document.getElementById("penjelasan").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolah raga. Jika BMI Anda berada dalam ketegori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal";
        var div = document.createElement("div");
        var x = document.createElement("Button");
        x.appendChild(document.createTextNode("Konsultasi Ahli Gizi"));
        div.appendChild(x);
        div.style.textAlign = "center";
        document.body.appendChild(div)
         var div = document.createElement("div");
         var x = document.createElement("Button");
         x.appendChild(document.createTextNode("Regristasi Online Ahli Gizi"));
         div.appendChild(x);
         div.style.textAlign = "center";
         document.body.appendChild(div)
         document.getElementById("penegasan").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    }else if(hasil >=30){
        document.getElementById("pesan").innerHTML = "Berat Badan Terlalu Lebih";
        document.getElementById("pesan1").innerHTML = "Anda memiliki berat badan kegemukan (obesitas)";
        document.getElementById("dl").innerHTML = "Download Hasil BMI";
        document.getElementById("penjelasan").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolah raga. Jika BMI Anda berada dalam ketegori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal";
        var div = document.createElement("div");
        var x = document.createElement("Button");
        x.appendChild(document.createTextNode("Konsultasi Ahli Gizi"));
        div.appendChild(x);
        div.style.textAlign = "center";
        document.body.appendChild(div)
         var div = document.createElement("div");
         var x = document.createElement("Button");
         x.appendChild(document.createTextNode("Regristasi Online Ahli Gizi"));
         div.appendChild(x);
         div.style.textAlign = "center";
         document.body.appendChild(div)
         document.getElementById("penegasan").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    }
    event.preventDefault();
 }
 function nameValidation(usia, berat, tinggidalammeter){
    if( usia == "" || berat == "" || tinggidalammeter ==""){
        alert("Mohon isi usia berat badan anda dan tinggi badan")
    }
 }
 function reload(){
	window.location.reload();
    event.preventDefault();
 }
