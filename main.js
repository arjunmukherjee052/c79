student_names_array =[];
function submit()
{
var name_1 = document.getElementById("name_of_the_student_1").value;
var name_2 = document.getElementById("name_of_the_student_2").value;
var name_3 = document.getElementById("name_of_the_student_3").value;
var name_4 = document.getElementById("name_of_the_student_4").value;

student_names_array.push(name_1);
student_names_array.push(name_2);
student_names_array.push(name_3);
student_names_array.push(name_4);

console.log(student_names_array);

document.getElementById("display_name").innerHTML=student_names_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline_block";
}

function sorting()
{
    student_names_array.sort();
    console.log(student_names_array);
    document.getElementById("display_name").innerHTML=student_names_array;
}