// secret commands x)



// komento AC laittaa klikkejä :D
function ac (manykliks) 
{

for (i = 0; i < manykliks; i++) { 
   CLICK();
}
console.log("added "+manykliks+" clicks! Dirty cheater!");
}

// trying different command
//supaclick
//monta tapaa tehdä tämä, vaikkapa ajaa funktio CLICK tossa ja lisätä click functioon turhaa roinaa että siitä tulis sekavampi.
//ei tehdä silleen, tehdään toisella tavalla

var montakertaa = 0;
function sc (annettuluku)
{
	var interval = setInterval(function(){
    montakertaa += 1;
    if(montakertaa === annettuluku){
        clearInterval(interval);
    }
    CLICK();
}, 60.5); 
}