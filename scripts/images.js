let projectInterior = document.getElementById('carousel__interior');
let projectComercial = document.getElementById('carousel__comercial');
let projectResidencial = document.getElementById('carousel__residencial');
let projectAmbiente = document.getElementById('carousel__ambiente');
let projectSection = document.getElementsByClassName('projects_carousel');

const newImage = (data) => {
  for (let i = 0; i < data.length; i++) {
    let element = document.createElement('li');
    let event = document.createElement('a');
    let image = document.createElement('img');
    image.setAttribute('src', `${data[i].url}`);
    image.setAttribute('alt', `Project Image ${data[i].id}`);
    event.setAttribute('href', `${data[i].url}`);
    event.setAttribute('data-alt', `Project Image ${data[i].id}`);
    event.setAttribute('data-title', `${data[i].title}`);
    event.setAttribute('data-lightbox', `${data[i].category}`);
    element.setAttribute('class', 'image__slide');

    projectInterior.addEventListener('click', function (e) {
      if (data[i].category === 'interior') {
        console.log(data[i].category);
        projectInterior.setAttribute('href', `${data[i].url}`);
        projectInterior.setAttribute('data-title', `${data[i].title}`);
        projectInterior.appendChild(event);
        projectSection.style.display = 'none';
        event.appendChild(image);
      }
    });

    projectComercial.addEventListener('click', function (e) {
      if (data[i].category === 'comercial') {
        console.log(data[i].category);
        projectComercial.setAttribute('href', `${data[i].url}`);
        projectComercial.setAttribute('href', `${data[i].url}`);
        projectComercial.setAttribute('data-title', `${data[i].title}`);
        projectComercial.appendChild(event);
        projectSection.style.display = 'none';
        event.appendChild(image);
      }
    });

    projectResidencial.addEventListener('click', function (e) {
      if (data[i].category === 'residencial') {
        console.log(data[i].category);
        projectResidencial.setAttribute('href', `${data[i].url}`);
        projectResidencial.setAttribute('data-title', `${data[i].title}`);
        projectResidencial.appendChild(event);
        projectSection.style.display = 'none';
        event.appendChild(image);
      }
    });

    projectAmbiente.addEventListener('click', function (e) {
      if (data[i].category === 'ambiente') {
        console.log(data[i].category);
        projectAmbiente.setAttribute('href', `${data[i].url}`);
        projectAmbiente.setAttribute('data-title', `${data[i].title}`);
        projectAmbiente.appendChild(event);
        projectSection.style.display = 'none';
        event.appendChild(image);
      }
    });
  }
};

newImage(data);
