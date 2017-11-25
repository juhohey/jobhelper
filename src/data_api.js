// API's

// ESCO's API
// API - get 7 essential skills for occupation (this ex. - 'Industrial Designer')


/* fetch( {
	method: 'get'
}).then(function(response) {
	return response.json()
}).then(function(response) {
	console.log(response._links.hasEssentialSkill.slice(0,8).map((item)=>item.title))
}).catch(function(err) {
	console.error(err)
});
 */
// Duunitori's API
// API - get total number of jobs in the city
var city = 'Lappeenranta'

fetch(`https://duunitori.fi/api/v1/5d3fc27dec93f5e5105e3443edfc421bb57c3603/jobentries?apply=&applyclicks_sum__gte=&applyclicks_sum__lte=&applyclicks_target_met=&area=${city}&company=&company_code=&date_created_after=&date_created_before=&days_left__gte=&days_left__lte=&format=json&pageviews_sum__gte=&pageviews_sum__lte=&pageviews_target_met=&publish_level=&search=&search_also_descr=&source=&tag=&targets_met=`, {
    method: 'get'
}).then(function (response) {
    return response.json()
}).then(function (response) {
    console.log(response)
}).catch(function (err) {
    console.error(err)
});

function call(url) {

    return new Promise((resolve, reject) => {

        fetch(url, {
            method: 'get'
        }).then(function (response) {
            return response.json()
        }).then(function (response) {
            resolve(response)
        }).catch(function (err) {
            reject(err)
        });
    })
}


function skillsByOccupation(occupation) {

    return new Promise((resolve, reject) => {

        const ecURL = `https://ec.europa.eu/esco/api/search/?text=${occupation}&type=occupation&facet=type&limit=1&offset=1`

        call(ecURL)
            .then(response => {
                console.log(response);
                const skillListURI = `https://ec.europa.eu/esco/api/resource/occupation?uri=${response._embedded.results[0].uri}`
                call(skillListURI)
                    .then(response => {
                        console.log('RES', response._links.hasEssentialSkill.slice(0, 8).map((item) => item.title));
                    })
            })
    })
}

function occupationByCompetence(skill) {

    return new Promise((resolve, reject) => {
        const ecURL = `https://ec.europa.eu/esco/api/search/?text=${skill}&type=skill&facet=type&limit=1&offset=1`

        call(ecURL)
            .then(response => {
                console.log(response);
                const skillListURI = `https://ec.europa.eu/esco/api/resource/skill?uri=${response._embedded.results[0].uri}`
                call(skillListURI)
                    .then(response => {
                        const occupations = (response._links.isOptionalForOccupation || []).concat(response._links.isEssentialForOccupation || [])
                        console.log('RES', );
                        resolve(occupations.map(occupation => occupation.title))
                    })
            })
    })
}

export const getSkillsByOccupation = skillsByOccupation
export const getOccupationByCompetence = occupationByCompetence
