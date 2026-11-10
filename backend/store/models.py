from django.db import models
import uuid

class Category(models.Model):
    name = models.CharField(max_length=120)
    slug = models.SlugField(max_length=120, unique=True)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class Instrument(models.Model):
    BODY_CHOICES = [
        ('clay', 'Sacred Terracotta Clay (Mitti)'),
        ('fiberglass', 'All-Weather Fiberglass (Travel Series)'),
        ('bell_metal', 'Pure Bell Metal / Kansa (Karatals)'),
        ('accessory', 'Accessory / Dress / Maintenance Kit'),
    ]

    name = models.CharField(max_length=200, help_text="e.g. Mayapur Supreme Terracotta Mitti Mridanga")
    slug = models.SlugField(max_length=200, unique=True)
    subtitle = models.CharField(
        max_length=250,
        blank=True,
        help_text="e.g. Standard 22\" Body • Traditional Rawhide Lacing • Pitch D Resonance"
    )
    category = models.ForeignKey(Category, related_name='instruments', on_delete=models.CASCADE)
    body_type = models.CharField(max_length=30, choices=BODY_CHOICES, default='clay')

    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Current price in ₹")
    original_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, help_text="Original price before discount in ₹")
    savings_text = models.CharField(max_length=100, blank=True, help_text="e.g. You Save ₹2,500 or Save ₹450 (Discount Applied)")

    image_url = models.URLField(max_length=600, blank=True)
    image_badge_top = models.CharField(max_length=80, blank=True, help_text="e.g. Bengali Mitti or Pure Kansa")
    image_badge_bottom = models.CharField(max_length=80, blank=True, help_text="e.g. Tuned C# / D or High Sustain")

    tags = models.CharField(
        max_length=350,
        blank=True,
        help_text="Comma-separated feature tags: High Ping Dayan (C#), Free Velvet Saffron Cover, Only 2 Left in Bangalore"
    )

    attestation_title = models.CharField(
        max_length=150,
        blank=True,
        default="Sri Ganapathi Prabhu Direct Attestation",
        help_text="Title in bold inside the attestation card box"
    )
    attestation_note = models.TextField(
        blank=True,
        help_text="Direct craftsman attestation or harmonic acoustic description"
    )

    scale_tuning = models.CharField(max_length=80, blank=True, help_text="e.g. Pitch D (High) or C# Bengali Standard")
    length_inch = models.CharField(max_length=40, blank=True, help_text="e.g. 22 inches, 23.5 inches")
    strap_type = models.CharField(max_length=80, blank=True, help_text="e.g. Traditional Rawhide or Vegan Cotton")

    stock_count = models.PositiveIntegerField(default=3)
    is_in_stock = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    badge = models.CharField(max_length=80, blank=True, help_text="e.g. 15% OFF, Flight Weather-Proof")

    audio_preview_url = models.URLField(max_length=600, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-is_featured', 'price']

    def __str__(self):
        return f"{self.name} (₹{self.price})"

    def get_tag_list(self):
        if not self.tags:
            return []
        return [t.strip() for t in self.tags.split(',') if t.strip()]


class AcademyBooking(models.Model):
    MODE_CHOICES = [
        ('online_1on1', 'Online 1-on-1 (Zoom / Google Meet)'),
        ('studio_bangalore', 'In-Studio Workshop (SMVT Bangalore)'),
        ('group_theka', 'Group Bengali Kirtan Taal Batch'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending Acharya Review'),
        ('confirmed', 'Confirmed & Slot Transmitted'),
        ('completed', 'Masterclass Completed'),
        ('cancelled', 'Cancelled'),
    ]

    devotee_name = models.CharField(max_length=150)
    whatsapp_number = models.CharField(max_length=30)
    timezone = models.CharField(max_length=60, default='Asia/Kolkata (IST)')
    learning_mode = models.CharField(max_length=40, choices=MODE_CHOICES, default='online_1on1')
    experience_level = models.CharField(max_length=60, blank=True)
    course_focus = models.CharField(max_length=100, blank=True)
    preferred_date = models.DateField(null=True, blank=True)
    preferred_slot = models.CharField(max_length=80, blank=True)
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.devotee_name} - {self.course_focus} ({self.status})"


class Order(models.Model):
    FULFILLMENT_CHOICES = [
        ('insured_courier', 'Insured Courier Delivery (SafeXpress / BlueDart Air • 3-5 Days)'),
        ('workshop_pickup', 'SMVT Bangalore Workshop Pickup (Ready within 24 Hours with 30-min live orientation)'),
    ]

    PAYMENT_CHOICES = [
        ('pending', 'Pending Verification'),
        ('whatsapp_video_verified', 'WhatsApp Audio/Video Approved'),
        ('paid', 'Paid in Full'),
        ('crate_sealed', 'Shockproof Wooden Crate Armor Sealed'),
        ('dispatched', 'Dispatched with Express Courier Tracking'),
        ('delivered', 'Delivered to Sanctum / Home'),
    ]

    # Order Identity
    order_id = models.CharField(max_length=35, unique=True, default=uuid.uuid4)
    
    # Delivery & Devotee Information (Matches Checkout Step 2)
    fulfillment_method = models.CharField(
        max_length=30,
        choices=FULFILLMENT_CHOICES,
        default='insured_courier',
        verbose_name="Fulfillment Method"
    )
    devotee_name = models.CharField(max_length=150, verbose_name="Devotee Full Name *")
    temple_ashram = models.CharField(max_length=150, blank=True, verbose_name="Temple / Ashram / Center (Optional)")
    phone = models.CharField(max_length=35, verbose_name="Mobile & WhatsApp Number * (For Audio Pre-Dispatch Clip)")
    email = models.EmailField(verbose_name="Email Address (For Invoicing & Tracking) *")
    address = models.TextField(verbose_name="Complete Shipping Address *")
    city = models.CharField(max_length=80, verbose_name="City *")
    state = models.CharField(max_length=80, verbose_name="State *")
    postal_code = models.CharField(max_length=20, verbose_name="PIN / Postal Code *")
    country = models.CharField(max_length=60, default='India (Bharat)', verbose_name="Country *")

    # Devotional Tuning Note & Kirtan Pitch Specifications
    tuning_specifications = models.TextField(
        blank=True,
        verbose_name="Devotional Tuning Note & Kirtan Pitch Specifications",
        help_text="e.g. Please calibrate Dayan specifically to sharp C# (compatible with male 4th black harmonium sur). Prefer moderate mellow bass on Bayaan."
    )

    # Sanctum Verification & Transit Armor
    audio_video_verification_sent = models.BooleanField(
        default=False,
        verbose_name="40-Sec Video/Audio Verification Transmitted to WhatsApp"
    )
    wooden_crate_sealed = models.BooleanField(
        default=False,
        verbose_name="Shockproof Pine Wooden Crate Encasement Sealed"
    )
    transit_insurance_active = models.BooleanField(
        default=True,
        verbose_name="100% Zero-Breakage In-Transit Replacement Guarantee Active"
    )

    # Status & Logistics
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Total Amount Payable (₹)")
    payment_status = models.CharField(max_length=30, choices=PAYMENT_CHOICES, default='pending')
    tracking_number = models.CharField(max_length=80, blank=True, verbose_name="Courier Air Waybill / Tracking #")
    admin_notes = models.TextField(blank=True, verbose_name="Internal Workshop Notes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Devotee Order & Delivery"
        verbose_name_plural = "Devotee Orders & Deliveries"

    def __str__(self):
        return f"Order #{self.order_id} - {self.devotee_name} ({self.get_fulfillment_method_display()}) - ₹{self.total_amount}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    instrument = models.ForeignKey(Instrument, null=True, blank=True, on_delete=models.SET_NULL)
    instrument_name = models.CharField(max_length=200)
    tuning_specs = models.CharField(max_length=150, blank=True)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity}x {self.instrument_name} (₹{self.price})"


class WorkshopService(models.Model):
    SERVICE_CHOICES = [
        ('ghab_replacement', 'Dayan & Bayaan Iron Ghab Replacement'),
        ('restringing', 'Rawhide Leather Restringing & Braiding'),
        ('pitch_tuning', 'Acoustic Concert Pitch Calibration'),
        ('harmonium_reeds', 'Harmonium Reed Tuning & Bellow Servicing'),
        ('custom_clay_khol', 'Custom Navadvip Clay Khol Handcrafting'),
    ]

    STATUS_CHOICES = [
        ('received', 'Received at SMVT Bangalore'),
        ('in_calibration', 'In Artisanal Calibration'),
        ('tuned_approved', 'Tuned & Video Proof Sent'),
        ('ready_dispatched', 'Ready / Dispatched'),
    ]

    devotee_name = models.CharField(max_length=150)
    whatsapp_number = models.CharField(max_length=30)
    service_type = models.CharField(max_length=40, choices=SERVICE_CHOICES)
    instrument_description = models.CharField(max_length=200, blank=True)
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='received')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.service_type} - {self.devotee_name} ({self.status})"
