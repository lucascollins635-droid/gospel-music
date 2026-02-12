from moviepy.editor import *

# Load audio
audio = AudioFileClip("assets/audio.mp3")

# Load background image
image = ImageClip("assets/background.jpg")

# Make image same duration as audio
video = image.set_duration(audio.duration)

# Set audio
video = video.set_audio(audio)

# Resize to YouTube HD
video = video.resize((1280, 720))

# Export video
video.write_videofile("final_video.mp4", fps=24)
