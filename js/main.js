function updateState(state, newData) {
    Object.assign(state, newData);
}
  
function loop(selector, fn) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length ; i = i + 1 ) {
        fn(elements[i]);
    }
}
  
  function Framework(element, defaultData) {
    const state = defaultData;
    
    function render(data) {
  
      loop('[data-template]', elm => {
  
        // Отрисовать внутри элемента соответствующий темплейт
        // Соответствующий темплейт можно найти по атрибуту id
  
      });
  
      loop('[data-text]', elm => {
        const key = elm.dataset.text;
        elm.innerText = data[key];
      });
  
    }
    
    function update(data) {
      updateState(state, data);
      render(state);
    }
    
    render(state);
    
    return update;
  }
  
  Framework(
    document.querySelector('#app'),
    {
      title: 'My Second Framework',
      msg: 'My personal Twitter is here!',
      date: Date().slice(4, 24)
    }
  );