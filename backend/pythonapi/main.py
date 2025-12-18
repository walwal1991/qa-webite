from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
from passlib.context import CryptContext

# Initialize FastAPI app
app = FastAPI()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["user_db"]
users_collection = db["users"]

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# User model
class User(BaseModel):
    name: str
    email: EmailStr
    password: str

@app.post("/register")
def register_user(user: User):
    # Check if email already exists
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash password
    hashed_password = pwd_context.hash(user.password)

    # Create user document
    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    }

    # Insert into MongoDB
    users_collection.insert_one(new_user)

    return {"message": "User registered successfully"}
