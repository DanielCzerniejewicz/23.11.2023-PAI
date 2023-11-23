function zad7()
{
    let n = document.getElementById("liczba").value;
    if(n % 2 == 0)
    {
        alert("Parszysta")
    }
    else{
        alert("Nie parzysta")
    }
}
function zad8()
{
    let a = document.getElementById("liczba8.1").value;
    let b = document.getElementById("liczba8.2").value;
    if(a > b)
    {
        alert(`${a} > ${b}`)
    }
    else if(b > a)
    {
        alert(`${b} > ${a}`)
    }
    else{
        alert("Równe")
    }
}
function zad11()
{
    const tab = [];
    let a = parseFloat(document.getElementById("liczba11.1").value);
    tab.push(a);
    let b = parseFloat(document.getElementById("liczba11.2").value);
    tab.push(b);
    let c = parseFloat(document.getElementById("liczba11.3").value);
    tab.push(c);
    let d = parseFloat(document.getElementById("liczba11.4").value);
    tab.push(d);
    tab.sort((a, b) => a - b);
    alert(tab);
}
function zad13()
{
    let a = parseFloat(document.getElementById("liczba13.1").value);
    let b = parseFloat(document.getElementById("liczba13.2").value);
    let wybor = prompt("1 - Dodawanie 2 - Odejmowanie 3 - Mnożenie 4 - Dzielenie")
    switch(wybor)
    {
        case("1"):
            alert(a+b)
            break;
        case("2"):
            alert(a-b)
            break;
        case("3"):
            alert(a*b)
            break;
        case("4"):
            alert(a/b)
            break;
        default:
            alert("Zla liczba")
            break;
    }
}