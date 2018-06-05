function food(){
  var a=[];
  var g=document.getElementById("n").value;
    a= document.getElementById("items").value.split(",");

    a.sort(function(a1, b1){return b1 - a1});
//https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A

    var dis=0.0;
    var disi="";
    if(a.length<=1|| g==0){
      dis=0.0;
      disi="not any";
    }
    else if(a.length<3){
      dis=a[1];

      disi=a[1].toString();
    }
    else{

    for(var i=1;i<=g*2;i=i+2){
      if(isNaN(a[i])){
         continue;
       }
       if(a[i]==undefined){
         break;
       }
       dis+=Number(a[i]);

      disi=disi+a[i]+',';


    }
  }
            disi = disi.replace(/,\s*$/, "");
            document.getElementById("ditems").value=disi;
            document.getElementById("dis").value=dis;
  }
    function drink() {
      var a=[];
      var g=document.getElementById("n").value;
        a= document.getElementById("items").value.split(",");
        a.sort(function(a1, b1){return b1 - a1});
        //document.write(a);
        var dis=0.0;
        var disi="";


if(a.length<=2|| g==0){
dis=0.0;
disi="not any";
}
else if(a.length%2==0)
{     for(var i=2;i<=g*4;i=i+4)
    {   if(isNaN(a[i])){
            continue;
    }
          dis+=Number(a[i])+Number(a[i+1]);

              disi=disi+a[i]+','+a[i+1]+',';
    }
}
else if(a.length%2==1)
{
a.push(0);
//document.write(a);

for(var i=2;i<=g*4;i=i+4)
       {    if(isNaN(a[i])){
         continue;
       }
             dis+=Number(a[i])+Number(a[i+1]);

                 disi=disi+a[i]+','+a[i+1]+',';

             }

}

                disi = disi.replace(/,\s*$/, "");
                  disi = disi.replace(/,0\s*$/, "");

              document.getElementById("ditems").value=disi;
                document.getElementById("dis").value=dis;

    }
