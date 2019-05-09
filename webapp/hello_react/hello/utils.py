from django.shortcuts import render


def render_react(request, app_name, props={}):
    return render(
        request, "react_app_template.html", {"app_name": app_name, "props": props}
    )
