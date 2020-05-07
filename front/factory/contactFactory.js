function createContact (newContact, success, error) {
    setTimeout(function () {
        $.ajax({
            method: 'POST',
            data: JSON.stringify(newContact),
            contentType: 'application/json',
            url: 'http://localhost:3000/contacts',
            success: function (result, err) {
                if (err !== 'success') error(err)
                return success(result)
            },
        })
    }, 2000)
}

function getAllContacts (success, error) {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/contacts',
        dataType: 'json',
        success: function (result, err) {
            if (err !== 'success') error(err)
            return success(result)
        }
    })
}

function deleteContactById(id, success, error) {
    $.ajax({
        method: 'DELETE',
        url: `http://localhost:3000/contacts/${id}`,
        dataType: 'json',
        success: function (result, err) {
            if (err !== 'success') error(err)
            return success(result)
        }
    })
}

function deleteManyContact(ids, success, error) {
    const queryParams = encodeURIComponent(JSON.stringify(ids))
    console.log(queryParams)
    $.ajax({
        method: 'DELETE',
        url: `http://localhost:3000/contacts?id=${queryParams}`,
        dataType: 'json',
        data: ids,
        success: function (result, err) {
            if (err !== 'success') error(err)
            return success(result)
        }
    })
}

function getContactById (id, success, error) {
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/contacts/${id}`,
        dataType: 'json',
        success: function (result, err) {
            if (err !== 'success') error(err)
            return success(result)
        }
    })
}

function editContact (id, newContact, success, error) {
    $.ajax({
        method: 'PATCH',
        data: JSON.stringify(newContact),
        contentType: 'application/json',
        url: `http://localhost:3000/contacts/${id}`,
        success: function (result, err) {
            if (err !== 'success') error(err)
            return success(result)
        },
    })
}