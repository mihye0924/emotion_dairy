import DiaryEdit from "../compoents/DiaryEdit";
import { useEffect } from 'react'
 
const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정일기장 - 새 일기`
  }, [])
  

  return (
    <div>
      <DiaryEdit/>
    </div>
  );
};

export default New;