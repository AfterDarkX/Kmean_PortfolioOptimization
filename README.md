# Kmean_PortfolioOptimization
```
───src
    ├───dataset
    │   ├───nav
    │   └───return_sd
    ├───python_script
    │   └───.ipynb_checkpoints
    └───website
        ├───css
        ├───dataset
        ├───html
        ├───js
        └───static
            ├───font
            └───img
```
* คำอธิบาย
  * dataset : โฟลเดอร์สำหรับเก็บข้อมูล ( dataset ) สำหรับกระบวนการทำ k-mean และ portfolio optimization โดยข้อมูลจะถูกเก็บอยู่ในรูปแบบไฟล์ .csv
  * python_script : โฟลเดอร์สำหรับเก็บโปรแกรมสำหรับจัดกลุ่ม และทำ portfolio optimization โดยชนิดของไฟล์จะเป็นไฟล์นามสกุล .ipynb หรือ jupyter notebook 
  * website : โฟลเดอร์สำหรับเก็บไฟล์ต่างๆ สำหรับแสดงผล/ประมวลผลในหน้าเว็บไซต์
* วิธีการติดตั้ง
  1. ทำการรันไฟล์ kmean_portfolio_optimization.ipnyb เพื่อให้ได้ไฟล์ json_data.json ซึ่งเป็นไฟล์ json ที่จะเก็บพอร์ทการลงทุนแต่ละแบบที่ได้จากการแบ่งกลุ่ม และ การทำ Portfolio Optimazion
  2. ทำการ run localhost server สำหรับแสดงผลเว็บไซต์ โดยเปิดไฟล์ home.html ก่อน เพื่อทำแบบประเมิน หรือ เลือกความเสี่ยงที่ต้องการ และ กรอกข้อมูลเงินลงทุนเพื่อให้ระบบได้ประมวลผลจำนวนสัดส่วนและจำนวนหน่วยที่ลงทุนในการลงทุนนั้นๆ 

 
