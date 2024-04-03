from django.shortcuts import get_object_or_404, render
from api.models import Product, Category

from django.http.response import JsonResponse

def products(request):
    products =  Product.objects.filter(is_active = True)
    categories = Category.objects.all()
    # category_id = request.GET.get('category', 0)

    # if category_id:
    #     products = products.filter(category_id = category_id)

    # return render(request, 'products.html', {
    #     'categories': categories,
    #     'products': products,
    #     'category_id': int(category_id)
    # })
    products_json = [product.to_json() for product in products] 
    return JsonResponse(products_json, safe = False)


# def categories(request):
#     categories = Category.objects.all()

#     return render(request, 'categories.html', {
#         'categories': categories,
#     })

def categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe = False)

def detail(request, pk):
    product = get_object_or_404(Product, pk = pk)

    return render(request, 'detail.html', {
        'product': product,
    })

def detail_of_category(request, pk):
    # categories = get_object_or_404(Category, pk = pk)

    # return render(request, 'cat.html', {
    #     'categories': categories,
    # })
    category = get_object_or_404(Category, pk=pk)
    return JsonResponse(category.to_json())

def products_by_category(request, pk):
    category = Category.objects.get(pk=pk)
    products = Product.objects.filter(category=category)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def index(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    descriptions = Product.objects.all()
    return render(request, 'index.html', {
        'categories': categories,
        'products': products,
        'description': descriptions,
    })