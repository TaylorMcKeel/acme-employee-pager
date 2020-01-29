let firstNamesList = document.querySelector('#firstName')
let lastNamesList = document.querySelector('#lastName')
let emailList = document.querySelector('#email')
let titleList = document.querySelector('#title')
let linkBar = document.querySelector('#links')


const renderUsers = (results)=>{
    const html = results.users.map(result => {
        return (
            `<li>
                ${result.firstName}
            </li>`)
    }).join('')
    firstNamesList.innerHTML = html
}

const renderLastNames = (results)=>{
    const html = results.users.map(result => {
        return (
            `<li>
                ${result.lastName}
            </li>`)
    }).join('')
    lastNamesList.innerHTML = html
}

const renderEmails = (results)=>{
    const html = results.users.map(result => {
        return (
            `<li>
                ${result.email}
            </li>`)
    }).join('')
    emailList.innerHTML = html
}

const renderTitle = (results)=>{
    const html = results.users.map(result => {
        return (
            `<li>
                ${result.title}
            </li>`)
    }).join('')
    titleList.innerHTML = html
}

const renderLinks = (results)=>{
    let links = []
    for(let i=0;i< Math.ceil((results.count)/50);i++){
        links.push('<a href=''> ${i+1} </a>') 
    }
    linkBar.innerHTML = html

}






fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
    .then(response=> response.json())
    .then(results => {renderUsers(results)})

fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
    .then(response=> response.json())
    .then(results => {renderLastNames(results)})

fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
    .then(response=> response.json())
    .then(results => {renderEmails(results)})

fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
    .then(response=> response.json())
    .then(results => {renderTitle(results)})

fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
    .then(response=> response.json())
    .then(results => {renderLinks(results)})