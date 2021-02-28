
var n_chapters = 5
var nav = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navBarContent">

        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Chapters
        </a>

        <ul class="dropdown-menu" aria-labelledby="navbarDropdown", id="chapters">
        </ul>
        
        </ul>
    </div>
</div>
</nav>`

function buildNav(chapter) {
    var navdoc = document.getElementById("nav-placeholder");
    navdoc.innerHTML = nav;
    var times = n_chapters + 1;
    for (var i = 1; i < times; i++) {
        var chapteritem = document.createElement('div');
        chapteritem.innerHTML = `<a class="dropdown-item" href="chapter${i}.html">Chapter ${i}</a>`;
        if (i == chapter) {
            chapteritem.firstChild.setAttribute('aria-disabled', 'true')
            chapteritem.firstChild.setAttribute('class', 'dropdown-item disabled')
        }
        document.getElementById("chapters").appendChild(chapteritem)
    }
    var navBarContent = document.getElementById("navBarContent");

    var previous = document.createElement('li');
    previous.class = "nav-item";
    previous.innerHTML = `<a class="nav-link active" href="chapter${chapter - 1}.html" tabindex="-1">Previous</a>`;
    if (chapter == 1) {
        previous.firstChild.setAttribute('aria-disabled', 'true')
        previous.firstChild.setAttribute('class', 'nav-link disabled')
    }
    navBarContent.appendChild(previous);

    var next = document.createElement('li');
    next.class = "nav-item";
    next.innerHTML = `<a class="nav-link active" href="chapter${chapter + 1}.html" tabindex="-1">Next</a>`;
    if (chapter == n_chapters) {
        next.firstChild.setAttribute('aria-disabled', 'true')
        next.firstChild.setAttribute('class', 'nav-link disabled')
    }
    navBarContent.appendChild(next);
}

function buildFooter(chapter) {
    var footer = document.getElementById("footer");
    if (chapter == 1) {
        footer.innerHTML += `<a type="button" class="btn btn-light disabled" href="chapter${chapter - 1}.html" role="button">Previous</a>`
    }
    else {
        footer.innerHTML += `<a type="button" class="btn btn-light" href="chapter${chapter - 1}.html" role="button">Previous</a>`
    }

    if (chapter == n_chapters) {
        footer.innerHTML += `<a type="button" class="btn btn-light disabled" href="chapter${chapter + 1}.html" role="button" disabled>Next</a>`
    }
    else {
        footer.innerHTML += `<a type="button" class="btn btn-light" href="chapter${chapter + 1}.html" role="button">Next</a>`
    }

}