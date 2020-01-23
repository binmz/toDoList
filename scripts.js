$(document).ready(function() {
  const TODO_LIST = []; // { time_created: xxx, title, detail }

  $("#addBtn").click(function() {
    const time_created = new Date();
    const title = $(".input-title").val();
    const details = $(".input-details").val();

    TODO_LIST.push({
      time_created,
      title,
      details
    });

    $("table tbody").append(`
        <tr class="todo-row">
            <td>${time_created}</td>
            <td>${title}</td>
            <td>${details}</td>
            <td>
                <button>EDIT</button>
            </td>
        </tr>
    `);

    $(".todo-row > td > button").unbind();
    $(".todo-row > td > button").click(function() {
      const table_row = this.closest("tr");
      const row_key = table_row["rowIndex"];

      console.log(TODO_LIST[row_key - 1]);
    });
  });
});
