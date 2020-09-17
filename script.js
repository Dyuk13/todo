const oldHTML = sessionStorage.getItem ('todoHtml');
document.querySelector ('.todo__items').innerHTML = oldHTML;

document.querySelector('.todo__submit-button').addEventListener('click', addItem);

function addItem() {
	
	let inputText = document.querySelector('.todo__text-input');
	let inputTextValue = inputText.value;
	let items = document.querySelector('.todo__items');
	let oldHtmlText = items.innerHTML;
	items.innerHTML = `
	<div>
	${inputTextValue}
		<button class= ".todo__items-remove">
		X
		</button>
	</div>
	${oldHtmlText}`;
	sessionStorage.setItem ('todoHtml', items.innerHTML);
	inputText.value = '';
}

document.querySelector (".todo__items").addEventListener('click', onItemsClick)
function onItemsClick (event) {
	const removeButton = event.target;
	if (removeButton.classList.contains ('.todo__items-remove')){
		removeButton.parentElement.remove ();
		sessionStorage.setItem ('todoHtml', document.querySelector (".todo__items").innerHTML);
	}

}