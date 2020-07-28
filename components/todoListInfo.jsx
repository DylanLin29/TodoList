const TodoListInfo = () => {
	return (
		<div className="todolist-info">
			<div className="container">
				<p>TodoList's Description</p>
				<ul>
					<li>
						This TodoList app allows users to create their daily todos and save
						in the database.
					</li>
					<li>
						These created daily todos can be displayed by using the timeline
						which is based on the due dates or displayed by using cards.
					</li>
					<li>
						Since the todos are specific to each users, users need to either
						login or register before creating the todos.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TodoListInfo;
