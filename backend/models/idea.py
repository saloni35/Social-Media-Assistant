from pydantic import BaseModel
from typing import List


class IdeaRequest(BaseModel):
    idea: str



class IdeaResponse(BaseModel):
    refined: str



class SuggestIdeasResponse(BaseModel):
    ideas: List[str]
