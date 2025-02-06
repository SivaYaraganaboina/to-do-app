let to_do_array=[];
displayInput();

function addInput(){
  let inputElement=document.querySelector('#input');
  let inputdate=document.querySelector('#date');
  let to_do_item=inputElement.value;
  let to_do_date=inputdate.value;
  to_do_array.push({item:to_do_item,duedate:to_do_date});
  inputElement.value='';
  inputdate.value='';

  displayInput();
}

function displayInput(){
  let displayItem=document.querySelector('#to_do_items');
  let newHtml='';
  for( let i=0;i<to_do_array.length;i++){

    let {item,duedate}=to_do_array[i];

    if (item !== '') {
    newHtml +=`
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn_delete" onclick="to_do_array.splice(${i},1);
    displayInput();">Delete</button> 
    `;
  }
}
  displayItem.innerHTML=newHtml;
}