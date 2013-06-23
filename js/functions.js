function changeText()
{
    var textElement = document.getElementById("textToChange");
    textElement.textContent = "Maintenant, vous voyez un nouvau text!";
}

function log()
{
    console.log("Bonjour Moz Fr!");
}

function info()
{
    console.info("Prochaine conférence: Faire des jeux en HTML / JS! (animé par Adrian et Nical)");
}

function warning()
{
    console.warn("Rappel: Demain un atelier Firebug sera animé par votre serviteur!");
}

function createError()
{
    notExistingFunction();
}

function outputString()
{
    var stringOutput = document.getElementById("stringOutput");
    stringOutput.textContent = myString;
}

window.onload = function()
{
    (function()
    {
        var bgColor = "red";
        function logMe(msg)
        {
            console.log(msg);
        }
        function traitementQuelconque(target)
        {
            target.style.background = bgColor;
            logMe("hello world");
            target.value = "Text changé";
        }
        document.getElementById("demo_bp_script").onclick = function(ev)
        {
            traitementQuelconque(ev.target);
        }
    })();

    // Nombre de fois où j'ai cliqué sur le bouton (demo DOM)
    window.nb_clics_dom = 0;
    document.getElementById("demo_bp_dom").onclick = function(ev)
    {
        window.nb_clics_dom++;
        alert("le bouton a été cliqué "+window.nb_clics_dom+" fois");
    };

};


function createCookie(name, value, days)
{
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    var cookieValue = escape(value) + ((days == null) ? "" : "; expires=" + expirationDate.toUTCString());
    document.cookie = name + "=" + cookieValue;
}

function changeCookie(name, value, days)
{
    createCookie(name, value, days);
}

function removeCookie(name)
{
    createCookie(name, null, -1);
}


function makeXHR(type)
{
    xhr = new XMLHttpRequest();
    switch(type) {
        case "html":
            url = "resources/response.html";
            break;

        case "json":
            url = "resources/response.json";
            break;

        default:
            url = "resources/response.txt?param1=1&param2=2&param3=3";
    }
    xhr.open("GET", url, true);
    xhr.send("");
}

function outputFactorial(n)
{
    console.log(calculateFactorial(n));
}

function calculateFactorial(n)
{
    if (n == 0 || n == 1)
        return 1;

    return calculateFactorial(n - 1) * n;
}
