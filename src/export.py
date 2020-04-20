import json

# 给出文档路径
outfilename = "../exportdata/test.txt"
outputs = open(outfilename, 'w', encoding='UTF-8')
        
def loadFont():
    f = open("../exportdata/testData.json", encoding='utf-8') 
    s = json.load(f)
    array = s['Array']
    result_arr = []
    for item in array:
        string_line = item['label']+"\t"+item['text']
        
        outputs.write(string_line + '\n')
        
        
        
loadFont()
outputs.close()
