import React, { useState } from 'react';
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
    {
        id: 1,
        url: "https://miro.medium.com/max/1200/1*G2QwxPF2TvWXzRUnA4axoA.png"
    },
    {
        id: 2,
        url: "https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg"
    },
    {
        id: 3,
        url: "https://www.superprof.com.br/blog/wp-content/uploads/2019/06/programacao-em-php.jpg"
    },
]

function DragDrop() {

const [board, setBoard] = useState([]);
    
const [{isOver}, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    }),
}));

const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
   /* setBoard((board) => [...board, pictureList[0]]);*/
   setBoard([pictureList[0]]);
};


  return (
    <>
        <div className="Pictures">
            {PictureList.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
        })}
        </div>
        <div className="Board" ref={drop}>
            {board.map((picture) => {
                return <Picture url={picture.url} id={picture.id} />;
            })}
        </div>
    </>
  );
}

export default DragDrop