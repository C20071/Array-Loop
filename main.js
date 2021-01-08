var names=[];

function sub() {
    var local_array = [];
    for (var x = 1; x <= 4; x++) {
       var n = document.getElementById("name_of_the_student_"+x).value ;
       names.push(n);
        }
        for (let y = 0; y < names.length; y++) {
            local_array.push("<h4> Name: "+names[y]+"</h4>" );
            
        }
        document.getElementById("display_name_with_commas").innerHTML=local_array;
        document.getElementById("display_name_without_commas").innerHTML=local_array.join(" ");
}

function sorting(){
    names.sort();
    var local_array = [];
    for (let y = 0; y < names.length; y++) {
        local_array.push("<h4> Name: "+names[y]+"<h4>" );
        
    }
    document.getElementById("display_name_without_commas").innerHTML=local_array.join(" ");
}

function update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+names+"</h1>";

}
