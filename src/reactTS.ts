// --- Document creation:
// npx create-react-app my-app --template typescript
// npx create-react-app . --template typescript
//npm install --save-dev @types/react-router-dom

////////////////////////////

// const App: React.FC = () => {
//     return (
//         <div className="App"></div>
//     );
// };

// const App: React.FunctionComponent = () => {
//     return (
//         <div className="App"></div>
//     );
// };

// class App extends React.Component {
//     render() {
//         return (
//         <div className="App"></div>
//         );
//     };
// };

// export default App;

// ////////////////////////////////////////////////

// interface IItem {
//     id: string;
//     text: string;
// };

// interface IProps {
//     items: IItem[];
// };

// const TodoList: React.FC<IProps> = (props) => {
//     return (
//         <ul>
//         {
//             props.items.map(todo => (
//                 <li key= { todo.id }>{ todo.text}</li>
//             ))
//         }
//         </ul>
//     );
// };

// export default TodoList;

// ///////////////////////////////////////////

// interface IState {
//     count: number;
// };

// class ClickStatistic extends React.Component<{}, IState> {
//     handleClick() {
//         this.setState(({ count }) => {
//             return {
//                 count: ++count,
//             };
//         });
//     };
//     render() {
//         return (
//             <button onClick={this.handleClick}>Click me!</button>
//         );
//     }
// };

// export default ClickStatistic;

// //////////////////////////////////////////////

// const textInputRef = useRef<HTMLInputElement>(null);
// const enteredText = textInputRef.current!.value;

// const [todos, setTodos] = useState<{ id: number, title: string }[]>([]);
// setTodos((prevState) => {
//     return [
//         ...prevState,
//         { id: 1, title: "Some text" }
//     ];
// });

// <input onChange={ changeHandler } />
// function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
//     console.log(e.target.value);
// };
