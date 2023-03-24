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
	console.log(forms);
	//var mail ='mailto:sakis530@hotmail?subject='+subject+'&body='+message
	//window.open(mail);

	//var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('emailModal'));
	//modal.hide();
}


	
