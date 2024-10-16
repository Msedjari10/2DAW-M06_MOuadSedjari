let calculo: string = "";
let display: HTMLElement = document.getElementById("display") as HTMLElement;
const button: NodeListOf<HTMLButtonElement> = document.querySelectorAll<HTMLButtonElement>
('.numero, .op, .resultado');


button.forEach(button =>{
    button.addEventListener('click', () => {
        const buttonId: string = button.id;
        
            if (button.id == "clear") {
            calculo = "";
            }
             
            else if (button.id == "delete") {
            let string: string = calculo.toString();
            calculo = string.substring(0, string.length - 1);  
            } 

            else if (calculo != "" && button.id == "equal") {
            
            try{
              calculo = eval(calculo);
            }
             
            catch(error){
              calculo = "error";
            }            
           
           
            }
            else if (calculo == "0" || calculo == "error"){
              calculo = buttonId;
            } 
            else if (calculo == "" && button.id == "equal") {
            calculo = "Null";
            
            setTimeout(() => (calculo = ""), 10);  
            } 
          
            else {
            calculo += button.id;
            }
            display.innerText = calculo;
    });
});