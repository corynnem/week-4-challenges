let inputs = document.querySelectorAll("input");
let textareas = document.querySelectorAll("textarea");

let allInputs = [...inputs, ...textareas];


const solved = (e, i) => {
  if(e.keyCode === 13 ) {
    inputs[i + 1].focus()
} else if (e.target.value === "") {
    allInputs[i].style = "background-color: #ffadad;";
  } else if(e.target.value === e.target.className && e.target.value !== "") {
    allInputs[i].style = "background-color: #caffbf;";
  } else if(e.target.value === e.target.id) {
    allInputs[i].style = "background-color: #caffbf;";
  } else {
    if (e.target.className === "opencurly") {
      e.target.value === "{"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "closecurly") {
      e.target.value === "}"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "openparen") {
      e.target.value === "("
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "closeparen") {
      e.target.value === ")"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    }  else if (e.target.className === "semicolon") {
      e.target.value === ";"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "strictE") {
      e.target.value === "==="
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "equal") {
      e.target.value === "=="
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "and") {
      e.target.value === "&&"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "or") {
      e.target.value === "||"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "zero") {
      e.target.value === "0"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "length") {
      e.target.value === ".length"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "arrow") {
      e.target.value === "=>"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "openbracket") {
      e.target.value === "["
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "closebracket") {
      e.target.value === "]"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "comma") {
      e.target.value === ","
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    }  else if (e.target.className === "one") {
      e.target.value === "1"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "byId") {
      e.target.value === ".getElementById"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "byClass") {
      e.target.value === ".getElementsByClassName"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "query") {
      e.target.value === ".querySelector"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "main") {
      e.target.value === "'main'" || e.target.value === '"main"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "ul") {
      e.target.value === "'ul'" || e.target.value === '"ul"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "queryAll") {
      e.target.value === ".querySelectorAll" || e.target.value === '.getElementsByTagName'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "p") {
      e.target.value === "'p'" || e.target.value === '"p"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "navs") {
      e.target.value === "'navigation'" || e.target.value === '"navigation"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "flex") {
      e.target.value === "'flex'" || e.target.value === '"flex"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    }else if (e.target.className === "style") {
      e.target.value === ".style"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "display") {
      e.target.value === ".display"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "display") {
      e.target.value === ".display"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "application") {
      e.target.value === "Application"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "application") {
      e.target.value === "Application"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "programming") {
      e.target.value === "Programming"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "interface") {
      e.target.value === "Interface"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "interface") {
      e.target.value === "Interface"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "then") {
      e.target.value === ".then"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "json") {
      e.target.value === ".json()"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "log") {
      e.target.value === ".log"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "addEvent") {
      e.target.value === ".addEventListener"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "sub") {
      e.target.value === "'submit'" || e.target.value === '"submit"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    }  else if (e.target.className === "IT") {
      e.target.value === ".innerText"
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else if (e.target.className === "welcome") {
      e.target.value === "'hello and welcome to my webpage'" || e.target.value === '"hello and welcome to my webpage"'
        ? (allInputs[i].style = "background-color: #caffbf;")
        : (allInputs[i].style = "background-color: #ffadad;");
    } else {
      allInputs[i].style = "background-color: #ffadad;";
    }
  }
};

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener("keyup", (e) => solved(e, i));
}


