const dogBtn = document.getElementById('dogBtn');
const dogText = document.getElementById('dogText');
const dogImg = document.getElementById('dogImg');


dogBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const proxy = 'https://cors-anywhere.herokuapp.com/'

    const url = `${proxy}https://some-random-api.ml/facts/dog`;
    const imageUrl = `${proxy}https://some-random-api.ml/img/dog`;
    
    try{

    const res = await fetch(url);
    const data = await res.json();
    console.log(data); 
    dogText.innerHTML = data.fact;

    }
    catch(ex){
        console.error(ex);
    }
  
    
  const resImg = await fetch(imageUrl);
  const imgData = await resImg.json();
  console.log(imgData);
  dogImg.src = imgData.link;

});