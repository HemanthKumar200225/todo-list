import { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [task_list, setTask_list] = useState([]);
  const light_theme = {
    normal: "#6200EE",
    dark: "#3700B3",
    optional: "#6200EE"
  };
  const dark_theme = {
    normal: "#1F1F1F",
    dark: "#000000",
    optional: "#BB86FC"
  };
  const themeChanger = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
    console.log(theme);
  };
  const handleEvent = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        setTask_list([...task_list, e.target.value]);
        console.log(e.target.value);
      }
    }
  };
  const delTask = (str) => {
    const newTask_list = task_list.filter(
      (task_item) => task_item !== str
    );
    setTask_list(newTask_list);
  }
  // const bar_color = 
  return (
    <div className={theme === "light" ? "App App_light" : "App App_dark"}>
      <h1 className="heading">To-Do List Maker</h1>
      <button onClick={themeChanger} className="theme_button">
        <div className={theme === "light" ? "bar bar_light" : "bar bar_dark"}></div>
        <div className={theme === "light" ? "slider slider_light" : "slider slider_dark"}>{theme === "light" ? "🌞" : "🌛"}</div>
      </button>
      <div className="Taskbar">
        <input onKeyUp={handleEvent} name="task_input" type="text" placeholder="Your task goes here..." />
        {/* <button for="task_input" onClick={(e) => { setTask_list([...task_list, e.target.value]) }} className="Add_btn" type="button">Add</button> */}
      </div>
      <div className="TasksView">
        {task_list.map((task) => {
          return (
            <div className={theme === "light" ? "Tasks Tasks_light" : "Tasks Tasks_dark"}>
              <div name="task_name" className="task_text"><span>{task}</span></div>
              <input for="task_name" onClick={(e) => delTask(task)} className="check_box" type="checkbox" />
            </div>
          );
        })}
      </div>
      <div style={{ position: "fixed", bottom: "2%", right: "2%", color: "white" }} className="signature">By <i>Hemanth Kumar</i></div>
    </div>
  );
}

export default App;
