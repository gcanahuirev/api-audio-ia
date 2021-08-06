import winsound
import sys

filename = sys.argv[1]
print(filename)
def play_audio(file):
  winsound.PlaySound(file, winsound.SND_FILENAME)

play_audio(filename)

print('Termino script python')