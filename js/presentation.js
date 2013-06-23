hljs.initHighlightingOnLoad();

window.addEventListener("load", function init()
{
    Reveal.initialize({
        controls: true,
        progress: true,
        minScale: 1.0,
        maxScale: 1.0,
        history: true,
        keyboard: true,
        overview: true,
        center: false,
        loop: false,
        rtl: false,
        autoSlide: 0,
        mouseWheel: false,
        rollingLinks: false,
        transition: "default"
    });

    var controls = document.getElementsByClassName("controls")[0];
    var contents = document.createElement("div");
    contents.classList.add("navigate-contents");
    contents.addEventListener("click", toggleContentsPopup, false);
    controls.appendChild(contents);

    Reveal.addEventListener("slidechanged", function( event ) {
        console.log("Current slide: %d", event.indexh);
    } );

    //refreshContentsPopup();
    generateOverview();
}, false);

function generateOverview()
{
    var elts = document.querySelectorAll(".slides > section > h1:nth-child(1), .slides > section > section:nth-child(1) > h1");
    elts = Array.prototype.slice.call(elts);
    var planList = document.createElement("ul");
    var start = elts.indexOf(document.getElementById("start"));
    elts.map(function(x, index)
    {
        if (index < start)
            return;
        return x.textContent;
    }).forEach(function(text, index, array)
    {
        if (!text || array.indexOf(text) !== index)
            return;

        var li = document.createElement("li");
        li.textContent = text;
        planList.appendChild(li);
    });
    document.getElementById("plan").appendChild(planList);
}

/*function refreshContentsPopup()
{
    var contentsPopup = document.getElementById("contentsPopup");
    var XPathSections = document.evaluate("//section[@id]", document, null,
        XPathResult.ANY_TYPE, null);
    var sections = [];
    var section = XPathSections.iterateNext();
    while (section)
    {
        sections.push(section);
        section = XPathSections.iterateNext();
    }

    for (var i = 0; i < sections.length; ++i)
    {
        var heading = sections[i].getElementsByTagName("h1")[0].textContent;
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#/" + sections[i].id;
        a.setAttribute("onclick", "closeContentsPopup()");
        a.textContent = heading;
        li.appendChild(a);
        contentsPopup.appendChild(li);
    }
}*/

function openContentsPopup()
{
    var navigateContents = document.getElementsByClassName("navigate-contents")[0];
    var contentsPopup = document.getElementById("contentsPopup");
    var top = 0;
    var left = 0;
    var node = navigateContents;
    while (node)
    {
        top += node.offsetTop;
        left += node.offsetLeft;
        node = node.offsetParent;
    }
    contentsPopup.style.display = "block";
    contentsPopup.style.top = (top - contentsPopup.offsetHeight) + "px";
    contentsPopup.style.left = left + "px";
}

function closeContentsPopup()
{
    if (!isContentsPopupOpen())
        return;

    var contentsPopup = document.getElementById("contentsPopup");
    contentsPopup.style.display = "none";
}

function isContentsPopupOpen()
{
    return document.getElementById("contentsPopup").style.display == "block";
}

function toggleContentsPopup()
{
    if (isContentsPopupOpen())
        closeContentsPopup();
    else
        openContentsPopup();
}
