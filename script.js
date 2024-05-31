//your JS code here. If required.
let ans = document.getElementById('output');

const promises = [
	new Promise((resolve)=>{
		const time = Math.floor(Math.random() * 3+1) * 1000;
		setTimeout(()=>{
			resolve({name: "Promise 1", time: time/1000})
		}, time);
	}),
	new Promise((resolve)=>{
		const time = Math.floor(Math.random() * 3+1) * 1000;
		setTimeout(()=>{
			resolve({name: "Promise 2", time: time / 1000})
		}, time);
	}),
	new Promise((resolve)=>{
		const time = Math.floor(Math.random() * 3+1) * 1000;
		setTimeout(()=>{
			resolve({name: "Promise 3", time: time / 1000})
		}, time);
	}),
];

async function callFunc(){
	const start = new Date();

	ans.innerHTML += `
		<tr id="loading">
			<td colspan=2>Loading...</td>
		</tr>
		`;
	await Promise.all(promises)
	.then((results)=>{
		ans.innerHTML = ``;
		results.forEach((e)=>{
			ans.innerHTML += `
				<tr>
					<td>${e.name}<td>
					<td>${e.time}<td>
				</tr>
				`;
		});
	})
	.catch((error)=>{
		console.log(error);
	});

	const end = new Date();
	let timeInmilisec = end-start;

	ans.innerHTML += `
		<tr>
			<td>Total</td>
			<td>${timeInmilisec / 1000}</td>
		</tr>
		`;
}

callFunc();

