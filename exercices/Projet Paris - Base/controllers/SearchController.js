class SearchController {
	constructor() {
		this.viewPath = "views/search.html";
	}
	// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle
	executeAfterDomUpdate() {
		console.log("search ok");
		// surveiller l'évènement submit du formulaire
		document.querySelector("#searchForm").addEventListener("submit", (e) => {
			// empecher le submit d'avoir son comportement normal (cad envoyer une requête HTTP)
			e.preventDefault();
			// récupérer les valeurs saisies dans le formulaire
			const q = document.querySelector("#q").value;
			console.log(q);

			// [TODO] Envoyer les valeurs de recherche à l'API open data Paris, qui nous renverra des évènements, qu'on ira afficher proprement dans la page
		});
	}
}
export default SearchController;