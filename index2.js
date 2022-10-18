const btn = document.querySelector("#btn");
    btn.addEventListener('click', () => {
        const inputName = document.querySelector("#new-name").value;
        const inputEmail = document.querySelector("#new-email").value;
            const userData = {
            name: inputName,
            email: inputEmail,
    }
fetch('http://localhost:3000/users',{
    method: 'POST',
    headers: {
    'Content-Type': "application/json",
    "Accept": "application/json",
     }, 
     body: JSON.stringify(userData)
    })
})

const deleteBtn = document.querySelector('#delete-btn');
    deleteBtn.addEventListener('click', () =>{
    const inputId = document.querySelector('#id').value;
        fetch(`http://localhost:3000/users/${inputId}`, {
            method: 'DELETE',
        })
    })

const infoBtn = document.querySelector("#get-info");
    infoBtn.addEventListener('click', () => {
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(data => console.log(data));
    })