import os
from PIL import Image, ImageDraw, ImageFont, ImageOps
import arabic_reshaper
from bidi.algorithm import get_display

def reshape(text):
    return get_display(arabic_reshaper.reshape(text))

# Paths
template_path = r"C:\Users\mghan\.gemini\antigravity\brain\223a870b-9333-47d8-9af9-c24a6e4bf5a3\media__1781734258294.jpg"
mockup_poster_path = r"C:\Users\mghan\.gemini\antigravity\brain\223a870b-9333-47d8-9af9-c24a6e4bf5a3\edu_bridge_poster_1781733917073.png"
output_path_ar = r"D:\edu-wibsit\public\edu_bridge_poster_ar.png"
output_path_en = r"D:\edu-wibsit\public\edu_bridge_poster_en.png"

# Load and upscale template
print("Loading template...")
img = Image.open(template_path).convert("RGBA")
img = img.resize((2400, 3416), Image.Resampling.LANCZOS)
draw = ImageDraw.Draw(img)

# Load fonts
font_path_bold = r"C:\Windows\Fonts\arialbd.ttf"
font_path_reg = r"C:\Windows\Fonts\arial.ttf"

title_font = ImageFont.truetype(font_path_bold, 110)
subtitle_font = ImageFont.truetype(font_path_bold, 65)
header_font = ImageFont.truetype(font_path_bold, 55)
body_font = ImageFont.truetype(font_path_bold, 45)
link_font = ImageFont.truetype(font_path_bold, 55)

# Colors
color_dark_blue = (0, 140, 211, 255) # UNRWA light blue
color_navy = (20, 50, 90, 255)        # Deep navy
color_charcoal = (50, 50, 50, 255)    # Charcoal
color_gold = (218, 165, 32, 255)     # Golden accent
color_card_bg = (242, 247, 252, 230) # Soft translucent blue-grey card background
color_border = (200, 215, 230, 255)

# --- 1. Draw Title Section ---
title_text = reshape("منصة Edu-Bridge التعليمية")
draw.text((1200, 650), title_text, font=title_font, fill=color_navy, anchor="mm")

subtitle_text = reshape("النظام المتكامل لإدارة وأتمتة المدارس والمعاهد")
draw.text((1200, 760), subtitle_text, font=subtitle_font, fill=color_dark_blue, anchor="mm")


# --- 2. Add Crop and Paste Mockups ---
if os.path.exists(mockup_poster_path):
    print("Cropping and pasting mockups...")
    mockup_img = Image.open(mockup_poster_path).convert("RGBA")
    # Crop the phone/laptop/glow region (approx x: 100 to 924, y: 220 to 680)
    mockup_crop = mockup_img.crop((90, 220, 930, 680))
    # Resize to fit nicely in our 2400x3416 canvas
    mockup_width, mockup_height = 1900, 1040
    mockup_resized = mockup_crop.resize((mockup_width, mockup_height), Image.Resampling.LANCZOS)
    
    # Create rounded corner mask
    mask = Image.new("L", (mockup_width, mockup_height), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, mockup_width, mockup_height], radius=50, fill=255)
    
    # Paste mockup image with rounded corners
    paste_x = (2400 - mockup_width) // 2 # 250
    paste_y = 880
    img.paste(mockup_resized, (paste_x, paste_y), mask)
    
    # Draw gold border around mockup card
    draw.rounded_rectangle(
        [paste_x - 3, paste_y - 3, paste_x + mockup_width + 3, paste_y + mockup_height + 3], 
        radius=53, 
        outline=color_gold, 
        width=8
    )


# --- 3. Draw Arabic Cards for Students and Supervisors ---
card_y = 2020
card_w = 900
card_h = 580

# Developer Card (Right, x=250 to 1150)
draw.rounded_rectangle([250, card_y, 250 + card_w, card_y + card_h], radius=35, fill=color_card_bg, outline=color_border, width=4)
dev_header = reshape("الطلاب المطورون:")
draw.text((700, card_y + 50), dev_header, font=header_font, fill=color_navy, anchor="ma")

dev_names = ["محمود غنام", "مجدولين محمود", "اسراء منوّر", "هبة الله عيسى", "شهد زريقي"]
y_offset = card_y + 140
for name in dev_names:
    draw.text((700, y_offset), reshape(name), font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# Supervisor Card (Left, x=1250 to 2150)
draw.rounded_rectangle([1250, card_y, 1250 + card_w, card_y + card_h], radius=35, fill=color_card_bg, outline=color_border, width=4)
sup_header = reshape("تحت إشراف وتوجيه:")
draw.text((1700, card_y + 50), sup_header, font=header_font, fill=color_navy, anchor="ma")

sup_names = ["المهندس وسيم الماضي", "المهندس خالد اسماعيل"]
y_offset = card_y + 140
for name in sup_names:
    draw.text((1700, y_offset), reshape(name), font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75


# --- 4. Draw Link at the bottom ---
link_text = "https://keen-pony-8e3590.netlify.app/"
draw.text((1200, 2720), link_text, font=link_font, fill=color_dark_blue, anchor="mm")

# Save Arabic version
img_ar = img.convert("RGB")
img_ar.save(output_path_ar, "PNG")


# --- 5. Generate English Version ---
print("Generating English version...")
img_en = Image.open(template_path).convert("RGBA")
img_en = img_en.resize((2400, 3416), Image.Resampling.LANCZOS)
draw_en = ImageDraw.Draw(img_en)

# English title and subtitles
draw_en.text((1200, 650), "Edu-Bridge Educational Platform", font=title_font, fill=color_navy, anchor="mm")
draw_en.text((1200, 760), "Integrated School Management & Automation System", font=subtitle_font, fill=color_dark_blue, anchor="mm")

# Paste same mockup card
if os.path.exists(mockup_poster_path):
    img_en.paste(mockup_resized, (paste_x, paste_y), mask)
    draw_en.rounded_rectangle(
        [paste_x - 3, paste_y - 3, paste_x + mockup_width + 3, paste_y + mockup_height + 3], 
        radius=53, 
        outline=color_gold, 
        width=8
    )

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

# Link
draw_en.text((1200, 2720), link_text, font=link_font, fill=color_dark_blue, anchor="mm")

# Save English version
img_en_final = img_en.convert("RGB")
img_en_final.save(output_path_en, "PNG")

print("Successfully generated both exhibition posters!")
