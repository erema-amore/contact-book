
function addContact() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;
    var photo = document.getElementById('photo').value;
  
    
    if (name === '' || surname === '' || phone === '' || photo === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
  
    var contact = {
      name: name,
      surname: surname,
      phone: phone,
      photo: photo
    };
  
    
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    
    contacts.push(contact);
  
   
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
   
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('photo').value = '';
  
   
    displayContacts();
  }
  
 
  function displayContacts() {
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    var contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
  
    
    for (var i = 0; i < contacts.length; i++) {
      var contact = contacts[i];
  
      var contactCard = document.createElement('div');
      contactCard.className = 'contact-card';
  
      var contactPhoto = document.createElement('img');
      contactPhoto.src = contact.photo;
  
      var contactName = document.createElement('h3');
      contactName.textContent = contact.name + ' ' + contact.surname;
  
      var contactPhone = document.createElement('p');
      contactPhone.textContent = 'Телефон: ' + contact.phone;
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.onclick = deleteContact.bind(null, i); 
  
      contactCard.appendChild(contactPhoto);
      contactCard.appendChild(contactName);
      contactCard.appendChild(contactPhone);
      contactCard.appendChild(deleteButton);
  
      contactList.appendChild(contactCard);
    }
  }
  

  function deleteContact(index) {
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    
    contacts.splice(index, 1);
  
    
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
    
    displayContacts();
  }
  
 
  displayContacts();
  