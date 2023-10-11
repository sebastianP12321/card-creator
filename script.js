document.querySelector(".submitButton").value = "send me!";
let canvas = document.querySelector(".images");
let IDnumber = 0;

//active/inactive variables
let textChange = 0;
let imageChange = 0;
let removeAllower = false;

const names = [];

//frame constructor
function imageCreator() {
  if (document.querySelector(".link").value === "") {
    alert("link can't be empty!");
  } else {
    // define frame
    const frame = document.createElement("div");
    frame.classList.add("frame");

    //define ID number
    let frameID = prompt("select a name for the card:");

    //set frameID and create frame
    frame.setAttribute("id", frameID);
    names.push(frameID);
    canvas.appendChild(frame);

    //define image and add image to frame
    const link = document.querySelector(".link").value;
    const image = document.createElement("img");
    image.setAttribute("id", frameID + ".img");
    image.src = link;
    document.getElementById(frameID).appendChild(image);

    let cardName = document.createElement("p");
    cardName.classList.add("cardName");
    cardName.textContent = frameID;
    document.getElementById(frameID).appendChild(cardName);

    //define and create submit
    let textContent = prompt("please fill in card details here");
    let textArea = document.createElement("p");
    textArea.setAttribute("id", frameID + ".txt");
    textArea.setAttribute("class", "textArea");
    textArea.textContent = textContent;
    document.getElementById(frameID).appendChild(textArea);
    document.querySelector(".link").value = "";

    IDnumber++;
  }
}

function removeFirst() {
  document.getElementById(names[0]).remove();
  names.shift();
}
function removeLast() {
  document.getElementById(names[names.length - 1]).remove();
  names.pop();
}
function remove() {
  if (event.target.className == "frame" && removeAllower == true) {
    event.target.remove();
    document.querySelector(".warning").remove();
    removeAllower = false;
  }
}

document.querySelector(".submitButton").addEventListener("click", imageCreator);

document.querySelector(".removeFirst").addEventListener("click", removeFirst);
document.querySelector(".removeLast").addEventListener("click", removeLast);
document
  .querySelector(".removeSelected")
  .addEventListener("click", function () {
    if (removeAllower == true) {
      document.querySelector(".warning").remove();
      removeAllower = false;
    } else {
      removeAllower = true;
      if (!document.querySelector(".warning")) {
        let warning = document.createElement("p");
        warning.classList.add("warning");
        warning.textContent = "card deletion enabled";
        document.querySelector(".sidebar").appendChild(warning);
      }
    }
  });
document.querySelector("body").addEventListener("click", remove);
