var ul = document.getElementById("ule")
var form = document.getElementById("from")
var i = 1;

nomReg = /^([A-Za-z]+)$/
telReg = /^(0[67][0-9]{8})$/





function ajouter(){
    i++;
    var s = document.createElement('li')
    s.textContent = 'Elément N°' + i
    ul.append(s)

    var sup = document.createElement('a')
    sup.textContent = " Supprimer"
    s.append(sup)

    sup.onclick= function(){
        ul.removeChild(this.parentNode)
        i--;
    }

}

function valider()
{
    
        if (nomReg.test(form.nom.value)) 
        {
            form.nom.classList.remove('inputError')
            form.nom.classList.add('inputSuccess')

            form.nom.nextElementSibling.style.display = 'none'

        }
        else{
            form.nom.classList.add('inputError');
            form.nom.classList.remove('inputSuccess');

            form.nom.nextElementSibling.style.display = 'inline-block'
 

        }


        if (nomReg.test(form.prenom.value)) 
        {
            form.prenom.classList.remove('inputError')
            form.prenom.classList.add('inputSuccess')

            form.prenom .nextElementSibling.style.display = 'none'

        }
        else{
            form.prenom.classList.add('inputError');
            form.prenom.classList.remove('inputSuccess');

            form.prenom.nextElementSibling.style.display = 'inline-block'
        }

        tels = document.getElementsByClassName("tel")
        
        for(i of tels){
        if (telReg.test(i.value)) 
        {
            i.classList.remove('inputError')
            i.classList.add('inputSuccess')

            i.nextElementSibling.style.display = 'none'

        }
        else{
            i.classList.add('inputError');
            i.classList.remove('inputSuccess');

            i.nextElementSibling.style.display = 'inline-block'
        }
        }
} 

function Ajoutertelephon (){
    var div = document.createElement('div')
    form.append(div)

    var lable = document.createElement('label')
    lable.textContent = 'telephone '
    div.append(lable)

    var inp = document.createElement('input')
    inp.type ="tel"
    inp.setAttribute('class','tel')
    div.append(inp)

    var Supprimer = document.createElement('a')
    Supprimer.textContent = ' Supprimer'
    div.append(Supprimer)
    
    Supprimer.onclick= function(){
        form.removeChild(this.parentNode)
    }
    
}