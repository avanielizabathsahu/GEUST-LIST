var names_of_people =[];
function submit(){
    var GeustName=document.getElementById("name1").Value;
names_of_people.push(GeustName);
console.log(GeustName);
console.log(name_of_people);
var length_of_name=names_of_people.length;
console.log(lenght_of_name);
document.getElementById("display_name").innerHTML=names_of_people.toString();
}

function sorting(){
    names_of_people.sort();
    var i=names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementsById("sorted").innerHTML=i.toString();
}
function show()
{
    var i=names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementsById("p1").innerHTML=i.toString();
    document.getElementsById("sort_button").style.display="blocks";
}
function searching()
{
    var s= document.getElementsById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.lenght; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;}
    }
    document.getElementById("p2").innerHTML="name found"+found+" time/s";
    console.log("found name "+found+"time/s");
}
