from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Instrument, AcademyBooking, Order, OrderItem, WorkshopService

# Custom Admin Branding
admin.site.site_header = "Kirtan Vibes • Sri Ganapathi Prabhu Administration"
admin.site.site_title = "Kirtan Vibes Portal"
admin.site.index_title = "Sacred Vedic Acoustics, Instruments & Academy Management"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'order')
    prepopulated_fields = {'slug': ('name',)}
    ordering = ('order', 'name')


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    list_display = (
        'card_preview',
        'name',
        'category',
        'body_type',
        'price',
        'original_price',
        'scale_tuning',
        'stock_count',
        'is_in_stock',
        'is_featured',
    )
    list_filter = ('category', 'body_type', 'is_in_stock', 'is_featured')
    search_fields = ('name', 'subtitle', 'description', 'scale_tuning', 'tags', 'attestation_note')
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ('price', 'stock_count', 'is_in_stock', 'is_featured')
    ordering = ('-is_featured', 'price')

    fieldsets = (
        ('Card Header & Identity', {
            'fields': (
                'name',
                'slug',
                'subtitle',
                'category',
                'body_type',
                'badge',
            ),
            'description': 'Main title and subtitle as displayed on the sacred store card.'
        }),
        ('Pricing & Discounts', {
            'fields': (
                'price',
                'original_price',
                'savings_text',
            ),
            'description': 'Price in ₹ and custom savings text (e.g. "You Save ₹2,500").'
        }),
        ('Visual Media & Badges', {
            'fields': (
                'image_url',
                'image_badge_top',
                'image_badge_bottom',
                'audio_preview_url',
            ),
            'description': 'Image URL and overlay pills (e.g. "Bengali Mitti" top badge, "Tuned C# / D" bottom badge).'
        }),
        ('Card Feature Tags & Attestation Box', {
            'fields': (
                'tags',
                'attestation_title',
                'attestation_note',
            ),
            'description': 'Tags (comma-separated) and Sri Ganapathi Prabhu\'s personal attestation note box.'
        }),
        ('Technical Specifications & Inventory', {
            'fields': (
                'scale_tuning',
                'length_inch',
                'strap_type',
                'stock_count',
                'is_in_stock',
                'is_featured',
                'description',
            )
        }),
    )

    def card_preview(self, obj):
        img_html = f'<img src="{obj.image_url}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;" />' if obj.image_url else '<div style="width: 50px; height: 50px; background: #eee; border-radius: 6px;"></div>'
        top_badge = f'<span style="background: #6b1d10; color: white; padding: 2px 5px; border-radius: 3px; font-size: 10px;">{obj.image_badge_top}</span>' if obj.image_badge_top else ''
        return format_html(f'<div style="display: flex; align-items: center; gap: 8px;">{img_html}<div><strong>{obj.name}</strong><br/>{top_badge}</div></div>')

    card_preview.short_description = "Card Preview"


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    fields = ('instrument_name', 'tuning_specs', 'quantity', 'price')
    readonly_fields = ('instrument_name', 'price')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'order_id',
        'devotee_name',
        'phone',
        'temple_ashram',
        'fulfillment_method_badge',
        'city_state',
        'total_amount',
        'payment_status',
        'verification_status',
        'created_at',
    )
    list_filter = (
        'fulfillment_method',
        'payment_status',
        'audio_video_verification_sent',
        'wooden_crate_sealed',
        'transit_insurance_active',
        'created_at',
    )
    search_fields = (
        'order_id',
        'devotee_name',
        'phone',
        'email',
        'temple_ashram',
        'address',
        'city',
        'state',
        'postal_code',
        'tuning_specifications',
    )
    list_editable = ('payment_status',)
    inlines = [OrderItemInline]
    date_hierarchy = 'created_at'

    fieldsets = (
        ('Delivery & Devotee Information (Checkout Step 2)', {
            'fields': (
                'fulfillment_method',
                'devotee_name',
                'temple_ashram',
                'phone',
                'email',
                'address',
                ('city', 'state', 'postal_code'),
                'country',
            ),
            'description': 'Devotee contact and shipping destination details captured during checkout.'
        }),
        ('Devotional Tuning Note & Kirtan Pitch Specifications', {
            'fields': (
                'tuning_specifications',
            ),
            'description': 'Specific acoustical pitch requirements personally reviewed by Sri Ganapathi Prabhu.'
        }),
        ('Sanctum Verification & Transit Armor', {
            'fields': (
                'audio_video_verification_sent',
                'wooden_crate_sealed',
                'transit_insurance_active',
                'tracking_number',
            ),
            'description': 'WhatsApp video proof transmission and shockproof wooden crate encasement checks.'
        }),
        ('Order Financials & Status', {
            'fields': (
                'order_id',
                'total_amount',
                'payment_status',
                'admin_notes',
            )
        }),
    )

    def fulfillment_method_badge(self, obj):
        if obj.fulfillment_method == 'insured_courier':
            return format_html('<span style="background: #fc7127; color: white; padding: 2px 7px; border-radius: 4px; font-weight: bold; font-size: 11px;">✈ Courier</span>')
        return format_html('<span style="background: #6b1d10; color: white; padding: 2px 7px; border-radius: 4px; font-weight: bold; font-size: 11px;">🏛 Bangalore Studio</span>')

    fulfillment_method_badge.short_description = "Fulfillment"

    def city_state(self, obj):
        return f"{obj.city}, {obj.state}"
    city_state.short_description = "Location"

    def verification_status(self, obj):
        sent = obj.audio_video_verification_sent
        color = "#25D366" if sent else "#ba1a1a"
        text = "Video Verified" if sent else "Pending Video"
        return format_html(f'<span style="color: {color}; font-weight: bold;">● {text}</span>')
    verification_status.short_description = "Verification"


@admin.register(AcademyBooking)
class AcademyBookingAdmin(admin.ModelAdmin):
    list_display = (
        'devotee_name',
        'whatsapp_number',
        'learning_mode',
        'course_focus',
        'preferred_date',
        'preferred_slot',
        'status',
        'created_at',
    )
    list_filter = ('status', 'learning_mode', 'created_at')
    search_fields = ('devotee_name', 'whatsapp_number', 'notes', 'course_focus')
    list_editable = ('status',)
    date_hierarchy = 'created_at'


@admin.register(WorkshopService)
class WorkshopServiceAdmin(admin.ModelAdmin):
    list_display = (
        'devotee_name',
        'whatsapp_number',
        'service_type',
        'status',
        'created_at',
    )
    list_filter = ('status', 'service_type', 'created_at')
    search_fields = ('devotee_name', 'whatsapp_number', 'notes')
    list_editable = ('status',)
    date_hierarchy = 'created_at'
