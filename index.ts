// Partials

type Todo = {
    id: string;
    title: string;
    description: string;
    done: boolean;
};

const TodoOne: Todo = {
    id: '1',
    title: 'haseeb',
    description: 'haseeb bhiya bhiya bhiya akki bhiya',
    done: true
};

type updatedTodo = Partial<Todo>

const TodoTwo: updatedTodo = {
    title: 'Haseeb bhiya',
    done: true
}

console.log(TodoTwo);