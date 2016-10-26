function enterComment() {
  //make inputs into variables
  var userName=document.getElementById("userName").value
  var userComment = document.getElementById("userComment").value


//create text nodes
  var nameText = document.createTextNode("Super Hero: " + userName)
  var commentText = document.createTextNode("Super Power: " + userComment)


//create new elements(li, h1, h2) var and add text nodes to them
  var newLiItem = document.createElement("li")
  var nameH2 = document.createElement("h2")
    nameH2.appendChild(nameText)
  var commentH2 = document.createElement("h2")
    commentH2.appendChild(commentText)

//add elements to li element
  newLiItem.appendChild(nameH2)
  newLiItem.appendChild(commentH2)

//add li elemnts to "List"
  document.getElementById("list").appendChild(newLiItem)
}





