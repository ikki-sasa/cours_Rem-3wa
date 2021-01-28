// const anim = () => 
//     new Promise((resolve, reject) => {
//             setTimeout(() => {
//         const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         const randomNumber = Math.ceil(Math.random() * 9);
//         const randomLetter = letters[Math.floor(Math.random() * 27)];
//         resolve(randomNumber + randomLetter);
//     }, 100);
// });
// // anim().then((res) => console.log(res));

// const getRandomString = async => {
//     let randomString = "";
//     for (let i = 0; i < 10; i++) {
//         randomString += await anim();
//     }
//     return randomString;
// };

// getRandomString().then((res) => {
//     console.log(res);
// });



const anim = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const letters = "ABCDEFGHIJKLMNOPQRSTUVWX";
			const randomNumber = Math.ceil(Math.random() * 9);
			const randomLetter = letters[Math.floor(Math.random() * 24)];
			resolve(randomNumber + randomLetter);
		}, 100);
	});

const getRandomString = async () => {
	let randomString = "";
	for (let i = 0; i < 10; i++) {
		randomString += await anim();
	}
	return randomString;
};

getRandomString().then((res) => {
	console.log(res);
});

