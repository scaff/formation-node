$(document).ready(function () {
    getAllContacts(function (contactList) {
        contactList.forEach(function (contact) {
            createContactRow(contact)
        })
    }, function (err) {
        console.log(err)
    })


    $('#deleteAll').on('click', function (e) {
        e.preventDefault()

        // récupérer un tableau d'id avec la selection
        const selectedCheckboxes = $('input[type=checkbox]:checked')
        console.log(selectedCheckboxes)
        let selectedIds = selectedCheckboxes.map(function(index, selectedCheckbox) {
            
            const id = selectedCheckbox.id.slice(9)

            return id
        })

        // envoyer par HTTP la liste de ces id à supprimer
        deleteManyContact(selectedIds, function (result) {
            window.location.reload()
        })

    })
})