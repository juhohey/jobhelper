fetch('https://ec.europa.eu/esco/api/resource/occupation?uri=http://data.europa.eu/esco/occupation/ab7bccb2-6f81-4a3d-a0c0-fca5d47d2775', {
	method: 'get'
}).then(function(response) {
	return response.json()
}).then(function(response) {
	console.log(response._links.hasEssentialSkill.slice(0,8).map((item)=>item.title))
}).catch(function(err) {
	console.error(err)
});

//console.log(response.jobCategories.map((title)=>title.name))
