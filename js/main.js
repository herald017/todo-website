var app = new function() {
    this.list = document.getElementById('tasks');
    this.tasks = [];

    this.fetchAll = function() {
        var data = '';
        console.log('tasks')

        

        if(this.tasks.length > 0) {
            for(i = 0; i < this.tasks.length; i++) {
                data += '<tr class="task__list">';
                data += '<td class="btn-edit-td"><button onclick = "app.Edit('+ i +')" class = "btn btn-edit">Edit</button></td>';
                data += '<td><button onclick = "app.Delete('+ i +')" class = "btn btn-delete">Delete</button></td>';
                data += '<td class="task__item">' + ' &nbsp;' + (i+1) + '. ' + this.tasks[i] + '</td>';
                data += '</tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.list.innerHTML = data
    };
    this.Add = function() {
        list = document.getElementById('add-todo');
        var task = list.value;
        if(task) {
            this.tasks.push(task.trim());
            list.value = '';
            this.fetchAll();
        }
    };
    this.Edit = function(item) {
        list = document.getElementById('edit-todo');
        list.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'inline-block';
        self = this;

        document.getElementById('save-edit').onsubmit = function() {
            var task = list.value;
            if(task) {
                self.tasks.splice(item, 1, task.trim());
                self.fetchAll();
                closeInput();
            }
        }
    };
    this.Delete = function(item) {
        this.tasks.splice(item, 1)
        this.fetchAll();

    };

    this.Count = function(data) {
        var list = document.getElementById('counter');
        var name = 'Tasks';
        if(data) {
            if(data == 1) {
                name = 'Task';

            }
            list.innerHTML = data;
        }
        else {
            list.innerHTML = " No "+ name;
        }
    };

}

app.fetchAll(); 

function closeInput() {
    document.getElementById('edit-box').style.display = 'none';
}
