
import csv



CSV_PATH=r'C:\\Users\\Z\\Downloads\\bank_branches.csv'

count = 0
bankList=[]

with open(CSV_PATH, newline='',encoding='utf-8') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    print('Loading...')
    for row in spamreader:
        
        if (type(row[2])!=str and type(row[3])!=str and type(row[4])!=str) or len(row[2])>50:
            print('-------------------------------------------')
            print(count)
            print(row[2])
            print(row[3])
            print(row[4])
        
        count+=1
            
            
   

