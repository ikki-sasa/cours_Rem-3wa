class SearchController {
	constructor() {
		this.viewPath = "views/search.html";
	}
	// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle
	executeAfterDomUpdate() {
		// [TODO] surveiller l'évènement submit du formulaire
        console.log("search ok");
        document.querySelector('#searchForm').addEventListener("submit", (e) => {
            e.preventDefault();
            const q = document.querySelector("#q").value;
            console.log(q);
        });
	}
}
export default SearchController;