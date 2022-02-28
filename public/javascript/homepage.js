


async function languageHandler(event) {
    event.preventDefault();

	var select = document.getElementById('languages');
	var option = select.options[select.selectedIndex].value;


    const response = await fetch(`/${option}`, {
        method: 'get',

        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log(response);
      } else {
        alert(response.statusText);
      }  
    }



  
    document.querySelector('#language-form').addEventListener('submit', languageHandler);

    anime({
      targets: '#title path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 4000,
      delay: function(el, i) { return i * 1000 },
      direction: 'alternate',
      loop: true
    });