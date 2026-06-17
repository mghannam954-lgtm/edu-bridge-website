import os
from PIL import Image, ImageDraw, ImageFont
import arabic_reshaper
from bidi.algorithm import get_display

def reshape(text):
    return get_display(arabic_reshaper.reshape(text))

# Paths
brain_dir = r"C:\Users\mghan\AppData\Local\Temp" # Fallback if temp path is needed, but let's use exact paths
template_path = r"C:\Users\mghan\.gemini\antigravity\brain\223a870b-9333-47d8-9af9-c24a6e4bf5a3\media__1781734258294.jpg"
logo_path = r"D:\edu-wibsit\public\logo.png"
output_path_ar = r"D:\edu-wibsit\public\edu_bridge_poster_ar.png"
output_path_en = r"D:\edu-wibsit\public\edu_bridge_poster_en.png"

# Load template and resize to high res (2400 x 3416) for 70x100 cm printing
print("Loading template...")
img = Image.open(template_path)
img = img.resize((2400, 3416), Image.Resampling.LANCZOS)
draw = ImageDraw.Draw(img)

# Load fonts
font_path_bold = r"C:\Windows\Fonts\arialbd.ttf"
font_path_reg = r"C:\Windows\Fonts\arial.ttf"

title_font = ImageFont.truetype(font_path_bold, 110)
subtitle_font = ImageFont.truetype(font_path_bold, 65)
desc_font = ImageFont.truetype(font_path_reg, 50)
header_font = ImageFont.truetype(font_path_bold, 58)
body_font = ImageFont.truetype(font_path_reg, 46)
link_font = ImageFont.truetype(font_path_bold, 55)

# Color variables
color_dark_blue = (0, 140, 211)      # Matching UNRWA Blue
color_navy = (20, 50, 90)            # Deep navy for titles
color_charcoal = (50, 50, 50)        # Dark grey for descriptions/names
color_gold = (212, 175, 55)          # Gold for highlights

# --- 1. Draw Title & Header Texts ---
title_text = reshape("منصة Edu-Bridge التعليمية")
draw.text((1200, 680), title_text, font=title_font, fill=color_navy, anchor="mm")

subtitle_text = reshape("النظام المتكامل لإدارة وأتمتة المدارس والمعاهد")
draw.text((1200, 790), subtitle_text, font=subtitle_font, fill=color_dark_blue, anchor="mm")

desc_1 = reshape("مشروع تخرج رائد يربط أركان العملية التعليمية بمزامنة فورية")
draw.text((1200, 890), desc_1, font=desc_font, fill=color_charcoal, anchor="mm")

desc_2 = reshape("بين لوحة الإدارة للويب وتطبيق الجوال الذكي")
draw.text((1200, 960), desc_2, font=desc_font, fill=color_charcoal, anchor="mm")


# --- 2. Paste Logo ---
if os.path.exists(logo_path):
    print("Loading and pasting logo...")
    logo = Image.open(logo_path)
    logo = logo.resize((450, 450), Image.Resampling.LANCZOS)
    # If transparent, paste with alpha channel as mask
    if logo.mode in ('RGBA', 'LA') or (logo.mode == 'P' and 'transparency' in logo.info):
        img.paste(logo, (975, 1060), logo)
    else:
        img.paste(logo, (975, 1060))


# --- 3. Draw Columns for Developers and Supervisors ---
# Developers Column (Right side, center around x=700)
dev_header = reshape("الطلاب المطورون:")
draw.text((700, 1620), dev_header, font=header_font, fill=color_navy, anchor="ma")

dev_names = [
    "محمود غنام",
    "مجدولين محمود",
    "اسراء منوّر",
    "هبة الله عيسى",
    "شهد زريقي"
]
y_offset = 1720
for name in dev_names:
    draw.text((700, y_offset), reshape(name), font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# Supervisors Column (Left side, center around x=1700)
sup_header = reshape("تحت إشراف وتوجيه:")
draw.text((1700, 1620), sup_header, font=header_font, fill=color_navy, anchor="ma")

sup_names = [
    "المهندس وسيم الماضي",
    "المهندس خالد اسماعيل"
]
y_offset = 1720
for name in sup_names:
    draw.text((1700, y_offset), reshape(name), font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75


# --- 4. Draw Link at the bottom ---
link_label = reshape("رابط المنصة:")
draw.text((1200, 2350), link_label, font=link_font, fill=color_navy, anchor="mm")

link_text = "https://keen-pony-8e3590.netlify.app/"
draw.text((1200, 2430), link_text, font=link_font, fill=color_dark_blue, anchor="mm")


# Save Arabic Poster
print(f"Saving Arabic poster to {output_path_ar}...")
img.save(output_path_ar, "PNG")


# --- 5. Generate English Version ---
print("Generating English version...")
# Reload background and resize
img_en = Image.open(template_path)
img_en = img_en.resize((2400, 3416), Image.Resampling.LANCZOS)
draw_en = ImageDraw.Draw(img_en)

# English title and subtitles
draw_en.text((1200, 680), "Edu-Bridge Educational Platform", font=title_font, fill=color_navy, anchor="mm")
draw_en.text((1200, 790), "Integrated School Management & Automation System", font=subtitle_font, fill=color_dark_blue, anchor="mm")
draw_en.text((1200, 890), "A pioneering graduation project linking all aspects of education", font=desc_font, fill=color_charcoal, anchor="mm")
draw_en.text((1200, 960), "via instant synchronization between Web Panel & Mobile App", font=desc_font, fill=color_charcoal, anchor="mm")

# Paste logo
if os.path.exists(logo_path):
    img_en.paste(logo, (975, 1060), logo)

# Developers Column (English)
draw_en.text((700, 1620), "Developer Students:", font=header_font, fill=color_navy, anchor="ma")
dev_names_en = [
    "Mahmoud Ghannam",
    "Majdouleen Mahmoud",
    "Esraa Menwar",
    "Hibatullah Issa",
    "Shahd Zreiqi"
]
y_offset = 1720
for name in dev_names_en:
    draw_en.text((700, y_offset), name, font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# Supervisors Column (English)
draw_en.text((1700, 1620), "Under Supervision of:", font=header_font, fill=color_navy, anchor="ma")
sup_names_en = [
    "Eng. Waseem Al-Madi",
    "Eng. Khaled Ismail"
]
y_offset = 1720
for name in sup_names_en:
    draw_en.text((1700, y_offset), name, font=body_font, fill=color_charcoal, anchor="ma")
    y_offset += 75

# Draw Link
draw_en.text((1200, 2350), "Platform Link:", font=link_font, fill=color_navy, anchor="mm")
draw_en.text((1200, 2430), link_text, font=link_font, fill=color_dark_blue, anchor="mm")

# Save English Poster
print(f"Saving English poster to {output_path_en}...")
img_en.save(output_path_en, "PNG")

print("Successfully generated both posters!")
