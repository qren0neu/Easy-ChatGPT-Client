from fastapi import FastAPI
from server.api import router
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

# 验证环境变量是否正确加载



app = FastAPI()

# CORS
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

# 添加根目录的处理函数
@app.get("/")
async def read_root():
    return {"message": "Welcome to the Chat API"}