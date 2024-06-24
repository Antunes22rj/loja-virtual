

function abrirModal() {
    const modal = document.querySelector('#janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' ||e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}



function criarCard() {
    const nome = document.getElementById('nome').value;
    const imagemInput = document.getElementById('imagem');
    const imagem = imagemInput.files[0];
    const valor = document.getElementById('valor').value;
    const descriçao = document.getElementById('descriçao').value;


    const P = document.getElementById('P').value
    const M = document.getElementById('M').value
    const G = document.getElementById('G').value
   
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const imagemBase64 = e.target.result;
      const imagemURL = URL.createObjectURL(imagem);
  
      const card = document.createElement('div');
      card.className = 'cards';
  
      const img = document.createElement('img');
      img.src = imagemURL;
      img.alt = 'imagem das roupas';

      const h1 = document.createElement('h1');
      h1.textContent = nome;
      
      const h4 = document.createElement('h1');
      h4.textContent = `(${P}) (${M}) (${G})`;
      
      
      const h3 = document.createElement('h1');
      h3.textContent = `R$${valor},00`;
      
      const p = document.createElement('h1');
      p.textContent = descriçao;

      card.appendChild(img);
      card.appendChild(h1);
      card.appendChild(h4);
      card.appendChild(h3);
      card.appendChild(p);
  
      const pecasDiv = document.querySelector('.Container-card-1');
      pecasDiv.appendChild(card);

    document.getElementById('formulario').reset();
    };
  
    reader.readAsDataURL(imagem);
  }