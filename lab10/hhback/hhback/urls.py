from django.contrib import admin
from django.urls import path, include
from api.views import index

urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]
