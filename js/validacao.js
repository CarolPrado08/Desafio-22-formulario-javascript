function validacao(){
     
   let email = document.getElementById("i_email");
   let nome = document.getElementById("i_nome");
   let data = document.getElementById("i_data");
   let senha = document.getElementById("i_senha");
   let con_senha = document.getElementById("i_con_senha");

   let sty_1 = "2px solid red";  //estilo em vermelho
   let sty_2 = "1px solid gray"; // estilo normal

   input_style(email, sty_1, sty_2)
   input_style(nome, sty_1, sty_2)
   input_style(data, sty_1, sty_2)
   input_style(senha, sty_1, sty_2)
   input_style(con_senha, sty_1, sty_2)
}


function input_style(input, style_1, style_2){

    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;

    }

    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border;
    }
}