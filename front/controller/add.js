$(document).ready(function () {
    $('form').on('submit', function(e) {
        e.preventDefault()

        $('.loading').html('DB entrain d\'être contactée.')

        const contactToAdd = {
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            age: $('#age').val()
        }
        createContact(contactToAdd, (result) => {
            console.log(result)
            $('.loading').html('Contact ajouté')

        }, (err) => {
            console.log(err)
        })
    })
})