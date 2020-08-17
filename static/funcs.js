function populateCityField(){

       let stateSelectValue = document.querySelector('#state').value;
       let citySelect = document.querySelector('#city');
       let options = document.querySelectorAll('#option');
      
       if(options.length > 0){
       options.forEach(option =>{
           citySelect.removeChild(option);
       })
    }
       console.log(options);

       states.estados.forEach(state =>{
          if(state.sigla === stateSelectValue){
                state.cidades.forEach(city =>{
                   let option = document.createElement('option');
                   let optionContent = document.createTextNode(city);
                   option.setAttribute('id','option');
                   option.setAttribute('value',city);
                   option.appendChild(optionContent);
                   citySelect.appendChild(option);
                })
          }
  })
}

function populateStateField(){
    let stateSelect = document.querySelector('#state');
    states.estados.forEach(state =>{
         let option = document.createElement('option');
         let optionContent = document.createTextNode(state.nome);
         option.appendChild(optionContent);
         option.setAttribute('value',state.sigla);
         stateSelect.appendChild(option);
    })
}
