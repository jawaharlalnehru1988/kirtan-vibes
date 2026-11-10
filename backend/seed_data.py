import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kirtan_vibes_backend.settings')
django.setup()

from django.contrib.auth import get_user_model
from store.models import Category, Instrument, AcademyBooking, Order, OrderItem, WorkshopService

User = get_user_model()

# 1. Create Superuser
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@kirtanvibes.com', 'admin123')
    print("Created superuser: admin / admin123")
else:
    print("Superuser admin already exists.")

# 2. Seed Categories
categories_data = [
    {
        "name": "Terracotta Clay Khols",
        "slug": "terracotta-clay-khols",
        "description": "Authentic Mayapur & Navadvip Ganga clay mridangas with handcrafted ghab.",
        "order": 1,
    },
    {
        "name": "Fiberglass Travel Khols",
        "slug": "fiberglass-travel-khols",
        "description": "Weatherproof, impact-resistant fiberglass mridangas for global traveling sankirtan.",
        "order": 2,
    },
    {
        "name": "Bell Metal Karatals",
        "slug": "bell-metal-karatals",
        "description": "High-purity Kansa bell-metal hand cymbals forged for sustained harmonic chime.",
        "order": 3,
    },
    {
        "name": "Accessories & Straps",
        "slug": "accessories-and-straps",
        "description": "Embroidered cotton straps, padded traveling gig bags, and beeswax maintenance kits.",
        "order": 4,
    },
]

categories_map = {}
for cdata in categories_data:
    cat, _ = Category.objects.get_or_create(slug=cdata['slug'], defaults=cdata)
    categories_map[cat.slug] = cat

