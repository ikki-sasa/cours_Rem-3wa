// Récursion c'est bien... mais comme les boucles il faut être capable d'en sortir !
let cpt = 0;
function recur() {
	cpt++;
	if (cpt < 1000) {
		recur();
	}
}
recur();