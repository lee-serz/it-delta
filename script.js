const imageList = document.getElementById("image-list");

async function getImages() {
  const response = await fetch("http://test-backend.itdelta.agency/api/images");
  const images = await response.json();
  displayImages(images);
}

function displayImages(images) {
  images.forEach((item) => {
    console.log(item);
    imageList.innerHTML += `<div class="image-list__item"> 
      <div class="image-wrapper"><img src=${item.image}></div>
      <p>id: ${item.id}</p>
    </div>`;
  });
}

getImages();
