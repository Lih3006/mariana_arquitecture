

/* 
const imageModel = {
    id: 19,
    name: 'image54',
    url: '../images/gallery/Residencial/residencial_(54).jpg',
    category: 'residencial'
}

const createElements = (model, quantity) => {
    const newElements=[];

    for (let i = 54; i<=quantity; i++){
        const newElement = {...model};
        newElement.id = i
        newElement.name = model.name.replace('54',`${i}`);
        newElement.url = model.url.replace('(54)',`(${i})`);
        newElements.push(newElement)
    }

    return newElements
}

const result = createElements(imageModel, 69) */



//let projectList = document.getElementById('list__projects')
let projectInterior = document.getElementById('carousel__interior')
let projectComercial = document.getElementById('carousel__comercial')
let projectResidencial = document.getElementById('carousel__residencial')
let projectAmbiente = document.getElementById('carousel__ambiente')




const newImage = (data) =>{
    for( let i = 0 ; i < data.length; i++){
        let element = document.createElement('li');
        let event = document.createElement('a');
        let image = document.createElement('img');
        image.setAttribute('src',`${data[i].url}`)
        image.setAttribute('alt',`Project Image ${data[i].id}`)
        event.setAttribute('href',`${data[i].url}`)
        event.setAttribute('data-alt',`Project Image ${data[i].id}`)       
        event.setAttribute('data-title',`${data[i].category}`)
        event.setAttribute('data-lightbox', `${data[i].category}`)
        element.setAttribute('class','image__slide')
        

        projectInterior.addEventListener('click', function(e){          
            if (data[i].category === 'interior'){
                console.log(data[i].category)
            projectInterior.setAttribute('href',`${data[i].url}`)
            projectInterior.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)}
        })       
       
        projectComercial.addEventListener('click', function(e){          
            if (data[i].category === 'comercial'){
                console.log(data[i].category)
            projectComercial.setAttribute('href',`${data[i].url}`)
            projectComercial.setAttribute('href',`${data[i].url}`)
            projectComercial.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)}
        }) 


        projectResidencial.addEventListener('click', function(e){          
            if (data[i].category === 'residencial'){
                console.log(data[i].category)
            projectResidencial.setAttribute('href',`${data[i].url}`)
            projectResidencial.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)}
        }) 


        projectAmbiente.addEventListener('click', function(e){         
            if (data[i].category === 'ambiente'){
                console.log(data[i].category)
            projectAmbiente.setAttribute('href',`${data[i].url}`)
            projectAmbiente.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)}
        }) 
        
        /* if (data[i].category === 'comercial'){
            projectComercial.setAttribute('href',`${data[i].url}`)
            projectComercial.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)
        }
        if (data[i].category === 'residencial'){
            projectComercial.setAttribute('href',`${data[i].url}`)
            projectResidencial.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)
        }
        else{
            projectAmbiente.appendChild(event)
        //element.appendChild(event)
            event.appendChild(image)
        } */


        //projectList.appendChild(event)
        //element.appendChild(event)
        //event.appendChild(image)
    }
}


newImage(data)




