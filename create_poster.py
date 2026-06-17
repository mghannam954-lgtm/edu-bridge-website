import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def reshape_arabic(text):
    import arabic_reshaper
    from bidi.algorithm import get_display
    return get_display(arabic_reshaper.reshape(text))

# Paths
template_path = r"C:\Users\mghan\.gemini\antigravity\brain\223a870b-9333-47d8-9af9-c24a6e4bf5a3\media__1781734258294.jpg"
mockup_poster_path = r"C:\Users\mghan\.gemini\antigravity\brain\223a870b-9333-47d8-9af9-c24a6e4bf5a3\edu_bridge_poster_1781733917073.png"
output_path_ar = r"D:\edu-wibsit\public\edu_bridge_poster_ar.png"
output_path_en = r"D:\edu-wibsit\public\edu_bridge_poster_en.png"

# Load template and resize to high res (2400 x 3416)
print("Loading template...")
img = Image.open(template_path).convert("RGBA")
img = img.resize((2400, 3416), Image.Resampling.LANCZOS)
draw = ImageDraw.Draw(img)

# Load fonts
font_path_bold = r"C:\Windows\Fonts\arialbd.ttf"
font_path_reg = r"C:\Windows\Fonts\arial.ttf"

title_font = ImageFont.truetype(font_path_bold, 115)
subtitle_font = ImageFont.truetype(font_path_bold, 65)
header_font = ImageFont.truetype(font_path_bold, 55)
body_font = ImageFont.truetype(font_path_bold, 45)
qr_text_font = ImageFont.truetype(font_path_bold, 42)

# Colors
color_dark_blue = (0, 140, 211, 255) # UNRWA light blue
color_navy = (20, 50, 90, 255)        # Deep navy
color_charcoal = (50, 50, 50, 255)    # Charcoal
color_gold = (218, 165, 32, 255)     # Golden accent
color_card_bg = (242, 247, 252, 225) # Translucent card background
color_border = (200, 215, 230, 255)

# --- 1. Title & Tagline ---
title_text = reshape_arabic("منصة Edu-Bridge التعليمية")
draw.text((1200, 650), title_text, font=title_font, fill=color_navy, anchor="mm")

subtitle_text = reshape_arabic("النظام المتكامل لإدارة وأتمتة المدارس والمعاهد")
draw.text((1200, 760), subtitle_text, font=subtitle_font, fill=color_dark_blue, anchor="mm")


# --- 2. Extract and Blend Mockup Image with Edge-Fading ---
if os.path.exists(mockup_poster_path):
    print("Blending mockups using smooth edge-fading...")
    mock_base = Image.open(mockup_poster_path).convert("RGBA")
    
    # Crop the mockup area containing devices: x=80 to 950, y=220 to 690
    mock_crop = mock_base.crop((80, 220, 950, 690))
    mock_w, mock_h = 1900, 1040
    mock_resized = mock_crop.resize((mock_w, mock_h), Image.Resampling.LANCZOS)
    
    # Create smooth edge-fading alpha mask
    mask = Image.new("L", (mock_w, mock_h), 255)
    mask_pixels = mask.load()
    
    fade_x = 220  # Horizontal fade zone width
    fade_y = 120  # Vertical fade zone height
    
    for y in range(mock_h):
        for x in range(mock_w):
            # Calculate horizontal fade factor
            fx = 1.0
            if x < fade_x:
                fx = x / fade_x
            elif x > mock_w - fade_x:
                fx = (mock_w - x) / fade_x
                
            # Calculate vertical fade factor
            fy = 1.0
            if y < fade_y:
                fy = y / fade_y
            elif y > mock_h - fade_y:
                fy = (mock_h - y) / fade_y
                
            # Combine factors
            factor = min(fx, fy)
            # Smoothstep interpolation
            factor_smooth = factor * factor * (3 - 2 * factor)
            
            mask_pixels[x, y] = int(255 * factor_smooth)
            
    # Apply mask to mockup
    mock_final = mock_resized.copy()
    mock_final.putalpha(Image.alpha_composite(mock_resized.getchannel('A').convert("RGBA"), mask.convert("RGBA")).getchannel('A'))
    
    # Paste mockup centered on template
    paste_x = (2400 - mock_w) // 2 # 250
    paste_y = 880
    img.paste(mock_final, (paste_x, paste_y), mock_final)


