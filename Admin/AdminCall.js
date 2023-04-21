const dept = document.querySelector('#department');
const section = document.querySelector('#section');
const authorName = document.querySelector('#authorname');
const publisherName = document.querySelector('#publishname');
// const section = document.querySelector('#section');
// const section = document.querySelector('#section');
// alert(dept);
dept.addEventListener("click", func);
section.addEventListener("click", funcSection);
authorName.addEventListener("click",funcAuthorName);
publisherName.addEventListener("click",funcPublisherName);

const dep = "department";
function func() {
    alert('Hello');
    handleRequest(
        "GET", dep, "https://localhost:44302/api/user", "successFunc", "failureFunc"
    );
}

const sec = "section";
function funcSection() {
    handleRequest(
        "GET", sec, "https://localhost:44302/api/user", "successFunc", "failureFunc"
    );
}

const author = "authorname";
function funcAuthorName() {
    handleRequest(
        "GET", author, "https://localhost:44302/api/user", "successFunc", "failureFunc"
    );
}

const publisher = "publishname";
function funcPublisherName() {
    handleRequest(
        "GET", publisher, "https://localhost:44302/api/user", "successFunc", "failureFunc"
    );
}