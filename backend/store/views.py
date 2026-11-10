from rest_framework import viewsets, filters
from .models import Category, Instrument, AcademyBooking, Order, WorkshopService
from .serializers import (
    CategorySerializer,
    InstrumentSerializer,
    AcademyBookingSerializer,
    OrderSerializer,
    WorkshopServiceSerializer,
)

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class InstrumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Instrument.objects.filter(is_in_stock=True)
    serializer_class = InstrumentSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'scale_tuning', 'body_type']
    ordering_fields = ['price', 'created_at']

    def get_queryset(self):
        queryset = Instrument.objects.all()
        category_slug = self.request.query_params.get('category')
        body_type = self.request.query_params.get('body_type')
        featured = self.request.query_params.get('featured')

        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        if body_type:
            queryset = queryset.filter(body_type=body_type)
        if featured is not None:
            queryset = queryset.filter(is_featured=True)

        return queryset


class AcademyBookingViewSet(viewsets.ModelViewSet):
    queryset = AcademyBooking.objects.all()
    serializer_class = AcademyBookingSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class WorkshopServiceViewSet(viewsets.ModelViewSet):
    queryset = WorkshopService.objects.all()
    serializer_class = WorkshopServiceSerializer
