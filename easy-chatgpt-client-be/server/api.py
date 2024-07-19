from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import openai
import os
import logging
from dotenv import load_dotenv

router = APIRouter()

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
print(f"api_key: {openai.api_key} {os.getenv('OPENAI_API_KE')}")


class ChatRequest(BaseModel):
    role: str
    settings: dict
    message: str


@router.post("/chat/")
async def chat(request: ChatRequest):
    try:
        prompt = f"Role: {request.role}\nSettings: {request.settings}\nMessage: {request.message}"
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system",
                    "content": f"Role: {request.role}\nSettings: {request.settings}"},
                {"role": "user", "content": request.message}
            ],
            max_tokens=150
        )
        return {"response": response.choices[0].message['content'].strip()}
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
