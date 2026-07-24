function askAI(){

let question=document.getElementById("question").value.toLowerCase();

let answer="Sorry, I don't know that yet.";

if(question.includes("owner")){

answer="The owner of GigaBlocks.ai is Rudransh.";

}

else if(question.includes("bloxd")){

answer="Bloxd.io is a multiplayer sandbox game.";

}

else if(question.includes("hello")){

answer="Hello! Nice to meet you.";

}

else if(question.includes("release")){

answer="Bloxd.io was released in 2021.";

}

document.getElementById("answer").innerHTML=answer;

}
