from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import openai
import os
import logging

router = APIRouter()

openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    role: str
    settings: dict
    message: str

@router.post("/chat/")
async def chat(request: ChatRequest):
    try:
        prompt = f"Role: {request.role}\nSettings: {request.settings}\nMessage: {request.message}"
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": f"Role: {request.role}\nSettings: {request.settings}"},
                {"role": "user", "content": request.message}
            ],
            max_tokens=150
        )
        return {"response": response.choices[0].message['content'].strip()}
    except openai.error.OpenAIError as e:
        logging.error(f"OpenAI API error: {e}")
        raise HTTPException(status_code=500, detail=f"OpenAI API error: {e}")
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")
