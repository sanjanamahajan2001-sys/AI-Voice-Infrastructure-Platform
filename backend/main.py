from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import logging
import time

# Configure Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="AI Voice Agent API",
    description="Scalable infrastructure for real-time voice and chat agents.",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "AI Voice Agent API is online", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {
        "status": "UP",
        "timestamp": time.time(),
        "version": "1.0.0"
    }

@app.websocket("/ws/voice")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    logger.info("New WebSocket connection accepted")
    try:
        while True:
            data = await websocket.receive_text()
            # Echo for testing; in production, this would stream to TTS/STT
            await websocket.send_text(f"Processed: {data}")
    except WebSocketDisconnect:
        logger.info("WebSocket connection closed")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
