$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    getContactById(id, function(contact) {
        showContact(contact)
    })
})