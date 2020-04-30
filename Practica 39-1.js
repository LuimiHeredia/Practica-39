function DarLaFecha() 
{
    var KLK
    KLK = new Date();
    var MUJERES = KLK.getDate() + '/' + (KLK.getMonth() + 1) + '/' + KLK.getFullYear();
    return MUJERES;
}

function DarLaHora() 
{
    var KLK
    KLK = new Date();
    var MUJERES = KLK.getHours() + ':' + KLK.getMinutes() + ':' + KLK.getSeconds();
    return MUJERES;
}