# 3. Seed Instruments with Complete Card Specifications Matching Screenshots
instruments_data = [
    {
        "name": "Mayapur Supreme Terracotta Mitti Mridanga",
        "slug": "mayapur-supreme-terracotta-mridanga",
        "subtitle": "Standard 22\" Body • Traditional Rawhide Lacing • Pitch D Resonance",
        "category": categories_map["terracotta-clay-khols"],
        "body_type": "clay",
        "price": 14500.00,
        "original_price": 17000.00,
        "savings_text": "You Save ₹2,500",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAmJwz-P7V9LhjFsMecFyYm_oEq0m8AXRIPE-8XZeFdANKtYOBDyaOmLHKGnoink2LylXncGp8HhMi3IzDvq2lJ2ODnNgwCG_Vp_OEY6SCuJpwcoUd-VDohSMfhris9mfZC4Sjny5xgrPvSVTgfT_qgMfoeYJgonAFRWo_tL8RtN_pm7kZtYLNDUxvBy19tDnLmjNKGmstgz6UbdCzUWwXicVKRoGGZWxQyCVzE1lHr",
        "image_badge_top": "Bengali Mitti",
        "image_badge_bottom": "Tuned C# / D",
        "tags": "High Ping Dayan (C#), Free Velvet Saffron Cover, Only 2 Left in Bangalore",
        "attestation_title": "Sri Ganapathi Prabhu Direct Attestation",
        "attestation_note": "Inspected, hand-hammered, and calibrated to pitch before boxing. A personal 40-second audio/video proof will be transmitted directly to your WhatsApp before dispatch.",
        "scale_tuning": "Pitch D (High) / C# Bengali Standard",
        "length_inch": "22 inches",
        "strap_type": "Traditional Rawhide Braided",
        "stock_count": 2,
        "is_in_stock": True,
        "is_featured": True,
        "badge": "15% OFF",
        "description": "Concert grade baked clay from the sacred banks of Mayapur. Hand-cured Dayan with celestial sweet ringing sustain and deep booming Bayan resonance.",
    },
    {
        "name": "Navadvip Pure Bell-Metal (Kansa) Heavy Karatals",
        "slug": "navadvip-bell-metal-karatals",
        "subtitle": "450 Grams Standard • Hand-Braided Red Saffron Cotton Cord",
        "category": categories_map["bell-metal-karatals"],
        "body_type": "bell_metal",
        "price": 2450.00,
        "original_price": 2900.00,
        "savings_text": "Save ₹450 (Discount Applied)",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuDeJrGmDp-NsWmaZdF66tS7iPqKPeMnQzLI0VR9QuTMsn2NUmLZDDhv4Ytd4XNAj_KQsN21sEhrVgvFV4Qdey-fmi7hTeJBuCHvA4j6FWX6Nm2BiqzOi0EsHpegf00U9BwMM1CmbtA0jBIiURBLZ-dY9RfShXlYKQaXdE-zec_nhUqJGMs1pFZxk2gqSkRiOiZGj3xBZ1dsa5JdirDfiylh222591hYGAmSV55DxKtl",
        "image_badge_top": "Pure Kansa",
        "image_badge_bottom": "High Sustain",
        "tags": "Temple Kirtan Frequency, Hand-Forged Alloy",
        "attestation_title": "Sacred Acoustic Resonance",
        "attestation_note": "Rhythmically balanced pair. Harmonic bell chime designed to cut cleanly through loud ecstatic kartal-khol gatherings without harshness.",
        "scale_tuning": "Temple Kirtan Frequency",
        "length_inch": "8 cm Diameter (450g)",
        "strap_type": "Braided Red Saffron Cotton Cord",
        "stock_count": 12,
        "is_in_stock": True,
        "is_featured": True,
        "badge": "Hand-Forged",
        "description": "Hand-forged pure kansa alloy. Rhythmically balanced pair that cuts cleanly through loud ecstatic kirtans without ear fatigue.",
    },
    {
        "name": "Fiberglass Professional Travel Mridanga",
        "slug": "fiberglass-professional-travel-mridanga",
        "subtitle": "Weatherproof Synthetic Resin • Genuine Goat Skin Heads",
        "category": categories_map["fiberglass-travel-khols"],
        "body_type": "fiberglass",
        "price": 16800.00,
        "original_price": 19500.00,
        "savings_text": "You Save ₹2,700",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuA7rLZTg5E95iYRtNqsl_AXFMU13i45fNSCG-9y3i_FR5dofVJ5tje3oRah3RHDFx9cf2fnNhxPtqMlH18IAp8bQ_ipksYOdRwAVsdifPBxP7r9yX4ade_I64_cikZ9Q2TmmlMRJNa8nAUzEXbUkOAC38zctc_YOzorMT3YTc4PFm3loGabbcczAzSiD8qaDGvqYoak7ZnaztbpcNXjNPInzgy4U-6JpReAoSKlEM_4",
        "image_badge_top": "All-Weather Fiber",
        "image_badge_bottom": "Flight Safe",
        "tags": "Impact Proof, Pre-Tuned Pitch D#, Air Travel Ready",
        "attestation_title": "Touring Artist Guarantee",
        "attestation_note": "Engineered for international flights and monsoon sankirtan. Holds tone in cold air conditioning and humid outdoor processions.",
        "scale_tuning": "Pitch D# / D Versatile",
        "length_inch": "22.5 inches",
        "strap_type": "Vegan Cotton Heavy-Duty",
        "stock_count": 5,
        "is_in_stock": True,
        "is_featured": True,
        "badge": "Flight Weather-Proof",
        "description": "Sleek sunburst all-weather fiberglass construction. Impact-proof, impervious to temperature shifts, and pre-calibrated for world touring sankirtan.",
    },
    {
        "name": "Pure Cotton Hand-Woven Saffron Mridanga Strap",
        "slug": "pure-cotton-saffron-mridanga-strap",
        "subtitle": "54-68\" Adjustable • Traditional Navadvip Loom Weave",
        "category": categories_map["accessories-and-straps"],
        "body_type": "accessory",
        "price": 650.00,
        "original_price": 850.00,
        "savings_text": "You Save ₹200",
        "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCN00SyrVLt2vjIFbVQJKX_RxJRPqONHw93a-DwLArEZB1ABPQxrshlmvnnK25v6GBS3H2q5SEZjs9cwkAxAmgaMNkGYCrJs_MnSDICMACdLKk-5quhJQ6L31uuW3JY1Ll8L34Y-v1pq0eXP4FiytVK4tF8NkLj2dW5GIEyjd2zqT6ifLF7chU9TsJBLcqhqt6GHTL_YT7RP5OhibnbZHAdV4rx2AoeURX5Ix-pxu3W",
        "image_badge_top": "Navadvip Khadi",
        "image_badge_bottom": "Ergonomic Pad",
        "tags": "Soft Shoulder Relief, Heavy Brass Buckles, Maha-Mantra Embroidery",
        "attestation_title": "Sankirtan Ergonomics",
        "attestation_note": "Hand-embroidered with maha-mantra and fitted with heavy-gauge cotton padding to relieve neck and shoulder fatigue during long parikramas.",
        "scale_tuning": "Universal Fit",
        "length_inch": "54-68 inches adjustable",
        "strap_type": "Embroidered Maha-Mantra",
        "stock_count": 25,
        "is_in_stock": True,
        "is_featured": False,
        "badge": "Comfort Shoulder Pad",
        "description": "Pure cotton hand-woven strap with soft padded shoulder section to relieve pressure during hours-long Hari-nama sankirtan.",
    },
]

