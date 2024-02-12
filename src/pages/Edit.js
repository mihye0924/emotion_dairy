import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from '../App'
import DiaryEdit from "../compoents/DiaryEdit";

const Edit = () => {
  const navigator = useNavigate()
  const { id } = useParams();
  const [originData, setOriginData] = useState()
  
  const diaryList = useContext(DiaryStateContext);
 
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정일기장 - ${id}번 일기 수정`
  }, [])
  

  useEffect(() => { 
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      )
      console.log(targetDiary)
      if (targetDiary) {
        setOriginData(targetDiary)
      } else {
        navigator('/', { replace: true });
      }
    }
  },[id, diaryList])

  return (
    <div>
      {originData && <DiaryEdit isEdit={true} originData={ originData } />}
    </div>
  );
};

export default Edit;