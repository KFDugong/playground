function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const names = ['Sertan', 'Yejay', 'Vasiliki', 'Rodrigro', 'Marcus', 'Andy', 'Bella', 'Nastia', 'Stefan', 'Orlando', 'Juri', 'Kelvin'];
const roles = [
	'Chef Flambe',
	'Constable Crumbly',
	'Doctor Rash',
	'Dusty Tomes',
	'Flicka Broome',
	'Major Clanger',
	'Max Cruise',
	'Ms Trinian',
	'Noah Sinner',
	'Phyllis Ora',
	'Professor Pi',
	'Rowan Weeds',
];

class roleDistribution {
	constructor(name, role) {
		this.name = name;
		this.role = role;
	}
}

function shuffleRoles() {
	const shuffledNames = shuffleArray(names);
	const shuffledRoles = shuffleArray(roles);
	let entry = [];
	for (let i = 0; i < names.length - 1; i++) {
		entry.push(new roleDistribution(shuffledNames[i], shuffledRoles[i]));
	}
	console.log(entry);
}

shuffleRoles();
