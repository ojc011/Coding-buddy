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
     /*  if(select.option == view){
           post.style.display = "block";
        } else 
        style.display = "none"; */
     
    }
  
    document.querySelector('#language-form').addEventListener('submit', languageHandler);