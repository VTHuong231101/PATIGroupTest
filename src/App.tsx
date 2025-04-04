import { Avatar, List } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';

type Note = {
  ID: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  author: string;
};

const getNotes = async () => {
  const response = await fetch('http://localhost:3000/api/note/getAll', {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

const getTime = (date: string) => {
  const d = new Date(date);
  return d.toUTCString();
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes()
      .then((data) => {
        console.log(data.data.notes);
        const formattedNotes = data.data.notes.map((note: Note) => ({
          ID: note.ID,
          title: note.title,
          description: note.description,
          createdAt: getTime(note.createdAt), // get "Invalid Date"
          updatedAt: getTime(note.updatedAt),
          author: note.author,
        }));
        setNotes(formattedNotes);
        console.log('notes: ', notes);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <List
        style={{ width: '100%', backgroundColor: 'white' }}
        itemLayout="horizontal"
        dataSource={notes}
        renderItem={(item: Note) => (
          <List.Item
          style={{ color: 'white', paddingLeft: '15%'}}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://www.flaticon.com/free-icon/user_149071?term=avatar&page=1&position=3&origin=tag&related_id=149071`}
                />
              }
              title={item.title}
              description={item.description}
            />
            {/* <div>{item.createdAt}</div> */}
            {/* <div>{item.updatedAt.toLocaleDateString()}</div> */}
            {/* <div>{item.author}</div> */}
          </List.Item>
        )}
      />
    </>
  );
}

export default App;
