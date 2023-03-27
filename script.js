function onClick() {
	window.open('https://www.booking.com/index.el.html?label=gen173nr-1BCAEoggI46AdIM1gEaFyIAQGYAQi4ARfIAQzYAQHoAQGIAgGoAgO4AqOB7aAGwAIB0gIkNzM0ZGI0MmMtNmNjYS00N2IzLTg2YmMtMjkxMDVjMGMwMWE52AIF4AIB&sid=f8a17736a09719e824301069fbb5af1d&keep_landing=1&sb_price_type=total&', '_blank');
				}

function openMap() {
	window.open('https://www.google.com/maps/place/Sinopis,+Serres+621+25/@41.0819851,23.542506,17z/data=!4m6!3m5!1s0x14a9722098d41e09:0xc6ac6558fc4bda5e!8m2!3d41.0819093!4d23.5447556!16s%2Fg%2F1thszg6_', '_blank');
		
				}

function sendEmail() {
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var subject = document.getElementById('subject').value;
	
	var forms = document.querySelectorAll('emailForm');
	var mail ='mailto:sakis530@hotmail?subject='+subject+'&body='+message
	window.open(mail);

	var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('emailModal'));
	modal.hide();
}

function weather(){
	const xhttp = new XMLHttpRequest();

	xhttp.onload = function () {
        weatherObj = JSON.parse(this.responseText);
        let temp = "Temperature: "+ weatherObj.hourly.temperature_2m.slice(-1) + weatherObj.hourly_units.temperature_2m;
        let weatherCode = weatherObj.hourly.weathercode.slice(-1);
        let time = weatherObj.hourly.time.slice(-1);
        let weatherIcon;
        let date = new Date();
        let dateStr = "Date: "+date.toString().split(' ')[0]+" "
        			+date.toString().split(' ')[1]
        			+" "+date.toString().split(' ')[2]
        			+" "+date.toString().split(' ')[3]
        			+" "+date.toString().split(' ')[4];
        			
        if(weatherCode=="0"){
        	weatherIcon='<svg xmlns=\"http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">\
  						<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\
						</svg>';
        }
        if(weatherCode=="1"||weatherCode=="2"||weatherCode=="3"){
        	weatherIcon='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">\
  						<path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>\
  						<path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>\
						</svg>';
        }
        if(weatherCode=="61"||weatherCode=="63"||weatherCode=="65"){
        	weatherIcon='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain-heavy" viewBox="0 0 16 16">\
  						 <path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z"/>\
						 </svg>';
        }
        if(weatherCode=="80"||weatherCode=="81"||weatherCode=="82"){
        	weatherIcon='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-rain" viewBox="0 0 16 16">\
  						<path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>\
						</svg>';
        }

        document.getElementById("temperature").innerHTML = temp;
        document.getElementById("weathericon").innerHTML = weatherIcon;
        document.getElementById("time").innerHTML = dateStr;
        console.log(date)
    }

    xhttp.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=41.09&longitude=23.54&hourly=temperature_2m,weathercode&timezone=auto");
    xhttp.send();

	fetch("https://api.open-meteo.com/v1/forecast?latitude=41.09&longitude=23.54&hourly=temperature_2m,weathercode&timezone=auto")
   .then((response) => response.json())
   .then((json) => console.log(json));
}
	
