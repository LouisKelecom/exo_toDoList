// Sélectionner les éléments

let inputRecup = document.querySelector("#bloc2 input");
console.log(inputRecup);
let btnAdd = document.getElementById("btnAdd");
console.log(btnAdd);
let ulBase = document.getElementsByClassName("list-group")[0];
console.log(ulBase);


btnAdd.addEventListener("click", () => {


    let liCree = document.createElement("li"); // Créer un li
    liCree.classList.add("list-group-item", "d-flex"); // Ajouter les class au li

    ulBase.appendChild(liCree); // Ajouter liCree dans le ul

    let pCree = document.createElement("p"); // Créer un p
    pCree.classList.add("m-0", "mr-auto"); // Ajouter les class au p

    liCree.appendChild(pCree); // Ajouter le pCree dans le li

    let textInput = document.createTextNode(inputRecup.value); // Récupérer le contenu de l'input
    pCree.appendChild(textInput); // Ajouter le contenu de l'input de le p

    let spanCree = document.createElement("span"); // Créer un span
    liCree.appendChild(spanCree); // Ajouter le spanCree dans le li

    let iCheck = document.createElement("i"); // Créer le iCheck
    iCheck.classList.add("fas", "fa-check-circle", "fa-sm", "mr-1"); // Ajouter la class au iCheck
    spanCree.appendChild(iCheck); // Ajouter le iCheck dans le spanCree

    let iEdit = document.createElement("i"); // Créer le iEdit
    iEdit.classList.add("fas", "fa-edit", "fa-sm", "mr-1"); // Ajouter la class au iEdit
    spanCree.appendChild(iEdit); // Ajouter le iEdit dans le spanCree

    let iTrash = document.createElement("i"); // Créer le iTrash
    iTrash.classList.add("fas", "fa-trash-alt", "fa-sm"); // Ajouter la class au iTrash
    spanCree.appendChild(iTrash); // Ajouter le iTrash dans le spanCree

    inputRecup.value = ""; // Remettre l'input vierge

    // Exo delete 

    iTrash.addEventListener("click", () => {
        liCree.remove();
    })


    // Exo check

    iCheck.addEventListener("click", () => {
        liCree.classList.toggle("li-bg-green");
    })

    // Exo edit

    iEdit.addEventListener("click", () => {

        // Récupère le texte du paragraphe du li créé
        let recupTextP = document.getElementsByClassName("m-0", "mr-auto")[1].innerText;
        console.log(recupTextP);

        // On cache le p avec une class d-none
        pCree.classList.add("d-none");

        // On crée un input
        let newInput = document.createElement("input");
        
        // On ajoute la class m-0 et mr-auto
        newInput.classList.add("m-0", "mr-auto");
        
        // On donne la valeur de recupTextP au nouvel input
        newInput.value = pCree.textContent;
        
        // On ajoute l'input au li
        liCree.insertBefore(newInput, spanCree);
        console.log(newInput.value);

        // On ajoute la classe d-none à iCheck, iTrash et iEdit
        iCheck.classList.add("d-none");
        iTrash.classList.add("d-none");
        iEdit.classList.add("d-none");

        // On crée une icône iSave
        let iSave = document.createElement("i"); // Créer le iSave
        iSave.classList.add("fas", "fa-save", "fa-sm", "mr-1"); // Ajouter la class au iSave
        spanCree.appendChild(iSave); // Ajouter le iSave dans le spanCree


        // On crée une fonction qui enregistre la nouvelle valeur du paragraphe
        let saveNewText = () => {
            
            // On supprime l'input
            newInput.remove();
            pCree.classList.remove("d-none");
            pCree.textContent = newInput.value;
            console.log(pCree.textContent);

            // On supprime l'icône iSave et on enlève la class d-none aux autres icônes
            iSave.remove();

            iCheck.classList.remove("d-none");
            iTrash.classList.remove("d-none");
            iEdit.classList.remove("d-none");
        }

        iSave.addEventListener("click", saveNewText);
    })

});
