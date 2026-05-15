// reusable function
const getElement = (id) => {
    const element = document.getElementById(id)
    return element
}

const contactList = getElement('contactList')

const contacts = [
    {
        id: 1,
        name: "Rahim",
        number: "01712345678"
    },
    {
        id: 2,
        name: "Karim",
        number: "01898765432"
    },
    {
        id: 3,
        name: "Hasan",
        number: "01945678912"
    },
    {
        id: 4,
        name: "Sakib",
        number: "01633445566"
    },
    {
        id: 5,
        name: "Nadim",
        number: "01577889900"
    }
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
                    <button
                        class="bg-red-500 py-1 rounded-md cursor-pointer duration-300 hover:scale-105">Delete</button>
                </div>
            </div>
        `
        contactList.appendChild(newContact)
    })

}
showContactList(contacts)