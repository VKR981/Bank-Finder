from BankSearch.models import banks
import csv
import os


CSV_PATH=r'C:\\Users\\Z\\Downloads\\bank_branches.csv'

count = 0
bankList=[]

with open(CSV_PATH, newline='',encoding='utf-8') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    print('Loading...')
    for row in spamreader:
        
        if count>=1:
            bankList.append(banks(ifsc=row[0], bank_id=int(row[1]), branch=row[2],address=row[3],city=row[4],district=row[5],state=row[6],bank_name=row[7]))
            
        if not count%5000:
            
            banks.objects.bulk_create(bankList)
            print(str(len(bankList))+' added, '+str(count)+'done')
            bankList=[]
        count+=1
    banks.objects.bulk_create(bankList)

        
    print(f'{str(count)} inserted successfully! ')

