import * as React from "react";
import IconBrand from "assets/icon/Brand";
import IconAdd from "assets/icon/Add";
import Tag from "components/Tag";
import ItemGroup from "components/ItemGroup";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "features/Todos/actions";
import Create from "./create";
import Delete from "./delete";
import Edit from "./edit";
import Button from "components/Button";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log("todos", todos);

  const [isShowCreate, setIsShowCreate] = React.useState(false);
  const [isShowDelete, setIsShowDelete] = React.useState(false);
  const [isShowEdit, setIsShowEdit] = React.useState(false);
  const [idTodos, setIdTodos] = React.useState(null);
  const [idItems, setIdItems] = React.useState(null);
  const [data, setData] = React.useState({});

  const handleShowCreate = (data) => {
    setIdTodos(data.id);
    setIsShowCreate(true);
  };

  const handleShowDelete = (idTodos, idItem) => {
    setIdTodos(idTodos.id);
    setIdItems(idItem.id);
    setIsShowDelete(true);
  };

  const handleShowEdit = (idTodos, data) => {
    setIdTodos(idTodos.id);
    setIdItems(data.id);
    setIsShowEdit(true);
    setData(data);
    console.log(data);
  };

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="flex flex-col xss:flex-row items-start  lg:overflow-hidden">
      {/* sidebar */}
      <div className="w-full xss:w-68  xss:h-screen lg:h-full  bg-dark flex justify-center py-3 xss:py-0">
        <IconBrand className="xss:mt-5" />
      </div>
      {/* content */}
      <div className="w-full xss:w-94% bg-white px-3 xss:px-50 py-5 h-full">
        <div className="flex items-center mb-6 justify-between">
          <h3 className="font-medium text-dark-2 text-xl">Product Roudmap</h3>
          <Link to="/v1/logout">
            <Button
              bgColor="bg-greenSecondary"
              textColor="text-white"
              label="Logout"
            />
          </Link>
        </div>
        <div
          className="grid grid-cols-4 gap-4 border-gray border-opacity-30 p-2 rounded-lg"
          style={{ height: "90%" }}
        >
          {/* data looping group task except btn add new group */}
          {todos.status === "process" ? (
            <div className="fixed inset-0 bg-black bg-opacity-10 z-50">
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ReactLoading
                  type={"bars"}
                  color={"#B7BDC9"}
                  height={168}
                  width={120}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {todos.data.map((todo, i) => {
            return (
              <div className="col-span-4 sm:col-span-2 lg:col-span-1" key={i}>
                {/* wrap group 01 */}
                <div
                  className={`
                  ${i === 0 && "bg-pink border-pink"} 
                  ${i === 1 && "bg-purple border-purple"} 
                  ${i === 2 && "bg-biru border-biru"} 
                  ${i === 3 && "bg-green border-green"} 
                  rounded border  px-3 pt-3 pb-4`}
                  // style={{ maxHeight: "77vh" }}
                >
                  <div>
                    {/* tag from api */}
                    <Tag
                      className={`mb-1`}
                      borderColor={`
                      ${i === 0 && "bg-pink border-pink"} 
                      ${i === 1 && "bg-purple border-purple"} 
                      ${i === 2 && "bg-geekBlue border-geekBlue"} 
                      ${i === 3 && "bg-green border-green"} `}
                      bgColor={`
                      ${i === 0 && "bg-pink border-pink"} 
                      ${i === 1 && "bg-purple border-purple"} 
                      ${i === 2 && "bg-geekBlue border-geekBlue"} 
                      ${i === 3 && "bg-green border-green"} `}
                      textColor={`${i === 0 && "text-pink"} 
                      ${i === 1 && "text-purple"} 
                      ${i === 2 && "text-geekBlue"} 
                      ${i === 3 && "text-green"} `}
                      text={todo.title}
                    />
                    {/* text from api */}
                    <p className="font-medium text-xs leading-5 mb-10px">
                      {todo.description}
                    </p>
                  </div>
                  <div
                    className="scroll-hidden"
                    // style={{ maxHeight: "55vh" }}
                  >
                    {/* data item for looping from api */}
                    {todo.items.length ? (
                      todo.items.map((data, index) => {
                        return (
                          <div key={index}>
                            <ItemGroup
                              className="mb-3"
                              text={data.name}
                              progress={data.progress_percentage}
                              toggle={todos.data}
                              data={data}
                              index={i}
                              handleShowDelete={() =>
                                handleShowDelete(todo, data)
                              }
                              handleShowEdit={() => handleShowEdit(todo, data)}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="mb-3 rounded border border-gray py-3 px-4 bg-white">
                        <p className="leading-6 text-gray">No Task Available</p>
                      </div>
                    )}
                    {/* btn new task */}
                    <button
                      className="flex items-center outline-none focus:outline-none"
                      onClick={() => handleShowCreate(todo)}
                    >
                      <IconAdd className="mr-2" />
                      <p className="leading-5 text-dark-2">New Task</p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* start modal create */}
      <Create
        show={isShowCreate}
        close={() => setIsShowCreate(false)}
        idTodos={idTodos}
      />
      {/* end modal create */}
      {/* start: modal delete */}
      <Delete
        show={isShowDelete}
        close={() => setIsShowDelete(false)}
        idTodos={idTodos}
        idItems={idItems}
      />
      {/* end: modal delete */}
      {/* start: modal edit */}
      <Edit
        show={isShowEdit}
        close={() => setIsShowEdit(false)}
        idTodos={idTodos}
        idItems={idItems}
        data={data}
      />
      {/* end: modal edit */}
    </div>
  );
}
