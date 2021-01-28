class HomeController {
	constructor() {
		this.viewPath = "views/home.html";
	}
	// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle
	executeAfterDomUpdate() {
		// Rien de plus à faire
		console.log("Page home OK");
	}
}
export default HomeController;