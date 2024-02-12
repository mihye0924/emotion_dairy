import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from '../compoents/MyHeader'
import MyButton from '../compoents/MyButton'
import DiaryList from "../compoents/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext) 
  const [curDate, setCurDate] = useState(new Date()); 
  const [data, setData] = useState([]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정일기장`
  }, [])


  useEffect(() => {
    if (diaryList.length >= 1) { 
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime() 

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23, //시
        59, //분
        59 // 초
      ).getTime()

      setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay))
    }
  }, [diaryList, curDate])
   
 
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`
  
  const increaseMounth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()))
  }
  const decreaseMouth = ()=> {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    )
  }

  return (
    <div> 
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={decreaseMouth}/>}
        rightChild={<MyButton text={'>'} onClick={increaseMounth}/>}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;