from models.idea import IdeaRequest, IdeaResponse, SuggestIdeasResponse
from services.suggest_and_refine_service import refine_idea, suggest_related_ideas
from fastapi import APIRouter

router = APIRouter()


@router.post("/refine", response_model=IdeaResponse)
async def refine_idea_endpoint(request: IdeaRequest):
    try:
        refined_text = refine_idea({'idea': request.idea, 'refined': None})
        return IdeaResponse(refined=refined_text["refined"])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/generate", response_model=SuggestIdeasResponse)
async def suggest_ideas_endpoint(request: IdeaRequest):
    try:
        ideas = suggest_related_ideas(request.idea)
        return SuggestIdeasResponse(ideas=ideas)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

