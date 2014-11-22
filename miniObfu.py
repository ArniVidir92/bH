s=""
with open('fbhgo.js', "r") as f:
	for line in f:
		cleanedLine = ' '.join(line.split())
		if cleanedLine[:2] != "//":
			cleanedLine = cleanedLine.replace("\t", " ")
			#cleanedLine = cleanedLine.replace("\n", " ")
			cleanedLine = ' '.join(cleanedLine.split())
			if cleanedLine != "":
				s = s+cleanedLine+"\n"

with open("miniObfu.js", "w+") as f2:
	f2.write(s)