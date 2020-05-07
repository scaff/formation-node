function createContactRow (contact) {
    const contactRow = $(`<tr>
    <td><input type="checkbox" id="todelete-${contact._id}"></td>
    <td>${contact.firstname}</td>
    <td>${contact.lastname}</td>
    <td>${contact.age}</td>
    <td><button id="edit-${contact._id}">Editer</button></td>
    <td><button id="delete-${contact._id}">Supprimer</button></td>
    <td><button id="view-${contact._id}">Voir</button></td>
</tr>`)
    $('tbody').append(contactRow)
    const editButton = contactRow.find('button[id^=edit]')

    editButton.on('click', function(e) {
        e.preventDefault()

        const id = e.currentTarget.id.slice(5)

        $(location).attr('href', `http://127.0.0.1:8080/edit.html?id=${id}`)
    })

    const deleteButton = contactRow.find('button[id^=delete]')
    deleteButton.on('click', function(e) {
        e.preventDefault()

        const id = e.currentTarget.id.slice(7)
        deleteContactById(id, function(result) {
            console.log(result)
            $(contactRow).remove()
        })
    })

    const viewButton = contactRow.find('button[id^=view]')
    viewButton.on('click', function(e) {
        e.preventDefault()

        const id = e.currentTarget.id.slice(5)

        $(location).attr('href', `http://127.0.0.1:8080/single.html?id=${id}`)

    })
}