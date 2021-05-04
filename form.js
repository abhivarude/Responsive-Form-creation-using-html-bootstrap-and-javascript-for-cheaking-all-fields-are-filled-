
function cheak()
{
var nameofstudent=document.getElementById("name").value;
var nameofcollage=document.getElementById("collagename").value;
var department=document.getElementById("dept").value;

var a=nameofstudent.length;
var b= nameofcollage.length;
var c=department.length;

if(nameofstudent==""||nameofstudent==null||nameofcollage==""||nameofcollage==null||department==""||department==null)
{
alert("some fields are empty")
}

if(a>=20||a<=3)
{
    alert(" required lenght of name is in between 3 to 20 ") 
}

if(b>=30||b<=10)
{
    alert(" required lenght of collage name is in between 10 to 30") 
}

if(c>=40||c<=18)
{
    alert(" required lenght of dept is in between 18 to 40 ")  
    console.log(department);
}




}





