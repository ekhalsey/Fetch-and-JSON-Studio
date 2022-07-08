window.addEventListener('load', function () {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then((json) => {
            let container = document.getElementById('container');
            console.log(json);
            json.sort(function(a, b){return b.hoursInSpace - a.hoursInSpace});
            let counter = 0;
            
            for(let i = 0; i < json.length; i++) {
                counter++;

                container.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Skills: ${json[i].skills.join(', ')}</li>
                            <li id='active'>Active: ${json[i].active}</li>
                        </ul>
                    </div>
                    <img src=${json[i].picture} class="avatar">
                    </div>
                `
                // let activeTrue = document.querySelector('active').value;
                //     if (activeTrue === true) {
                //         activeTrue.style.color = 'green';
                //     }
            }
            container.innerHTML += `<div>Number of Astronauts: ${counter}</div>`
            
        })
    })
})
