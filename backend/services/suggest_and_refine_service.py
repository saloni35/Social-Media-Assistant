from langgraph.graph import StateGraph, END
from langchain_ollama import ChatOllama
from typing import TypedDict, Optional


llm = None


# 1. Define input/output type
class IdeaState(TypedDict):
    idea: Optional[str]
    refined: Optional[str]


# 3. Node to refine idea
def refine_idea(state: IdeaState) -> IdeaState:
    build_graph()
    user_idea = state['idea']
    if not user_idea:
        raise ValueError("No idea provided!")

    response = llm.invoke(f"Refine this social media post idea professionally: {user_idea}")
    return {
        "idea": user_idea,
        "refined": response.content}


def build_graph():
    # 2. Create Ollama Model
    global llm
    llm = ChatOllama(model="tinyllama")  # or whatever model you want

    # 4. Build the graph
    graph = StateGraph(IdeaState)
    graph.add_node("refine_idea", refine_idea)

    # 5. Connect flow
    graph.set_entry_point("refine_idea")
    graph.add_edge("refine_idea", END)

    # 6. Compile it
    compiled_graph = graph.compile()


# 7. For manual testing:
"""
def refine_ideas(idea: str) -> str:
    build_graph()
    result = compiled_graph.invoke({"idea": idea})
    return result["refined"]
"""


def suggest_related_ideas(topic: str) -> list:
    global llm
    llm = ChatOllama(model="tinyllama")
    prompt = f"Suggest 3 creative social media post ideas seperated by newlines based on the topic: {topic}"
    response = llm.invoke(prompt)
    # Split response into list (assuming ideas are separated by newlines)
    ideas = [idea.strip("- ").strip() for idea in response.content.strip().split("\n") if idea]

    # Ensure exactly 3 ideas
    return ideas[:3]
