const add = (number, callback) => {
    setTimeout(() => {
        callback(number);
    }, 1000);
};

add(2, (n1) => {
    add(n1 + 5, (n2) => {
        console.log(n2);
    });
});

const displayError = (val) => {
	throw new Error(`${val} n'est pas un nombre`);
};

add(
	2,
	(n1) => {
		add(
			n1 + 5,
			(n2) => {
				add(
					"coucou",
					(n3) => {
						console.log(n3);
					},
					displayError
				);
			},
			displayError
		);
	},
	displayError
);