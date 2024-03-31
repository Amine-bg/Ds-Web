function validateForm()
{
    var x = document.forms["myform"]["email"].value;
    if(x == "")
    {
        alert("please enter ur email id");
        return false;
    }
}
