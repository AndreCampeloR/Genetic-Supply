// =========== parte superior =========
function active()
{
    let listasecundaria = document.getElementById('listasecundaria');
    listasecundaria.classList.remove('desative') 
    listasecundaria.classList.add('active') 
}
function desative()
{
    let listasecundaria = document.getElementById('listasecundaria');
    listasecundaria.classList.remove('active') 
    listasecundaria.classList.add('desative') 
}
let emailLogin = document.getElementById('email');
let senhaLogin = document.getElementById('senha');
let figure = document.querySelector('#imagemMacaco');

function alterarEmail() {
    figure.classList.remove('imgInicial');
    figure.classList.add('imgemail');
 };
 function alterarSenha() {
    figure.classList.remove('imgemail');
    figure.classList.add('imgSenha');
 }

let criar = document.querySelector('#criar');
let nome = document.querySelector('#nome');
let senha = document.querySelector('#senhaCadastro');
let r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*@#&])[0-9a-zA-Z*@#&]{8,}$/                                                                    
// function senhaCerta(){
//     criar.classList.remove('BtnDireita');
//     criar.classList.remove('BtnEsquerda');
// }
    // alert(`Bem vindo ${nome.value} Cadastro efetuado com sucesso`);

function fugaDireita(){
    criar.addEventListener("mouseover", function(){
        criar.classList.remove('BtnEsquerda')
        criar.classList.add('BtnDireita') 
        fugaEsquerda();
    })
    }
    function fugaEsquerda(){
        criar.addEventListener("mouseover", function(){
            criar.classList.remove('BtnDireita');
            criar.classList.add('BtnEsquerda')
            fugaDireita();
        })
            
        } 
        $(senha).keydown(function() {
            if (senha.value.match(r)) {
                senha.classList.remove('error');
                senha.classList.add('certo');
                criar.classList.remove('BtnDireita');
                criar.classList.remove('BtnEsquerda');
                
                // senhaCerta();
                
                
            }  else { erro();
            } 
            
            
        });
      function erro(){
          senha.classList.remove('inicial')
          senha.classList.add('error');
          fugaDireita();
      }
        
        // $(senha).change( function() {
        //   });






        // $(senha)
        // .on('keydown', function () {
        //   // ADICIONA O EVENTO QUANDO O MOUSE ESTA SOBRE O ELEMENTO
        //   $(this).on('dblclick', function () {
        //     // ZOOM IN FUNCTION HERE.. 
        //   })
        // })
        // .on('mouseLeave', function () {
        //   // REMOVE O EVENTO QUANDO O MOUSE SAI DO ELEMENTO
        //   $(this).off('dblclick');
        // })

        