// Sélectionner les éléments

let inputRecup = document.querySelector("#bloc2 input");
console.log(inputRecup);
let btnAdd = document.getElementById("btnAdd");
console.log(btnAdd);
let ulBase = document.getElementsByClassName("list-group")[0];
console.log(ulBase);



// Fonction qui crée les li avec tout ce qui va avec

let createLi = () => {

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

};


// // Fonction du iTrash, supprime le li quand on clique sur l'icône trash

// Récupérer les iTrash créés




let liRecup = document.getElementsByClassName("list-group-item");
console.log(liRecup);


let trashRemoveLi = (event) => {

    console.log(event.target.parentElement.parentElement);

    event.target.parentElement.parentElement.remove();
    // for (let i = 0; i < liRecup.length; i++) {

    //     ulBase.removeChild(liRecup[i]);
    // };

}




btnAdd.addEventListener("click", () => {

    createLi()

    let iTrash = document.getElementsByClassName("fa-trash-alt");
    console.log(iTrash);

    for (let i = 0; i < iTrash.length; i++) {
        iTrash[i].addEventListener("click", trashRemoveLi);
    };

});

console.log(inputRecup.value);
