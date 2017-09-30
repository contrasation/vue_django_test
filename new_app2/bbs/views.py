from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'bbs/index.html')

def index_test(request):
    return render(request, 'bbs/test.html')
