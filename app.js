const katBtn = document.getElementById('katBtn');
const katText = document.getElementById('katText');
const katImg = document.getElementById('katImg');

// const firstNameInput = document.getElementById('firstName');
// const lastNameInput = document.getElementById('lastName');

katBtn.addEventListener('click', async (e) => {
    e.preventDefault()
 
    // const firstName = firstNameInput.value || 'Chuck';

    // const lastName = lastNameInput.value || 'Norris';
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const imageUrl = `${proxy}https://some-random-api.ml/img/cat`

    const url = `https://catfact.ninja/fact`;
    
    try{

    const res = await fetch(url);
    const data = await res.json();
    console.log(data); 
    katText.innerHTML = data.fact;

    }
    catch(ex){
        console.error(ex);
    }

    const resImg = await fetch(imageUrl);
    const imgData = await resImg.json();
    console.log(imgData);
    katImg.src = imgData.link;
  
    
  
});