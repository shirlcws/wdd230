//  //three element variables that hold references to the list (<ul>,<input>, and <button> elements.)
//  const list = document.querySelector('ul');
//  const input = document.querySelector('input');
//  const button = document.querySelector('button');
// //Add event listener for add button
//  button.addEventListener('click', () => {
// if (input.value !== '') {
//      let chapter = input.value;

//      input.value = '';
//      const li = document.createElement('li');
//      const deleteBtn = document.createElement('button');
     
//      li.textContent = chapter;
//      deleteBtn.textContent = '❌';
//      deleteBtn.addEventListener('click'), () => {
//         list.removeChild(li);
//      });
// li.appendChild(deleteBtn);
//      list.appendChild(li);
//     }
//     input.value = '';
//     input.focus();
// });
    
   //  //three element variables that hold references to the list (<ul>,<input>, and <button> elements.)
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
// //Add event listener for add button
button.addEventListener('click', () => {
     if (input.value !== '') {

     }
     let myItem = input.value;
     input.value = '';

 const listItem = document.createElement('li');
 const listText = document.createElement('span');
 const listBtn = document.createElement('button');

 listItem.appendChild(listText);
 listText.textContent = myItem;
 listItem.appendChild(listBtn);
 listBtn.textContent ='❌';
 list.appendChild(listItem);

 listBtn.addEventListener('click', () => {
     list.removeChild(listItem);
 });

 input.focus();
 });