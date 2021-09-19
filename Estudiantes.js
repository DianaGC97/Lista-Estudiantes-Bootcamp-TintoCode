let students = []

function addElement() {
  let Name = document.getElementById("Name").value
  let LastName = document.getElementById("LastName").value
  let Age = document.getElementById("Age").value
  let Email = document.getElementById("Email").value
  let Phone = document.getElementById("Phone").value

  if (Name && LastName && Age && Email && Phone) {
    students.push({
      nombre: Name,
      apellido: LastName,
      edad: Age,
      correo: Email,
      telefono: Phone,
    })
    ListStudent()
    storage()
  }
}

function ListStudent() {
  let html = ""
  students.forEach((i, index) => {
    html += `<div class="row">
            <div class="col" > ${i.nombre} </div>
            <div class="col" > ${i.apellido} </div>
            <div class="col" > ${i.edad} </div>
            <div class="col" > ${i.correo} </div>
            <div class="col" > ${i.telefono} </div>
            <div class="col" > <button type="button" onclick="deleteList(${index})" class="btn btn-danger" > X </button></div>
            </div>`
  })
  document.getElementById("list").innerHTML = html
}

function deleteList(index) {
  students.splice(index, 1)
  ListStudent()
}

function storage() {
  localStorage.setItem("lista", JSON.stringify(students))
}
