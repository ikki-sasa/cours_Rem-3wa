import EventsModel from "../model/EventsModel.js";

class SearchController {
	constructor() {
		this.viewPath = "views/search.html";
	}
	// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle
	executeAfterDomUpdate() {
		// générer dynamiquement les options de la liste des années
		const currentYear = new Date().getFullYear();
		const options = ['<option value="">-- Choisir --</option>'];
		for (let year = currentYear + 1; year >= currentYear - 2; year--) {
			options.push(`<option value="${year}">${year}</option>`);
		}
		document.querySelector("#date_start").innerHTML = options.join("");

		// surveiller l'évènement submit du formulaire
		document.querySelector("#searchForm").addEventListener("submit", (e) => {
			// empecher le submit d'avoir son comportement normal (cad envoyer une requête HTTP)
			e.preventDefault();
			// récupérer les valeurs saisies dans le formulaire
			const q = document.querySelector("#q").value;
			const date_start = document.querySelector("#date_start").value;
			const sort = document.querySelector("#sort").value;
			console.log(q, date_start, sort);

			// Envoyer les valeurs de recherche à l'API open data Paris, qui nous renverra des évènements, qu'on ira afficher proprement dans la page
			const eventsModel = new EventsModel();
			eventsModel.getEvents(q, date_start, sort).then((events) => {
				console.log(events);
				// [TODO] Afficher les events obtenus
				const htmlEvents = events.map(
					({ fields: { title, date_start, cover_url, cover_alt } }) => `
					<li class="col-6 col-md-4 col-lg-3">
						<img src="${cover_url}" alt="${cover_alt}">
						<h6>${title}</h6>
						<p>${new Date(date_start).toLocaleDateString()}</p>
					</li>
					`
				);
				document.querySelector("#eventList").innerHTML = `
					<ul class="row">
						${htmlEvents.join("")}
					</ul>
				`;
			});
		});
	}
}
export default SearchController;