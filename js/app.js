// reusable function
const getElement = (id) => {
    const element = document.getElementById(id)
    return element
}
// all element
const contactList = getElement('contactList')
const inputName = getElement('inputName')
const inputPhone = getElement('inputPhone')
const saveBtn = getElement('saveBtn')
const addContactBtn = getElement('addContactBtn')
const addContactForm = getElement('addContactForm')
const cancelBTN = getElement('cancelBTN')
const notFound = getElement('notFound')
const searchBtn = getElement('searchBtn')
const searchInput = getElement('searchInput')

const contacts = JSON.parse(localStorage.getItem('contacts')) || []
const handleLocalStorage = () => {
    const data = JSON.stringify(contacts)
    localStorage.setItem('contacts', data)
}
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
                        onclick='callFun(${contact.id})' class="bg-fuchsia-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Call</button>
                    <button
                        class="bg-blue-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Edit</button>
                    <button onclick='deleteContact(${contact.id})'
                        class="bg-red-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Delete</button>
                </div>
            </div>
        `
        contactList.appendChild(newContact)
        handleLocalStorage()
    })

}
showContactList(contacts)
const addContact = () => {
    const number = inputPhone.value;
    const name = inputName.value;
    if (!name || !number) {
        return alert("Please fillup all feild")
    }
    const newContact = { id: contacts.length + 1, name, number }
    inputName.value = '';
    inputPhone.value = '';
    contacts.push(newContact)
    showContactList(contacts)
    addContactForm.classList.toggle('hidden')
    addContactBtn.classList.toggle('hidden')
}

saveBtn.addEventListener('click', addContact)
const deleteContact = (id) => {
    const index = contacts.findIndex(contact => contact.id == id)
    contacts.splice(index, 1)
    showContactList(contacts)
    handleLocalStorage()
}

const showForm = () => {
    addContactForm.classList.toggle('hidden')
    addContactBtn.classList.toggle('hidden')
}
addContactBtn.addEventListener('click', showForm)
cancelBTN.addEventListener('click', showForm)

const callFun = (id) => {
    const filter = contacts.filter((contact) => contact.id == id)
    const contact = filter[0]
    return alert(`Caling ${contact.name} - ${contact.number}`)
}

const handleSearch = () => {
    const search = searchInput.value.toLowerCase()
    const filter = contacts.filter((contact) => contact.name.toLowerCase() == search)
    showContactList(filter)
}
searchBtn.addEventListener('click', handleSearch)
