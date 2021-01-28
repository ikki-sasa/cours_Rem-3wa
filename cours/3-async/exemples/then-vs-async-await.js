//BASES EXEMPLE
async function process() {
	try {
		let sum = 0;
		const res1 = await add(1); // attendre la résolution de la promesse
		sum += res1;
		const res2 = await add(3);
		sum += res2;
		const res3 = await add(5);
		sum += res3;

		console.log(sum);
		// si vous lancez une exception à partir de la promesse
		// dans le cas où celle-ci est échoue
		// vous capturez l'exception dans le bloc suivant
	} catch (err) {
		console.error(err);
	}
}

////////////////////////////////////////////////////////////

//EXPLICATIONS
const checkNumber = (number) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(Number(number))) {
				reject(new Error(`${number} is not a number!`));
				return;
			} else {
				resolve(number);
			}
		}, 500);
	});

// checkNumber("gregre")
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(`ERREUR: ${err.message}`));

const process = async () => {
	let sum = 0;

	// Dans ce bloc try, les checkNumber peuvent déclencher des erreurs (promesse rejetée si valeur d'entrée non numérique)
	// on écrit cette gestion d'erreur comme dans du code synchrone avec try/catch
	try {
		const res1 = await checkNumber(1); // attendre la résolution de la promesse
		sum += res1;
		const res2 = await checkNumber("coucou");
		sum += res2;
		const res3 = await checkNumber(5);
		sum += res3;
		//return = resoudre la promesse renvoyée par process()
		return sum;
	} catch (err) {
		// gestion des erreurs renvoyées par un appel de checkNumber
		console.log(`ERREUR: ${err.message}`);
		//throw = rejeter la promesse renvoyée par process()
		throw new Error("Calcul impossible");
	}
};

/*
const process = () =>
	new Promise((resolve, reject) => {
		let sum = 0;
		checkNumber(1)
			.then((res1) => {
				sum += res1;
				return checkNumber("coucou");
			})
			.then((res2) => {
				sum += res2;
				return checkNumber(5);
			})
			.then((res3) => {
				sum += res3;
				// c'est bien la promesse renvoyée par process() qu'on résout
				resolve(sum);
			})
			// on catche les erreurs si une des promesses checkNumber a été rejetée
			.catch((err) => {
				console.log(`ERREUR: ${err.message}`);
				// on rejette la promesse renvoyée par process
				reject(new Error("calcul impossible"));
			});
	});
*/

// attention, même écrite avec async/await, process continue de renvoyer une promesse
process()
	.then((res) => console.log(res))
	.catch((err) => console.error(err.message));