# --- 3. Cards for Students and Supervisors ---
card_y = 1960
card_w = 900
card_h = 580

# Developer Card (Right side)
draw.rounded_rectangle([250, card_y, 250 + card_w, card_y + card_h], radius=35, fill=color_card_bg, outline=color_border, width=4)
dev_header = reshape_arabic("الطلاب المطورون:")
draw.text((700, card_y + 50), dev_header, font=header_font, fill=color_navy, anchor="ma")

dev_names = ["محمود غنام", "مجدولين محمود", "اسراء منوّر", "هبة الله عيسى", "شهد زريقي"]
y_offset = card_y + 140
for name in dev_names:
    draw.text((700, y_offset), reshape_arabic(name), font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# Supervisor Card (Left side)
draw.rounded_rectangle([1250, card_y, 1250 + card_w, card_y + card_h], radius=35, fill=color_card_bg, outline=color_border, width=4)
sup_header = reshape_arabic("تحت إشراف وتوجيه:")
draw.text((1700, card_y + 50), sup_header, font=header_font, fill=color_navy, anchor="ma")

sup_names = ["المهندس وسيم الماضي", "المهندس خالد اسماعيل"]
y_offset = card_y + 140
for name in sup_names:
    draw.text((1700, y_offset), reshape_arabic(name), font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75


# --- 4. QR Code Placeholder Card (Centered at bottom) ---
qr_x, qr_y = 1000, 2600
qr_size = 400

# Draw elegant outer dashed/dotted rectangle for QR placeholder
border_box = [qr_x, qr_y, qr_x + qr_size, qr_y + qr_size]
draw.rounded_rectangle(border_box, radius=30, fill=(255, 255, 255, 230), outline=color_gold, width=4)

# Draw a QR scanner icon motif inside (corners)
c_len = 40
c_width = 8
# Top-left corner
draw.line([qr_x + 15, qr_y + 15, qr_x + 15 + c_len, qr_y + 15], fill=color_navy, width=c_width)
draw.line([qr_x + 15, qr_y + 15, qr_x + 15, qr_y + 15 + c_len], fill=color_navy, width=c_width)
# Top-right corner
draw.line([qr_x + qr_size - 15, qr_y + 15, qr_x + qr_size - 15 - c_len, qr_y + 15], fill=color_navy, width=c_width)
draw.line([qr_x + qr_size - 15, qr_y + 15, qr_x + qr_size - 15, qr_y + 15 + c_len], fill=color_navy, width=c_width)
# Bottom-left corner
draw.line([qr_x + 15, qr_y + qr_size - 15, qr_x + 15 + c_len, qr_y + qr_size - 15], fill=color_navy, width=c_width)
draw.line([qr_x + 15, qr_y + qr_size - 15, qr_x + 15, qr_y + qr_size - 15 - c_len], fill=color_navy, width=c_width)
# Bottom-right corner
draw.line([qr_x + qr_size - 15, qr_y + qr_size - 15, qr_x + qr_size - 15 - c_len, qr_y + qr_size - 15], fill=color_navy, width=c_width)
draw.line([qr_x + qr_size - 15, qr_y + qr_size - 15, qr_x + qr_size - 15, qr_y + qr_size - 15 - c_len], fill=color_navy, width=c_width)

# Text inside QR box
line1 = reshape_arabic("ضع رمز الـ QR")
line2 = reshape_arabic("الخاص بك هنا")
draw.text((qr_x + qr_size//2, qr_y + qr_size//2 - 25), line1, font=qr_text_font, fill=color_charcoal, anchor="mm")
draw.text((qr_x + qr_size//2, qr_y + qr_size//2 + 35), line2, font=qr_text_font, fill=color_charcoal, anchor="mm")

# Title above/below QR
qr_label = reshape_arabic("امسح الرمز لزيارة موقع المنصة")
draw.text((1200, 3050), qr_label, font=body_font, fill=color_navy, anchor="mm")


# Save Arabic version
img_ar = img.convert("RGB")
img_ar.save(output_path_ar, "PNG")


# --- 5. English Version ---
print("Generating English version...")
img_en = Image.open(template_path).convert("RGBA")
img_en = img_en.resize((2400, 3416), Image.Resampling.LANCZOS)
draw_en = ImageDraw.Draw(img_en)

# English title and subtitles
draw_en.text((1200, 650), "Edu-Bridge Educational Platform", font=title_font, fill=color_navy, anchor="mm")
draw_en.text((1200, 760), "Integrated School Management & Automation System", font=subtitle_font, fill=color_dark_blue, anchor="mm")

# Paste same edge-faded mockup
if os.path.exists(mockup_poster_path):
    img_en.paste(mock_final, (paste_x, paste_y), mock_final)

draw_en = ImageDraw.Draw(img_en)

# Developer Card (English)
draw_en.rounded_rectangle([250, card_y, 250 + card_w, card_y + card_h], radius=35, fill=color_card_bg, outline=color_border, width=4)
draw_en.text((700, card_y + 50), "Developer Students:", font=header_font, fill=color_navy, anchor="ma")
dev_names_en = ["Mahmoud Ghannam", "Majdouleen Mahmoud", "Esraa Menwar", "Hibatullah Issa", "Shahd Zreiqi"]
y_offset = card_y + 140
for name in dev_names_en:
    draw_en.text((700, y_offset), name, font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# Supervisor Card (English)
draw_en.rounded_rectangle([1250, card_y, 1250 + card_w, card_y + card_h], radius=35, fill=color_card_bg, outline=color_border, width=4)
draw_en.text((1700, card_y + 50), "Under Supervision of:", font=header_font, fill=color_navy, anchor="ma")
sup_names_en = ["Eng. Waseem Al-Madi", "Eng. Khaled Ismail"]
y_offset = card_y + 140
for name in sup_names_en:
    draw_en.text((1700, y_offset), name, font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# QR Placeholder (English)
draw_en.rounded_rectangle(border_box, radius=30, fill=(255, 255, 255, 230), outline=color_gold, width=4)
# Corner marks
draw_en.line([qr_x + 15, qr_y + 15, qr_x + 15 + c_len, qr_y + 15], fill=color_navy, width=c_width)
draw_en.line([qr_x + 15, qr_y + 15, qr_x + 15, qr_y + 15 + c_len], fill=color_navy, width=c_width)
draw_en.line([qr_x + qr_size - 15, qr_y + 15, qr_x + qr_size - 15 - c_len, qr_y + 15], fill=color_navy, width=c_width)
draw_en.line([qr_x + qr_size - 15, qr_y + 15, qr_x + qr_size - 15, qr_y + 15 + c_len], fill=color_navy, width=c_width)
draw_en.line([qr_x + 15, qr_y + qr_size - 15, qr_x + 15 + c_len, qr_y + qr_size - 15], fill=color_navy, width=c_width)
draw_en.line([qr_x + 15, qr_y + qr_size - 15, qr_x + 15, qr_y + qr_size - 15 - c_len], fill=color_navy, width=c_width)
draw_en.line([qr_x + qr_size - 15, qr_y + qr_size - 15, qr_x + qr_size - 15 - c_len, qr_y + qr_size - 15], fill=color_navy, width=c_width)
draw_en.line([qr_x + qr_size - 15, qr_y + qr_size - 15, qr_x + qr_size - 15, qr_y + qr_size - 15 - c_len], fill=color_navy, width=c_width)

draw_en.text((qr_x + qr_size//2, qr_y + qr_size//2 - 25), "Place QR Code", font=qr_text_font, fill=color_charcoal, anchor="mm")
draw_en.text((qr_x + qr_size//2, qr_y + qr_size//2 + 35), "Here", font=qr_text_font, fill=color_charcoal, anchor="mm")

draw_en.text((1200, 3050), "Scan the Code to Visit the Platform", font=body_font, fill=color_navy, anchor="mm")

# Save English version
img_en_final = img_en.convert("RGB")
img_en_final.save(output_path_en, "PNG")

print("Successfully generated both professional exhibition posters!")
