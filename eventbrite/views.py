from django.shortcuts import render

def index(request):
    title = 'Sign Up'
    username = "Home Page of %s" %(request.user)
    context = {
        'title': title,
        'username': username,
    }
    return render(request, "index.html", context)

def events(request):
	return render(request, "events.html", {})

def categorized(request):
    url=request.GET.get('redirect','sjd1')
    context = {
        'url':url
    }
    return render(request, "categorized.html", context)

def test(request):
	return render(request, "test.html", {})