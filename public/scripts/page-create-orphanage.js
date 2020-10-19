// CREATE MAP
const map = L.map("mapid").setView([-19.9268709, -43.9565082], 15);

// CREATE AND ADD TITLELAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// CREATE ICON
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// CREATE AND ADD MARKER
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // REMOVE ICON
    marker && map.removeLayer(marker)

    // ADD ICON LAYER
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// ADD PHOTO FIELD
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone ou a duplicação
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo esta vazio, se estiver não adicionar uma nova box com o campo vazio
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }
    // limpar o campo antes de adicionar uma nova box
    input.value = ""
    // adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer) 
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldContainer = document.querySelectorAll('.new-upload')

    if(fieldContainer.length < 2){
        //limpar o valor do campo do
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo inteiro
    span.parentNode.remove(); 
}

//troca do sim e nao
function toggleSelect(event) {
    
    //retirar a classe active dos dois botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}  