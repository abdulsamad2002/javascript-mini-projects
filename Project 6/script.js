const insert = document.getElementById("insert")

window.addEventListener('keydown', function(eveObj){
    insert.innerHTML = `<div class = "color" >
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${eveObj.key}</td>
      <td>${eveObj.keyCode}</td>
      <td>${eveObj.code}</td>
    </tr>
    </table>
    </div>`
})