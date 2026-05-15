// reusable function
const getElement = (id) => {
    const element = document.getElementById(id)
    return element
}

const contactList = getElement('contactList')
const inputName = getElement('inputName')
const inputPhone = getElement('inputPhone')
const saveBtn = getElement('saveBtn')

const contacts = [
    {
        id: 1,
        name: "Rahim",
        number: "01712345678"
    },
];

const showContactList = (list) => {
    contactList.innerHTML = ''
    list.map((contact) => {
        let newContact = document.createElement('div')
        newContact.innerHTML = `
            <div class="bg-white/10 p-4 rounded-md border border-white/20 text-center space-y-1.5">
                <p class="uppercase text-xl font-medium">${contact.name}</p>
                <p class="text-lg">${contact.number}</p>
                <div class="grid grid-cols-3 gap-4">
                    <button
                        class="bg-fuchsia-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Call</button>
                    <button
                        class="bg-blue-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Edit</button>
                    <button onclick='deleteContact(${contact.id})'
                        class="bg-red-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Delete</button>
                </div>
            </div>
        `
        contactList.appendChild(newContact)
    })

}
showContactList(contacts)

const addContact = () => {
    const number = inputPhone.value;
    const name = inputName.value;
    const newContact = { id: contacts.length + 1, name, number }
    contacts.push(newContact)
    showContactList(contacts)
}

saveBtn.addEventListener('click', addContact)
const deleteContact = (id) => {
    const index = contacts.findIndex(contact=>contact.id==id)
    contacts.splice(index,1)
    showContactList(contacts)
}