for idata in instruments_data:
    Instrument.objects.update_or_create(slug=idata['slug'], defaults=idata)

# 4. Seed sample booking
if not AcademyBooking.objects.exists():
    AcademyBooking.objects.create(
        devotee_name="Radhapati Das",
        whatsapp_number="+91 9845192834",
        timezone="Asia/Kolkata (IST)",
        learning_mode="online_1on1",
        experience_level="Intermediate Accompaniment",
        course_focus="Bengali Kirtan Taals & Thekas",
        notes="Preparing for Sri Krishna Janmashtami sankirtan.",
        status="confirmed",
    )

# 5. Seed Order with exact Delivery & Devotee Information matching user screenshot
order_data = {
    "fulfillment_method": "insured_courier",
    "devotee_name": "Radha Vallabha Dasa",
    "temple_ashram": "ISKCON Whitefield Nama-Hatta",
    "phone": "+91 98451 92834",
    "email": "kirtan.devotee@example.com",
    "address": "Flat 402, Vrindavan Hermitage, 4th Cross, ITPL Main Road",
    "city": "Bengaluru",
    "state": "Karnataka",
    "postal_code": "560066",
    "country": "India (Bharat)",
    "tuning_specifications": "Please ensure the Dayan is tightly calibrated for D natural high ring. We sing primarily in 1st and 2nd speed Bengali Gaudiya thekas. Kindly provide the video verification to my WhatsApp before locking the wooden crate.",
    "total_amount": 16950.00,
    "payment_status": "whatsapp_video_verified",
    "tracking_number": "SFX-BLR-892401-AIR",
    "audio_video_verification_sent": True,
    "wooden_crate_sealed": True,
    "transit_insurance_active": True,
    "admin_notes": "Acoustic video clip recorded and shared on WhatsApp (+91 98451 92834). Approved by devotee.",
}

order, created = Order.objects.update_or_create(
    order_id="KV-2025-0891",
    defaults=order_data
)

# Seed items inside this order
OrderItem.objects.filter(order=order).delete()
OrderItem.objects.create(
    order=order,
    instrument=Instrument.objects.filter(slug="mayapur-supreme-terracotta-mridanga").first(),
    instrument_name="Mayapur Supreme Terracotta Mitti Mridanga",
    tuning_specs="Pitch D (High) • Traditional Rawhide Lacing",
    quantity=1,
    price=14500.00,
)
OrderItem.objects.create(
    order=order,
    instrument=Instrument.objects.filter(slug="navadvip-bell-metal-karatals").first(),
    instrument_name="Navadvip Pure Bell-Metal (Kansa) Heavy Karatals",
    tuning_specs="450 Grams Standard • Hand-Braided Red Saffron Cotton Cord",
    quantity=1,
    price=2450.00,
)

print("Order and Delivery & Devotee Information successfully synced in backend!")
