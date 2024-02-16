function convert()
{
    if(document.getElementById("input").value == "")
    {
        return alert("Please enter a value");
    }
    var x = document.getElementById("input").value;
    var inches = x * 2.54;
    document.getElementById("res").innerHTML = inches + " inches";

}