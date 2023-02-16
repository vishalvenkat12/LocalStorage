var form=document.getElementById('addForm');
var itemList=document.getElementById('item');
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
var edit=document.getElementsByClassName('list-group-item');
