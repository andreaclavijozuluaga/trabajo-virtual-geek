var año=1901;

if(año%4==0 && año%400==0 && año%100==0){
    console.log("el año es bisiesto");

    if(año%4==0){
        console.log("año bisiesto");
    }
}

else if (año%4!=0 || año%400!=0 || año%100!=0){
    año=año+1;
    console.log("el siguiente es el año bisiesto " + año);
}