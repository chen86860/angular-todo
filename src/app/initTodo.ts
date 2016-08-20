/**
 * Created by jack on 8/19/16.
 */
export class Init {
  load() {
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
      console.log('no todo found,create....');
      var todos = [
        {
          text: "Pickup kids at shcool"
        },
        {
          text: "Meeting with Boss"
        }, {
          text: "Dinner with wife"
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      return;
    } else {
      console.log('Fond todos');
    }
  }

}
