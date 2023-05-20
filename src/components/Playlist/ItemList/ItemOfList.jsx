import React from 'react'
import styles from "./ItemOfList.module.css"
function ItemOfList() {
  return (
    <div className={styles["ItemList"]}>
            <div className={styles["gridItem"]}>1</div>
            <div className={styles["gridItem"]}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/4/27/img6027-16826061072631364981444.jpg" alt=""/>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',rowGap:'5px',paddingLeft:'10px'}}>
                        <span style={{fontSize:'16px',fontWeight:'bold'}}>Making my way</span>
                        <span style={{fontSize:'14px',color:'#ccc'}}>G-dragon VietNam</span>
                    </div>
                </div>

            </div>
            <div className={styles["gridItem"]}>Album </div>
            <div className={styles["gridItem"]}>Date added</div>
            <div className={styles["gridItem"]}>Date added</div>
        </div>
  )
}

export default ItemOfList