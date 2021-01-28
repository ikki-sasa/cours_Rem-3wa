class AboutController {
	constructor() {
		this.viewPath = "views/about.html";
	}
	// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle
	executeAfterDomUpdate() {
		// Rien de plus à faire
		console.log("Page about OK");
	}
}

export default AboutController;