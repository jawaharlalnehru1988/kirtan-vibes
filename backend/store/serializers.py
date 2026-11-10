from rest_framework import serializers
from .models import Category, Instrument, AcademyBooking, Order, OrderItem, WorkshopService

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class InstrumentSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    tag_list = serializers.SerializerMethodField()

    class Meta:
        model = Instrument
        fields = [
            'id',
            'name',
            'slug',
            'subtitle',
            'category',
            'category_name',
            'body_type',
            'price',
            'original_price',
            'savings_text',
            'image_url',
            'image_badge_top',
            'image_badge_bottom',
            'tags',
            'tag_list',
            'attestation_title',
            'attestation_note',
            'scale_tuning',
            'length_inch',
            'strap_type',
            'stock_count',
            'is_in_stock',
            'is_featured',
            'badge',
            'audio_preview_url',
            'description',
            'created_at',
        ]

    def get_tag_list(self, obj):
        return obj.get_tag_list()


class AcademyBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademyBooking
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    instrument_name = serializers.CharField(required=False, default='Handcrafted Instrument')
    tuning_specs = serializers.CharField(required=False, allow_blank=True, default='')

    class Meta:
        model = OrderItem
        fields = ['id', 'instrument', 'instrument_name', 'tuning_specs', 'quantity', 'price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, required=False)
    fulfillment_method_display = serializers.CharField(source='get_fulfillment_method_display', read_only=True)
    payment_status_display = serializers.CharField(source='get_payment_status_display', read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        items_data = self.initial_data.get('items', []) or validated_data.pop('items', [])
        validated_data.pop('items', None)

        order = Order.objects.create(**validated_data)
        for item in items_data:
            name = item.get('name') or item.get('instrument_name') or 'Handcrafted Kirtan Instrument'
            tuning = item.get('tuning') or item.get('tuning_specs') or ''
            qty = int(item.get('quantity', 1))
            price = float(item.get('price', 0))
            OrderItem.objects.create(
                order=order,
                instrument_name=name,
                tuning_specs=tuning,
                quantity=qty,
                price=price
            )
        return order


class WorkshopServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopService
        fields = '__all__'
