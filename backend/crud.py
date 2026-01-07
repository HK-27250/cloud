from sqlalchemy.orm import Session
from models import Todo

def get_todos(db: Session):
    return db.query(Todo).all()

def create_todo(db: Session, title: str):
    todo = Todo(title=title)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo

def toggle_todo(db: Session, todo_id: int):
    todo = db.query(Todo).get(todo_id)
    todo.completed = not todo.completed
    db.commit()
    return todo
