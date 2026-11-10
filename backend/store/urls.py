from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryViewSet,
    InstrumentViewSet,
    AcademyBookingViewSet,
    OrderViewSet,
    WorkshopServiceViewSet,
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'instruments', InstrumentViewSet)
router.register(r'bookings', AcademyBookingViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'workshop-services', WorkshopServiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
