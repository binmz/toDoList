/*$(document).ready(function () {
  // { time_created: xxx, title, detail }

  $("#addBtn").click(function () {
    const time_created = new Date();
    const title = $(".input-title").val();
    const details = $(".input-details").val();

    $("table tbody").append(`
        <tr class="todo-row">
            <td>${time_created}</td>
            <td>${title}</td>
            <td>${details}</td>
            <td>
                <button>DELETE</button>
            </td>
        </tr>
    `);


  });
});
*/
var addBtn = new Vue({
  el: '.addTodo',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
});
var addTodo = new Vue({
  el: 'tbody',
  methods: {

  },
})
