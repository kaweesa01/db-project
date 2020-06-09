const edit = document.querySelectorAll(".edit");
const delbtn = document.querySelectorAll(".delete");
const idDiv = document.querySelector(".id-selector");
const updatebtn = document.querySelector(".update");
const store = document.querySelector(".strbtn");
const idField = document.querySelector(".id-field");
const titleField = document.querySelector(".title-field");
const memoryField = document.querySelector(".memory-field");
const formContainer = document.querySelector(".form-container");
//*********/////////*  Updating memory */

edit.forEach((btn) => {
  btn.addEventListener("click", () => {
    let id = btn.getAttribute("data-id");
    let title = btn.parentElement.parentElement.firstElementChild.querySelector(
      "span"
    ).textContent;
    let memory = btn.parentElement.parentElement.parentElement.querySelector(
      ".memory p"
    ).textContent;

    formContainer.innerHTML = `
      <form class="form-group ml-4 mr-4" action="/update" method="POST">
      <legend>Note Memory:</legend>

      <div class="form-group id-selector">
          <label class="form-control-label" for="id">Id:</label>
          <input type="text" value="${id}" name="id" class="form-control id-field" id="id" readonly>
      </div>

      <div class="form-group ">
          <label class="form-control-label" for="title">Title:</label>
          <input type="text" value="${title}" name="title" class="form-control title-field" id="title">

      </div>
      <div class="form-group">
          <label for="memory">Memory:</label>
          <textarea class="form-control memory-field" name="memory" id="memory" wrap="hard"
              rows="5">${memory}</textarea>
      </div>
      <input type="submit" class="store update saver" value="Save">
  </form>
      
      `;
    const saver = document.querySelector(".saver");
    console.log(saver);
    saver.addEventListener("click", () => location.reload(true));
  });
});

///////*******************Deleting Memory */

delbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let id = btn.getAttribute("data-id");

    formContainer.innerHTML = `
        <form class="form-group ml-4 mr-4" action="/delete" method="POST">
        <legend>Note Memory:</legend>
  
        <div class="form-group id-selector">
            <label class="form-control-label" for="id">Id:</label>
            <input type="text" value="${id}" name="id" class="form-control id-field" id="id" readonly>
        </div>
  
        <div class="alert alert-success">
        <strong>Do you want to delete selected Memory</strong> 
      </div>

        <input type="submit" class="store update " value="Yes">
        
     <button type="button" style="margin-left:20px;" class=" store bg-info refresher">No</button>
       </form>
        `;

    const refresher = document.querySelector(".refresher");
    console.log(refresher);
    refresher.addEventListener("click", () => location.reload(true));
  });
});

////******************Making the buttons to refresh  the page */
