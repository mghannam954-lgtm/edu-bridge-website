import os
from PIL import Image, ImageFilter

poster_path = r"C:\Users\mghan\.gemini\antigravity\brain\223a870b-9333-47d8-9af9-c24a6e4bf5a3\edu_bridge_poster_1781733917073.png"
img = Image.open(poster_path).convert("RGBA")

# Crop phone: x=140 to 335, y=250 to 675
phone = img.crop((140, 250, 335, 675))
# Crop laptop: x=340 to 915, y=305 to 680
laptop = img.crop((340, 305, 915, 680))

def remove_background(im, threshold=40):
    # Load pixels
    datas = im.getdata()
    newData = []
    for item in datas:
        # item is (r, g, b, a)
        r, g, b, a = item
        # Calculate brightness/distance to black
        brightness = (r + g + b) / 3
        if brightness < threshold:
            # Fade out based on brightness
            alpha = int(a * (brightness / threshold))
            newData.append((r, g, b, alpha))
        else:
            newData.append((r, g, b, a))
    im.putdata(newData)
    return im

phone_trans = remove_background(phone.copy(), threshold=45)
laptop_trans = remove_background(laptop.copy(), threshold=45)

# Save to public for testing
phone_trans.save(r"D:\edu-wibsit\public\phone_test.png")
laptop_trans.save(r"D:\edu-wibsit\public\laptop_test.png")
print("Done extracting!")
