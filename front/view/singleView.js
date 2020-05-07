function showContact (contact) {
    $('.contact').html(`${contact.firstname} ${contact.lastname} - ${contact.age}`)
}