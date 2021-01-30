import Router from "vanilla-router";
import firebase from "firebase/app";
import "firebase/auth";

import app from "./app.js";
import config from "./config.js";
import HomeController from "../controllers/HomeController.js";
import LoginController from "../controllers/LoginController.js";
import SearchController from "../controllers/SearchController.js";
import AboutController from "../controllers/AboutController.js";

import "../static/css/main.css";

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter(isLogged) {
	// Instancier ici le Vanilla Router dans l'objet "app.mvc.router"
	app.mvc.router = new Router({
		mode: "hash",
		page404: function (path) {
			console.log('"/' + path + '" Page not found');
		},
	});

	app.mvc.router.add("", function () {
		app.mvc.dispatchRoute(new HomeController());
	});
	app.mvc.router.add("about", function () {
		app.mvc.dispatchRoute(new AboutController());
	});
	if (isLogged) {
		app.mvc.router.add("search", function () {
			app.mvc.dispatchRoute(new SearchController());
		});
		app.mvc.router.add("logout", app.firebase.logout);
	} else {
		app.mvc.router.add("login", function () {
			app.mvc.dispatchRoute(new LoginController());
		});
	}

	app.mvc.router.addUriListener();

	app.mvc.router.navigateTo("/#/");
}

// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
	// Initialize Firebase
	firebase.initializeApp(config.firebase);
	// Surveiller les changements d'état d'authentification
	firebase.auth().onAuthStateChanged(function (user) {
		// modifier la navbar en fonction de l'état
		// (si un utilisateur est connecté on lui passe un objet user, sinon on lui passe null)
		app.dom.checkLoginState(user);
		// Initialisation du routeur.
		initializeRouter(user !== null);
	});
});