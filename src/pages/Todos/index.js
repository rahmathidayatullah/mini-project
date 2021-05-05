import * as React from "react";
import IconBrand from "assets/icon/Brand";
import IconAdd from "assets/icon/Add";
import Tag from "components/Tag";
import ItemGroup from "components/ItemGroup";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "features/Todos/actions";
import Create from "./create";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [isShowCreate, setIsShowCreate] = React.useState(false);
  const [idTodos, setIdTodos] = React.useState(null);

  const handleShowCreate = (data) => {
    setIdTodos(data.id);
    setIsShowCreate(true);
  };

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <div className="h-full w-68 bg-dark flex justify-center">
        <IconBrand className="mt-5" />
      </div>
      {/* content */}
      <div className="bg-white px-50 py-5 h-full" style={{ width: "94%" }}>
        <h3 className="mb-6 font-medium text-dark-2 text-xl">
          Product Roudmap
        </h3>
        <div
          className="flex w-full items-start overflow-x-scroll border border-gray border-opacity-30 p-2 rounded-lg"
          style={{ height: "90%" }}
        >
          {/* data looping group task except btn add new group */}
          {todos.data.map((todo, i) => {
            return (
              <div className="w-306px min-w-306px mr-4" key={i}>
                {/* wrap group 01 */}
                <div
                  className={`
                  ${i === 0 && "bg-pink border-pink"} 
                  ${i === 1 && "bg-purple border-purple"} 
                  ${i === 2 && "bg-biru border-biru"} 
                  ${i === 3 && "bg-green border-green"} 
                  rounded border  px-3 pt-3 pb-4 overflow-y-hidden`}
                  style={{ maxHeight: "68vh" }}
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
                    className="overflow-y-scroll scroll-hidden"
                    style={{ maxHeight: "55vh" }}
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
          {/* btn add new group */}
          <button className="mb-3 rounded border border-gray py-2 px-4 flex items-center bg-white hover:bg-gray text-gray hover:text-black min-w-max outline-none duration-200 focus:outline-none">
            <IconAdd className="mr-2" fill="currentColor" />
            <p className="leading-6 currentColor">New group</p>
          </button>
        </div>
      </div>
      {/* start modal create */}
      <Create
        show={isShowCreate}
        close={() => setIsShowCreate(false)}
        idTodos={idTodos}
      />
      {/* end modal create */}
    </div>
  );
}
