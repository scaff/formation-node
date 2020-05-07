$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    getContactById(id, function (result) {
        fillContactForm(result)
    })

    $('form').on('submit', function (e) {
        e.preventDefault()

        const contactToEdit = {
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            age: $('#age').val()
        }

        console.log(contactToEdit)
        editContact(id, contactToEdit, function(result) {
            console.log(result)
        })
    })
})