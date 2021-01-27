const src = "images/test.jpg";
const altText = "Une image";

const htmlSnippetConcat =
	"<li>" + '<img src="' + src + '" alt="' + altText + '">' + "</li>";

const htmlSnippetInterpolation = `<li>
  <img src="${src}" alt="${altText}">
</li>`;

/*******************/

// let isLoading = true;
// let message;
// if (isLoading) {
//   message = 'loading...';
// }
// else {
//   message = 'done';
// }
// console.log(message);

// let isLoading = true;
// let message = 'loading...';
// if (!isLoading) {
//   message = 'done';
// }
// console.log(message);

// let isLoading=true;
// const message = "Data is " + (isLoading ? 'loading...' : 'done');

let isLoading = true;
const message = `Data is ${isLoading ? "loading..." : "done"}`;
