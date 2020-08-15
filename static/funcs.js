function populateCityField(){

       let stateSelectValue = document.querySelector('#state').value;
       let citySelect = document.querySelector('#city');
       
       let options = document.querySelectorAll('#option');
       if(options.length > 0){
       options.forEach(option =>{
           citySelect.removeChild(option)
       })
    }
       console.log(options)

       states.estados.forEach(state =>{
          if(state.sigla === stateSelectValue){
                state.cidades.forEach(city =>{
                   let option = document.createElement('option')
                   let optionContent = document.createTextNode(city)
                   option.setAttribute('id','option')
                   option.setAttribute('value',city)
                   option.appendChild(optionContent)
                   citySelect.appendChild(option)
                })
          }
  })
}
