class EventsModel {
	// ?dataset=que-faire-a-paris-&jazz&q=rows=12&sort=-date_start&facet=date_start&refine.date_start=2020

	/**
	 * Envoie la requête vers l'API
	 * @param {Object} criteria Liste des critères de recherche
	 * @return {Promise} promesse qui sera résolue par un tableau d'évènements
	 */
	sendRequest(criteria) {
		const API_ENDPOINT = "https://opendata.paris.fr/api/records/1.0/search/";
		// Traduire l'objet de critères en chaîne de requête
		const queryString = Object.entries(criteria)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");
		return fetch(`${API_ENDPOINT}?${queryString}`)
			.then((res) => res.json())
			.then(({ records }) => records);
	}

	/**
	 * Prépare la chaîne de requete
	 * @param {string} q Terme de recherche
	 * @param {string} date_start Année de recherche
	 * @param {string} sort Ordre des résultats
	 * @return {Promise} promesse qui sera résolue par un tableau d'évènements
	 */
	getEvents(q, date_start, sort) {
		const criteria = {
			dataset: "que-faire-a-paris-",
			rows: 12,
			q: q,
			sort: sort,
		};
		if (date_start !== "") {
			criteria.facet = "date_start";
			criteria["refine.date_start"] = date_start;
		}
		return this.sendRequest(criteria);
	}
}
export default EventsModel;