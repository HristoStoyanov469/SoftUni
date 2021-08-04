function createArticle() {

	let input = document.getElementById("createTitle");
	let textArea = document.getElementById("createContent");
	let articles = document.getElementById("articles");

	let article = document.createElement("article");
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	if (input === null || textArea === null || articles === null) {
		throw new Error("Ooopsie");
	}

	h3.innerHTML = input.value;
	p.innerHTML = textArea.value;

	article.appendChild(h3);
	article.appendChild(p);
	articles.appendChild(article);

	input.value = "";
	textArea.value = "";
}

document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('createArticleBtn')
		.addEventListener('click', createArticle);
})