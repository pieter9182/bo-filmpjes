class colorCard{
    id;
    color;
    addToList;

    constructor(newId, newColor, addToList){
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;
    }

    render(){
        const listItemToBeRendered = document.createElement("li");
        listItemToBeRendered.classList = "colors__color";
        const figureToBeRendered = document.createElement("figure");
        figureToBeRendered.classList = "colors__circle";
        figureToBeRendered.style.background = this.color;
        listItemToBeRendered.appendChild(figureToBeRendered);
        this.addToList.appendChild(listItemToBeRendered);
    }
}

const test = new colorCard(101, "rgba(255,0,0,1)",document.getElementById("js--colors"));
test.render();

