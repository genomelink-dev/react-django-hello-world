from .utils import render_react


def hello_react(request):
    props = {"name": "pato", "more": "Ken"}
    return render_react(request, "hello_react", props)
